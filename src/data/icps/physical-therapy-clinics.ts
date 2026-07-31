export const categoryTabs = [
  "Popular",
  "Referral Access",
  "Calls & Intake",
  "Evaluations",
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
  slug: "physical-therapy-clinics",
  industry: "Physical Therapy Clinics",
  audienceLabel: "physical therapy clinic",
  audiencePlural: "physical therapy clinics",
  segment: "Independent and multi-clinic physical therapy practices",
  persona: "Owner, clinic administrator, or operations director",
  eyebrow: "referral-to-evaluation workflows",
  headline: "Turn more referrals into completed evaluations—not unreturned calls.",
  subheadline:
    "Acknowledge referrals quickly, collect approved intake details, keep evaluation appointments moving, and show your team where prospective patients stall.",
  mobileHeadline: "Move more referrals toward a completed first evaluation.",
  outcomeFocus: "Faster referral response. Fewer pre-visit drop-offs.",
  splashFeature: "Referral-to-evaluation follow-up",
  quickStartPitch: "Start at one measurable referral leak. Improve that handoff, then connect the next step.",
  scaleLabel: "Clinic footprint",
  scaleOptions: ["1 clinic", "2 clinics", "3–4 clinics", "5–7 clinics", "8–15 clinics", "16+ clinics"],
  softwareLabel: "Current EHR, scheduling, referral, CRM, or call tools",
  softwarePlaceholder: "EHR, scheduling platform, referral portal, CRM, call system…",
  bottlenecks: [
    "Referrals wait too long for first contact",
    "Missed calls are not recovered consistently",
    "People disappear before scheduling an evaluation",
    "Intake forms remain incomplete",
    "Evaluation no-shows waste capacity",
    "Rescheduling creates too much phone tag",
    "Past patients are never reactivated",
    "We cannot compare referral-source outcomes",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human escalation designed in",
    "Administrative scope only",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "The referral handoff is mapped first",
      detail: "Referral sources, required administrative fields, ownership, response targets, and unresolved-request paths are documented before build.",
    },
    {
      title: "Clinical decisions remain with clinicians",
      detail: "Automation supports access and communication; it does not assess symptoms, determine appropriateness, or recommend a care plan.",
    },
    {
      title: "EHR access is never assumed",
      detail: "A workflow can begin outside the EHR, while any write-back or schedule access is scoped only after access and security review.",
    },
    {
      title: "Attribution is practical",
      detail: "Referral source, touchpoints, status, and outcome definitions are aligned so the dashboard reflects how your team actually works.",
    },
    {
      title: "Usage costs stay separate",
      detail: "Calling, messaging, AI, and software-provider usage is shown separately from the one-time project price.",
    },
    {
      title: "Staff receive operating guidance",
      detail: "Your team receives the workflow logic, handoff ownership, exception paths, and guidance for safe day-to-day changes.",
    },
  ],
  complianceNote:
    "These workflows support administrative referral access, scheduling, and communication only. They do not assess symptoms, determine clinical urgency, establish medical necessity, verify benefits as a guarantee, or recommend treatment. Patient information, privacy, security, consent, messaging, and system-access requirements are confirmed during scope review; no compliance guarantee is implied.",
  consentCopy:
    "By submitting, you agree that Fox Valley Systems may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit patient information.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for physical therapy clinics. Tell me where referrals or prospective patients stall before the first evaluation, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "Referrals wait too long",
    "Evaluation no-shows hurt capacity",
    "We lack referral-source visibility",
  ],
  metaTitle: "Fox Valley Systems — Workflows for Physical Therapy Clinics",
  metaDescription:
    "Explore practical referral follow-up, evaluation booking, intake, attendance, reactivation, and operations workflows for physical therapy clinics.",
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
    name: "Referral Quick Start",
    setup: 895,
    timeline: "3–5 business days",
    summary: "One focused referral, missed-call, or evaluation follow-up workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Access Workflow",
    setup: 1895,
    timeline: "5–8 business days",
    summary: "A tailored intake, booking, or reminder workflow around current tools.",
  },
  {
    id: "growth-system",
    name: "Evaluation Growth System",
    setup: 3495,
    timeline: "1–2 weeks",
    summary: "Multi-step referral follow-up, attendance recovery, or reactivation.",
  },
  {
    id: "ai-calling",
    name: "Clinic Call Handler",
    setup: 5295,
    timeline: "2–3 weeks",
    summary: "Approved administrative call flows with staff escalation and outcome capture.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-Clinic Operations Build",
    setup: 8995,
    timeline: "3–5 weeks",
    summary: "Complex clinic routing, system coordination, and referral-source reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "referral-to-evaluation-follow-up",
    name: "Referral-to-Evaluation Follow-Up",
    description: "Acknowledges a new referral, captures approved administrative details, and follows up until there is a clear next step.",
    categories: ["Popular", "Referral Access", "Evaluations", "Follow-Up"],
    icon: "workflow",
    badge: "Best first step",
    requirement: "Referral trigger, contact rules, and staff owner",
    tier: "quick-start",
  },
  {
    id: "missed-call-recovery",
    name: "Missed-Call Recovery",
    description: "Responds to missed callers, captures whether they need an evaluation or an existing-patient handoff, and alerts staff.",
    categories: ["Popular", "Referral Access", "Calls & Intake", "Follow-Up"],
    icon: "phone-missed",
    badge: "Quick win",
    requirement: "Business calling and approved messaging",
    tier: "quick-start",
  },
  {
    id: "referral-acknowledgement",
    name: "Referral Acknowledgement Workflow",
    description: "Confirms receipt through an approved channel and creates a follow-up task when required information or ownership is missing.",
    categories: ["Popular", "Referral Access", "Calls & Intake"],
    icon: "file-text",
    requirement: "Referral sources and acknowledgement rules",
    tier: "quick-start",
  },
  {
    id: "evaluation-booking-request",
    name: "Evaluation Booking Request",
    description: "Collects preferred clinic, timing, contact, and approved visit details for booking or staff review.",
    categories: ["Popular", "Referral Access", "Evaluations"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Clinic and scheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "intake-completion-reminder",
    name: "Intake Completion Reminder",
    description: "Detects incomplete administrative intake and sends measured reminders before escalating the task to staff.",
    categories: ["Calls & Intake", "Evaluations", "Follow-Up"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Intake-status trigger and approved messages",
    tier: "connected-workflow",
  },
  {
    id: "benefits-document-checklist",
    name: "Benefits & Document Checklist",
    description: "Collects required administrative information and documents without representing eligibility, coverage, or payment as guaranteed.",
    categories: ["Calls & Intake", "Evaluations", "Operations"],
    icon: "file-text",
    requirement: "Approved checklist and staff review path",
    tier: "connected-workflow",
  },
  {
    id: "evaluation-reminder-reschedule",
    name: "Evaluation Reminder & Reschedule",
    description: "Confirms upcoming evaluations, captures reschedule requests, and routes exceptions before the slot is lost.",
    categories: ["Popular", "Evaluations", "Follow-Up"],
    icon: "calendar-clock",
    requirement: "Schedule trigger and messaging rules",
    tier: "connected-workflow",
  },
  {
    id: "pre-first-visit-sequence",
    name: "Pre-First-Visit Follow-Up",
    description: "Keeps the administrative path moving from booked evaluation through forms, reminders, and arrival information.",
    categories: ["Evaluations", "Follow-Up"],
    icon: "messages-square",
    tier: "growth-system",
  },
  {
    id: "evaluation-no-show-recovery",
    name: "Evaluation No-Show Recovery",
    description: "Starts an approved rescheduling sequence after a missed evaluation and stops once the person replies or opts out.",
    categories: ["Evaluations", "Follow-Up"],
    icon: "refresh",
    tier: "growth-system",
  },
  {
    id: "open-evaluation-slot-filler",
    name: "Open Evaluation Slot Filler",
    description: "Offers newly available evaluation times to eligible people using clinic-approved priority and stopping rules.",
    categories: ["Popular", "Evaluations", "Follow-Up"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Eligible waitlist and schedule access",
    tier: "growth-system",
  },
  {
    id: "attendance-exception-alerts",
    name: "Attendance Exception Alerts",
    description: "Notifies the appropriate staff owner when repeated cancellations, unanswered reminders, or administrative blockers need review.",
    categories: ["Follow-Up", "Operations"],
    icon: "bell",
    requirement: "Practice-defined alert conditions",
    tier: "connected-workflow",
  },
  {
    id: "past-patient-reactivation",
    name: "Past-Patient Reactivation",
    description: "Runs approved outreach to an eligible past-patient list and routes interested replies for staff review.",
    categories: ["Follow-Up", "Operations"],
    icon: "users-round",
    requirement: "Approved audience and consent review",
    tier: "growth-system",
  },
  {
    id: "pt-ai-call-handler",
    name: "Clinic Call Handler",
    description: "Handles approved administrative questions and request capture, then transfers clinical, urgent, or uncertain conversations.",
    categories: ["Popular", "Referral Access", "Calls & Intake"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call flow, approved content, and live escalation",
    tier: "ai-calling",
  },
  {
    id: "referral-status-routing",
    name: "Referral Status & Handoff Routing",
    description: "Tracks administrative referral status and routes unresolved source, document, or scheduling questions to the right owner.",
    categories: ["Referral Access", "Follow-Up", "Operations"],
    icon: "route",
    requirement: "Status definitions and ownership rules",
    tier: "growth-system",
  },
  {
    id: "ehr-crm-admin-sync",
    name: "EHR & CRM Administrative Sync",
    description: "Creates or updates approved administrative records after supported access, data mapping, and security review.",
    categories: ["Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported system access and security review",
    tier: "advanced",
  },
  {
    id: "referral-source-dashboard",
    name: "Referral Source & Multi-Clinic Dashboard",
    description: "Shows referral volume, response status, evaluation outcomes, unresolved handoffs, and clinic-level access patterns.",
    categories: ["Referral Access", "Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Referral, contact, and outcome data access",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
