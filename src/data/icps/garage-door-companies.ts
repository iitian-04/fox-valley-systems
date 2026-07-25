export const categoryTabs = [
  "Popular",
  "Book Repairs",
  "Lead Capture",
  "AI Calling",
  "Scheduling & Dispatch",
  "Repairs & Estimates",
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
  "slug": "garage-door-companies",
  "industry": "Garage Door Companies",
  "audienceLabel": "garage door company",
  "audiencePlural": "garage door companies",
  "segment": "Residential garage-door repair and installation companies with local inbound demand",
  "persona": "Owner or dispatcher",
  "eyebrow": "AI repair-booking workflows",
  "headline": "Turn urgent repair calls into booked visits—day, night, and weekend.",
  "subheadline": "Respond immediately, collect the essentials, and move qualified requests toward a visit without expanding the office team.",
  "mobileHeadline": "Recover the next urgent garage door lead.",
  "outcomeFocus": "Faster response. Cleaner requests. More dispatch-ready calls.",
  "splashFeature": "Urgent repair lead rescue",
  "quickStartPitch": "Start with missed-call recovery or a service-area check. Add booking and estimate follow-up after the first leak is fixed.",
  "scaleLabel": "Technician and office team size",
  "scaleOptions": [
    "1–5 people",
    "6–15 people",
    "16–30 people",
    "31–75 people",
    "76–150 people",
    "151+ people"
  ],
  "softwareLabel": "Current dispatch, CRM, or field-service tools",
  "softwarePlaceholder": "ServiceTitan, Housecall Pro, Jobber, Service Fusion, spreadsheets…",
  "bottlenecks": [
    "Missed urgent calls",
    "After-hours demand",
    "Slow lead response",
    "Price shoppers",
    "Unfollowed installation estimates",
    "Dispatcher overload",
    "Technician capacity goes unused",
    "Lead-source confusion",
    "Something else"
  ],
  "trustItems": [
    "One-time project pricing",
    "No remote diagnosis",
    "Works with current tools",
    "Human handoff included",
    "Start small, expand later"
  ],
  "complianceNote": "Automation does not diagnose a door, provide safety assurances, or give a firm price without an inspection. Technical, hazardous, trapped-person, unclear, and exception situations follow company-approved human escalation.",
  "consentCopy": "By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  "chatWelcome": "Hi—I’m Elevate’s AI workflow advisor for garage door companies. Tell me where repair calls, dispatch, or estimates get stuck, and I’ll help identify a practical first workflow.",
  "chatSuggestions": [
    "We miss urgent repair calls",
    "Our estimates go quiet",
    "Dispatch is overloaded"
  ],
  "metaTitle": "Elevate — AI Workflows for Garage Door Companies",
  "metaDescription": "Explore AI repair lead response, intake, booking, estimate follow-up, dispatch, and garage door operations workflows.",
  "theme": {
    "accent": "#e8693d",
    "accentStrong": "#ca4823",
    "accentSoft": "rgba(232, 105, 61, 0.16)",
    "secondary": "#6fd4ff"
  },
  "buildNotes": [
    {
      "title": "Approved answers and handoffs first",
      "detail": "Job questions, qualification fields, booking rules, and human escalation points are agreed before the garage door company workflow is built."
    },
    {
      "title": "Your office and field team stay in control",
      "detail": "Automation captures, follows up, and routes within approved rules. Technical, pricing, safety, and unusual situations go to a person."
    },
    {
      "title": "Built around the tools you have",
      "detail": "Current dispatch, CRM, or field-service tools access is checked before an integration is promised; a useful first workflow can often start beside the current stack."
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
    "name": "Repair Lead Quick Start",
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
    "name": "Garage Door Growth System",
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
    "name": "Dispatch Orchestration",
    "setup": 6995,
    "timeline": "1–3 weeks",
    "summary": "Deeper routing, dispatch, reporting, segmentation, or multi-system orchestration."
  }
];

export const workflows: WorkflowItem[] = [
  {
    "id": "urgent-repair-lead-rescue",
    "name": "Urgent Repair Lead Rescue",
    "description": "Immediately follows up with missed callers, captures the request and location, and alerts dispatch.",
    "categories": [
      "Popular",
      "Book Repairs",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "phone-missed",
    "badge": "Best first step",
    "requirement": "Business phone and approved SMS",
    "tier": "quick-start"
  },
  {
    "id": "service-area-checker",
    "name": "Service-Area Checker",
    "description": "Confirms whether the repair or installation address is inside the approved territory.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Operations"
    ],
    "icon": "route",
    "badge": "Quick win",
    "requirement": "Service ZIP or map rules",
    "tier": "quick-start"
  },
  {
    "id": "repair-request-intake",
    "name": "Repair-Request Intake",
    "description": "Collects approved door, opener, symptom, access, location, and timing details without diagnosing the problem.",
    "categories": [
      "Popular",
      "Lead Capture",
      "Repairs & Estimates"
    ],
    "icon": "clipboard-list",
    "badge": "High impact",
    "requirement": "Approved intake fields",
    "tier": "connected-workflow"
  },
  {
    "id": "appointment-booking",
    "name": "Repair Appointment Booking",
    "description": "Offers approved windows or creates a dispatch-ready request for staff confirmation.",
    "categories": [
      "Popular",
      "Book Repairs",
      "Scheduling & Dispatch"
    ],
    "icon": "calendar-check",
    "requirement": "Calendar and booking rules",
    "tier": "connected-workflow"
  },
  {
    "id": "price-shopper-follow-up",
    "name": "Price-Shopper Follow-Up",
    "description": "Sends approved, non-diagnostic follow-up that moves price-sensitive inquiries toward an inspection or staff conversation.",
    "categories": [
      "Popular",
      "Repairs & Estimates",
      "Follow-Up"
    ],
    "icon": "messages-square",
    "requirement": "Approved messaging",
    "tier": "connected-workflow"
  },
  {
    "id": "installation-estimate-follow-up",
    "name": "Installation Estimate Follow-Up",
    "description": "Keeps open replacement and installation estimates moving with consistent reminders and staff tasks.",
    "categories": [
      "Popular",
      "Repairs & Estimates",
      "Follow-Up"
    ],
    "icon": "file-text",
    "badge": "High impact",
    "requirement": "Estimate status data",
    "tier": "growth-system"
  },
  {
    "id": "garage-door-ai-receptionist",
    "name": "Garage Door AI Receptionist",
    "description": "Answers approved administrative questions, captures repair requests, and transfers safety, technical, or unusual cases.",
    "categories": [
      "Popular",
      "AI Calling",
      "Lead Capture"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Approved script and escalation",
    "tier": "ai-calling"
  },
  {
    "id": "technician-area-router",
    "name": "Technician, Area & Job Router",
    "description": "Routes requests by territory, job category, availability, and technician capability.",
    "categories": [
      "Scheduling & Dispatch",
      "Operations",
      "Advanced"
    ],
    "icon": "route",
    "badge": "Advanced",
    "requirement": "Technician and territory rules",
    "tier": "advanced"
  },
  {
    "id": "after-hours-request-capture",
    "name": "After-Hours Request Capture",
    "description": "Captures the essentials after hours and creates a prioritized handoff for the on-call or next-day team.",
    "categories": [
      "Book Repairs",
      "Lead Capture",
      "Follow-Up"
    ],
    "icon": "clipboard-list",
    "requirement": "After-hours policy",
    "tier": "connected-workflow"
  },
  {
    "id": "repair-reminders",
    "name": "Repair Reminder & Reschedule",
    "description": "Confirms upcoming visits and captures reschedule requests before the technician slot is lost.",
    "categories": [
      "Scheduling & Dispatch",
      "Follow-Up"
    ],
    "icon": "calendar-check",
    "badge": "Quick win",
    "requirement": "Calendar and consent",
    "tier": "quick-start"
  },
  {
    "id": "old-lead-reactivation",
    "name": "Past Inquiry Reactivation",
    "description": "Re-engages eligible repair or installation inquiries using approved timing and offers.",
    "categories": [
      "Follow-Up"
    ],
    "icon": "refresh",
    "requirement": "Lead history and consent",
    "tier": "growth-system"
  },
  {
    "id": "form-to-dispatch-sync",
    "name": "Form-to-Dispatch Sync",
    "description": "Creates or updates the approved customer and request record from calls and web forms.",
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
    "id": "estimate-outcome-caller",
    "name": "Estimate Outcome Caller",
    "description": "Calls open installation estimates with an approved script and records the response for staff.",
    "categories": [
      "AI Calling",
      "Repairs & Estimates",
      "Follow-Up"
    ],
    "icon": "headset",
    "badge": "AI calling",
    "requirement": "Estimate data and call consent",
    "tier": "ai-calling"
  },
  {
    "id": "daily-dispatch-digest",
    "name": "Daily Dispatch Digest",
    "description": "Summarizes new repair leads, bookings, missed calls, open estimates, and unresolved items.",
    "categories": [
      "Operations"
    ],
    "icon": "chart-column",
    "badge": "Admin saver",
    "requirement": "Workflow data access",
    "tier": "connected-workflow"
  },
  {
    "id": "lead-source-dashboard",
    "name": "Lead Source & Booking Dashboard",
    "description": "Shows source, response, booking handoff, estimate stage, and unresolved lead outcomes.",
    "categories": [
      "Operations",
      "Advanced"
    ],
    "icon": "chart-column",
    "badge": "Advanced",
    "requirement": "Call, CRM, and dispatch data",
    "tier": "advanced"
  },
  {
    "id": "multi-location-orchestration",
    "name": "Multi-Location Repair Orchestration",
    "description": "Coordinates intake, routing, booking, follow-up, and reporting across territories or branches.",
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
