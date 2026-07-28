import { getIcpBundle } from "@/data/icp-registry";
import {
  getWorkflowPricing,
  type IcpBundle,
  type PricingTier,
  type WorkflowItem,
} from "@/data/icp-types";
import { isLeadWebhookConfigured, sendLeadToWebhook } from "@/lib/lead-webhook";
import { LEGAL_VERSION } from "@/lib/legal";
import { formatUsd, getLivePriceUsd, resolvePromotion } from "@/lib/promo";
import {
  cleanAttribution,
  cleanSingleLineText,
  readJsonObject,
} from "@/lib/request-guards";

type PlanRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organization?: unknown;
  website?: unknown;
  scale?: unknown;
  software?: unknown;
  bottleneck?: unknown;
  goal?: unknown;
  automations?: unknown;
  attribution?: unknown;
  promotion?: unknown;
  legalConsent?: unknown;
  legalVersion?: unknown;
};

type SelectedWorkflow = {
  workflow: WorkflowItem;
  pricing: PricingTier;
};

type IcpRouteContext = {
  params: Promise<{ icp: string }>;
};

const hasUsableEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const landingRouteFor = (bundle: IcpBundle) =>
  bundle.siteConfig.slug === "home-services" ? "/" : `/${bundle.siteConfig.slug}`;

const cleanWorkflows = (value: unknown, bundle: IcpBundle): SelectedWorkflow[] => {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();

  return value.slice(0, 24).flatMap((entry) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) return [];
    const id = cleanSingleLineText((entry as { id?: unknown }).id, 100);
    if (!id || seen.has(id)) return [];

    const workflow = bundle.workflows.find((item) => item.id === id);
    if (!workflow) return [];

    seen.add(id);
    return [{ workflow, pricing: getWorkflowPricing(bundle, workflow) }];
  });
};

export const runtime = "nodejs";

export async function POST(request: Request, { params }: IcpRouteContext) {
  const { icp } = await params;
  const bundle = getIcpBundle(icp);

  if (!bundle) {
    return Response.json({ error: "Unknown landing page." }, { status: 404 });
  }

  const parsedBody = await readJsonObject<PlanRequest>(request);
  if (!parsedBody.ok) return parsedBody.response;

  const body = parsedBody.value;
  const name = cleanSingleLineText(body.name, 160);
  const email = cleanSingleLineText(body.email, 180);
  const phone = cleanSingleLineText(body.phone, 50);
  const organization = cleanSingleLineText(body.organization, 180);
  const website = cleanSingleLineText(body.website, 400);
  const scale = cleanSingleLineText(body.scale, 120);
  const software = cleanSingleLineText(body.software, 300);
  const bottleneck = cleanSingleLineText(body.bottleneck, 300);
  const goal = cleanSingleLineText(body.goal, 1800);
  const attribution = cleanAttribution(body.attribution);
  const promotion = resolvePromotion(body.promotion, attribution.utmPromo);
  const legalConsent =
    body.legalConsent === true &&
    cleanSingleLineText(body.legalVersion, 40) === LEGAL_VERSION;
  const promotionRequestedCode =
    cleanSingleLineText(promotion.requestedCode, 20) || null;
  const promotionTimezone =
    cleanSingleLineText(promotion.timezone, 100) || null;

  let selectedWorkflows: SelectedWorkflow[];
  try {
    selectedWorkflows = cleanWorkflows(body.automations, bundle);
  } catch {
    console.error("Trusted ICP pricing configuration is invalid", bundle.siteConfig.slug);
    return Response.json(
      { error: "Pricing is temporarily unavailable. Please try again shortly." },
      { status: 500 },
    );
  }

  if (!name || !hasUsableEmail(email) || !organization || !bottleneck || selectedWorkflows.length === 0) {
    return Response.json(
      { error: "Please add your name, work email, organization, primary bottleneck, and at least one workflow." },
      { status: 400 },
    );
  }

  if (!legalConsent) {
    return Response.json(
      { error: "Please accept the Terms and acknowledge the Privacy Policy before sending your request." },
      { status: 400 },
    );
  }

  if (!isLeadWebhookConfigured()) {
    return Response.json(
      { error: "Online plan delivery is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const capturedAt = new Date().toISOString();
  const recordedLegalConsent = {
    termsAccepted: true,
    privacyAcknowledged: true,
    contactAboutRequest: true,
    version: LEGAL_VERSION,
    capturedAt,
  } as const;
  const attributionLines = [
    attribution.utmSource && `UTM source: ${attribution.utmSource}`,
    attribution.utmMedium && `UTM medium: ${attribution.utmMedium}`,
    attribution.utmCampaign && `UTM campaign: ${attribution.utmCampaign}`,
    attribution.utmContent && `UTM content: ${attribution.utmContent}`,
    attribution.utmTerm && `UTM term: ${attribution.utmTerm}`,
    attribution.utmPromo && `UTM promo: ${attribution.utmPromo}`,
    attribution.utmIcp && `UTM ICP: ${attribution.utmIcp}`,
    attribution.gclid && `Google click ID: ${attribution.gclid}`,
    attribution.fbclid && `Meta click ID: ${attribution.fbclid}`,
    attribution.referrer && `Referrer: ${attribution.referrer}`,
    attribution.landingPage && `Landing page: ${attribution.landingPage}`,
  ].filter(Boolean);
  const pricingItems = selectedWorkflows.map(({ workflow, pricing }) => {
    const liveOneTimeFromUsd = getLivePriceUsd(pricing.setup, promotion.applied);
    return {
      workflowId: workflow.id,
      workflowName: workflow.name,
      tierId: pricing.id,
      regularOneTimeFromUsd: pricing.setup,
      liveOneTimeFromUsd,
      savingsUsd: pricing.setup - liveOneTimeFromUsd,
    };
  });
  const selectedStartingSubtotal = pricingItems.reduce(
    (total, item) => ({
      regularUsd: total.regularUsd + item.regularOneTimeFromUsd,
      liveUsd: total.liveUsd + item.liveOneTimeFromUsd,
      savingsUsd: total.savingsUsd + item.savingsUsd,
    }),
    { regularUsd: 0, liveUsd: 0, savingsUsd: 0 },
  );
  const pricing = {
    currency: "USD" as const,
    priceBasis: "one-time starting price" as const,
    pricingMode: promotion.pricingMode,
    promotion: {
      requestedCode: promotionRequestedCode,
      applied: promotion.applied,
      percentOff: promotion.percentOff,
      expiresAt: promotion.expiresAt,
      timezone: promotionTimezone,
    },
    selectedWorkflows: pricingItems,
    selectedStartingSubtotal,
  };

  const leadIntakeBrief = [
    `Vertical: ${bundle.siteConfig.industry}`,
    `Terms and Privacy acknowledged: ${recordedLegalConsent.version} at ${capturedAt}`,
    `Pricing mode: ${promotion.pricingMode}`,
    `Promo applied: ${promotion.applied ? "YES — 50% link pricing" : "NO — regular pricing"}`,
    promotion.expiresAt && `Promo expires: ${promotion.expiresAt}${promotionTimezone ? ` (${promotionTimezone})` : ""}`,
    `Selected workflows (${selectedWorkflows.length}):`,
    ...selectedWorkflows.map(({ workflow, pricing: workflowPricing }, index) =>
      `- ${workflow.name}: live one-time from ${formatUsd(pricingItems[index].liveOneTimeFromUsd)}; regular ${formatUsd(workflowPricing.setup)}; savings ${formatUsd(pricingItems[index].savingsUsd)}; typical launch ${workflowPricing.timeline}${workflowPricing.usageNote ? "; provider usage separate" : ""}`,
    ),
    `Selected starting subtotal: live ${formatUsd(selectedStartingSubtotal.liveUsd)}; regular ${formatUsd(selectedStartingSubtotal.regularUsd)}; savings ${formatUsd(selectedStartingSubtotal.savingsUsd)}`,
    `Organization: ${organization}`,
    `Website: ${website || "Not provided"}`,
    `${bundle.siteConfig.scaleLabel}: ${scale || "Not provided"}`,
    `${bundle.siteConfig.softwareLabel}: ${software || "Not provided"}`,
    `Primary bottleneck: ${bottleneck}`,
    `Desired first outcome: ${goal || "Not provided"}`,
    "Next step: Review workflow scope, integrations, human handoffs, provider costs, privacy/security needs, and applicable consent or communication requirements.",
    ...attributionLines,
    `Plan request received: ${capturedAt}`,
  ].filter(Boolean).join("\n");

  const leadSubmitted = await sendLeadToWebhook({
    source: "elevate-plan",
    vertical: bundle.siteConfig.slug,
    icp: {
      slug: bundle.siteConfig.slug,
      industry: bundle.siteConfig.industry,
    },
    landingRoute: landingRouteFor(bundle),
    attribution,
    name,
    email,
    phone: phone || undefined,
    organization,
    legalConsent: recordedLegalConsent,
    pricing,
    leadIntakeBrief,
  });

  if (!leadSubmitted) {
    return Response.json({ error: "We couldn’t deliver your plan just now. Please try again." }, { status: 502 });
  }

  return Response.json({ leadSubmitted: true });
}
