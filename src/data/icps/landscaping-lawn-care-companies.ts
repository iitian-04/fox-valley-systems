export const categoryTabs = [
  "Popular",
  "Quotes & Routes",
  "Lead Capture",
  "AI Calling",
  "Scheduling",
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
  "slug": "landscaping-lawn-care-companies",
  "industry": "Landscaping & Lawn Care Companies",
  "audienceLabel": "landscaping or lawn care company",
  "audiencePlural": "landscaping and lawn care companies",
  "segment": "Residential landscaping and recurring lawn-care companies with crews and seasonal demand",
  "persona": "Owner or operations manager",
  "eyebrow": "AI quote and route workflows",
  "headline": "Turn more quote requests into booked estimates and recurring routes.",
  "subheadline": "Respond quickly, collect property and service details, follow up on open quotes, and reactivate seasonal clients with less office work.",
  "mobileHeadline": "Turn seasonal quote volume into scheduled next steps.",
  "outcomeFocus": "Faster quote response. Better intake. More consistent follow-up.",
  "splashFeature": "Quote-request rescue",
  "quickStartPitch": "Start with the quote backlog or missed-call leak. Add route and capacity logic only after the first workflow proves useful.",
  "scaleLabel": "Crew and office team size",
  "scaleOptions": [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–75 people",
    "76–150 people",
    "151+ people"
  ],
  "softwareLabel": "Current field-service, estimating, routing, or CRM tools",
  "softwarePlaceholder": "Jobber, Aspire, LMN, Service Autopilot, spreadsheets…",
  "bottlenecks": [
    "Seasonal lead surges",
    "Slow quote response",
    "Open estimates are not followed up",
    "Crew schedule gaps",
    "Lapsed recurring clients",
    "Office overload",
    "Poor route density",
    "Manual property intake",
    "Something else"
  ],
  "trustItems": [
    "One-time project pricing",
    "Human pricing retained",
    "Works with current tools",
    "Consent-aware follow-up",
    "Start small, expand later"
  ],
  "complianceNote": "Automation gathers approved scope, location, timing, and photos where appropriate; it does not give a final price for variable work, guarantee weather or service outcomes, or promise contract growth. Complex projects stay human-scoped.",
  "consentCopy": "By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  "chatWelcome": "Hi—I’m Elevate’s AI workflow advisor for landscaping and lawn care companies. Tell me where quote requests, estimates, routes, or seasonal follow-up stall, and I’ll help identify a practical first workflow.",
  "chatSuggestions": [
    "Quote requests pile up",
    "Open estimates go cold",
    "We need denser routes"
  ],
  "metaTitle": "Elevate — AI Workflows for Landscaping & Lawn Care",
  "metaDescription": "Explore AI quote response, property intake, estimate booking, seasonal reactivation, route, and landscaping operations workflows.",
  "theme": {
    "accent": "#4db67d",
    "accentStrong": "#2d9160",
    "accentSoft": "rgba(77, 182, 125, 0.16)",
    "secondary": "#d4c85a"
  },
  "buildNotes": [
    {
      "title": "Approved answers and handoffs first",
      "detail": "Job questions, qualification fields, booking rules, and human escalation points are agreed before the landscaping or lawn care company workflow is built."
    },
    {
      "title": "Your office and field team stay in control",
      "detail": "Automation captures, follows up, and routes within approved rules. Technical, pricing, safety, and unusual situations go to a person."
    },
    {
      "title": "Built around the tools you have",
      "detail": "Current field-service, estimating, routing, or CRM tools access is checked before an integration is promised; a useful first workflow can often start beside the current stack."
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
    "name": "Quote Quick Start",
    "setup": 695,
    "timeline": "2–3 business days",
    "summary": "One focused lead, call, reminder, or follow-up workflow, configured and tested."
  },
  {
    "id": "connected-workflow",
    "name": "Estimate Workflow",
    "setup": 1495,
    "timeline": "3–5 business days",
    "summary": "A tailored intake, booking, routing, or follow-up workflow connected to the tools you already use."
  },
  {
    "id": "growth-system",
    "name": "Seasonal Growth System",
    "setup": 2795,
    "timeline": "5–8 business days",
    "summary": "Multi-step recovery, nurture, reactivation, or revenue workflow with reporting and handoffs."
  },
  {
    "id": "ai-calling",
    "name": "AI Call Coverage",
    "setup": 3995,
    "timeline": "5–10 business days",
    "summary": "Approved inbound or outbound AI calling with structured intake and human handoff.",
    "usageNote": "Phone and AI-provider usage is separate"
  },
  {
    "id": "advanced",
    "name": "Route Orchestration",
    "setup": 6995,
    "timeline": "1–3 weeks",
    "summary": "Deeper routing, dispatch, reporting, segmentation, or multi-system orchestration."
  }
];

export const workflows: WorkflowItem[] = [
  {
    "id": "quote-request-rescue",
    "name": "Quote-Request Rescue",
    "description": "Responds to missed calls and web quote requests, captures the essentials, and moves the prospect toward an estimate.",
    "categories": [
      "Popular",
      "Quotes & Routes",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "zap",
    "badge": "Best first step",
    "requirement": "Lead source and approved messaging",
    "tier": "quick-start"
  },
  {
    "id": "service-area-checker",
    "name": "Service-Area Checker",
    "description": "Confirms whether the property is inside the approved lawn-care or landscaping territory.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Operations"
    ],
    "icon": "route",
    "badge": "Quick win",
    "requirement": "Service territory rules",
    "tier": "quick-start"
  },
  {
    "id": "smart-property-intake",
    "name": "Smart Property & Service Intake",
    "description": "Collects service interest, address, property details, preferred timing, and photos where appropriate.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Estimates"
    ],
    "icon": "clipboard-list",
    "badge": "High impact",
    "requirement": "Approved intake fields",
    "tier": "connected-workflow"
  },
  {
    "id": "estimate-booking",
    "name": "Estimate Booking Workflow",
    "description": "Offers approved estimate windows or creates a staff-confirmation request based on area and availability.",
    "categories": [
      "Popular",
      "Quotes & Routes",
      "Scheduling",
      "Estimates"
    ],
    "icon": "calendar-check",
    "requirement": "Calendar and territory rules",
    "tier": "connected-workflow"
  },
  {
    "id": "open-estimate-follow-up",
    "name": "Open-Estimate Follow-Up",
    "description": "Runs consistent, stop-on-reply follow-up for landscaping and lawn-care estimates that have gone quiet.",
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
    "id": "seasonal-client-reactivation",
    "name": "Seasonal Client Reactivation",
    "description": "Segments eligible past clients and launches approved outreach at the right seasonal window.",
    "categories": [
      "Popular",
      "Follow-Up",
      "Operations"
    ],
    "icon": "refresh",
    "badge": "High impact",
    "requirement": "Client history and consent",
    "tier": "growth-system"
  },
  {
    "id": "landscaping-ai-receptionist",
    "name": "Landscaping AI Receptionist",
    "description": "Answers approved administrative questions, captures quote requests, and hands complex project or pricing questions to staff.",
    "categories": [
      "Popular",
      "AI Calling",
      "Lead Capture"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Approved script and handoff",
    "tier": "ai-calling"
  },
  {
    "id": "route-density-capacity-router",
    "name": "Route-Density & Crew-Capacity Router",
    "description": "Routes recurring and estimate opportunities by geography, crew capacity, service type, and approved priorities.",
    "categories": [
      "Quotes & Routes",
      "Scheduling",
      "Operations",
      "Advanced"
    ],
    "icon": "route",
    "badge": "Advanced",
    "requirement": "Route and capacity data",
    "tier": "advanced"
  },
  {
    "id": "missed-call-text-back",
    "name": "Missed-Call Text-Back",
    "description": "Texts missed callers, captures the service and address, and alerts the office to the new opportunity.",
    "categories": [
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "phone-missed",
    "badge": "Quick win",
    "requirement": "Business phone and SMS",
    "tier": "quick-start"
  },
  {
    "id": "estimate-reminders",
    "name": "Estimate Reminder & Reschedule",
    "description": "Confirms on-site estimate appointments and captures schedule changes before the slot is lost.",
    "categories": [
      "Scheduling",
      "Estimates",
      "Follow-Up"
    ],
    "icon": "calendar-check",
    "requirement": "Calendar and consent",
    "tier": "connected-workflow"
  },
  {
    "id": "recurring-plan-follow-up",
    "name": "Recurring Service Follow-Up",
    "description": "Moves interested homeowners toward an approved recurring plan or staff conversation.",
    "categories": [
      "Quotes & Routes",
      "Follow-Up"
    ],
    "icon": "messages-square",
    "requirement": "Approved plan details",
    "tier": "connected-workflow"
  },
  {
    "id": "lapsed-plan-caller",
    "name": "Seasonal Reactivation Caller",
    "description": "Calls eligible past clients with an approved script and records interest or a requested handoff.",
    "categories": [
      "AI Calling",
      "Follow-Up"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Client data and call consent",
    "tier": "ai-calling"
  },
  {
    "id": "form-to-field-service-sync",
    "name": "Form-to-Field-Service Sync",
    "description": "Creates or updates approved lead and customer records from forms, calls, and messages.",
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
    "id": "crew-gap-campaign",
    "name": "Crew Schedule-Gap Campaign",
    "description": "Identifies eligible capacity and prepares an approved same-area or seasonal outreach campaign.",
    "categories": [
      "Quotes & Routes",
      "Scheduling",
      "Operations"
    ],
    "icon": "calendar-clock",
    "requirement": "Schedule and customer data",
    "tier": "growth-system"
  },
  {
    "id": "quote-route-dashboard",
    "name": "Quote, Route & Capacity Dashboard",
    "description": "Shows lead source, estimate status, recurring-plan stage, route area, capacity, and unresolved actions.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "chart-column",
    "badge": "Advanced",
    "requirement": "CRM, estimate, and route data",
    "tier": "advanced"
  },
  {
    "id": "multi-territory-orchestration",
    "name": "Multi-Territory Operations Orchestration",
    "description": "Coordinates intake, estimate booking, follow-up, route logic, reactivation, and reporting across teams or territories.",
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
