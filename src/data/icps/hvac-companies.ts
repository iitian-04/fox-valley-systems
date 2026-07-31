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
  slug: "hvac-companies",
  industry: "HVAC Companies",
  audienceLabel: "HVAC company",
  audiencePlural: "HVAC companies",
  segment: "Residential and light-commercial HVAC service companies",
  persona: "Owner, general manager, service manager, or dispatcher",
  eyebrow: "booking and follow-up workflows",
  headline: "Book more service calls and replacement estimates—even after hours.",
  subheadline:
    "Respond to missed calls and web leads, capture job-ready details, book within approved rules, and follow open estimates before the homeowner moves on.",
  mobileHeadline: "Turn more inbound HVAC demand into booked next steps.",
  outcomeFocus: "Faster response. Cleaner dispatch handoffs. Consistent follow-up.",
  splashFeature: "Missed-call job rescue",
  quickStartPitch: "Recover one obvious lead leak first. Keep it if it works, then connect the next revenue bottleneck.",
  scaleLabel: "Service operation size",
  scaleOptions: ["Owner-operator", "2–5 technicians", "6–15 technicians", "16–30 technicians", "31–75 technicians", "76+ technicians or multiple branches"],
  softwareLabel: "Current field-service, CRM, call, and marketing tools",
  softwarePlaceholder: "ServiceTitan, Housecall Pro, Jobber, CRM, call tracking, spreadsheets…",
  bottlenecks: [
    "Missed calls turn into lost jobs",
    "After-hours inquiries wait until morning",
    "Web leads receive a slow response",
    "Dispatch spends too long collecting basics",
    "Replacement estimates go cold",
    "Maintenance reminders are inconsistent",
    "Seasonal demand overwhelms the office",
    "We cannot see lead source and disposition clearly",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human handoff designed in",
    "Approved booking rules",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Your booking rules come first",
      detail: "Service area, hours, job types, urgency language, capacity, fees, and transfer conditions are documented before launch.",
    },
    {
      title: "No remote diagnosis or firm quote",
      detail: "Automation captures the customer's stated issue and approved details; technical diagnosis and variable pricing stay with your team.",
    },
    {
      title: "Dispatch remains in control",
      detail: "The workflow can request or book approved slots, while exceptions, unsafe situations, and constrained capacity route to dispatch.",
    },
    {
      title: "Field-service access is scoped",
      detail: "Customer matching, job creation, schedule availability, and estimate status depend on supported access and documented ownership.",
    },
    {
      title: "Usage costs stay visible",
      detail: "Calling, messaging, AI, and software-provider usage is separated from the one-time workflow price.",
    },
    {
      title: "Launch includes real-path testing",
      detail: "Office hours, after-hours, duplicate leads, transfers, failures, opt-outs, and staff notifications are checked before launch.",
    },
  ],
  complianceNote:
    "Automation handles approved intake, booking, routing, and follow-up. It does not diagnose HVAC equipment, give unsafe troubleshooting instructions, promise response time, quote variable repairs, or guarantee savings or booked revenue. Calling, recording, messaging, consent, privacy, opt-out, and local business requirements are confirmed during scope review.",
  consentCopy:
    "By submitting, you agree that Fox Valley Systems may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit customer information.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for HVAC companies. Tell me where calls, web leads, dispatch handoffs, or estimates leak, and I’ll help identify the fastest practical workflow to fix first.",
  chatSuggestions: [
    "We miss too many after-hours calls",
    "Replacement estimates go cold",
    "Dispatch is overloaded",
  ],
  metaTitle: "Fox Valley Systems — Workflows for HVAC Companies",
  metaDescription:
    "Explore practical missed-call, web-lead, booking, dispatch, estimate follow-up, maintenance, and operations workflows for HVAC companies.",
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
    name: "Job Capture Quick Start",
    setup: 795,
    timeline: "3–5 business days",
    summary: "One focused missed-call, web-lead, or customer follow-up workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Service Workflow",
    setup: 1695,
    timeline: "5–8 business days",
    summary: "A tailored booking, dispatch-handoff, reminder, or intake workflow.",
  },
  {
    id: "growth-system",
    name: "HVAC Growth System",
    setup: 3295,
    timeline: "1–2 weeks",
    summary: "Multi-step estimate rescue, seasonal outreach, or capacity-aware routing.",
  },
  {
    id: "ai-calling",
    name: "24/7 Call Answering",
    setup: 4995,
    timeline: "2–3 weeks",
    summary: "Approved inbound or outbound call flows with team transfer and job-detail capture.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "HVAC Operations Build",
    setup: 8495,
    timeline: "3–5 weeks",
    summary: "Field-service coordination, capacity routing, attribution, and revenue-leak reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "missed-call-job-rescue",
    name: "Missed-Call Job Rescue",
    description: "Responds to missed callers, captures service need, ZIP code, timing, and contact details, then alerts the office.",
    categories: ["Popular", "Book More Jobs", "Lead Capture"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business calling and approved messaging",
    tier: "quick-start",
  },
  {
    id: "instant-web-lead-response",
    name: "Instant Web-Lead Response",
    description: "Acknowledges form and campaign leads, collects the missing job details, and routes booking-ready replies promptly.",
    categories: ["Popular", "Book More Jobs", "Lead Capture"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved reply flow",
    tier: "quick-start",
  },
  {
    id: "service-estimate-request-intake",
    name: "Service & Estimate Request Intake",
    description: "Separates repair, maintenance, and replacement requests and gives dispatch the approved information needed for the next step.",
    categories: ["Popular", "Lead Capture", "Scheduling & Dispatch", "Estimates"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Job types, service area, and required fields",
    tier: "connected-workflow",
  },
  {
    id: "approved-service-booking",
    name: "Approved Service Booking",
    description: "Books or requests time slots only for approved job types, ZIP codes, hours, and capacity conditions.",
    categories: ["Popular", "Book More Jobs", "Scheduling & Dispatch"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Schedule access and documented booking rules",
    tier: "connected-workflow",
  },
  {
    id: "dispatch-handoff-summary",
    name: "Dispatch Handoff Summary",
    description: "Turns call, form, and message details into a concise job summary with customer need, location, timing, and next owner.",
    categories: ["Lead Capture", "Scheduling & Dispatch", "Operations"],
    icon: "file-text",
    requirement: "Approved intake fields and team alert channel",
    tier: "connected-workflow",
  },
  {
    id: "hvac-ai-receptionist",
    name: "24/7 Call Answering",
    description: "Answers approved calls, captures job details, books within defined rules, and transfers technical or uncertain conversations.",
    categories: ["Popular", "Book More Jobs", "AI Calling", "Scheduling & Dispatch"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call flow, booking rules, and live transfer path",
    tier: "ai-calling",
  },
  {
    id: "seasonal-call-overflow",
    name: "Seasonal Call-Overflow Coverage",
    description: "Handles approved intake paths during demand spikes and keeps unhandled calls visible to the office.",
    categories: ["AI Calling", "Lead Capture", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Overflow trigger and escalation ownership",
    tier: "ai-calling",
  },
  {
    id: "zip-capacity-router",
    name: "ZIP, Job-Type & Capacity Router",
    description: "Routes requests by geography, service type, hours, branch, technician capacity, and approved exceptions.",
    categories: ["Scheduling & Dispatch", "Operations"],
    icon: "route",
    requirement: "Service-area and capacity rules",
    tier: "growth-system",
  },
  {
    id: "replacement-estimate-follow-up",
    name: "Replacement Estimate Follow-Up",
    description: "Runs an approved follow-up sequence for open replacement estimates and alerts the assigned person when the homeowner responds.",
    categories: ["Popular", "Book More Jobs", "Estimates"],
    icon: "workflow",
    badge: "High impact",
    requirement: "Estimate status and owner data",
    tier: "growth-system",
  },
  {
    id: "open-repair-estimate-rescue",
    name: "Open Repair Estimate Rescue",
    description: "Follows up on eligible unsold repair estimates using a measured cadence with reply and opt-out handling.",
    categories: ["Book More Jobs", "Estimates"],
    icon: "refresh",
    requirement: "Eligible estimate list and outreach rules",
    tier: "growth-system",
  },
  {
    id: "maintenance-reminder",
    name: "Maintenance Reminder Workflow",
    description: "Sends seasonal maintenance reminders to an approved customer list and routes booking interest back to the office.",
    categories: ["Scheduling & Dispatch", "Retention & Marketing"],
    icon: "calendar-clock",
    requirement: "Approved customer list and messaging rules",
    tier: "connected-workflow",
  },
  {
    id: "membership-renewal-follow-up",
    name: "Membership Renewal Follow-Up",
    description: "Notifies eligible customers about an upcoming agreement renewal and creates a team handoff for replies or exceptions.",
    categories: ["Book More Jobs", "Retention & Marketing"],
    icon: "bell",
    requirement: "Membership status and approved renewal content",
    tier: "growth-system",
  },
  {
    id: "weather-triggered-campaign",
    name: "Weather-Triggered Outreach",
    description: "Prepares approved, audience-specific campaigns when defined weather conditions create a relevant service need.",
    categories: ["Book More Jobs", "Retention & Marketing"],
    icon: "zap",
    requirement: "Approved audiences, triggers, and messages",
    tier: "growth-system",
  },
  {
    id: "lapsed-customer-reactivation",
    name: "Lapsed Customer Reactivation",
    description: "Segments eligible past customers and runs an approved win-back sequence that stops on reply or opt-out.",
    categories: ["Book More Jobs", "Retention & Marketing"],
    icon: "users-round",
    requirement: "Approved customer audience and consent review",
    tier: "growth-system",
  },
  {
    id: "field-service-sync",
    name: "Field-Service & CRM Orchestration",
    description: "Coordinates approved lead, customer, job, estimate, and follow-up records across supported systems.",
    categories: ["Scheduling & Dispatch", "Operations"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported system access and data mapping",
    tier: "advanced",
  },
  {
    id: "capacity-revenue-leak-dashboard",
    name: "Capacity & Revenue-Leak Dashboard",
    description: "Shows missed demand, source, disposition, booking status, estimate follow-up, unresolved handoffs, and branch-level patterns.",
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
