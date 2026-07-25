export const categoryTabs = [
  "Popular",
  "Referrer Access",
  "Calls & Intake",
  "Coverage & Routing",
  "Follow-Up",
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
  slug: "radiology-groups",
  industry: "Radiology Groups",
  audienceLabel: "radiology group",
  audiencePlural: "radiology groups",
  segment: "Physician-owned radiology groups and teleradiology practices",
  persona: "Managing partner, practice administrator, or radiology executive",
  eyebrow: "AI workflows for radiology group operations",
  headline: "Protect referral relationships without adding another administrative queue.",
  subheadline:
    "Capture referral and coverage inquiries, route each one to the right owner, and send approved status updates—so radiologists can stay focused on reading studies.",
  mobileHeadline: "Keep referral and coverage requests moving without more admin.",
  outcomeFocus: "Faster referrer response. Less manual coordination.",
  splashFeature: "Referrer inquiry response workflow",
  quickStartPitch: "Start with one visible communication gap. Prove the workflow, then connect coverage, follow-up, and reporting.",
  scaleLabel: "Radiology group size",
  scaleOptions: [
    "2–10 radiologists",
    "11–25 radiologists",
    "26–50 radiologists",
    "51–100 radiologists",
    "100+ radiologists",
    "Distributed / teleradiology group",
  ],
  softwareLabel: "Current RIS, PACS, CRM, telephony, or service-desk tools",
  softwarePlaceholder: "RIS/PACS, referral portal, CRM, call system, shared inbox, spreadsheets…",
  bottlenecks: [
    "Referral communication delays",
    "Fragmented referral intake",
    "Coverage inquiries route too slowly",
    "Administrative calls interrupt radiologists",
    "After-hours requests lack clear ownership",
    "Service questions repeat across facilities",
    "Missed opportunities are hard to see",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works around current systems",
    "Human ownership designed in",
    "Security-aware scoping",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Administrative scope comes first",
      detail: "Inquiry types, approved responses, owners, exceptions, and human escalation paths are mapped before implementation.",
    },
    {
      title: "Radiologists stay focused on reads",
      detail: "Automation handles approved administrative capture and routing; clinical interpretation and judgment remain entirely with qualified people.",
    },
    {
      title: "Referrer communication is approved",
      detail: "Your group controls the wording, status events, recipients, service rules, and situations that require direct staff contact.",
    },
    {
      title: "Systems and contracts are reviewed",
      detail: "RIS, PACS, portals, telephony, security requirements, and existing vendor constraints are checked before a connection is promised.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, alerts, opt-outs, ownership, and escalation behavior are checked before launch.",
    },
    {
      title: "Usage and handoff stay clear",
      detail: "Provider usage is separated from the build price, and your team receives the workflow logic and operating ownership points.",
    },
  ],
  complianceNote:
    "Automation supports administrative communication, intake, routing, and reporting only. It does not read or interpret studies, make clinical decisions, provide medical advice, perform clinical triage, or replace radiologists. Privacy, security, consent, recording, messaging, contract, and integration requirements are confirmed during scope review; no compliance guarantee is implied.",
  consentCopy:
    "By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for radiology groups. Tell me where referral, coverage, or administrative communication gets stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "Referrers wait too long for updates",
    "Coverage requests route slowly",
    "We cannot see missed inquiries",
  ],
  metaTitle: "Elevate — AI Workflows for Radiology Groups",
  metaDescription:
    "Explore practical AI referral communication, coverage-intake, call-routing, follow-up, and reporting workflows for physician-owned radiology groups and teleradiology practices.",
  theme: {
    accent: "#6f7cff",
    accentStrong: "#4f5bd5",
    accentSoft: "rgba(111, 124, 255, 0.16)",
    secondary: "#4bd5c0",
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Referral Access Quick Start",
    setup: 1495,
    timeline: "3–5 business days",
    summary: "One focused inquiry, follow-up, or visibility workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Workflow",
    setup: 3295,
    timeline: "5–8 business days",
    summary: "A tailored administrative workflow connecting the tools your group already uses.",
  },
  {
    id: "growth-system",
    name: "Group Operations System",
    setup: 5995,
    timeline: "1–2 weeks",
    summary: "Multi-step intake, routing, follow-up, and ownership across facilities or service lines.",
  },
  {
    id: "ai-calling",
    name: "AI Call Coverage",
    setup: 8995,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound administrative call workflows with staff escalation.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-System Build",
    setup: 14995,
    timeline: "2–4 weeks",
    summary: "Complex multi-facility orchestration, data synchronization, and operational visibility.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "referrer-inquiry-response",
    name: "Referrer Inquiry Response Workflow",
    description: "Acknowledges administrative inquiries, captures the facility and request type, and routes a clear owner and next step.",
    categories: ["Popular", "Referrer Access", "Calls & Intake", "Follow-Up"],
    icon: "messages-square",
    badge: "Best first step",
    requirement: "Approved inquiry types, response copy, and owners",
    tier: "quick-start",
  },
  {
    id: "after-hours-referrer-call-assistant",
    name: "After-Hours Referrer Call Assistant",
    description: "Answers approved administrative questions, captures a non-clinical message, and routes exceptions to the right on-call or operations contact.",
    categories: ["Popular", "Referrer Access", "Calls & Intake", "Coverage & Routing"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call flow, FAQs, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "referral-intake-completeness",
    name: "Referral Intake Completeness Workflow",
    description: "Checks for group-defined administrative fields and documents, then routes incomplete items for staff review and follow-up.",
    categories: ["Popular", "Referrer Access", "Calls & Intake", "Operations"],
    icon: "clipboard-list",
    badge: "High impact",
    requirement: "Approved intake checklist and supported source access",
    tier: "connected-workflow",
  },
  {
    id: "coverage-inquiry-router",
    name: "Coverage Inquiry Router",
    description: "Captures facility, modality, service window, and contact details, then routes the inquiry to the defined operations or contracting owner.",
    categories: ["Popular", "Calls & Intake", "Coverage & Routing", "Operations"],
    icon: "route",
    badge: "High impact",
    requirement: "Coverage request fields and ownership map",
    tier: "growth-system",
  },
  {
    id: "referral-status-update",
    name: "Referral Status Update Workflow",
    description: "Sends approved administrative status updates and routes questions that require staff review to the correct team.",
    categories: ["Popular", "Referrer Access", "Follow-Up", "Operations"],
    icon: "file-text",
    requirement: "Approved status events, recipients, and message copy",
    tier: "growth-system",
  },
  {
    id: "missing-referral-information-follow-up",
    name: "Missing Referral Information Follow-Up",
    description: "Sends approved reminders for missing administrative items and creates a staff task when the request remains incomplete.",
    categories: ["Popular", "Referrer Access", "Follow-Up"],
    icon: "refresh",
    badge: "Quick win",
    requirement: "Administrative checklist and messaging rules",
    tier: "quick-start",
  },
  {
    id: "referrer-faq-assistant",
    name: "Referrer FAQ Assistant",
    description: "Answers only approved questions about contacts, submission methods, service availability, and administrative policies, with a human handoff.",
    categories: ["Referrer Access", "Calls & Intake"],
    icon: "circle-help",
    requirement: "Approved referrer information and escalation path",
    tier: "connected-workflow",
  },
  {
    id: "multi-facility-contact-routing",
    name: "Multi-Facility Contact Routing",
    description: "Routes inquiries by facility, contract, service line, hours, and group-defined ownership rules.",
    categories: ["Referrer Access", "Coverage & Routing", "Operations"],
    icon: "route",
    badge: "Admin saver",
    requirement: "Facility, contract, and ownership rules",
    tier: "growth-system",
  },
  {
    id: "referrer-service-issue-escalation",
    name: "Referrer Service Issue Escalation",
    description: "Flags complaints and unresolved administrative requests, assigns an owner, and keeps the issue visible until staff closes the loop.",
    categories: ["Referrer Access", "Follow-Up", "Operations"],
    icon: "bell",
    requirement: "Issue types, response targets, and escalation owners",
    tier: "connected-workflow",
  },
  {
    id: "new-contract-inquiry-capture",
    name: "New Contract Inquiry Capture",
    description: "Captures prospective hospital, imaging-site, and coverage-partner inquiries and routes a structured brief to group leadership.",
    categories: ["Calls & Intake", "Coverage & Routing", "Follow-Up"],
    icon: "users-round",
    badge: "Quick win",
    requirement: "Qualification fields and leadership routing",
    tier: "quick-start",
  },
  {
    id: "credentialing-request-coordination",
    name: "Credentialing Request Coordination",
    description: "Routes administrative document requests, assigns the correct owner, and follows up on open items without exposing credentials to the assistant.",
    categories: ["Coverage & Routing", "Follow-Up", "Operations"],
    icon: "workflow",
    requirement: "Approved request types and secure system process",
    tier: "connected-workflow",
  },
  {
    id: "referral-source-follow-up-queue",
    name: "Referrer Follow-Up Queue",
    description: "Creates a prioritized queue of open administrative inquiries, unanswered partner questions, and overdue internal handoffs.",
    categories: ["Referrer Access", "Follow-Up", "Operations"],
    icon: "calendar-clock",
    badge: "Admin saver",
    requirement: "Request sources and owner rules",
    tier: "connected-workflow",
  },
  {
    id: "response-time-exception-alerts",
    name: "Response-Time Exception Alerts",
    description: "Notifies the right owner when a referral or coverage inquiry has no response, no assignment, or no clear next action.",
    categories: ["Follow-Up", "Operations"],
    icon: "bell",
    requirement: "Response targets and escalation paths",
    tier: "connected-workflow",
  },
  {
    id: "service-request-outcome-dashboard",
    name: "Service Request Outcome Dashboard",
    description: "Summarizes inquiry sources, response times, owners, handoffs, open items, and non-clinical outcomes across the group.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Administrative request and communication data access",
    tier: "advanced",
  },
  {
    id: "multi-system-referrer-orchestration",
    name: "Multi-System Referrer Orchestration",
    description: "Coordinates approved intake, routing, updates, follow-up, and reporting across multiple facilities and administrative systems.",
    categories: ["Referrer Access", "Coverage & Routing", "Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "System, security, and contract review",
    tier: "advanced",
  },
  {
    id: "referrer-access-leak-review",
    name: "Referrer Access Leak Review",
    description: "Maps where inquiries, handoffs, status updates, and ownership stall so the first automation targets a visible operational gap.",
    categories: ["Operations", "Advanced"],
    icon: "shield-check",
    badge: "Best first step",
    requirement: "Access to process and administrative outcome data",
    tier: "quick-start",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
