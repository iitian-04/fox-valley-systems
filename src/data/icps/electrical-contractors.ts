export const categoryTabs = [
  "Popular",
  "Service Calls",
  "Lead Capture",
  "AI Calling",
  "Scheduling & Dispatch",
  "Estimates",
  "Follow-Up",
  "Operations",
  "Advanced",
  "All"
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
  "slug": "electrical-contractors",
  "industry": "Electrical Contractors",
  "audienceLabel": "electrical service company",
  "audiencePlural": "electrical contractors",
  "segment": "Residential electrical service companies with multiple field technicians",
  "persona": "Owner or service manager",
  "eyebrow": "service-call workflows",
  "headline": "Capture qualified service requests and keep estimates moving.",
  "subheadline": "Collect the job details your office needs, route approved requests, and follow up consistently without adding another office role.",
  "mobileHeadline": "Turn missed electrical inquiries into clear dispatch handoffs.",
  "outcomeFocus": "Cleaner intake. Faster response. Less office follow-up.",
  "splashFeature": "Missed-call service request capture",
  "quickStartPitch": "Begin with structured intake or one follow-up trigger. Keep diagnosis, safety, and pricing decisions with your team.",
  "scaleLabel": "Field and office team size",
  "scaleOptions": [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–75 people",
    "76–150 people",
    "151+ people"
  ],
  "softwareLabel": "Current field-service, dispatch, or estimating tools",
  "softwarePlaceholder": "ServiceTitan, Housecall Pro, Jobber, FieldEdge, spreadsheets…",
  "bottlenecks": [
    "Missed calls",
    "Complex job inquiries",
    "Slow estimate follow-up",
    "Dispatcher overload",
    "Technician schedule gaps",
    "After-hours requests",
    "Manual data entry",
    "Our systems do not communicate",
    "Something else"
  ],
  "trustItems": [
    "One-time project pricing",
    "Safety-conscious handoff",
    "Works with current tools",
    "Human review retained",
    "Start small, expand later"
  ],
  "complianceNote": "Automation does not diagnose electrical problems, provide safety instructions, give fixed quotes, or guarantee job volume. Technical, hazardous, unclear, and exception cases follow contractor-approved escalation rules.",
  "consentCopy": "By submitting, you agree that Fox Valley Systems may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  "chatWelcome": "Hi—I’m the Fox Valley workflow advisor for electrical contractors. Tell me where calls, dispatch, or estimates get stuck, and I’ll help identify a safe first workflow.",
  "chatSuggestions": [
    "We miss too many calls",
    "Dispatch needs cleaner intake",
    "Estimates are not followed up"
  ],
  "metaTitle": "Fox Valley Systems — Workflows for Electrical Contractors",
  "metaDescription": "Explore service-call intake, dispatch handoff, estimate follow-up, scheduling, and electrical operations workflows.",
  "theme": {
    "accent": "#2563eb",
    "accentStrong": "#2563eb",
    "accentSoft": "rgba(37, 99, 235, 0.09)",
    "secondary": "#6b7280"
  },
  "buildNotes": [
    {
      "title": "Approved answers and handoffs first",
      "detail": "Job questions, qualification fields, booking rules, and human escalation points are agreed before the electrical service company workflow is built."
    },
    {
      "title": "Your office and field team stay in control",
      "detail": "Automation captures, follows up, and routes within approved rules. Technical, pricing, safety, and unusual situations go to a person."
    },
    {
      "title": "Built around the tools you have",
      "detail": "Current field-service, dispatch, or estimating tools access is checked before an integration is promised; a useful first workflow can often start beside the current stack."
    },
    {
      "title": "Launch testing included",
      "detail": "Core paths, edge cases, alerts, opt-outs, and failure behavior are checked before the workflow goes live."
    },
    {
      "title": "Usage costs separated",
      "detail": "Any phone, text, AI, or software-provider usage is shown separately from the one-time build price."
    },
    {
      "title": "Clear operating handoff",
      "detail": "Your team receives the workflow logic, ownership points, and practical guidance for operating the finished build."
    }
  ]
} as const;

export const pricingTiers: PricingTier[] = [
  {
    "id": "quick-start",
    "name": "Service Quick Start",
    "setup": 795,
    "timeline": "2–3 business days",
    "summary": "One focused lead, call, reminder, or follow-up workflow, configured and tested."
  },
  {
    "id": "connected-workflow",
    "name": "Connected Intake",
    "setup": 1695,
    "timeline": "3–5 business days",
    "summary": "A tailored intake, booking, routing, or follow-up workflow connected to the tools you already use."
  },
  {
    "id": "growth-system",
    "name": "Service Growth System",
    "setup": 3295,
    "timeline": "5–8 business days",
    "summary": "Multi-step recovery, nurture, reactivation, or revenue workflow with reporting and handoffs."
  },
  {
    "id": "ai-calling",
    "name": "Call Coverage",
    "setup": 4995,
    "timeline": "5–10 business days",
    "summary": "Approved inbound or outbound calling with structured intake and human handoff.",
    "usageNote": "Phone and AI-provider usage is separate"
  },
  {
    "id": "advanced",
    "name": "Dispatch Orchestration",
    "setup": 8495,
    "timeline": "1–3 weeks",
    "summary": "Deeper routing, dispatch, reporting, segmentation, or multi-system orchestration."
  }
];

export const workflows: WorkflowItem[] = [
  {
    "id": "missed-call-service-capture",
    "name": "Missed-Call Service Capture",
    "description": "Texts missed callers, gathers the approved job basics, and alerts the office to a new request.",
    "categories": [
      "Popular",
      "Service Calls",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "phone-missed",
    "badge": "Best first step",
    "requirement": "Business phone and SMS",
    "tier": "quick-start"
  },
  {
    "id": "call-summary-team-alert",
    "name": "Call Summary & Team Alert",
    "description": "Turns approved call details into a concise office alert with contact, location, request type, and next action.",
    "categories": [
      "Popular",
      "Service Calls",
      "Operations"
    ],
    "icon": "file-text",
    "badge": "Quick win",
    "requirement": "Call source and alert channel",
    "tier": "quick-start"
  },
  {
    "id": "job-type-zip-intake",
    "name": "Job-Type & ZIP Intake",
    "description": "Collects service area, property type, request category, timing, and contact details without diagnosing the issue.",
    "categories": [
      "Popular",
      "Lead Capture"
    ],
    "icon": "clipboard-list",
    "badge": "High impact",
    "requirement": "Approved intake fields",
    "tier": "connected-workflow"
  },
  {
    "id": "booking-dispatch-handoff",
    "name": "Booking Request & Dispatch Handoff",
    "description": "Offers approved windows or creates a dispatch-ready request for staff confirmation.",
    "categories": [
      "Popular",
      "Scheduling & Dispatch",
      "Service Calls"
    ],
    "icon": "calendar-check",
    "requirement": "Calendar and dispatch rules",
    "tier": "connected-workflow"
  },
  {
    "id": "open-estimate-follow-up",
    "name": "Open-Estimate Follow-Up",
    "description": "Runs consistent, stop-on-reply follow-up for electrical estimates that have not reached a decision.",
    "categories": [
      "Popular",
      "Estimates",
      "Follow-Up"
    ],
    "icon": "file-text",
    "badge": "High impact",
    "requirement": "Estimate status data",
    "tier": "growth-system"
  },
  {
    "id": "electrical-ai-receptionist",
    "name": "Call Answering",
    "description": "Answers approved administrative questions, captures service requests, and transfers technical or urgent exceptions.",
    "categories": [
      "Popular",
      "AI Calling",
      "Lead Capture"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Approved script and handoff rules",
    "tier": "ai-calling"
  },
  {
    "id": "technician-gap-campaign",
    "name": "Technician Schedule-Gap Campaign",
    "description": "Identifies eligible capacity and prepares an approved outreach list or campaign for owner review.",
    "categories": [
      "Scheduling & Dispatch",
      "Follow-Up",
      "Operations"
    ],
    "icon": "calendar-clock",
    "requirement": "Schedule and customer data",
    "tier": "growth-system"
  },
  {
    "id": "skill-geography-router",
    "name": "Skill, Geography & Capacity Router",
    "description": "Routes requests by area, job category, technician capability, timing, and office-approved priorities.",
    "categories": [
      "Scheduling & Dispatch",
      "Operations",
      "Advanced"
    ],
    "icon": "route",
    "badge": "Advanced",
    "requirement": "Technician and service rules",
    "tier": "advanced"
  },
  {
    "id": "after-hours-intake",
    "name": "After-Hours Service Intake",
    "description": "Captures after-hours request details and creates a prioritized staff handoff without giving technical advice.",
    "categories": [
      "Service Calls",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "clipboard-list",
    "requirement": "After-hours escalation policy",
    "tier": "connected-workflow"
  },
  {
    "id": "estimate-reminder-caller",
    "name": "Estimate Follow-Up Caller",
    "description": "Calls open-estimate contacts with an approved script and records the outcome for staff.",
    "categories": [
      "AI Calling",
      "Estimates",
      "Follow-Up"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Estimate data and call consent",
    "tier": "ai-calling"
  },
  {
    "id": "service-area-checker",
    "name": "Service-Area Checker",
    "description": "Confirms whether the submitted location is inside the contractor's approved service territory.",
    "categories": [
      "Lead Capture",
      "Operations"
    ],
    "icon": "route",
    "badge": "Quick win",
    "requirement": "Service ZIP or map rules",
    "tier": "quick-start"
  },
  {
    "id": "form-to-field-service-sync",
    "name": "Form-to-Field-Service Sync",
    "description": "Creates or updates the approved customer or job record from form and call fields.",
    "categories": [
      "Lead Capture",
      "Operations"
    ],
    "icon": "database",
    "badge": "Admin saver",
    "requirement": "Supported system access",
    "tier": "connected-workflow"
  },
  {
    "id": "appointment-reminders",
    "name": "Service Appointment Reminders",
    "description": "Sends approved confirmations and captures reschedule requests before the slot is lost.",
    "categories": [
      "Scheduling & Dispatch",
      "Follow-Up"
    ],
    "icon": "calendar-check",
    "badge": "Quick win",
    "requirement": "Appointment trigger and consent",
    "tier": "quick-start"
  },
  {
    "id": "daily-operations-digest",
    "name": "Daily Service Operations Digest",
    "description": "Summarizes new requests, bookings, missed calls, open estimates, and unresolved owner actions.",
    "categories": [
      "Operations"
    ],
    "icon": "chart-column",
    "badge": "Admin saver",
    "requirement": "Workflow data access",
    "tier": "connected-workflow"
  },
  {
    "id": "estimate-pipeline-dashboard",
    "name": "Estimate & Service Pipeline Dashboard",
    "description": "Surfaces lead source, request status, estimate stage, ownership, and unresolved items.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "chart-column",
    "badge": "Advanced",
    "requirement": "CRM and field-service data",
    "tier": "advanced"
  },
  {
    "id": "multi-branch-orchestration",
    "name": "Multi-Branch Service Orchestration",
    "description": "Coordinates intake, routing, booking handoff, follow-up, and reporting across branches or teams.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "workflow",
    "badge": "Advanced",
    "requirement": "System and security review",
    "tier": "advanced"
  }
];

export const categoryCount = (category: CategoryTab) =>
  category === "All"
    ? workflows.length
    : workflows.filter((workflow) => workflow.categories.includes(category as WorkflowCategory)).length;

export const getWorkflowPricing = (workflow: WorkflowItem) =>
  pricingTiers.find((tier) => tier.id === workflow.tier) ?? pricingTiers[0];
