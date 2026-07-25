export const categoryTabs = [
  "Popular",
  "New Patients",
  "Scheduling",
  "Case Follow-Up",
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
  slug: "dental-practices",
  industry: "Dental Practices",
  audienceLabel: "dental practice",
  audiencePlural: "dental practices",
  segment: "Independent dental practices and growing multi-location groups",
  persona: "Owner-dentist, office manager, or practice administrator",
  eyebrow: "AI workflows for dental practices",
  headline: "Keep more chairs filled without keeping your front desk on the phone.",
  subheadline:
    "Capture new-patient inquiries, recover missed calls, confirm appointments, and follow up with overdue patients and unscheduled cases using approved workflows.",
  mobileHeadline: "Turn more patient inquiries into filled appointment time.",
  outcomeFocus: "More inquiries answered. Less front-desk chasing.",
  splashFeature: "New-patient missed-call rescue",
  quickStartPitch: "Start with one chair-filling workflow. Keep what works, then connect the next scheduling or follow-up gap.",
  scaleLabel: "Number of practice locations",
  scaleOptions: ["1 location", "2 locations", "3–5 locations", "6–10 locations", "11–20 locations", "20+ locations"],
  softwareLabel: "Current practice-management, scheduling, phone, or marketing tools",
  softwarePlaceholder: "Dentrix, Eaglesoft, Open Dental, Curve, CRM, phone system, spreadsheets…",
  bottlenecks: [
    "New-patient calls are missed",
    "Web and ad leads wait too long",
    "Appointments remain unconfirmed",
    "Cancellations leave chairs open",
    "No-shows take too much manual follow-up",
    "Overdue patients are not reactivated consistently",
    "Unscheduled treatment goes quiet",
    "Front-desk staff handle too many repetitive calls",
    "We cannot see which lead sources fill chairs",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Human escalation designed in",
    "Administrative workflows only",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Start with a visible chair gap",
      detail: "The first workflow targets one measurable leak such as missed calls, unconfirmed visits, cancellations, or dormant follow-up.",
    },
    {
      title: "Your team controls patient care",
      detail: "Automation handles approved administrative steps; symptoms, treatment questions, eligibility decisions, and exceptions stay with staff.",
    },
    {
      title: "Existing reminders are respected",
      detail: "Elevate maps what your current practice software already handles and fills specific gaps instead of duplicating every message.",
    },
    {
      title: "Outreach rules approved first",
      detail: "Brand voice, timing, quiet hours, consent, opt-outs, stop conditions, and human handoffs are agreed before launch.",
    },
    {
      title: "Launch testing included",
      detail: "Core paths, edge cases, alerts, calendar behavior, and failure states are checked before the workflow goes live.",
    },
    {
      title: "Clear operating handoff",
      detail: "Your team receives the workflow logic, ownership points, provider costs, and practical next-step guidance.",
    },
  ],
  complianceNote:
    "Elevate supports administrative patient access, scheduling, reminders, follow-up, and practice operations. It does not diagnose, assess dental conditions, recommend or alter treatment, determine insurance coverage, give clinical advice, or replace professional judgment. Privacy, security, consent, recording, messaging, opt-out, and integration requirements are reviewed during scope; no legal or compliance guarantee is implied. Do not submit patient information in this business inquiry form.",
  consentCopy:
    "This form is for practice operations inquiries only—do not include patient information. By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for dental practices. Tell me where new-patient response, scheduling, case follow-up, or reactivation gets stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "We miss new-patient calls",
    "Cancellations leave chairs open",
    "Unscheduled treatment goes quiet",
  ],
  metaTitle: "Elevate — AI Workflows for Dental Practices",
  metaDescription:
    "Explore practical AI missed-call recovery, appointment, case follow-up, patient-reactivation, and dental-practice operations workflows.",
  theme: {
    accent: "#347fff",
    accentStrong: "#205fd9",
    accentSoft: "rgba(52, 127, 255, 0.16)",
    secondary: "#48d6c1",
  },
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Chair-Fill Quick Start",
    setup: 795,
    timeline: "2–4 business days",
    summary: "One focused lead-response, reminder, or recovery workflow, configured and tested.",
  },
  {
    id: "connected-workflow",
    name: "Connected Practice Workflow",
    setup: 1695,
    timeline: "4–7 business days",
    summary: "A tailored intake, scheduling, or administrative workflow around your current tools.",
  },
  {
    id: "growth-system",
    name: "Practice Growth System",
    setup: 3195,
    timeline: "1–2 weeks",
    summary: "Multi-step chair recovery, case follow-up, or reactivation with staff handoffs.",
  },
  {
    id: "ai-calling",
    name: "Dental AI Call Coverage",
    setup: 4495,
    timeline: "1–2 weeks",
    summary: "Approved inbound or outbound administrative calls with a clear route to the front desk.",
    usageNote: "Phone and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Practice Operations Build",
    setup: 7995,
    timeline: "2–4 weeks",
    summary: "Multi-location routing, system synchronization, source visibility, and deeper operations logic.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "new-patient-missed-call-rescue",
    name: "New-Patient Missed-Call Rescue",
    description: "Texts missed callers, asks what they need administratively, captures preferred timing, and routes ready patients to staff.",
    categories: ["Popular", "New Patients", "Case Follow-Up"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business phone and approved SMS workflow",
    tier: "quick-start",
  },
  {
    id: "instant-new-patient-response",
    name: "Instant New-Patient Lead Response",
    description: "Responds to web, ad, and contact-form inquiries quickly and guides each person toward booking or staff help.",
    categories: ["Popular", "New Patients", "Case Follow-Up"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved response",
    tier: "quick-start",
  },
  {
    id: "appointment-confirmation-reschedule",
    name: "Appointment Confirmation & Reschedule",
    description: "Sends approved two-way confirmations and routes requested changes without unnecessary phone tag.",
    categories: ["Popular", "Scheduling", "Case Follow-Up"],
    icon: "calendar-check",
    badge: "Quick win",
    requirement: "Schedule trigger and messaging consent",
    tier: "quick-start",
  },
  {
    id: "new-patient-booking",
    name: "New-Patient Booking Workflow",
    description: "Collects approved appointment preferences and routes the request by location, provider, visit type, and office rules.",
    categories: ["Popular", "New Patients", "Scheduling"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Provider, visit-type, and scheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "digital-intake-checklist",
    name: "Digital New-Patient Intake Checklist",
    description: "Tracks approved administrative forms and sends a reminder when required intake steps remain incomplete.",
    categories: ["New Patients", "Operations"],
    icon: "clipboard-list",
    requirement: "Approved checklist and secure form workflow",
    tier: "connected-workflow",
  },
  {
    id: "benefit-document-routing",
    name: "Benefits & Document Request Routing",
    description: "Collects and routes approved administrative benefit or document requests without making coverage determinations.",
    categories: ["New Patients", "Operations"],
    icon: "file-text",
    requirement: "Approved intake fields and staff ownership",
    tier: "connected-workflow",
  },
  {
    id: "open-chair-cancellation-filler",
    name: "Open-Chair Cancellation Filler",
    description: "Finds an eligible opening and offers it to approved waitlist candidates using practice-defined timing and provider rules.",
    categories: ["Popular", "Scheduling", "Reactivation"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Schedule access and eligible waitlist",
    tier: "growth-system",
  },
  {
    id: "overdue-patient-reactivation",
    name: "Overdue Patient Reactivation",
    description: "Segments an approved overdue list and sends a respectful rebooking prompt with clear stop and handoff paths.",
    categories: ["Popular", "Case Follow-Up", "Reactivation"],
    icon: "users-round",
    requirement: "Eligible list and approved outreach",
    tier: "growth-system",
  },
  {
    id: "unscheduled-treatment-follow-up",
    name: "Unscheduled Treatment Follow-Up",
    description: "Follows up on staff-approved treatment recommendations until the patient responds, declines, or requests a person.",
    categories: ["Popular", "Case Follow-Up", "Reactivation"],
    icon: "messages-square",
    badge: "High impact",
    requirement: "Staff-approved recommendation status and outreach rules",
    tier: "growth-system",
  },
  {
    id: "no-show-recovery",
    name: "No-Show Recovery",
    description: "Triggers an approved rescheduling path after a missed appointment and alerts staff when follow-up needs attention.",
    categories: ["Scheduling", "Case Follow-Up"],
    icon: "refresh",
    requirement: "Appointment outcome and stop rules",
    tier: "connected-workflow",
  },
  {
    id: "review-referral-request",
    name: "Review & Referral Request",
    description: "After a staff-approved trigger, requests feedback and offers an appropriate referral path without making care claims.",
    categories: ["Case Follow-Up", "Reactivation"],
    icon: "file-text",
    requirement: "Approved completion or satisfaction trigger",
    tier: "quick-start",
  },
  {
    id: "dental-ai-receptionist",
    name: "Dental AI Receptionist",
    description: "Handles approved administrative calls, captures appointment requests, and transfers clinical or uncertain questions to staff.",
    categories: ["Popular", "New Patients", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call script, phone flow, and escalation rules",
    tier: "ai-calling",
  },
  {
    id: "after-hours-dental-access",
    name: "After-Hours Inquiry Capture",
    description: "Acknowledges after-hours inquiries, captures safe administrative details, and follows practice-defined escalation language.",
    categories: ["New Patients", "Case Follow-Up", "Operations"],
    icon: "bell",
    badge: "AI calling",
    requirement: "After-hours policy and staff escalation rules",
    tier: "ai-calling",
  },
  {
    id: "multi-location-schedule-routing",
    name: "Multi-Location Schedule & Lead Routing",
    description: "Routes inquiries by office, provider, visit type, approved availability, and staff ownership across a dental group.",
    categories: ["Scheduling", "Operations", "Advanced"],
    icon: "route",
    badge: "Advanced",
    requirement: "Location, provider, and scheduling rules",
    tier: "advanced",
  },
  {
    id: "chair-lead-dashboard",
    name: "Chair & Lead Outcome Dashboard",
    description: "Summarizes lead sources, response times, booking outcomes, cancellations, unresolved handoffs, and reactivation activity.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Lead, call, schedule, and outcome data access",
    tier: "advanced",
  },
  {
    id: "dental-system-orchestration",
    name: "Practice System Orchestration",
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
