export const categoryTabs = [
  "Popular",
  "Patient Access",
  "Calls & Intake",
  "Scheduling",
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
  slug: "independent-imaging-centers",
  industry: "Independent Imaging Centers",
  audienceLabel: "imaging center",
  audiencePlural: "imaging centers",
  segment: "Independent imaging centers with 2–20 locations",
  persona: "Administrator, COO, or owner",
  eyebrow: "patient-access workflows",
  headline: "Capture more imaging requests without adding to the phone queue.",
  subheadline:
    "Recover missed and after-hours inquiries, capture referral details, and route the next action to your team—using the systems you already have.",
  mobileHeadline: "Turn missed imaging inquiries into clear next steps.",
  outcomeFocus: "More requests captured. Less repetitive phone work.",
  splashFeature: "Missed-call scan request recovery",
  quickStartPitch: "Start with one visible access leak. Prove the workflow, then connect the next bottleneck.",
  scaleLabel: "Number of imaging locations",
  scaleOptions: ["1 location", "2–3 locations", "4–7 locations", "8–12 locations", "13–20 locations", "20+ locations"],
  softwareLabel: "Current scheduling, RIS, CRM, or phone tools",
  softwarePlaceholder: "RIS/PACS, scheduling platform, CRM, call system, spreadsheets…",
  bottlenecks: [
    "Missed or abandoned calls",
    "Long hold times",
    "After-hours requests go to voicemail",
    "Referral intake and follow-up gaps",
    "Too many repetitive patient questions",
    "Scheduling team is overloaded",
    "We lack clear call-outcome reporting",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human escalation designed in",
    "Privacy-aware scope",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Patient-access rules first",
      detail: "Approved questions, routing rules, exceptions, and human handoffs are mapped before implementation.",
    },
    {
      title: "Your scheduling team stays in control",
      detail: "Automation captures and routes requests; your team controls clinical, scheduling, and exception decisions.",
    },
    {
      title: "Integrations scoped before build",
      detail: "RIS, scheduling, CRM, telephony, and messaging access are reviewed before a workflow is promised.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, alerts, opt-outs, and escalation behavior are checked before launch.",
    },
    {
      title: "Usage costs separated",
      detail: "Any phone, text, AI, or software-provider usage is shown separately from the one-time build.",
    },
    {
      title: "Clear operating handoff",
      detail: "Your team receives the workflow logic, ownership points, and practical next-step guidance.",
    },
  ],
  complianceNote:
    "Automation supports administrative patient access only. It does not read studies, provide medical advice, perform clinical triage, or replace staff judgment. Privacy, security, consent, recording, messaging, and integration requirements are confirmed during scope review; no compliance guarantee is implied.",
  consentCopy:
    "By submitting, you agree that Fox Valley Systems may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for imaging centers. Tell me where patient or referral access gets stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "We abandon too many calls",
    "Referrals are slow to route",
    "After-hours requests pile up",
  ],
  metaTitle: "Fox Valley Systems — Workflows for Independent Imaging Centers",
  metaDescription:
    "Explore practical patient-access, referral-intake, scheduling, follow-up, and reporting workflows for independent imaging centers.",
  theme: {
    accent: "#2563eb",
    accentStrong: "#2563eb",
    accentSoft: "rgba(37, 99, 235, 0.09)",
    secondary: "#6b7280"
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Access Quick Start",
    setup: 1195,
    timeline: "3–5 business days",
    summary: "One focused access or follow-up workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Workflow",
    setup: 2695,
    timeline: "5–8 business days",
    summary: "A tailored workflow connecting the patient-access tools you already use.",
  },
  {
    id: "growth-system",
    name: "Access Growth System",
    setup: 4995,
    timeline: "1–2 weeks",
    summary: "Multi-step intake, routing, follow-up, and reporting with human handoffs.",
  },
  {
    id: "ai-calling",
    name: "Call Coverage",
    setup: 7495,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound call workflows with staff escalation.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-System Build",
    setup: 12495,
    timeline: "2–4 weeks",
    summary: "Complex multi-location routing, data synchronization, and operational visibility.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "missed-call-scan-request-recovery",
    name: "Missed-Call Scan Request Recovery",
    description: "Texts missed callers promptly, captures the requested exam and preferred location, then routes the request to staff.",
    categories: ["Popular", "Patient Access", "Calls & Intake", "Follow-Up"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business phone and approved SMS workflow",
    tier: "quick-start",
  },
  {
    id: "after-hours-access-assistant",
    name: "After-Hours Patient Access Assistant",
    description: "Answers approved administrative questions, captures appointment requests, and creates a prioritized staff handoff.",
    categories: ["Popular", "Patient Access", "Calls & Intake"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call flow, approved FAQs, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "referral-intake-capture",
    name: "Referral Intake Capture",
    description: "Collects the non-clinical referral details your team needs and routes incomplete or urgent administrative items for review.",
    categories: ["Popular", "Calls & Intake", "Operations"],
    icon: "clipboard-list",
    badge: "High impact",
    requirement: "Approved intake fields and routing rules",
    tier: "connected-workflow",
  },
  {
    id: "appointment-request-follow-up",
    name: "Appointment Request Follow-Up",
    description: "Follows up when an online or phone appointment request has not yet reached a clear next step.",
    categories: ["Popular", "Patient Access", "Scheduling", "Follow-Up"],
    icon: "messages-square",
    badge: "Quick win",
    requirement: "Request source and approved messaging",
    tier: "quick-start",
  },
  {
    id: "exam-prep-faq-assistant",
    name: "Exam Preparation FAQ Assistant",
    description: "Answers only approved preparation, location, hours, and policy questions, with a clear route back to staff.",
    categories: ["Popular", "Patient Access"],
    icon: "circle-help",
    requirement: "Approved patient information",
    tier: "connected-workflow",
  },
  {
    id: "unconfirmed-appointment-recovery",
    name: "Unconfirmed Appointment Recovery",
    description: "Runs approved confirmation and rescheduling prompts so uncertain appointments reach staff sooner.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "calendar-check",
    requirement: "Scheduling trigger and messaging consent",
    tier: "connected-workflow",
  },
  {
    id: "abandoned-request-recovery",
    name: "Abandoned Request Recovery",
    description: "Re-engages people who started an appointment request but did not complete the administrative process.",
    categories: ["Patient Access", "Scheduling", "Follow-Up"],
    icon: "refresh",
    tier: "quick-start",
  },
  {
    id: "referrer-status-update",
    name: "Referrer Status Update Workflow",
    description: "Sends approved administrative status updates and routes unanswered referral questions to the right team member.",
    categories: ["Calls & Intake", "Follow-Up", "Operations"],
    icon: "file-text",
    requirement: "Approved status events and recipient rules",
    tier: "growth-system",
  },
  {
    id: "multi-location-request-routing",
    name: "Multi-Location Request Routing",
    description: "Routes requests by location, exam type, hours, availability rules, and staff ownership.",
    categories: ["Patient Access", "Scheduling", "Operations"],
    icon: "route",
    badge: "High impact",
    requirement: "Location and scheduling rules",
    tier: "growth-system",
  },
  {
    id: "intake-system-sync",
    name: "Intake-to-System Sync",
    description: "Creates or updates the appropriate administrative record from approved call, form, or message fields.",
    categories: ["Operations"],
    icon: "database",
    badge: "Admin saver",
    requirement: "Supported system access",
    tier: "connected-workflow",
  },
  {
    id: "open-slot-waitlist-workflow",
    name: "Open-Slot Waitlist Workflow",
    description: "Flags eligible openings and contacts approved waitlist candidates according to center-defined rules.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "calendar-clock",
    requirement: "Calendar access and eligible waitlist",
    tier: "growth-system",
  },
  {
    id: "referral-follow-up-sequence",
    name: "Referral Follow-Up Sequence",
    description: "Keeps incomplete administrative referrals moving with approved reminders and staff escalation.",
    categories: ["Calls & Intake", "Follow-Up"],
    icon: "workflow",
    tier: "connected-workflow",
  },
  {
    id: "call-outcome-dashboard",
    name: "Call Outcome Dashboard",
    description: "Summarizes captured requests, missed calls, handoffs, unresolved items, and response outcomes.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Call and request data access",
    tier: "advanced",
  },
  {
    id: "access-exception-alerts",
    name: "Patient Access Exception Alerts",
    description: "Notifies the right owner when an inquiry falls outside approved automation or remains unresolved.",
    categories: ["Patient Access", "Operations"],
    icon: "bell",
    tier: "connected-workflow",
  },
  {
    id: "multi-system-access-orchestration",
    name: "Multi-System Access Orchestration",
    description: "Coordinates intake, routing, follow-up, status updates, and reporting across multiple approved systems.",
    categories: ["Operations", "Advanced"],
    icon: "workflow",
    badge: "Advanced",
    requirement: "System and security review",
    tier: "advanced",
  },
  {
    id: "access-leak-review",
    name: "Patient Access Leak Review",
    description: "Maps where calls, forms, referrals, and handoffs stall so the first automation targets a visible operational gap.",
    categories: ["Operations", "Advanced"],
    icon: "shield-check",
    badge: "Best first step",
    requirement: "Access to process and outcome data",
    tier: "quick-start",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
