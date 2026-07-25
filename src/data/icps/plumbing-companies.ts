export const categoryTabs = [
  "Popular",
  "Book More Jobs",
  "Lead Capture",
  "AI Calling",
  "Scheduling & Dispatch",
  "Estimates",
  "Operations",
  "Retention & Marketing",
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
  slug: "plumbing-companies",
  industry: "Plumbing Companies",
  audienceLabel: "plumbing company",
  audiencePlural: "plumbing companies",
  segment: "Residential and light-commercial plumbing service companies",
  persona: "Owner, operations manager, service manager, or dispatcher",
  eyebrow: "AI booking and dispatch workflows",
  headline: "Answer urgent plumbing leads now—not tomorrow morning.",
  subheadline:
    "Capture the problem, location, timing, and contact details, then book approved calls or route a clean request to dispatch before the customer moves on.",
  mobileHeadline: "Turn urgent plumbing inquiries into dispatch-ready next steps.",
  outcomeFocus: "More demand captured. Less dispatch back-and-forth.",
  splashFeature: "After-hours missed-call rescue",
  quickStartPitch: "Start with the next missed job. Prove the intake and handoff, then expand into estimates and dispatch.",
  scaleLabel: "Service operation size",
  scaleOptions: ["Owner-operator", "2–5 technicians", "6–15 technicians", "16–30 technicians", "31–75 technicians", "76+ technicians or multiple branches"],
  softwareLabel: "Current field-service, CRM, call, and marketing tools",
  softwarePlaceholder: "ServiceTitan, Housecall Pro, Jobber, CRM, call tracking, spreadsheets…",
  bottlenecks: [
    "Urgent calls go unanswered after hours",
    "Missed calls turn into lost jobs",
    "Web leads receive a slow response",
    "Dispatch repeatedly asks for basic details",
    "Service area and capacity routing is manual",
    "Open estimates do not receive consistent follow-up",
    "Commercial requests reach the wrong queue",
    "We cannot compare lead sources and outcomes",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human handoff designed in",
    "Approved dispatch rules",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Dispatch rules are mapped first",
      detail: "Service area, hours, job types, stated urgency, capacity, transfer paths, and booking limits are documented before launch.",
    },
    {
      title: "The workflow collects, not diagnoses",
      detail: "Automation records what the customer reports; it does not diagnose plumbing conditions, give unsafe instructions, or promise a repair price.",
    },
    {
      title: "Urgent language has a clear path",
      detail: "Practice-approved emergency notices, live transfers, staff alerts, and fallback behavior are tested for office and after-hours use.",
    },
    {
      title: "Field-service access is scoped",
      detail: "Customer matching, job creation, capacity, estimate status, and dispatch updates depend on supported access and ownership rules.",
    },
    {
      title: "Usage costs stay visible",
      detail: "Calling, messaging, AI, and software-provider usage is separated from the one-time workflow price.",
    },
    {
      title: "Failures and edge cases are tested",
      detail: "Duplicate leads, disconnected calls, unsupported ZIP codes, opt-outs, transfer failures, and staff alerts are checked before launch.",
    },
  ],
  complianceNote:
    "Automation supports approved intake, booking, routing, and follow-up only. It does not diagnose a plumbing problem, provide unsafe remediation instructions, promise emergency response, give a firm variable quote, or guarantee booked revenue. Calling, recording, messaging, consent, privacy, opt-out, and local business requirements are confirmed during scope review.",
  consentCopy:
    "By submitting, you agree that Elevate may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit customer information.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for plumbing companies. Tell me where calls, web leads, dispatch handoffs, or estimates get stuck, and I’ll help identify the most useful first workflow.",
  chatSuggestions: [
    "After-hours calls go unanswered",
    "Dispatch needs cleaner intake",
    "Open estimates go cold",
  ],
  metaTitle: "Elevate — AI Workflows for Plumbing Companies",
  metaDescription:
    "Explore practical AI missed-call, urgent-intake, booking, dispatch, estimate follow-up, reactivation, and operations workflows for plumbing companies.",
  theme: {
    accent: "#1687d9",
    accentStrong: "#0b65a8",
    accentSoft: "rgba(22, 135, 217, 0.16)",
    secondary: "#41c7a8",
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Job Capture Quick Start",
    setup: 795,
    timeline: "3–5 business days",
    summary: "One focused missed-call, web-lead, or follow-up workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Service Workflow",
    setup: 1695,
    timeline: "5–8 business days",
    summary: "A tailored request-intake, booking, dispatch-handoff, or reminder workflow.",
  },
  {
    id: "growth-system",
    name: "Plumbing Growth System",
    setup: 3295,
    timeline: "1–2 weeks",
    summary: "Multi-step estimate follow-up, reactivation, or capacity-aware routing.",
  },
  {
    id: "ai-calling",
    name: "24/7 Plumbing AI Receptionist",
    setup: 4995,
    timeline: "2–3 weeks",
    summary: "Approved call flows with structured intake, dispatch transfer, and fallback behavior.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Plumbing Operations Build",
    setup: 8495,
    timeline: "3–5 weeks",
    summary: "Field-service coordination, geography routing, attribution, and pipeline reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "after-hours-missed-call-rescue",
    name: "After-Hours Missed-Call Rescue",
    description: "Responds to missed callers, captures the stated issue, location, timing, and contact details, then alerts the defined owner.",
    categories: ["Popular", "Book More Jobs", "Lead Capture"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business calling and approved messaging",
    tier: "quick-start",
  },
  {
    id: "instant-web-lead-response",
    name: "Instant Web-Lead Response",
    description: "Acknowledges form and campaign leads, collects missing service details, and routes booking-ready replies quickly.",
    categories: ["Popular", "Book More Jobs", "Lead Capture"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved reply flow",
    tier: "quick-start",
  },
  {
    id: "service-request-intake",
    name: "Structured Service Request Intake",
    description: "Collects the customer-reported issue, property type, ZIP code, access notes, timing, and contact details for dispatch.",
    categories: ["Popular", "Lead Capture", "Scheduling & Dispatch"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Approved intake fields and service rules",
    tier: "connected-workflow",
  },
  {
    id: "booking-dispatch-handoff",
    name: "Booking & Dispatch Handoff",
    description: "Books approved requests or creates a clear dispatch task with scope, location, stated urgency, and next owner.",
    categories: ["Popular", "Book More Jobs", "Scheduling & Dispatch"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Schedule access and documented booking rules",
    tier: "connected-workflow",
  },
  {
    id: "urgent-request-escalation",
    name: "Urgent Request Escalation",
    description: "Detects practice-defined urgent language, presents approved notices, and attempts the correct live transfer or staff alert.",
    categories: ["Lead Capture", "AI Calling", "Scheduling & Dispatch", "Operations"],
    icon: "bell",
    requirement: "Urgency definitions, notices, and escalation contacts",
    tier: "connected-workflow",
  },
  {
    id: "plumbing-ai-receptionist",
    name: "24/7 Plumbing AI Receptionist",
    description: "Answers approved calls, captures dispatch-ready details, books within defined rules, and transfers uncertain conversations.",
    categories: ["Popular", "Book More Jobs", "AI Calling", "Scheduling & Dispatch"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call flow, booking rules, and live transfer path",
    tier: "ai-calling",
  },
  {
    id: "call-overflow-handler",
    name: "Busy-Line Call-Overflow Handler",
    description: "Handles approved intake during call spikes and keeps every unresolved request visible to the office.",
    categories: ["AI Calling", "Lead Capture", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Overflow trigger and handoff ownership",
    tier: "ai-calling",
  },
  {
    id: "zip-capacity-router",
    name: "ZIP, Capacity & Job-Type Router",
    description: "Routes requests by service area, job type, hours, branch, team capacity, and approved exceptions.",
    categories: ["Scheduling & Dispatch", "Operations"],
    icon: "route",
    requirement: "Service-area, capacity, and ownership rules",
    tier: "growth-system",
  },
  {
    id: "open-estimate-follow-up",
    name: "Open Estimate Follow-Up",
    description: "Runs an approved cadence for eligible unsold estimates and alerts the assigned team member when a customer responds.",
    categories: ["Popular", "Book More Jobs", "Estimates"],
    icon: "workflow",
    badge: "High impact",
    requirement: "Estimate status and owner data",
    tier: "growth-system",
  },
  {
    id: "unscheduled-quote-recovery",
    name: "Unscheduled Quote Recovery",
    description: "Re-engages prospects who requested pricing or an estimate but never reached a booked next step.",
    categories: ["Book More Jobs", "Estimates"],
    icon: "refresh",
    requirement: "Eligible lead stage and approved outreach rules",
    tier: "growth-system",
  },
  {
    id: "job-complete-follow-up",
    name: "Job-Complete Customer Follow-Up",
    description: "Sends an approved completion message, routes service concerns privately, and requests feedback at the defined moment.",
    categories: ["Operations", "Retention & Marketing"],
    icon: "messages-square",
    requirement: "Completed-job trigger and approved messaging",
    tier: "connected-workflow",
  },
  {
    id: "maintenance-reminder",
    name: "Maintenance & Replacement Reminder",
    description: "Uses approved customer and equipment lists to send timely reminders and route service interest back to the office.",
    categories: ["Book More Jobs", "Retention & Marketing"],
    icon: "calendar-clock",
    requirement: "Approved audience and reminder rules",
    tier: "growth-system",
  },
  {
    id: "lapsed-customer-reactivation",
    name: "Lapsed Customer Reactivation",
    description: "Segments eligible past customers and runs a measured win-back sequence with reply and opt-out handling.",
    categories: ["Book More Jobs", "Retention & Marketing"],
    icon: "users-round",
    requirement: "Approved audience and consent review",
    tier: "growth-system",
  },
  {
    id: "commercial-request-router",
    name: "Commercial Service Request Router",
    description: "Separates commercial requests, captures account and site details, and sends the handoff to the correct estimator or service team.",
    categories: ["Lead Capture", "Scheduling & Dispatch", "Operations"],
    icon: "route",
    requirement: "Commercial intake and ownership rules",
    tier: "connected-workflow",
  },
  {
    id: "field-service-orchestration",
    name: "Field-Service & CRM Orchestration",
    description: "Coordinates approved lead, customer, job, estimate, and follow-up records across supported systems.",
    categories: ["Scheduling & Dispatch", "Operations"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported system access and data mapping",
    tier: "advanced",
  },
  {
    id: "lead-dispatch-dashboard",
    name: "Lead, Dispatch & Estimate Dashboard",
    description: "Shows source, stated need, disposition, booking status, estimate follow-up, unresolved handoffs, and branch-level patterns.",
    categories: ["Estimates", "Operations"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Call, lead, booking, and estimate data access",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
