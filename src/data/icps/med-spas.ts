export const categoryTabs = [
  "Popular",
  "Lead Capture",
  "Consultations",
  "Follow-Up",
  "Reactivation",
  "Operations",
  "Advanced",
  "All",
] as const;

export type CategoryTab = (typeof categoryTabs)[number];
export type WorkflowCategory = Exclude<CategoryTab, "All">;

export type WorkflowIcon =
  | "headset"
  | "phone-missed"
  | "zap"
  | "calendar-check"
  | "calendar-clock"
  | "clipboard-list"
  | "circle-help"
  | "route"
  | "file-text"
  | "messages-square"
  | "refresh"
  | "database"
  | "chart-column"
  | "bell"
  | "shield-check"
  | "workflow"
  | "users-round";

export type PricingTierId =
  | "quick-start"
  | "connected-workflow"
  | "growth-system"
  | "ai-calling"
  | "advanced";

export type PricingTier = {
  id: PricingTierId;
  name: string;
  setup: number;
  timeline: string;
  summary: string;
  usageNote?: string;
};

export type WorkflowItem = {
  id: string;
  name: string;
  description: string;
  categories: WorkflowCategory[];
  icon: WorkflowIcon;
  badge?: "Best first step" | "Quick win" | "High impact" | "AI calling" | "Admin saver" | "Advanced";
  requirement?: string;
  tier: PricingTierId;
};

export const siteConfig = {
  slug: "med-spas",
  industry: "Med Spas",
  audienceLabel: "med spa",
  audiencePlural: "med spas",
  segment: "Independent med spas and growing multi-location aesthetic practices",
  persona: "Med spa owner, clinic manager, or marketing and operations lead",
  eyebrow: "AI lead workflows for med spas",
  headline: "Turn more paid leads into booked consultations while interest is still high.",
  subheadline:
    "Give every inquiry a fast, polished response, a clear path to consultation, and consistent follow-up that respects your brand, quiet hours, and opt-out rules.",
  mobileHeadline: "Turn fresh treatment interest into booked consultations.",
  outcomeFocus: "Faster lead response. More consistent follow-up.",
  splashFeature: "Instant consultation lead rescue",
  quickStartPitch: "Start with one speed-to-lead workflow. Expand only after it earns a place in your consultation process.",
  scaleLabel: "Number of med spa locations",
  scaleOptions: ["1 location", "2 locations", "3–5 locations", "6–10 locations", "11–20 locations", "20+ locations"],
  softwareLabel: "Current CRM, booking, phone, messaging, or marketing tools",
  softwarePlaceholder: "Boulevard, Zenoti, Mindbody, PatientNow, CRM, phone system, spreadsheets…",
  bottlenecks: [
    "Paid leads wait too long for a response",
    "After-hours inquiries go cold",
    "The first response is inconsistent across channels",
    "Consultations remain unconfirmed",
    "No-response leads are not nurtured consistently",
    "No-shows and cancellations leave openings",
    "Inactive clients are not reactivated",
    "Treatment-interest data is scattered",
    "We cannot connect lead source to consultation outcomes",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Built around your brand voice",
    "Human escalation designed in",
    "Consent-aware workflow scope",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Speed-to-lead first",
      detail: "The first workflow targets one visible gap between an inquiry and a clear consultation, follow-up, or staff handoff.",
    },
    {
      title: "Your brand voice is configured",
      detail: "Approved language, offers, cadence, quiet hours, stop conditions, and escalation tone are set before outreach begins.",
    },
    {
      title: "Clinical questions stay with staff",
      detail: "Automation handles administrative lead and booking steps; treatment suitability, risks, and medical questions go to qualified people.",
    },
    {
      title: "Existing tools stay in the picture",
      detail: "CRM, booking, phone, ad, messaging, and attribution access are reviewed before a connection is promised.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, opt-outs, alerts, handoffs, and failure states are checked before the workflow goes live.",
    },
    {
      title: "Clear performance handoff",
      detail: "Your team receives the workflow logic, ownership points, provider costs, and the outcomes that can be measured.",
    },
  ],
  complianceNote:
    "Elevate supports administrative lead response, consultation requests, reminders, follow-up, reactivation, and operations. It does not assess treatment suitability, provide medical advice, make clinical claims, recommend procedures, promise results, or replace licensed judgment. Approved offers and marketing language remain subject to practice and legal review. Privacy, security, consent, recording, messaging, opt-out, advertising, and integration requirements are reviewed during scope; no legal or compliance guarantee is implied. Do not submit patient or client information in this business inquiry form.",
  consentCopy:
    "This form is for med spa operations inquiries only—do not include patient or client information. By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for med spas. Tell me where lead response, consultation booking, follow-up, or reactivation breaks down, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "Paid leads wait too long",
    "Too many leads stop replying",
    "We need to reactivate clients",
  ],
  metaTitle: "Elevate — AI Lead Workflows for Med Spas",
  metaDescription:
    "Explore practical AI speed-to-lead, consultation-booking, nurture, reactivation, and med-spa operations workflows.",
  theme: {
    accent: "#9a5cff",
    accentStrong: "#7440df",
    accentSoft: "rgba(154, 92, 255, 0.17)",
    secondary: "#48d6bd",
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Lead Rescue Quick Start",
    setup: 795,
    timeline: "2–4 business days",
    summary: "One focused speed-to-lead, reminder, or recovery workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Consultation Workflow",
    setup: 1695,
    timeline: "4–7 business days",
    summary: "A tailored lead, consultation, or follow-up workflow around your current tools.",
  },
  {
    id: "growth-system",
    name: "Med Spa Growth System",
    setup: 3195,
    timeline: "1–2 weeks",
    summary: "Multi-step nurture, schedule recovery, campaign follow-up, or reactivation with staff handoffs.",
  },
  {
    id: "ai-calling",
    name: "Premium AI Lead Concierge",
    setup: 4495,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound administrative calls with a polished human escalation path.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Revenue Operations Build",
    setup: 7995,
    timeline: "2–4 weeks",
    summary: "Multi-location routing, deeper system connections, segmentation, attribution, and capacity logic.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "instant-consultation-lead-rescue",
    name: "Instant Consultation Lead Rescue",
    description: "Responds to form and ad leads quickly, confirms treatment interest and preferred timing, and guides the lead to book or request a person.",
    categories: ["Popular", "Lead Capture", "Follow-Up"],
    icon: "zap",
    badge: "Best first step",
    requirement: "Lead source and approved response",
    tier: "quick-start",
  },
  {
    id: "missed-call-lead-rescue",
    name: "Missed-Call Lead Rescue",
    description: "Texts missed callers, captures treatment interest and preferred contact time, and routes the next action to staff.",
    categories: ["Popular", "Lead Capture", "Follow-Up"],
    icon: "phone-missed",
    badge: "Quick win",
    requirement: "Business phone and approved SMS workflow",
    tier: "quick-start",
  },
  {
    id: "consultation-reminder-reschedule",
    name: "Consultation Reminder & Reschedule",
    description: "Sends polished two-way reminders and routes requested changes before an appointment turns into an empty opening.",
    categories: ["Popular", "Consultations", "Follow-Up"],
    icon: "calendar-check",
    badge: "Quick win",
    requirement: "Booking trigger and messaging consent",
    tier: "quick-start",
  },
  {
    id: "treatment-interest-concierge",
    name: "Treatment-Interest Lead Concierge",
    description: "Answers approved non-clinical questions, captures goals and timing at a high level, and routes the lead to the right consultation path.",
    categories: ["Popular", "Lead Capture", "Consultations"],
    icon: "messages-square",
    badge: "High impact",
    requirement: "Approved service content and escalation rules",
    tier: "connected-workflow",
  },
  {
    id: "consultation-booking-workflow",
    name: "Consultation Booking Workflow",
    description: "Collects approved preferences and routes booking requests by treatment interest, location, provider, and availability rules.",
    categories: ["Popular", "Consultations", "Operations"],
    icon: "calendar-clock",
    requirement: "Consultation and scheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "no-response-nurture",
    name: "No-Response Nurture",
    description: "Runs a measured, approved follow-up cadence until the lead replies, books, opts out, or reaches the stop condition.",
    categories: ["Popular", "Follow-Up", "Reactivation"],
    icon: "workflow",
    requirement: "Approved cadence, quiet hours, and stop rules",
    tier: "connected-workflow",
  },
  {
    id: "consultation-no-show-recovery",
    name: "Consultation No-Show Recovery",
    description: "Acknowledges a missed consultation and offers an approved rescheduling path with staff escalation when needed.",
    categories: ["Consultations", "Follow-Up"],
    icon: "refresh",
    requirement: "Appointment outcome and rescheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "inactive-client-reactivation",
    name: "Inactive Client Reactivation",
    description: "Segments an approved inactive list by prior interest and timing, then launches a respectful rebooking campaign.",
    categories: ["Popular", "Follow-Up", "Reactivation"],
    icon: "users-round",
    badge: "High impact",
    requirement: "Eligible list, approved offer, and outreach consent",
    tier: "growth-system",
  },
  {
    id: "new-treatment-launch-follow-up",
    name: "New-Treatment Launch Follow-Up",
    description: "Builds an approved audience and follow-up path for a new service without making unsupported treatment or outcome claims.",
    categories: ["Follow-Up", "Reactivation"],
    icon: "file-text",
    requirement: "Approved audience, offer, and marketing language",
    tier: "growth-system",
  },
  {
    id: "open-consultation-filler",
    name: "Open-Consultation Filler",
    description: "Detects an eligible opening and offers it to approved leads or waitlist contacts according to capacity rules.",
    categories: ["Consultations", "Follow-Up", "Reactivation"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Calendar access and eligible audience",
    tier: "growth-system",
  },
  {
    id: "review-referral-request",
    name: "Review & Referral Request",
    description: "After a staff-approved trigger, requests feedback and offers a referral path using approved, claim-safe language.",
    categories: ["Follow-Up", "Reactivation"],
    icon: "file-text",
    requirement: "Approved completion or satisfaction trigger",
    tier: "quick-start",
  },
  {
    id: "premium-ai-lead-concierge",
    name: "Premium AI Lead Concierge",
    description: "Handles approved lead calls, captures consultation interest, and transfers clinical, sensitive, or high-value exceptions to staff.",
    categories: ["Popular", "Lead Capture", "Consultations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call script, brand voice, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "after-hours-consultation-capture",
    name: "After-Hours Consultation Capture",
    description: "Acknowledges after-hours leads, captures safe administrative details, and prepares the right next-morning or on-call handoff.",
    categories: ["Lead Capture", "Consultations", "Operations"],
    icon: "bell",
    badge: "AI calling",
    requirement: "After-hours policy and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "treatment-source-capacity-segmentation",
    name: "Treatment, Source & Capacity Segmentation",
    description: "Groups eligible leads by approved treatment interest, source, location, engagement, and available consultation capacity.",
    categories: ["Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "CRM, source, and capacity data access",
    tier: "advanced",
  },
  {
    id: "multi-location-lead-routing",
    name: "Multi-Location Lead Routing",
    description: "Routes leads by treatment interest, geography, provider rules, location availability, and staff ownership.",
    categories: ["Lead Capture", "Consultations", "Operations", "Advanced"],
    icon: "route",
    badge: "Advanced",
    requirement: "Location, provider, and booking rules",
    tier: "advanced",
  },
  {
    id: "lead-attribution-dashboard",
    name: "Lead-to-Consultation Dashboard",
    description: "Summarizes sources, response times, conversation outcomes, booked consultations, unresolved leads, and reactivation activity.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Lead, CRM, booking, and outcome data access",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
