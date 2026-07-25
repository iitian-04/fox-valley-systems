export const categoryTabs = [
  "Popular",
  "Initial Service",
  "Lead Capture",
  "AI Calling",
  "Scheduling",
  "Renewals",
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
  "slug": "pest-control-companies",
  "industry": "Pest Control Companies",
  "audienceLabel": "pest control company",
  "audiencePlural": "pest control companies",
  "segment": "Residential pest-control operators with recurring service plans",
  "persona": "Owner or general manager",
  "eyebrow": "AI booking and renewal workflows",
  "headline": "Turn seasonal lead spikes into first appointments—and more recurring customers.",
  "subheadline": "Respond quickly, book approved services, answer common questions, and keep renewals and win-backs moving with less customer-service work.",
  "mobileHeadline": "Turn peak-season inquiries into booked first service.",
  "outcomeFocus": "Faster response. Consistent renewals. Less repetitive service work.",
  "splashFeature": "Peak-season lead rescue",
  "quickStartPitch": "Start with the call or form backlog you can see. Add recurring-plan and reactivation workflows when the first one earns it.",
  "scaleLabel": "Field and customer-service team size",
  "scaleOptions": [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–75 people",
    "76–150 people",
    "151+ people"
  ],
  "softwareLabel": "Current field-service, routing, or CRM tools",
  "softwarePlaceholder": "PestPac, FieldRoutes, GorillaDesk, Jobber, spreadsheets…",
  "bottlenecks": [
    "Seasonal call spikes",
    "Missed calls",
    "Slow web-lead response",
    "Repetitive pricing questions",
    "Recurring-plan cancellations",
    "Lapsed customers",
    "Customer-service overload",
    "Territory routing issues",
    "Something else"
  ],
  "trustItems": [
    "One-time project pricing",
    "Approved answers only",
    "Works with current tools",
    "Human handoff included",
    "Start small, expand later"
  ],
  "complianceNote": "Automation does not identify a pest with certainty, promise elimination, provide safety guarantees, or quote variable work outside approved rules. Technical, chemical, safety, health, and unusual questions go to trained staff.",
  "consentCopy": "By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  "chatWelcome": "Hi—I’m Elevate’s AI workflow advisor for pest control companies. Tell me where new leads, renewals, or customer communication get stuck, and I’ll help identify a practical first workflow.",
  "chatSuggestions": [
    "Peak-season calls overwhelm us",
    "Renewals are inconsistent",
    "Lapsed customers stay lapsed"
  ],
  "metaTitle": "Elevate — AI Workflows for Pest Control Companies",
  "metaDescription": "Explore AI lead response, initial-service booking, renewals, reactivation, customer communication, and pest operations workflows.",
  "theme": {
    "accent": "#5cbf69",
    "accentStrong": "#3b9848",
    "accentSoft": "rgba(92, 191, 105, 0.16)",
    "secondary": "#f0c35a"
  },
  "buildNotes": [
    {
      "title": "Approved answers and handoffs first",
      "detail": "Job questions, qualification fields, booking rules, and human escalation points are agreed before the pest control company workflow is built."
    },
    {
      "title": "Your office and field team stay in control",
      "detail": "Automation captures, follows up, and routes within approved rules. Technical, pricing, safety, and unusual situations go to a person."
    },
    {
      "title": "Built around the tools you have",
      "detail": "Current field-service, routing, or CRM tools access is checked before an integration is promised; a useful first workflow can often start beside the current stack."
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
    "name": "Peak-Season Quick Start",
    "setup": 695,
    "timeline": "2–3 business days",
    "summary": "One focused lead, call, reminder, or follow-up workflow, configured and tested."
  },
  {
    "id": "connected-workflow",
    "name": "Booking Workflow",
    "setup": 1495,
    "timeline": "3–5 business days",
    "summary": "A tailored intake, booking, routing, or follow-up workflow connected to the tools you already use."
  },
  {
    "id": "growth-system",
    "name": "Recurring Growth System",
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
    "name": "Territory Orchestration",
    "setup": 6995,
    "timeline": "1–3 weeks",
    "summary": "Deeper routing, dispatch, reporting, segmentation, or multi-system orchestration."
  }
];

export const workflows: WorkflowItem[] = [
  {
    "id": "peak-season-lead-rescue",
    "name": "Peak-Season Lead Rescue",
    "description": "Responds to missed calls and web inquiries quickly, captures approved details, and moves the lead toward a first appointment.",
    "categories": [
      "Popular",
      "Initial Service",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "zap",
    "badge": "Best first step",
    "requirement": "Lead source and approved messaging",
    "tier": "quick-start"
  },
  {
    "id": "approved-pest-service-faq",
    "name": "Approved Pest-Service FAQ",
    "description": "Answers approved questions about service areas, process, preparation, scheduling, and policy without identifying pests or making guarantees.",
    "categories": [
      "Popular",
      "Lead Capture"
    ],
    "icon": "circle-help",
    "badge": "Quick win",
    "requirement": "Approved FAQ content",
    "tier": "quick-start"
  },
  {
    "id": "initial-service-booking",
    "name": "Initial-Service Booking",
    "description": "Offers approved availability and creates the first-service appointment or a staff-confirmation request.",
    "categories": [
      "Popular",
      "Initial Service",
      "Scheduling"
    ],
    "icon": "calendar-check",
    "badge": "High impact",
    "requirement": "Calendar and service rules",
    "tier": "connected-workflow"
  },
  {
    "id": "recurring-plan-follow-up",
    "name": "Recurring-Plan Follow-Up",
    "description": "Explains approved plan options, captures interest, and routes pricing or exception questions to staff.",
    "categories": [
      "Popular",
      "Renewals",
      "Follow-Up"
    ],
    "icon": "messages-square",
    "requirement": "Approved plan details",
    "tier": "connected-workflow"
  },
  {
    "id": "cancellation-renewal-reminder",
    "name": "Cancellation & Renewal Reminder",
    "description": "Runs an approved save or renewal workflow when a recurring customer reaches a defined trigger.",
    "categories": [
      "Popular",
      "Renewals",
      "Follow-Up"
    ],
    "icon": "refresh",
    "badge": "High impact",
    "requirement": "Plan status and consent",
    "tier": "growth-system"
  },
  {
    "id": "lapsed-customer-reactivation",
    "name": "Lapsed-Customer Reactivation",
    "description": "Segments eligible past customers and launches seasonally relevant, approved win-back outreach.",
    "categories": [
      "Popular",
      "Renewals",
      "Follow-Up"
    ],
    "icon": "refresh",
    "badge": "High impact",
    "requirement": "Customer history and consent",
    "tier": "growth-system"
  },
  {
    "id": "pest-control-ai-receptionist",
    "name": "Pest Control AI Receptionist",
    "description": "Answers approved administrative questions, captures first-service requests, and transfers technical or safety exceptions.",
    "categories": [
      "Popular",
      "AI Calling",
      "Lead Capture"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Approved call script and handoff",
    "tier": "ai-calling"
  },
  {
    "id": "territory-season-segmentation",
    "name": "Territory, Season & Churn Segmentation",
    "description": "Groups leads and customers by area, service history, plan status, season, and approved engagement signals.",
    "categories": [
      "Renewals",
      "Operations",
      "Advanced"
    ],
    "icon": "users-round",
    "badge": "Advanced",
    "requirement": "Customer and territory data",
    "tier": "advanced"
  },
  {
    "id": "missed-call-text-back",
    "name": "Missed-Call Text-Back",
    "description": "Texts missed callers, captures contact and service-area details, and alerts the customer-service team.",
    "categories": [
      "Initial Service",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "phone-missed",
    "badge": "Quick win",
    "requirement": "Business phone and SMS",
    "tier": "quick-start"
  },
  {
    "id": "service-area-checker",
    "name": "Service-Area Checker",
    "description": "Confirms whether the submitted address is inside an approved pest-control territory.",
    "categories": [
      "Lead Capture",
      "Operations"
    ],
    "icon": "route",
    "badge": "Quick win",
    "requirement": "Territory rules",
    "tier": "quick-start"
  },
  {
    "id": "appointment-reminders",
    "name": "Appointment Reminder & Reschedule",
    "description": "Sends approved reminders and captures schedule-change requests before route time is lost.",
    "categories": [
      "Scheduling",
      "Follow-Up"
    ],
    "icon": "calendar-check",
    "requirement": "Calendar and consent",
    "tier": "connected-workflow"
  },
  {
    "id": "plan-renewal-caller",
    "name": "Plan Renewal Caller",
    "description": "Calls eligible customers with an approved script and records renewal interest or a staff-requested handoff.",
    "categories": [
      "AI Calling",
      "Renewals"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Plan data and call consent",
    "tier": "ai-calling"
  },
  {
    "id": "form-to-field-service-sync",
    "name": "Form-to-Field-Service Sync",
    "description": "Creates or updates approved lead and service records from forms, calls, and messages.",
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
    "id": "route-exception-alerts",
    "name": "Route & Customer Exception Alerts",
    "description": "Notifies the right owner when a booking, cancellation, route, or customer request falls outside approved automation.",
    "categories": [
      "Scheduling",
      "Operations"
    ],
    "icon": "bell",
    "badge": "Admin saver",
    "requirement": "Workflow trigger data",
    "tier": "connected-workflow"
  },
  {
    "id": "recurring-revenue-dashboard",
    "name": "Recurring Plan & Lead Dashboard",
    "description": "Shows first-service inquiries, bookings, renewals, cancellations, lapsed accounts, and unresolved actions.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "chart-column",
    "badge": "Advanced",
    "requirement": "Field-service and CRM data",
    "tier": "advanced"
  },
  {
    "id": "multi-territory-orchestration",
    "name": "Multi-Territory Service Orchestration",
    "description": "Coordinates lead capture, area routing, booking, renewal follow-up, and reporting across territories.",
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
