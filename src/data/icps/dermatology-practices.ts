export const categoryTabs = [
  "Popular",
  "Patient Access",
  "Medical & Cosmetic",
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
  slug: "dermatology-practices",
  industry: "Dermatology Practices",
  audienceLabel: "dermatology practice",
  audiencePlural: "dermatology practices",
  segment: "Medical, cosmetic, and multi-provider dermatology practices",
  persona: "Practice administrator, owner, or patient-access leader",
  eyebrow: "patient-access workflows",
  headline: "Route medical demand and cosmetic leads to the right next step.",
  subheadline:
    "Separate inquiry types, respond quickly, fill cancellations, and reduce repetitive call work while clinical decisions remain with your care team.",
  mobileHeadline: "Give every medical and cosmetic inquiry a clear next step.",
  outcomeFocus: "Faster lead response. Cleaner patient-access routing.",
  splashFeature: "Medical versus cosmetic inquiry routing",
  quickStartPitch: "Begin with one visible access leak. Validate the rules and handoff, then add the next workflow.",
  scaleLabel: "Practice footprint",
  scaleOptions: ["1 location", "2 locations", "3–4 locations", "5–7 locations", "8+ locations", "Multi-specialty group"],
  softwareLabel: "Current EHR, scheduling, CRM, call, or messaging tools",
  softwarePlaceholder: "EHR, online scheduling, cosmetic CRM, call system, texting platform…",
  bottlenecks: [
    "Medical and cosmetic inquiries reach the same queue",
    "Cosmetic leads wait too long for a response",
    "Missed calls are not recovered consistently",
    "Referral intake remains incomplete",
    "Visit-type scheduling is too complex",
    "Cancellations leave valuable openings",
    "Staff repeat the same administrative answers",
    "We lack visibility by inquiry type and source",
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
      title: "Inquiry types are defined first",
      detail: "Medical, cosmetic, referral, existing-patient, and uncertain requests receive approved questions, ownership, and escalation paths.",
    },
    {
      title: "Routing is not diagnosis",
      detail: "Automation can identify a stated service need and administrative destination; symptoms and clinical questions go to trained staff.",
    },
    {
      title: "Schedule rules stay explicit",
      detail: "Provider, visit type, location, duration, referral, and exception rules are validated before any booking action is promised.",
    },
    {
      title: "Cosmetic follow-up stays on brand",
      detail: "Voice, cadence, approved services, claims, quiet hours, reply handling, and opt-outs are agreed before launch.",
    },
    {
      title: "Usage costs remain separate",
      detail: "Calling, messaging, AI, and software-provider usage is shown separately from the one-time implementation price.",
    },
    {
      title: "Your team receives the operating map",
      detail: "Staff receive the approved content, routing logic, system touchpoints, exception paths, and ownership guidance.",
    },
  ],
  complianceNote:
    "These workflows support administrative access, routing, scheduling, and approved marketing follow-up only. They do not diagnose, assess symptoms, determine urgency, recommend treatment, or make medical or cosmetic outcome claims. Patient information, privacy, security, consent, recording, messaging, and system-access requirements are confirmed during scope review; no compliance guarantee is implied.",
  consentCopy:
    "By submitting, you agree that Fox Valley Systems may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit patient information.",
  chatWelcome:
    "Hi—I’m the Fox Valley workflow advisor for dermatology practices. Tell me where medical demand, referrals, or cosmetic leads get stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "Cosmetic leads wait too long",
    "Medical requests reach the wrong queue",
    "Cancellations leave open slots",
  ],
  metaTitle: "Fox Valley Systems — Workflows for Dermatology Practices",
  metaDescription:
    "Explore practical inquiry routing, cosmetic lead response, referral intake, scheduling, waitlist, and operations workflows for dermatology practices.",
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
    setup: 995,
    timeline: "3–5 business days",
    summary: "One focused inquiry-routing, lead-response, or missed-call workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Practice Workflow",
    setup: 2295,
    timeline: "5–8 business days",
    summary: "A tailored intake, scheduling, reminder, or lead-management workflow.",
  },
  {
    id: "growth-system",
    name: "Patient Access Growth System",
    setup: 4295,
    timeline: "1–2 weeks",
    summary: "Multi-step waitlist, consultation follow-up, or access-recovery automation.",
  },
  {
    id: "ai-calling",
    name: "Practice Call Answering",
    setup: 6495,
    timeline: "2–3 weeks",
    summary: "Approved administrative call flows with clinical and uncertain requests escalated.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Multi-System Access Build",
    setup: 10995,
    timeline: "3–5 weeks",
    summary: "Complex provider routing, system coordination, attribution, and reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "medical-cosmetic-inquiry-router",
    name: "Medical vs. Cosmetic Inquiry Router",
    description: "Captures the visitor's stated need and sends medical, cosmetic, referral, and existing-patient requests to the approved queue.",
    categories: ["Popular", "Patient Access", "Medical & Cosmetic", "Operations"],
    icon: "route",
    badge: "Best first step",
    requirement: "Approved inquiry types and routing ownership",
    tier: "quick-start",
  },
  {
    id: "cosmetic-lead-response",
    name: "Instant Cosmetic Lead Response",
    description: "Responds to a new cosmetic inquiry, confirms treatment interest and preferred timing, and creates a consultation handoff.",
    categories: ["Popular", "Medical & Cosmetic", "Follow-Up"],
    icon: "zap",
    badge: "High impact",
    requirement: "Lead source, approved services, and messaging rules",
    tier: "quick-start",
  },
  {
    id: "missed-call-recovery",
    name: "Missed-Call Recovery",
    description: "Acknowledges missed callers, captures the administrative reason for contact, and routes the next action to staff.",
    categories: ["Popular", "Patient Access", "Follow-Up"],
    icon: "phone-missed",
    badge: "Quick win",
    requirement: "Business calling and approved messaging",
    tier: "quick-start",
  },
  {
    id: "referral-intake-checklist",
    name: "Referral Intake Checklist",
    description: "Collects required non-clinical referral details and flags incomplete items for the correct team member.",
    categories: ["Patient Access", "Medical & Cosmetic", "Operations"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Approved referral fields and review process",
    tier: "connected-workflow",
  },
  {
    id: "appointment-request-capture",
    name: "Appointment Request Capture",
    description: "Collects location, provider preference, stated visit need, and preferred times without promising clinical fit or availability.",
    categories: ["Popular", "Patient Access", "Scheduling"],
    icon: "calendar-check",
    requirement: "Visit-type and scheduling rules",
    tier: "connected-workflow",
  },
  {
    id: "provider-visit-type-router",
    name: "Provider & Visit-Type Router",
    description: "Applies approved administrative rules to route requests by location, provider, visit type, duration, and ownership.",
    categories: ["Patient Access", "Medical & Cosmetic", "Scheduling", "Operations"],
    icon: "route",
    requirement: "Documented schedule and exception rules",
    tier: "connected-workflow",
  },
  {
    id: "approved-practice-faq",
    name: "Approved Practice FAQ Assistant",
    description: "Answers approved questions about locations, hours, policies, preparation, and administrative next steps.",
    categories: ["Patient Access", "Medical & Cosmetic"],
    icon: "circle-help",
    requirement: "Practice-approved content and escalation rules",
    tier: "connected-workflow",
  },
  {
    id: "waitlist-cancellation-filler",
    name: "Waitlist & Cancellation Filler",
    description: "Offers eligible openings according to approved priority, provider, visit-type, and stopping rules.",
    categories: ["Popular", "Scheduling", "Follow-Up"],
    icon: "calendar-clock",
    badge: "High impact",
    requirement: "Schedule access and eligible waitlist",
    tier: "growth-system",
  },
  {
    id: "pre-visit-instructions",
    name: "Pre-Visit Instructions & Reminders",
    description: "Sends practice-approved administrative instructions and reminders, with questions or exceptions routed to staff.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "messages-square",
    requirement: "Approved content, schedule trigger, and consent rules",
    tier: "connected-workflow",
  },
  {
    id: "cosmetic-consult-nurture",
    name: "Cosmetic Consultation Follow-Up",
    description: "Runs a measured, brand-approved sequence for interested leads who have not yet taken the next consultation step.",
    categories: ["Popular", "Medical & Cosmetic", "Follow-Up"],
    icon: "workflow",
    requirement: "Approved claims, cadence, and opt-out handling",
    tier: "growth-system",
  },
  {
    id: "no-show-reschedule",
    name: "No-Show & Reschedule Recovery",
    description: "Follows up after a missed appointment or unresolved reschedule request and hands exceptions back to staff.",
    categories: ["Scheduling", "Follow-Up"],
    icon: "refresh",
    tier: "growth-system",
  },
  {
    id: "approved-recall-reminders",
    name: "Approved Recall Reminder Sequence",
    description: "Uses a practice-approved due list to send reminders and route appointment requests without making clinical recommendations.",
    categories: ["Medical & Cosmetic", "Scheduling", "Follow-Up"],
    icon: "bell",
    requirement: "Approved due list and outreach rules",
    tier: "growth-system",
  },
  {
    id: "dermatology-ai-receptionist",
    name: "Practice Call Answering",
    description: "Handles approved administrative call paths and transfers symptom, clinical, urgent, or uncertain conversations.",
    categories: ["Popular", "Patient Access", "Medical & Cosmetic"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Call flow, approved content, and live escalation",
    tier: "ai-calling",
  },
  {
    id: "after-hours-inquiry-capture",
    name: "After-Hours Inquiry Capture",
    description: "Captures medical-office and cosmetic consultation requests after hours, then applies approved escalation and follow-up rules.",
    categories: ["Patient Access", "Medical & Cosmetic", "Follow-Up"],
    icon: "messages-square",
    badge: "AI calling",
    requirement: "After-hours policy and escalation contacts",
    tier: "ai-calling",
  },
  {
    id: "ehr-crm-access-sync",
    name: "EHR & Cosmetic CRM Access Sync",
    description: "Coordinates approved administrative records across supported systems after data mapping and security review.",
    categories: ["Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported system access and security review",
    tier: "advanced",
  },
  {
    id: "demand-source-dashboard",
    name: "Medical, Cosmetic & Referral Dashboard",
    description: "Summarizes inquiry source, request type, response status, consultation handoffs, unresolved items, and location outcomes.",
    categories: ["Medical & Cosmetic", "Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Lead, call, referral, and outcome data access",
    tier: "advanced",
  },
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
