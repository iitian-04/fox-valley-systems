import type { LeadAttribution } from "@/lib/request-guards";

export type LeadPricingPayload = {
  currency: "USD";
  priceBasis: "one-time starting price";
  pricingMode: "regular" | "promotional";
  promotion: {
    requestedCode: string | null;
    applied: boolean;
    percentOff: 0 | 50;
    expiresAt: string | null;
    timezone: string | null;
  };
  selectedWorkflows?: Array<{
    workflowId: string;
    workflowName: string;
    tierId: string;
    regularOneTimeFromUsd: number;
    liveOneTimeFromUsd: number;
    savingsUsd: number;
  }>;
  selectedStartingSubtotal?: {
    regularUsd: number;
    liveUsd: number;
    savingsUsd: number;
  };
  publishedTiers?: Array<{
    tierId: string;
    tierName: string;
    regularOneTimeFromUsd: number;
    liveOneTimeFromUsd: number;
    savingsUsd: number;
  }>;
};

export type LeadWebhookPayload = {
  source: "elevate-chat" | "elevate-plan";
  vertical: string;
  icp: {
    slug: string;
    industry: string;
  };
  landingRoute: string;
  attribution: LeadAttribution;
  name: string;
  email?: string;
  phone?: string;
  organization?: string;
  legalConsent?: {
    termsAccepted: true;
    privacyAcknowledged: true;
    contactAboutRequest: true;
    version: string;
    capturedAt: string;
  };
  pricing: LeadPricingPayload;
  leadIntakeBrief: string;
};

export const isLeadWebhookConfigured = () =>
  Boolean(process.env.LEAD_DELIVERY_WEBHOOK_URL?.trim());

export async function sendLeadToWebhook(payload: LeadWebhookPayload) {
  const webhookUrl = process.env.LEAD_DELIVERY_WEBHOOK_URL?.trim();
  if (!webhookUrl) return false;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Lead delivery webhook failed", payload.source, response.status);
    }

    return response.ok;
  } catch {
    console.error("Lead delivery webhook request failed", payload.source);
    return false;
  }
}
