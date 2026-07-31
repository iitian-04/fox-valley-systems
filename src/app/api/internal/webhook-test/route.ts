import { timingSafeEqual } from "node:crypto";

import { getIcpBundle } from "@/data/icp-registry";
import { getWorkflowPricing, type IcpBundle } from "@/data/icp-types";
import {
  isLeadWebhookConfigured,
  sendLeadToWebhook,
  type LeadPricingPayload,
} from "@/lib/lead-webhook";
import { LEGAL_VERSION } from "@/lib/legal";
import { formatUsd, getLivePriceUsd } from "@/lib/promo";
import { cleanSingleLineText, readJsonObject } from "@/lib/request-guards";

type TestLeadRequest = {
  icp?: unknown;
  trigger?: unknown;
  clickIntervalsMs?: unknown;
};

const LOGO_TRIGGER_NAME = "logo-20-clicks";
const LOGO_TRIGGER_INTERVAL_COUNT = 19;
const LOGO_TRIGGER_COOLDOWN_MS = 60_000;
const logoTriggerCooldowns = new Map<string, number>();

const isAuthorizedBySecret = (request: Request) => {
  const expectedSecret = process.env.LEAD_TEST_SECRET?.trim();
  const authorization = request.headers.get("authorization");
  const bearerPrefix = "Bearer ";

  if (
    !expectedSecret ||
    !authorization?.startsWith(bearerPrefix)
  ) {
    return false;
  }

  const suppliedSecret = authorization.slice(bearerPrefix.length);
  const expectedBuffer = Buffer.from(expectedSecret);
  const suppliedBuffer = Buffer.from(suppliedSecret);

  return (
    expectedBuffer.length === suppliedBuffer.length &&
    timingSafeEqual(expectedBuffer, suppliedBuffer)
  );
};

const isValidLogoClickProof = (
  request: Request,
  body: TestLeadRequest,
) => {
  if (!process.env.LEAD_TEST_SECRET?.trim()) return false;

  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  const contentType = request.headers.get("content-type");

  if (
    origin !== requestUrl.origin ||
    fetchSite !== "same-origin" ||
    !contentType?.toLowerCase().startsWith("application/json") ||
    cleanSingleLineText(body.trigger, 40) !== LOGO_TRIGGER_NAME ||
    !Array.isArray(body.clickIntervalsMs) ||
    body.clickIntervalsMs.length !== LOGO_TRIGGER_INTERVAL_COUNT
  ) {
    return false;
  }

  const intervals = body.clickIntervalsMs;
  if (
    !intervals.every(
      (interval): interval is number =>
        Number.isInteger(interval) &&
        interval >= 25 &&
        interval <= 800,
    )
  ) {
    return false;
  }

  const totalDuration = intervals.reduce((total, interval) => total + interval, 0);
  const timingRange = Math.max(...intervals) - Math.min(...intervals);

  return totalDuration >= 800 && totalDuration <= 8_000 && timingRange >= 12;
};

const claimLogoTrigger = (request: Request) => {
  const now = Date.now();

  for (const [key, usedAt] of logoTriggerCooldowns) {
    if (now - usedAt > LOGO_TRIGGER_COOLDOWN_MS) {
      logoTriggerCooldowns.delete(key);
    }
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent")?.slice(0, 240) || "unknown";
  const clientKey = `${clientIp}:${userAgent}`;
  const lastUsedAt = logoTriggerCooldowns.get(clientKey);

  if (lastUsedAt && now - lastUsedAt < LOGO_TRIGGER_COOLDOWN_MS) {
    return null;
  }

  logoTriggerCooldowns.set(clientKey, now);
  return clientKey;
};

const releaseLogoTrigger = (clientKey: string | null) => {
  if (clientKey) logoTriggerCooldowns.delete(clientKey);
};

const landingRouteFor = (bundle: IcpBundle) =>
  bundle.siteConfig.slug === "home-services" ? "/" : `/${bundle.siteConfig.slug}`;

const notFoundResponse = () =>
  Response.json(
    { error: "Not found." },
    {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    },
  );

export const runtime = "nodejs";

export async function POST(request: Request) {
  const authorizedBySecret = isAuthorizedBySecret(request);
  const parsedBody = await readJsonObject<TestLeadRequest>(request);
  if (!parsedBody.ok) {
    return authorizedBySecret ? parsedBody.response : notFoundResponse();
  }

  const authorizedByLogo =
    !authorizedBySecret &&
    isValidLogoClickProof(request, parsedBody.value);
  const logoClientKey = authorizedByLogo
    ? claimLogoTrigger(request)
    : null;

  if (!authorizedBySecret && (!authorizedByLogo || !logoClientKey)) {
    return notFoundResponse();
  }

  const requestedIcp =
    cleanSingleLineText(parsedBody.value.icp, 100) || "home-services";
  const bundle = getIcpBundle(requestedIcp);

  if (!bundle) {
    return Response.json(
      { error: "Unknown test ICP." },
      {
        status: 400,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  if (!isLeadWebhookConfigured()) {
    return Response.json(
      { error: "Lead delivery webhook is not configured." },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  const submittedAt = new Date().toISOString();
  const promoExpiresAt = new Date(
    Date.now() + 24 * 60 * 60 * 1000,
  ).toISOString();
  const selectedWorkflows = bundle.workflows.slice(0, 3).map((workflow) => {
    const tier = getWorkflowPricing(bundle, workflow);
    const liveOneTimeFromUsd = getLivePriceUsd(tier.setup, true);

    return {
      workflowId: workflow.id,
      workflowName: workflow.name,
      tierId: tier.id,
      regularOneTimeFromUsd: tier.setup,
      liveOneTimeFromUsd,
      savingsUsd: tier.setup - liveOneTimeFromUsd,
    };
  });
  const publishedTiers = bundle.pricingTiers.map((tier) => {
    const liveOneTimeFromUsd = getLivePriceUsd(tier.setup, true);

    return {
      tierId: tier.id,
      tierName: tier.name,
      regularOneTimeFromUsd: tier.setup,
      liveOneTimeFromUsd,
      savingsUsd: tier.setup - liveOneTimeFromUsd,
    };
  });
  const selectedStartingSubtotal = selectedWorkflows.reduce(
    (total, workflow) => ({
      regularUsd: total.regularUsd + workflow.regularOneTimeFromUsd,
      liveUsd: total.liveUsd + workflow.liveOneTimeFromUsd,
      savingsUsd: total.savingsUsd + workflow.savingsUsd,
    }),
    { regularUsd: 0, liveUsd: 0, savingsUsd: 0 },
  );
  const pricing: LeadPricingPayload = {
    currency: "USD",
    priceBasis: "one-time starting price",
    pricingMode: "promotional",
    promotion: {
      requestedCode: "WEBHOOK-TEST-50",
      applied: true,
      percentOff: 50,
      expiresAt: promoExpiresAt,
      timezone: "America/New_York",
    },
    selectedWorkflows,
    selectedStartingSubtotal,
    publishedTiers,
  };
  const businessScale =
    bundle.siteConfig.scaleOptions[1] ??
    bundle.siteConfig.scaleOptions[0] ??
    "Growing multi-person team";
  const currentSoftware =
    "GoHighLevel, Google Workspace, existing scheduling platform";
  const primaryBottleneck =
    bundle.siteConfig.bottlenecks[0] ??
    "Inbound leads are not consistently followed up";
  const desiredOutcome =
    "Confirm contact fields, opportunity fields, notes, attribution, pricing, and assignment automations arrive correctly in GHL.";
  const workflowSummary = selectedWorkflows
    .map((workflow) => workflow.workflowName)
    .join(", ");
  const attribution = {
    landingPage: `${new URL(request.url).origin}${landingRouteFor(bundle)}`,
    referrer: "https://www.google.com/",
    utmSource: "webhook-test",
    utmMedium: "internal-qa",
    utmCampaign: "ghl-payload-verification",
    utmContent: "fully-populated-test-lead",
    utmTerm: "automation workflow testing",
    utmPromo: "50",
    utmIcp: bundle.siteConfig.slug,
    gclid: "TEST-GCLID-FOXVALLEY",
    fbclid: "TEST-FBCLID-FOXVALLEY",
  };
  const legalConsent = {
    termsAccepted: true,
    privacyAcknowledged: true,
    contactAboutRequest: true,
    version: LEGAL_VERSION,
    capturedAt: submittedAt,
  } as const;
  const leadIntakeBrief = [
    "TEST LEAD — DO NOT CONTACT",
    `Vertical: ${bundle.siteConfig.industry}`,
    "Contact: Webhook Test Lead",
    "Organization: Fox Valley Webhook Test Co.",
    "Website: https://example.com/fox-valley-webhook-test",
    `${bundle.siteConfig.scaleLabel}: ${businessScale}`,
    `${bundle.siteConfig.softwareLabel}: ${currentSoftware}`,
    `Primary bottleneck: ${primaryBottleneck}`,
    `Desired first outcome: ${desiredOutcome}`,
    `Workflow summary: ${workflowSummary}`,
    "Pricing mode: promotional",
    "Promo applied: YES — 50% test pricing",
    `Promo expires: ${promoExpiresAt} (America/New_York)`,
    `Selected workflows (${selectedWorkflows.length}):`,
    ...selectedWorkflows.map(
      (workflow) =>
        `- ${workflow.workflowName}: live one-time from ${formatUsd(workflow.liveOneTimeFromUsd)}; regular ${formatUsd(workflow.regularOneTimeFromUsd)}; savings ${formatUsd(workflow.savingsUsd)}`,
    ),
    `Selected starting subtotal: live ${formatUsd(selectedStartingSubtotal.liveUsd)}; regular ${formatUsd(selectedStartingSubtotal.regularUsd)}; savings ${formatUsd(selectedStartingSubtotal.savingsUsd)}`,
    `Terms and Privacy acknowledged: ${LEGAL_VERSION} at ${submittedAt}`,
    `UTM source: ${attribution.utmSource}`,
    `UTM medium: ${attribution.utmMedium}`,
    `UTM campaign: ${attribution.utmCampaign}`,
    `UTM content: ${attribution.utmContent}`,
    `UTM term: ${attribution.utmTerm}`,
    `UTM promo: ${attribution.utmPromo}`,
    `UTM ICP: ${attribution.utmIcp}`,
    `Google click ID: ${attribution.gclid}`,
    `Meta click ID: ${attribution.fbclid}`,
    `Referrer: ${attribution.referrer}`,
    `Landing page: ${attribution.landingPage}`,
    `Test lead submitted: ${submittedAt}`,
  ].join("\n");

  const leadSubmitted = await sendLeadToWebhook({
    source: "fox-valley-test",
    isTest: true,
    vertical: bundle.siteConfig.slug,
    icp: {
      slug: bundle.siteConfig.slug,
      industry: bundle.siteConfig.industry,
    },
    landingRoute: landingRouteFor(bundle),
    attribution,
    name: "Webhook Test Lead",
    email: "fox-valley-webhook-test@example.com",
    phone: "+12025550147",
    organization: "Fox Valley Webhook Test Co.",
    businessWebsite: "https://example.com/fox-valley-webhook-test",
    businessScale,
    currentSoftware,
    primaryBottleneck,
    desiredOutcome,
    workflowSummary,
    legalConsent,
    pricing,
    submittedAt,
    leadIntakeBrief,
  });

  if (!leadSubmitted) {
    releaseLogoTrigger(logoClientKey);
    return Response.json(
      { error: "The test lead could not be delivered." },
      {
        status: 502,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  return Response.json(
    {
      leadSubmitted: true,
      isTest: true,
      source: "fox-valley-test",
      icp: bundle.siteConfig.slug,
      submittedAt,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
