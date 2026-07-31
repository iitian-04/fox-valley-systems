import {
  defineIcpBundle,
  foxValleyTheme,
  type IcpBundle,
  type IcpBundleSource,
  type PricingTier,
  type WorkflowItem,
} from "../icp-types";

export const categoryTabs = [
  "Popular",
  "Lead Capture",
  "AI Calling",
  "Scheduling & Dispatch",
  "Estimates & Follow-Up",
  "Customer Retention",
  "Operations",
  "Advanced",
  "All",
] as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Lead Capture Quick Start",
    setup: 795,
    timeline: "3–5 business days",
    summary:
      "One focused missed-call, web-lead, reminder, or follow-up workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Service Workflow",
    setup: 1695,
    timeline: "5–8 business days",
    summary:
      "A tailored intake, booking, dispatch-handoff, or customer communication workflow.",
  },
  {
    id: "growth-system",
    name: "Home Service Growth System",
    setup: 3295,
    timeline: "1–2 weeks",
    summary:
      "Multi-step estimate follow-up, reactivation, seasonal outreach, or capacity-aware routing.",
  },
  {
    id: "ai-calling",
    name: "24/7 Call Coverage",
    setup: 4995,
    timeline: "2–3 weeks",
    summary:
      "Approved inbound or outbound call flows with structured intake and human handoff.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Service Operations Build",
    setup: 8495,
    timeline: "3–5 weeks",
    summary:
      "Field-service coordination, multi-team routing, attribution, and operational reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "missed-call-job-rescue",
    name: "Missed-Call Job Rescue",
    description:
      "Responds to missed callers, captures the service need, location, timing, and contact details, then alerts the office.",
    outcome: "Fewer missed callers go cold before the office can respond.",
    categories: ["Popular", "Lead Capture", "Estimates & Follow-Up"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business calling and approved messaging",
    tier: "quick-start",
  },
  {
    id: "instant-web-lead-response",
    name: "Instant Web-Lead Response",
    description:
      "Acknowledges form and campaign leads quickly, fills in missing job details, and routes each reply to the next owner.",
    outcome: "New web leads receive a fast reply and reach the right owner with better context.",
    categories: ["Popular", "Lead Capture", "Estimates & Follow-Up"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved reply flow",
    tier: "quick-start",
  },
  {
    id: "service-area-checker",
    name: "Service-Area Checker",
    description:
      "Confirms whether the submitted location is inside the company’s approved service territory.",
    outcome: "Out-of-area requests are filtered early, saving staff review time.",
    categories: ["Popular", "Lead Capture", "Operations"],
    icon: "route",
    badge: "Quick win",
    requirement: "Service ZIP or map rules",
    tier: "quick-start",
  },
  {
    id: "structured-job-intake",
    name: "Structured Job-Request Intake",
    description:
      "Collects the customer-reported need, property details, timing, access notes, and contact information without diagnosing the job.",
    outcome: "Every request arrives with the details needed to qualify and route it.",
    categories: ["Popular", "Lead Capture", "Scheduling & Dispatch"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Approved intake fields and service rules",
    tier: "connected-workflow",
  },
  {
    id: "booking-dispatch-handoff",
    name: "Booking & Dispatch Handoff",
    description:
      "Books within approved rules or creates a clean staff-confirmation task with the details needed for the next step.",
    outcome: "Bookings reach dispatch with fewer missing details and less back-and-forth.",
    categories: ["Popular", "Scheduling & Dispatch"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Schedule access and documented booking rules",
    tier: "connected-workflow",
  },
  {
    id: "appointment-reminder-reschedule",
    name: "Appointment Reminder & Reschedule",
    description:
      "Sends approved reminders and captures confirmation or reschedule requests before field time is lost.",
    outcome: "More appointments are confirmed or rescheduled before field time is lost.",
    categories: ["Scheduling & Dispatch", "Estimates & Follow-Up"],
    icon: "calendar-clock",
    badge: "Quick win",
    requirement: "Appointment trigger and messaging consent",
    tier: "quick-start",
  },
  {
    id: "home-service-ai-receptionist",
    name: "24/7 Call Answering",
    description:
      "Answers approved administrative questions, captures job-ready details, and transfers technical, safety, pricing, or uncertain conversations.",
    outcome: "More calls are answered with complete, staff-ready request details.",
    categories: ["Popular", "Lead Capture", "AI Calling"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved call flow and live handoff rules",
    tier: "ai-calling",
  },
  {
    id: "after-hours-call-coverage",
    name: "After-Hours Call Coverage",
    description:
      "Captures requests outside office hours and follows company-approved priority, transfer, and next-day handoff rules.",
    outcome: "After-hours demand is captured instead of waiting for the office to reopen.",
    categories: ["AI Calling", "Lead Capture", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "After-hours policy and escalation contacts",
    tier: "ai-calling",
  },
  {
    id: "open-estimate-follow-up",
    name: "Open Estimate Follow-Up",
    description:
      "Runs a measured, stop-on-reply follow-up sequence for eligible estimates and alerts the assigned team member.",
    outcome: "Open estimates receive consistent follow-up without daily staff chasing.",
    categories: ["Popular", "Estimates & Follow-Up"],
    icon: "workflow",
    badge: "High impact",
    requirement: "Estimate status and owner data",
    tier: "growth-system",
  },
  {
    id: "lapsed-customer-reactivation",
    name: "Lapsed Customer Reactivation",
    description:
      "Segments an approved past-customer audience and runs a relevant win-back sequence with reply and opt-out handling.",
    outcome: "Past customers re-enter the pipeline through timely, relevant outreach.",
    categories: ["Customer Retention", "Estimates & Follow-Up"],
    icon: "users-round",
    requirement: "Approved audience and consent review",
    tier: "growth-system",
  },
  {
    id: "seasonal-customer-outreach",
    name: "Seasonal Customer Outreach",
    description:
      "Prepares approved reminders and campaigns when the season, weather, or service history creates a relevant need.",
    outcome: "Customers hear from you when seasonal demand is most relevant.",
    categories: ["Customer Retention", "Operations"],
    icon: "bell",
    requirement: "Approved audience, trigger, and message",
    tier: "growth-system",
  },
  {
    id: "job-complete-follow-up",
    name: "Job-Complete Customer Follow-Up",
    description:
      "Sends an approved completion message, routes service concerns privately, and requests feedback at the defined moment.",
    outcome: "Service issues surface privately while satisfied customers are prompted for feedback.",
    categories: ["Estimates & Follow-Up", "Customer Retention"],
    icon: "messages-square",
    requirement: "Completed-job trigger and approved messaging",
    tier: "connected-workflow",
  },
  {
    id: "field-service-sync",
    name: "Form, Call & Field-Service Sync",
    description:
      "Creates or updates approved lead, customer, and job records from calls, forms, and messages in supported systems.",
    outcome: "Customer and job records stay current without duplicate manual entry.",
    categories: ["Lead Capture", "Operations"],
    icon: "database",
    badge: "Admin saver",
    requirement: "Supported system access and data mapping",
    tier: "connected-workflow",
  },
  {
    id: "capacity-territory-router",
    name: "Capacity & Territory Router",
    description:
      "Routes requests by geography, job type, hours, team capacity, and company-approved priorities.",
    outcome: "Each request reaches the right territory and available team faster.",
    categories: ["Scheduling & Dispatch", "Operations", "Advanced"],
    icon: "route",
    badge: "Advanced",
    requirement: "Service-area, capacity, and ownership rules",
    tier: "advanced",
  },
  {
    id: "lead-operations-dashboard",
    name: "Lead & Service Operations Dashboard",
    description:
      "Shows source, response status, booking handoff, estimate stage, unresolved requests, and operational patterns.",
    outcome: "Owners see response gaps, stalled estimates, and unresolved requests in one place.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Call, lead, booking, and estimate data access",
    tier: "advanced",
  },
  {
    id: "multi-team-service-orchestration",
    name: "Multi-Team Service Orchestration",
    description:
      "Coordinates intake, routing, booking, follow-up, record updates, and reporting across branches or service teams.",
    outcome: "Branches follow one connected process with fewer dropped handoffs.",
    categories: ["Scheduling & Dispatch", "Operations", "Advanced"],
    icon: "workflow",
    badge: "Advanced",
    requirement: "System, workflow, and security review",
    tier: "advanced",
  },
];

const source = {
  categoryTabs,
  siteConfig: {
    slug: "home-services",
    industry: "Home Service Companies",
    audienceLabel: "home service company",
    audiencePlural: "home service companies",
    segment:
      "Residential home service businesses with active inbound demand and field teams",
    persona:
      "Owner, general manager, service manager, operations lead, or dispatcher",
    eyebrow: "workflows for home service companies",
    headline:
      "Turn more calls and web leads into booked work—without adding office overhead.",
    subheadline:
      "Respond quickly, collect the job details your team needs, follow up consistently, and keep every request moving toward a clear human-owned next step.",
    mobileHeadline:
      "Turn more home service inquiries into booked next steps.",
    outcomeFocus:
      "Faster response. Cleaner handoffs. More consistent follow-up.",
    splashFeature: "Missed-call job rescue",
    quickStartPitch:
      "Fix one visible lead or follow-up leak first. Keep what works, then connect the next service bottleneck.",
    scaleLabel: "Service operation size",
    scaleOptions: [
      "Owner-operator",
      "2–5 field technicians",
      "6–15 field technicians",
      "16–30 field technicians",
      "31–75 field technicians",
      "76+ technicians or multiple branches",
    ],
    softwareLabel:
      "Current field-service, dispatch, CRM, call, and marketing tools",
    softwarePlaceholder:
      "ServiceTitan, Housecall Pro, Jobber, FieldEdge, CRM, call tracking…",
    bottlenecks: [
      "Missed calls turn into lost jobs",
      "After-hours inquiries wait until morning",
      "Web leads receive a slow response",
      "The office repeatedly collects the same basic details",
      "Booking and dispatch handoffs are inconsistent",
      "Open estimates do not receive reliable follow-up",
      "Past customers are not reactivated",
      "Seasonal demand overwhelms the office",
      "We cannot see lead sources and outcomes clearly",
      "Our systems do not communicate",
      "Something else",
    ],
    trustItems: [
      "One-time project pricing",
      "Works with current tools",
      "Human handoff designed in",
      "Approved operating rules",
      "Start small, expand later",
    ],
    buildNotes: [
      {
        title: "Your service rules come first",
        detail:
          "Service area, hours, job types, required details, booking limits, and handoff ownership are documented before launch.",
      },
      {
        title: "The workflow captures, not diagnoses",
        detail:
          "Automation records what the customer reports; technical, safety, pricing, and unusual situations remain with qualified staff.",
      },
      {
        title: "Your team remains in control",
        detail:
          "Approved requests can move automatically while exceptions, constrained capacity, and sensitive cases return to a person.",
      },
      {
        title: "Current software stays in the picture",
        detail:
          "Field-service, scheduling, CRM, calling, and messaging access is reviewed before any connection is promised.",
      },
      {
        title: "Usage costs stay visible",
        detail:
          "Calling, messaging, AI, and software-provider usage is separated from the one-time workflow price.",
      },
      {
        title: "Launch includes real-path testing",
        detail:
          "Office hours, after-hours, duplicate leads, transfers, opt-outs, failures, and team notifications are checked before launch.",
      },
    ],
    complianceNote:
      "Automation supports approved administrative intake, booking, routing, communication, and follow-up. It does not diagnose technical problems, provide safety instructions, promise response times, give variable final quotes, or guarantee revenue. Calling, recording, messaging, consent, privacy, opt-out, licensing, and local business requirements are confirmed during scope review.",
    consentCopy:
      "By submitting, you agree that Fox Valley Systems may contact you about this business request. Message and data rates may apply. Reply STOP to opt out of text messages. Do not submit customer information.",
    chatWelcome:
      "Hi—I’m the Fox Valley workflow advisor for home service companies. Tell me where calls, web leads, booking, dispatch, estimates, or customer follow-up get stuck, and I’ll help identify a practical first workflow.",
    chatSuggestions: [
      "We miss too many calls",
      "Open estimates go cold",
      "The office is overloaded",
    ],
    metaTitle: "Fox Valley Systems — Workflows for Home Service Companies",
    metaDescription:
      "Explore practical missed-call, web-lead, booking, dispatch, estimate follow-up, customer retention, and operations workflows for home service companies.",
    theme: {
    accent: "#2563eb",
    accentStrong: "#2563eb",
    accentSoft: "rgba(37, 99, 235, 0.09)",
    secondary: "#6b7280"
  },
  },
  pricingTiers,
  workflows,
} satisfies IcpBundleSource;

export const homeServicesBundle: IcpBundle = defineIcpBundle(
  source,
  foxValleyTheme,
);
