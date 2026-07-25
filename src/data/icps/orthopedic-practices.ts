export const categoryTabs = [
  "Popular",
  "Patient Access",
  "Referrals",
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
  slug: "orthopedic-practices",
  industry: "Orthopedic Practices",
  audienceLabel: "orthopedic practice",
  audiencePlural: "orthopedic practices",
  segment: "Independent orthopedic and musculoskeletal groups with multiple providers or locations",
  persona: "Practice administrator or managing physician",
  eyebrow: "AI patient-access workflows for orthopedics",
  headline: "Capture more orthopedic referrals and consultation requests without adding front-desk work.",
  subheadline:
    "Recover missed calls, respond to referrals, answer approved pre-visit questions, and keep incomplete requests moving to a human scheduler.",
  mobileHeadline: "Turn missed orthopedic inquiries into scheduled next steps.",
  outcomeFocus: "Faster referral response. Fewer unworked inquiries.",
  splashFeature: "Missed-call consultation recovery",
  quickStartPitch: "Start with one visible access leak—often missed calls or referral follow-up. Prove it, then connect scheduling and reporting.",
  scaleLabel: "Practice size",
  scaleOptions: [
    "1–3 providers",
    "4–7 providers",
    "8–15 providers",
    "16–30 providers",
    "31+ providers",
    "Multi-location group",
  ],
  softwareLabel: "Current EHR, practice management, scheduling, CRM, or phone tools",
  softwarePlaceholder: "EHR/PM, scheduling platform, CRM, call system, referral portal, spreadsheets…",
  bottlenecks: [
    "Missed or abandoned calls",
    "Slow referral response",
    "Scheduling backlog",
    "Unworked web or marketing leads",
    "Patient drop-off before scheduling",
    "Too many repetitive pre-visit questions",
    "No clear follow-up ownership",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human scheduling stays in control",
    "Privacy-aware scope",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Access and scheduling rules first",
      detail: "Visit types, approved questions, provider and location rules, exceptions, and human handoffs are mapped before implementation.",
    },
    {
      title: "Your team controls every clinical decision",
      detail: "Automation captures and routes administrative requests; staff handle symptoms, clinical urgency, visit appropriateness, and care decisions.",
    },
    {
      title: "A human path stays obvious",
      detail: "Callers and patients can reach staff for complex scheduling, sensitive questions, exceptions, or anything outside the approved workflow.",
    },
    {
      title: "Integrations scoped before build",
      detail: "EHR, practice-management, scheduling, CRM, telephony, referral, and messaging access are reviewed before a connection is promised.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, alerts, opt-outs, ownership, and escalation behavior are checked before launch.",
    },
    {
      title: "Usage and handoff stay clear",
      detail: "Provider usage is separated from the build price, and your team receives the workflow logic and practical ownership points.",
    },
  ],
  complianceNote:
    "Automation supports administrative patient access, referral intake, scheduling requests, and follow-up only. It does not assess symptoms, determine urgency, perform clinical triage, recommend a provider, diagnosis, procedure, or treatment, give medical advice, or replace staff judgment. Privacy, security, consent, recording, messaging, and integration requirements are confirmed during scope review; no compliance or booking guarantee is implied.",
  consentCopy:
    "By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for orthopedic practices. Tell me where referrals, calls, or consultation requests get stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "Referrals wait too long for follow-up",
    "We miss too many patient calls",
    "Marketing leads are not scheduling",
  ],
  metaTitle: "Elevate — AI Workflows for Orthopedic Practices",
  metaDescription:
    "Explore practical AI referral-intake, missed-call recovery, consultation-request, scheduling, follow-up, and reporting workflows for orthopedic practices.",
  theme: {
    accent: "#3f8cff",
    accentStrong: "#2867df",
    accentSoft: "rgba(63, 140, 255, 0.16)",
    secondary: "#51d2b6",
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Access Quick Start",
    setup: 995,
    timeline: "3–5 business days",
    summary: "One focused access, response, or follow-up workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Workflow",
    setup: 2295,
    timeline: "5–8 business days",
    summary: "A tailored workflow connecting the patient-access tools your practice already uses.",
  },
  {
    id: "growth-system",
    name: "Referral Growth System",
    setup: 4295,
    timeline: "1–2 weeks",
    summary: "Multi-step intake, routing, scheduling follow-up, and staff handoffs.",
  },
  {
    id: "ai-calling",
    name: "AI Call Coverage",
    setup: 6495,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound administrative call workflows with staff escalation.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-System Build",
    setup: 10995,
    timeline: "2–4 weeks",
    summary: "Complex multi-provider routing, data synchronization, and access reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "missed-call-consultation-recovery",
    name: "Missed-Call Consultation Recovery",
    description: "Texts missed callers promptly, captures the requested service or reason for contact, and routes a clear next step to staff.",
    categories: ["Popular", "Patient Access", "Calls & Intake", "Follow-Up"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business phone and approved SMS workflow",
    tier: "quick-start",
  },
  {
    id: "orthopedic-ai-receptionist",
    name: "Orthopedic AI Receptionist",
    description: "Handles approved administrative questions, captures appointment requests, and escalates clinical or complex scheduling questions to staff.",
    categories: ["Popular", "Patient Access", "Calls & Intake", "Scheduling"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call flow, FAQs, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "referral-intake-capture",
    name: "Referral Intake Capture",
    description: "Collects the non-clinical referral details your team requires and routes incomplete or exception items for staff review.",
    categories: ["Popular", "Referrals", "Calls & Intake", "Operations"],
    icon: "clipboard-list",
    badge: "High impact",
    requirement: "Approved intake fields and routing rules",
    tier: "connected-workflow",
  },
  {
    id: "referral-response-and-handoff",
    name: "Referral Response & Handoff",
    description: "Acknowledges new referrals, assigns the correct owner, and keeps each administrative request visible until the next step is clear.",
    categories: ["Popular", "Patient Access", "Referrals", "Follow-Up"],
    icon: "workflow",
    badge: "High impact",
    requirement: "Referral sources, ownership, and approved response copy",
    tier: "growth-system",
  },
  {
    id: "web-inquiry-speed-to-response",
    name: "Web Inquiry Speed-to-Response",
    description: "Responds to new web and marketing inquiries, captures scheduling preferences, and routes a structured brief to the access team.",
    categories: ["Popular", "Patient Access", "Calls & Intake", "Follow-Up"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved messaging",
    tier: "quick-start",
  },
  {
    id: "consultation-request-follow-up",
    name: "Consultation Request Follow-Up",
    description: "Follows up when a referral, form, or call request has not yet reached a scheduled appointment or staff-owned next step.",
    categories: ["Popular", "Patient Access", "Referrals", "Scheduling", "Follow-Up"],
    icon: "messages-square",
    requirement: "Request-status trigger and approved messaging",
    tier: "connected-workflow",
  },
  {
    id: "approved-request-routing",
    name: "Approved Request Routing",
    description: "Routes self-selected visit reasons by provider, location, service line, hours, and practice-defined administrative rules.",
    categories: ["Patient Access", "Referrals", "Scheduling", "Operations"],
    icon: "route",
    badge: "Admin saver",
    requirement: "Practice-approved routing matrix and exception path",
    tier: "growth-system",
  },
  {
    id: "pre-visit-faq-assistant",
    name: "Pre-Visit FAQ Assistant",
    description: "Answers only approved questions about locations, paperwork, arrival, records, and policies, with a clear route back to staff.",
    categories: ["Patient Access", "Calls & Intake"],
    icon: "circle-help",
    requirement: "Approved patient information and human handoff",
    tier: "connected-workflow",
  },
  {
    id: "unconfirmed-consultation-recovery",
    name: "Unconfirmed Consultation Recovery",
    description: "Runs approved confirmation and rescheduling prompts so uncertain appointments reach the scheduling team sooner.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "calendar-check",
    requirement: "Scheduling trigger and messaging consent",
    tier: "connected-workflow",
  },
  {
    id: "open-slot-waitlist-outreach",
    name: "Open-Slot Waitlist Outreach",
    description: "Flags eligible openings and contacts practice-approved waitlist candidates according to provider and location rules.",
    categories: ["Scheduling", "Follow-Up", "Operations"],
    icon: "calendar-clock",
    requirement: "Calendar access and approved eligibility rules",
    tier: "growth-system",
  },
  {
    id: "incomplete-intake-follow-up",
    name: "Incomplete Intake Follow-Up",
    description: "Reminds patients about missing administrative forms or records and routes unanswered items to the correct staff owner.",
    categories: ["Patient Access", "Referrals", "Follow-Up"],
    icon: "refresh",
    requirement: "Approved checklist, timing, and message copy",
    tier: "connected-workflow",
  },
  {
    id: "referral-source-status-updates",
    name: "Referral Source Status Updates",
    description: "Sends approved administrative status events and routes unanswered referral questions to the right team member.",
    categories: ["Referrals", "Follow-Up", "Operations"],
    icon: "file-text",
    requirement: "Approved status events and recipient rules",
    tier: "growth-system",
  },
  {
    id: "access-exception-alerts",
    name: "Patient Access Exception Alerts",
    description: "Notifies the right owner when an inquiry falls outside approved automation, lacks ownership, or remains unresolved.",
    categories: ["Patient Access", "Operations"],
    icon: "bell",
    tier: "connected-workflow",
  },
  {
    id: "inquiry-outcome-dashboard",
    name: "Inquiry Outcome Dashboard",
    description: "Summarizes referral and inquiry sources, response times, staff handoffs, scheduled next steps, and unresolved items.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Inquiry, scheduling, and communication data access",
    tier: "advanced",
  },
  {
    id: "multi-system-access-orchestration",
    name: "Multi-System Access Orchestration",
    description: "Coordinates approved intake, routing, follow-up, status updates, and reporting across practice systems and locations.",
    categories: ["Patient Access", "Referrals", "Scheduling", "Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "System, security, and workflow review",
    tier: "advanced",
  },
  {
    id: "orthopedic-access-leak-review",
    name: "Orthopedic Access Leak Review",
    description: "Maps where calls, referrals, web inquiries, and scheduling handoffs stall so the first workflow targets a visible operational gap.",
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
