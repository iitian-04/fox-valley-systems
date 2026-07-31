export const categoryTabs = [
  "Popular",
  "New Patient Access",
  "Scheduling",
  "Follow-Up",
  "Retention",
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
  slug: "chiropractic-clinics",
  industry: "Chiropractic Clinics",
  audienceLabel: "chiropractic clinic",
  audiencePlural: "chiropractic clinics",
  segment: "Independent chiropractic clinics and growing multi-location practices",
  persona: "Clinic owner, practice manager, or operations lead",
  eyebrow: "workflows for chiropractic clinics",
  headline: "Respond to every new-patient inquiry and keep the schedule moving.",
  subheadline:
    "Automate repetitive follow-up around missed calls, booking, reminders, schedule gaps, and inactive patients—while clinical questions stay with your team.",
  mobileHeadline: "Turn new-patient interest into a clear next step.",
  outcomeFocus: "Faster lead response. Less front-desk chasing.",
  splashFeature: "New-patient lead rescue",
  quickStartPitch: "Start with one workflow beside your current software. Expand only after it removes a real bottleneck.",
  scaleLabel: "Number of clinic locations",
  scaleOptions: ["1 location", "2 locations", "3–5 locations", "6–10 locations", "11–20 locations", "20+ locations"],
  softwareLabel: "Current practice-management, scheduling, CRM, or phone tools",
  softwarePlaceholder: "ChiroTouch, Jane, scheduling software, CRM, phone system, spreadsheets…",
  bottlenecks: [
    "New-patient leads wait too long for a response",
    "Missed calls become missed opportunities",
    "Too many appointment reminders are manual",
    "Evaluations cancel or do not show",
    "Open schedule gaps are hard to refill",
    "Inactive patients are not followed up consistently",
    "Front-desk staff juggle too many repetitive tasks",
    "We cannot see which lead sources turn into appointments",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works beside current software",
    "Human escalation designed in",
    "Administrative workflows only",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "One operational leak first",
      detail: "The first build targets a specific access, scheduling, follow-up, or administrative bottleneck with a clear owner.",
    },
    {
      title: "Your team controls patient decisions",
      detail: "Automation captures requests and follows approved steps; clinical questions, care decisions, and exceptions stay with staff.",
    },
    {
      title: "Current software stays in the picture",
      detail: "Practice-management, scheduling, CRM, phone, and messaging access are reviewed before any connection is promised.",
    },
    {
      title: "Voice and cadence approved",
      detail: "Messages, call scripts, quiet hours, opt-outs, escalation language, and stop conditions are agreed before launch.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, notifications, handoffs, and failure states are checked before the workflow goes live.",
    },
    {
      title: "Clear operating handoff",
      detail: "Your team receives the workflow logic, ownership points, provider costs, and practical next-step guidance.",
    },
  ],
  complianceNote:
    "Fox Valley Systems supports administrative access, scheduling, communication, and operations workflows. It does not diagnose, recommend treatment, assess symptoms, determine urgency, make care-plan decisions, or replace professional judgment. Privacy, security, consent, recording, messaging, opt-out, and integration requirements are reviewed during scope; no legal or compliance guarantee is implied. Do not submit patient information in this business inquiry form.",
  consentCopy:
    "This form is for clinic operations inquiries only—do not include patient information. By submitting, you agree that Fox Valley Systems may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for chiropractic clinics. Tell me where new-patient access, scheduling, or follow-up gets stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "New-patient leads wait too long",
    "We miss calls during busy hours",
    "We need to fill schedule gaps",
  ],
  metaTitle: "Fox Valley Systems — Workflows for Chiropractic Clinics",
  metaDescription:
    "Explore practical lead-response, scheduling, follow-up, reactivation, and clinic-operations workflows for chiropractic practices.",
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
    name: "New Patient Quick Start",
    setup: 695,
    timeline: "2–4 business days",
    summary: "One focused lead-response, reminder, or follow-up workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Clinic Workflow",
    setup: 1495,
    timeline: "4–7 business days",
    summary: "A tailored intake, scheduling, or administrative workflow around the tools you already use.",
  },
  {
    id: "growth-system",
    name: "Schedule Growth System",
    setup: 2795,
    timeline: "1–2 weeks",
    summary: "Multi-step follow-up, schedule recovery, or reactivation with clear staff handoffs.",
  },
  {
    id: "ai-calling",
    name: "Call Coverage",
    setup: 3995,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound administrative call workflows with human escalation.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Clinic Operations Build",
    setup: 6995,
    timeline: "2–4 weeks",
    summary: "Multi-location routing, deeper system synchronization, attribution, and operational reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "new-patient-lead-rescue",
    name: "New-Patient Lead Rescue",
    description: "Responds to new web or ad inquiries quickly, captures preferred timing, and routes the next step to your team.",
    categories: ["Popular", "New Patient Access", "Follow-Up"],
    icon: "zap",
    badge: "Best first step",
    requirement: "Lead source and approved response",
    tier: "quick-start",
  },
  {
    id: "missed-call-text-back",
    name: "Missed-Call Text-Back",
    description: "Texts missed callers, asks what administrative help they need, and creates a clear callback or booking-request handoff.",
    categories: ["Popular", "New Patient Access", "Follow-Up"],
    icon: "phone-missed",
    badge: "Quick win",
    requirement: "Business phone and approved SMS workflow",
    tier: "quick-start",
  },
  {
    id: "appointment-reminder-reschedule",
    name: "Appointment Reminder & Reschedule",
    description: "Sends approved reminders and lets patients request a change without another round of phone tag.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "calendar-check",
    badge: "Quick win",
    requirement: "Scheduling trigger and messaging consent",
    tier: "quick-start",
  },
  {
    id: "new-patient-booking-request",
    name: "New-Patient Booking Workflow",
    description: "Collects approved booking preferences and routes the request to the correct location, provider, or staff queue.",
    categories: ["Popular", "New Patient Access", "Scheduling"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Visit, location, and scheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "new-patient-intake-checklist",
    name: "New-Patient Intake Checklist",
    description: "Tracks approved administrative intake steps and reminds the patient when required forms remain incomplete.",
    categories: ["Popular", "New Patient Access", "Operations"],
    icon: "clipboard-list",
    requirement: "Approved form checklist and secure workflow",
    tier: "connected-workflow",
  },
  {
    id: "missed-evaluation-recovery",
    name: "Missed-Evaluation Recovery",
    description: "Follows an approved cadence after a missed initial evaluation until the patient reschedules, declines, or requests staff.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "refresh",
    badge: "High impact",
    requirement: "Appointment status trigger and stop rules",
    tier: "connected-workflow",
  },
  {
    id: "approved-patient-faq",
    name: "Approved Patient FAQ Assistant",
    description: "Answers approved questions about hours, locations, forms, payment policies, and appointment logistics, then hands off exceptions.",
    categories: ["New Patient Access", "Operations"],
    icon: "circle-help",
    requirement: "Approved administrative content",
    tier: "connected-workflow",
  },
  {
    id: "schedule-gap-filler",
    name: "Schedule-Gap Filler",
    description: "Finds eligible openings and offers them to an approved waitlist or flexible-patient audience using clinic-defined rules.",
    categories: ["Popular", "Scheduling", "Retention"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Schedule access and eligible contact list",
    tier: "growth-system",
  },
  {
    id: "inactive-patient-reactivation",
    name: "Inactive-Patient Reactivation",
    description: "Segments an approved inactive list and sends a respectful rebooking prompt with opt-out and staff-handoff paths.",
    categories: ["Popular", "Follow-Up", "Retention"],
    icon: "users-round",
    requirement: "Eligible patient list and approved outreach",
    tier: "growth-system",
  },
  {
    id: "attendance-follow-up",
    name: "Attendance Follow-Up Workflow",
    description: "Flags missed or repeatedly unconfirmed visits and triggers the clinic-approved administrative next step.",
    categories: ["Scheduling", "Follow-Up", "Operations"],
    icon: "messages-square",
    requirement: "Appointment status and outreach rules",
    tier: "growth-system",
  },
  {
    id: "review-referral-request",
    name: "Review & Referral Request",
    description: "After a staff-approved trigger, requests feedback and offers an appropriate referral path without making care claims.",
    categories: ["Follow-Up", "Retention"],
    icon: "file-text",
    requirement: "Approved completion or satisfaction trigger",
    tier: "quick-start",
  },
  {
    id: "chiropractic-ai-receptionist",
    name: "Clinic Call Answering",
    description: "Handles approved administrative calls, captures new-patient requests, and transfers clinical or uncertain questions to staff.",
    categories: ["Popular", "New Patient Access", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call script, phone flow, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "after-hours-inquiry-capture",
    name: "After-Hours Inquiry Capture",
    description: "Acknowledges after-hours inquiries, captures safe administrative details, and prepares a prioritized team follow-up list.",
    categories: ["New Patient Access", "Follow-Up", "Operations"],
    icon: "bell",
    badge: "AI calling",
    requirement: "After-hours policy and human escalation rules",
    tier: "ai-calling",
  },
  {
    id: "multi-location-routing",
    name: "Multi-Location Lead & Schedule Routing",
    description: "Routes inquiries by location, visit type, approved availability, and staff ownership across a growing clinic group.",
    categories: ["Scheduling", "Operations", "Advanced"],
    icon: "route",
    badge: "Advanced",
    requirement: "Location, scheduling, and ownership rules",
    tier: "advanced",
  },
  {
    id: "lead-source-dashboard",
    name: "Lead Source & Response Dashboard",
    description: "Summarizes inquiries, response times, appointment-request outcomes, unresolved handoffs, and source attribution.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Lead, call, and outcome data access",
    tier: "advanced",
  },
  {
    id: "clinic-system-orchestration",
    name: "Clinic System Orchestration",
    description: "Coordinates approved intake, scheduling, follow-up, record updates, alerts, and reporting across connected systems.",
    categories: ["Operations", "Advanced"],
    icon: "workflow",
    badge: "Advanced",
    requirement: "System, privacy, and security review",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
