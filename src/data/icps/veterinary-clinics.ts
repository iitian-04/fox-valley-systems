export const categoryTabs = [
  "Popular",
  "Client Access",
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
  slug: "veterinary-clinics",
  industry: "Veterinary Clinics",
  audienceLabel: "veterinary clinic",
  audiencePlural: "veterinary clinics",
  segment: "Independent and multi-doctor veterinary clinics",
  persona: "Practice manager, hospital administrator, or owner-veterinarian",
  eyebrow: "client-access workflows",
  headline: "Take routine calls off your team while sensitive cases still reach a human.",
  subheadline:
    "Capture appointment requests, answer approved administrative questions, and route client messages safely—without asking AI to diagnose or clinically triage a pet.",
  mobileHeadline: "Reduce routine call pressure without compromising client care.",
  outcomeFocus: "More requests captured. Fewer avoidable interruptions.",
  splashFeature: "Call-overflow appointment request capture",
  quickStartPitch: "Start with one routine request type. Prove the handoff, then expand only where it helps the team.",
  scaleLabel: "Veterinary locations and care teams",
  scaleOptions: ["1 location", "2 locations", "3–4 locations", "5–7 locations", "8+ locations", "Specialty or emergency hospital"],
  softwareLabel: "Current PIMS, scheduling, messaging, or call tools",
  softwarePlaceholder: "PIMS, online booking, call system, texting platform, shared inbox…",
  bottlenecks: [
    "Routine calls constantly interrupt the team",
    "Missed calls do not receive a prompt response",
    "After-hours messages pile up",
    "Appointment requests are incomplete",
    "New-client intake takes too much time",
    "Reminders and rescheduling create phone tag",
    "Refill and records requests reach the wrong person",
    "We cannot see why calls remain unresolved",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human escalation designed in",
    "Clinical boundaries built in",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Routine versus clinical is defined first",
      detail: "Approved administrative topics, staff-only requests, uncertainty rules, and immediate handoffs are mapped before implementation.",
    },
    {
      title: "Your care team keeps clinical control",
      detail: "Automation can capture and route a request; it does not diagnose, recommend treatment, or decide whether a pet has an emergency.",
    },
    {
      title: "PIMS access is scoped before build",
      detail: "Write-back, appointment availability, client matching, and message ownership depend on supported access and practice approval.",
    },
    {
      title: "Escalation paths are tested",
      detail: "Urgent language, uncertain intent, disconnected calls, opt-outs, and staff alerts are tested before launch.",
    },
    {
      title: "Usage costs stay visible",
      detail: "Any calling, messaging, AI, or software-provider usage is separated from the one-time implementation price.",
    },
    {
      title: "The team receives a clear handoff",
      detail: "Staff receive the approved scripts, routing logic, ownership rules, and practical guidance for changing the workflow.",
    },
  ],
  complianceNote:
    "These workflows support administrative communication only. They do not diagnose, recommend treatment, provide medication guidance, or determine whether a case is an emergency. Clinical, urgent, or uncertain requests follow practice-approved instructions and transfer to a person. Privacy, consent, recording, messaging, and system-access requirements are confirmed during scope review.",
  consentCopy:
    "By submitting, you agree that Fox Valley Systems may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit client or patient information.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for veterinary clinics. Tell me which routine calls or client requests consume the most team time, and I’ll help identify a safe first workflow.",
  chatSuggestions: [
    "Routine calls overwhelm reception",
    "After-hours requests pile up",
    "Appointment requests lack details",
  ],
  metaTitle: "Fox Valley Systems — Workflows for Veterinary Clinics",
  metaDescription:
    "Explore practical call-overflow, appointment-request, client-intake, follow-up, and operations workflows for veterinary clinics.",
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
    name: "Client Access Quick Start",
    setup: 895,
    timeline: "3–5 business days",
    summary: "One focused call, request-capture, or follow-up workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Clinic Workflow",
    setup: 1995,
    timeline: "5–8 business days",
    summary: "A tailored intake, scheduling, or message-routing workflow around your current tools.",
  },
  {
    id: "growth-system",
    name: "Client Communication System",
    setup: 3695,
    timeline: "1–2 weeks",
    summary: "Multi-step reminders, routing, reactivation, or schedule-recovery with human handoffs.",
  },
  {
    id: "ai-calling",
    name: "Call Coverage",
    setup: 5495,
    timeline: "2–3 weeks",
    summary: "Approved inbound or outbound administrative call flows with staff escalation.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-System Clinic Build",
    setup: 9495,
    timeline: "3–5 weeks",
    summary: "Complex PIMS coordination, multi-location routing, and operational reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "missed-call-text-back",
    name: "Missed-Call Text-Back",
    description: "Acknowledges missed callers, captures the administrative reason for contact, and routes the request to the right queue.",
    categories: ["Popular", "Client Access", "Calls & Intake", "Follow-Up"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business calling and approved messaging flow",
    tier: "quick-start",
  },
  {
    id: "appointment-request-capture",
    name: "Appointment Request Capture",
    description: "Collects pet, service, preferred-time, and contact details for staff review without promising clinical suitability or availability.",
    categories: ["Popular", "Client Access", "Calls & Intake", "Scheduling"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Approved intake fields and booking rules",
    tier: "connected-workflow",
  },
  {
    id: "approved-client-faq-assistant",
    name: "Approved Client FAQ Assistant",
    description: "Answers approved questions about hours, location, policies, visit preparation, and administrative next steps.",
    categories: ["Popular", "Client Access"],
    icon: "circle-help",
    badge: "Quick win",
    requirement: "Practice-approved information and fallback rules",
    tier: "quick-start",
  },
  {
    id: "new-client-intake",
    name: "New-Client Intake Workflow",
    description: "Collects the non-clinical information and documents your team wants before confirming a first appointment.",
    categories: ["Popular", "Calls & Intake", "Operations"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Approved fields, document flow, and ownership",
    tier: "connected-workflow",
  },
  {
    id: "reminder-reschedule",
    name: "Reminder & Reschedule Workflow",
    description: "Sends approved reminders, captures confirmations or reschedule requests, and alerts staff when a person is needed.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "calendar-clock",
    requirement: "Schedule trigger and consent-aware messaging",
    tier: "connected-workflow",
  },
  {
    id: "call-overflow-handler",
    name: "Call-Overflow Handler",
    description: "Handles approved administrative call paths during busy periods and transfers clinical, urgent, or uncertain requests.",
    categories: ["Popular", "Client Access", "Calls & Intake"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call routing, scripts, and live escalation path",
    tier: "ai-calling",
  },
  {
    id: "after-hours-message-escalation",
    name: "After-Hours Message & Escalation",
    description: "Captures administrative messages after hours and follows practice-approved instructions for urgent or uncertain language.",
    categories: ["Client Access", "Calls & Intake", "Operations"],
    icon: "bell",
    badge: "AI calling",
    requirement: "After-hours policy and escalation contacts",
    tier: "ai-calling",
  },
  {
    id: "refill-request-router",
    name: "Refill Request Router",
    description: "Collects a refill request for staff review and sends it to the defined queue without giving medication guidance.",
    categories: ["Client Access", "Calls & Intake", "Operations"],
    icon: "route",
    requirement: "Approved request fields and staff ownership",
    tier: "connected-workflow",
  },
  {
    id: "records-request-workflow",
    name: "Records Request Workflow",
    description: "Captures incoming records requests, checks for required administrative details, and tracks the handoff.",
    categories: ["Calls & Intake", "Follow-Up", "Operations"],
    icon: "file-text",
    requirement: "Records-release process and approved recipients",
    tier: "connected-workflow",
  },
  {
    id: "missed-appointment-recovery",
    name: "Missed-Appointment Recovery",
    description: "Follows up after a missed visit with an approved rescheduling path and staff escalation when needed.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "refresh",
    tier: "quick-start",
  },
  {
    id: "waitlist-opening-filler",
    name: "Waitlist & Opening Filler",
    description: "Contacts eligible clients when an approved opening appears and stops outreach once the slot or list is resolved.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Eligible waitlist and schedule access",
    tier: "growth-system",
  },
  {
    id: "preventive-care-reminders",
    name: "Preventive-Care Reminder Sequence",
    description: "Uses practice-approved due lists to send reminders and route appointment requests back to the team.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "messages-square",
    requirement: "Approved due list and messaging rules",
    tier: "growth-system",
  },
  {
    id: "inactive-client-reactivation",
    name: "Inactive Client Reactivation",
    description: "Segments an approved inactive-client list and runs a measured outreach sequence with reply and opt-out handling.",
    categories: ["Follow-Up", "Operations"],
    icon: "users-round",
    requirement: "Approved audience and consent review",
    tier: "growth-system",
  },
  {
    id: "pims-admin-sync",
    name: "PIMS Administrative Sync",
    description: "Creates or updates approved administrative records from calls, forms, and messages when supported access is available.",
    categories: ["Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported PIMS access and security review",
    tier: "advanced",
  },
  {
    id: "multi-doctor-location-router",
    name: "Multi-Doctor & Location Router",
    description: "Routes requests by service, location, hours, care-team ownership, and practice-approved exceptions.",
    categories: ["Client Access", "Scheduling", "Operations", "Advanced"],
    icon: "route",
    badge: "Advanced",
    requirement: "Documented routing and ownership rules",
    tier: "advanced",
  },
  {
    id: "client-access-dashboard",
    name: "Client Access & Call Outcome Dashboard",
    description: "Summarizes request reasons, missed calls, handoffs, unresolved items, response times, and workflow outcomes.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Calling and request-data access",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
