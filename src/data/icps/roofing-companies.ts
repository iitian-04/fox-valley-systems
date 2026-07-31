export const categoryTabs = [
  "Popular",
  "Book Inspections",
  "Lead Capture",
  "AI Calling",
  "Inspections & Estimates",
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
  "slug": "roofing-companies",
  "industry": "Roofing Companies",
  "audienceLabel": "roofing company",
  "audiencePlural": "roofing companies",
  "segment": "Residential roofing companies with active lead generation and sales teams",
  "persona": "Owner or sales manager",
  "eyebrow": "lead-to-inspection workflows",
  "headline": "Contact every roofing lead fast—and follow it through to inspection.",
  "subheadline": "Give storm, referral, and paid leads an immediate response, consistent follow-up, and a clear owner without relying on every rep to remember every touch.",
  "mobileHeadline": "Turn more roofing leads into booked inspections.",
  "outcomeFocus": "Faster response. Clear lead ownership. Consistent follow-up.",
  "splashFeature": "Instant inspection lead response",
  "quickStartPitch": "Start with the first five minutes after a lead arrives. Add inspection and estimate workflows after it proves useful.",
  "scaleLabel": "Sales and production team size",
  "scaleOptions": [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–75 people",
    "76–150 people",
    "151+ people"
  ],
  "softwareLabel": "Current CRM, estimating, or roofing software",
  "softwarePlaceholder": "JobNimbus, AccuLynx, HubSpot, spreadsheets, call system…",
  "bottlenecks": [
    "Leads are contacted too slowly",
    "Sales reps cherry-pick leads",
    "Open estimates are not followed up",
    "Storm-season lead spikes",
    "Inspection no-shows",
    "Weak CRM discipline",
    "Missed calls",
    "Lead ownership is unclear",
    "Something else"
  ],
  "trustItems": [
    "One-time project pricing",
    "Works with current tools",
    "Consent-aware outreach",
    "Human handoff included",
    "Start small, expand later"
  ],
  "complianceNote": "Automation does not inspect a roof, make insurance or claim-approval promises, guarantee revenue, or provide a final estimate. Outreach cadence, consent, quiet hours, recording, opt-out, and local requirements are confirmed during scope review.",
  "consentCopy": "By submitting, you agree that Fox Valley Systems may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  "chatWelcome": "Hi—I’m the Fox Valley workflow advisor for roofing companies. Tell me where leads, inspections, or estimates stall, and I’ll help identify a practical first workflow.",
  "chatSuggestions": [
    "Our reps respond too slowly",
    "Open estimates go cold",
    "Storm leads overwhelm us"
  ],
  "metaTitle": "Fox Valley Systems — Workflows for Roofing Companies",
  "metaDescription": "Explore practical lead response, inspection booking, estimate follow-up, rep routing, and roofing operations workflows.",
  "theme": {
    "accent": "#2563eb",
    "accentStrong": "#2563eb",
    "accentSoft": "rgba(37, 99, 235, 0.09)",
    "secondary": "#6b7280"
  },
  "buildNotes": [
    {
      "title": "Approved answers and handoffs first",
      "detail": "Job questions, qualification fields, booking rules, and human escalation points are agreed before the roofing company workflow is built."
    },
    {
      "title": "Your office and field team stay in control",
      "detail": "Automation captures, follows up, and routes within approved rules. Technical, pricing, safety, and unusual situations go to a person."
    },
    {
      "title": "Built around the tools you have",
      "detail": "Current CRM, estimating, or roofing software access is checked before an integration is promised; a useful first workflow can often start beside the current stack."
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
    "name": "Lead Response Quick Start",
    "setup": 895,
    "timeline": "2–3 business days",
    "summary": "One focused lead, call, reminder, or follow-up workflow, configured and tested."
  },
  {
    "id": "connected-workflow",
    "name": "Inspection Workflow",
    "setup": 1895,
    "timeline": "3–5 business days",
    "summary": "A tailored intake, booking, routing, or follow-up workflow connected to the tools you already use."
  },
  {
    "id": "growth-system",
    "name": "Roofing Growth System",
    "setup": 3495,
    "timeline": "5–8 business days",
    "summary": "Multi-step recovery, nurture, reactivation, or revenue workflow with reporting and handoffs."
  },
  {
    "id": "ai-calling",
    "name": "Outbound Lead Calling",
    "setup": 5295,
    "timeline": "5–10 business days",
    "summary": "Approved inbound or outbound calling with structured intake and human handoff.",
    "usageNote": "Phone and AI-provider usage is separate"
  },
  {
    "id": "advanced",
    "name": "Pipeline Orchestration",
    "setup": 8995,
    "timeline": "1–3 weeks",
    "summary": "Deeper routing, dispatch, reporting, segmentation, or multi-system orchestration."
  }
];

export const workflows: WorkflowItem[] = [
  {
    "id": "instant-inspection-lead-response",
    "name": "Instant Inspection Lead Response",
    "description": "Responds to new storm, referral, and paid leads within moments and moves each toward an inspection or human conversation.",
    "categories": [
      "Popular",
      "Book Inspections",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "zap",
    "badge": "Best first step",
    "requirement": "Lead source and approved messaging",
    "tier": "quick-start"
  },
  {
    "id": "missed-call-recovery",
    "name": "Missed-Call Roofing Lead Recovery",
    "description": "Texts missed callers, captures the property address and request, and alerts the right sales owner.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "phone-missed",
    "badge": "Quick win",
    "requirement": "Business phone and SMS",
    "tier": "quick-start"
  },
  {
    "id": "inspection-booking",
    "name": "Inspection Booking Workflow",
    "description": "Offers approved inspection windows and creates a clean booking handoff for the assigned rep.",
    "categories": [
      "Popular",
      "Book Inspections",
      "Inspections & Estimates"
    ],
    "icon": "calendar-check",
    "badge": "High impact",
    "requirement": "Calendar and territory rules",
    "tier": "connected-workflow"
  },
  {
    "id": "lead-to-rep-routing",
    "name": "Lead-to-Rep Routing",
    "description": "Assigns leads by territory, source, availability, job type, and management rules instead of leaving ownership unclear.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Operations"
    ],
    "icon": "route",
    "badge": "Admin saver",
    "requirement": "Rep and territory rules",
    "tier": "connected-workflow"
  },
  {
    "id": "no-response-nurture",
    "name": "No-Response Lead Nurture",
    "description": "Runs an approved, stop-on-reply follow-up cadence when a roofing lead does not answer the first outreach.",
    "categories": [
      "Popular",
      "Follow-Up"
    ],
    "icon": "messages-square",
    "badge": "High impact",
    "requirement": "CRM stage and messaging consent",
    "tier": "growth-system"
  },
  {
    "id": "estimate-proposal-follow-up",
    "name": "Estimate & Proposal Follow-Up",
    "description": "Keeps open roofing estimates moving with personalized reminders, reply capture, and rep tasks.",
    "categories": [
      "Popular",
      "Inspections & Estimates",
      "Follow-Up"
    ],
    "icon": "file-text",
    "badge": "High impact",
    "requirement": "Estimate status data",
    "tier": "growth-system"
  },
  {
    "id": "roofing-lead-calling",
    "name": "Roofing Lead Calling",
    "description": "Calls new or unresponsive leads with an approved script, captures intent, and transfers or books within defined rules.",
    "categories": [
      "AI Calling",
      "Book Inspections"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Approved call script and handoff",
    "tier": "ai-calling"
  },
  {
    "id": "storm-surge-router",
    "name": "Storm-Surge Lead Router",
    "description": "Prioritizes and distributes high-volume storm inquiries by geography, capacity, source, and team availability.",
    "categories": [
      "Book Inspections",
      "Lead Capture",
      "Operations",
      "Advanced"
    ],
    "icon": "route",
    "badge": "Advanced",
    "requirement": "Territory and capacity data",
    "tier": "advanced"
  },
  {
    "id": "inspection-reminder",
    "name": "Inspection Reminder & Reschedule",
    "description": "Confirms upcoming inspections and captures reschedule requests before the rep loses the time slot.",
    "categories": [
      "Book Inspections",
      "Follow-Up"
    ],
    "icon": "calendar-check",
    "badge": "Quick win",
    "requirement": "Calendar and approved reminders",
    "tier": "quick-start"
  },
  {
    "id": "old-lead-reactivation",
    "name": "Old Roofing Lead Reactivation",
    "description": "Segments past inquiries and runs an approved re-engagement workflow around relevant timing or events.",
    "categories": [
      "Follow-Up",
      "Operations"
    ],
    "icon": "refresh",
    "requirement": "Lead history and consent",
    "tier": "growth-system"
  },
  {
    "id": "rep-task-automation",
    "name": "Rep Follow-Up Task Automation",
    "description": "Creates the right rep task when a call, form, inspection, or estimate reaches a defined stage.",
    "categories": [
      "Operations"
    ],
    "icon": "bell",
    "badge": "Admin saver",
    "requirement": "CRM or notification channel",
    "tier": "connected-workflow"
  },
  {
    "id": "form-to-crm-sync",
    "name": "Lead Form-to-CRM Sync",
    "description": "Creates or updates the roofing lead record from approved form and call fields without manual re-entry.",
    "categories": [
      "Lead Capture",
      "Operations"
    ],
    "icon": "database",
    "badge": "Admin saver",
    "requirement": "CRM access",
    "tier": "connected-workflow"
  },
  {
    "id": "inspection-no-show-recovery",
    "name": "Inspection No-Show Recovery",
    "description": "Follows up after a missed inspection and offers a staff-approved path to reschedule.",
    "categories": [
      "Book Inspections",
      "Follow-Up"
    ],
    "icon": "refresh",
    "requirement": "Appointment status trigger",
    "tier": "connected-workflow"
  },
  {
    "id": "lead-source-dashboard",
    "name": "Lead Source & Disposition Dashboard",
    "description": "Shows response time, ownership, inspections, open estimates, and outcomes by source without promising revenue.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "chart-column",
    "badge": "Advanced",
    "requirement": "CRM, call, and source data",
    "tier": "advanced"
  },
  {
    "id": "pipeline-hygiene",
    "name": "Roofing Pipeline Hygiene Workflow",
    "description": "Flags stalled, unowned, duplicate, and incomplete opportunities for the right next action.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "shield-check",
    "badge": "Advanced",
    "requirement": "CRM pipeline access",
    "tier": "advanced"
  },
  {
    "id": "multi-market-orchestration",
    "name": "Multi-Market Lead Orchestration",
    "description": "Coordinates lead capture, territory routing, follow-up, rep tasks, and reporting across branches or markets.",
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
