import type {
  IcpBundleSource,
  PricingTier,
  WorkflowItem,
} from "../icp-types";

export const categoryTabs = [
  "Popular",
  "Lead Capture",
  "Consultations",
  "Client Intake",
  "Case Follow-Up",
  "Operations",
  "Advanced",
  "All",
] as const;

export const siteConfig = {
  slug: "law-firms",
  industry: "Law Firms",
  audienceLabel: "law firm",
  audiencePlural: "law firms",
  segment: "Independent law firms and growing multi-attorney practices",
  persona: "Managing partner, attorney-owner, firm administrator, or intake lead",
  eyebrow: "AI workflows for law firms",
  headline: "Turn more qualified inquiries into clear, timely next steps.",
  subheadline:
    "Respond to new matters, capture approved intake details, route consultation requests, and keep client communication moving without asking attorneys to chase every handoff.",
  mobileHeadline: "Make every new legal inquiry easier to understand and act on.",
  outcomeFocus: "Faster response. Cleaner intake. Better-prepared consultations.",
  splashFeature: "New-matter response and consultation routing",
  quickStartPitch:
    "Start with one visible intake gap. Keep what works, then connect the next client-communication handoff.",
  scaleLabel: "Firm size",
  scaleOptions: [
    "Solo practice",
    "2–5 attorneys",
    "6–15 attorneys",
    "16–30 attorneys",
    "31–75 attorneys",
    "76+ attorneys or multiple offices",
  ],
  softwareLabel: "Current practice-management, intake, phone, and marketing tools",
  softwarePlaceholder:
    "Clio, MyCase, Lawmatics, PracticePanther, CRM, phone system, spreadsheets…",
  bottlenecks: [
    "New inquiries wait too long for a response",
    "After-hours calls are not captured consistently",
    "Intake details arrive incomplete",
    "Consultation scheduling creates too much back-and-forth",
    "Matters are routed to the wrong person",
    "Prospective clients go quiet before a consultation",
    "Engagement and document steps need manual chasing",
    "Clients ask repetitive status questions",
    "Referral follow-up is inconsistent",
    "We cannot see intake source and outcome clearly",
    "Our systems do not communicate",
    "Something else",
  ],
  trustItems: [
    "One-time project pricing",
    "Works with current tools",
    "Attorney review designed in",
    "No legal advice by automation",
    "Start small, expand later",
  ],
  buildNotes: [
    {
      title: "Start with one visible intake gap",
      detail:
        "The first workflow targets a measurable issue such as missed inquiries, incomplete intake, scheduling friction, or an unclear handoff.",
    },
    {
      title: "Attorneys remain responsible for legal judgment",
      detail:
        "Automation handles approved administrative steps; legal advice, strategy, conflicts, representation decisions, and sensitive exceptions stay with qualified people.",
    },
    {
      title: "Conflict and engagement gates stay explicit",
      detail:
        "The workflow never implies representation and routes conflict review, eligibility, fee approval, and engagement decisions to the firm.",
    },
    {
      title: "Privacy and access are scoped first",
      detail:
        "Intake fields, storage, integrations, retention, permissions, and staff ownership are reviewed before any sensitive workflow is connected.",
    },
    {
      title: "Communication rules are approved",
      detail:
        "Brand voice, disclaimers, timing, recording, consent, opt-outs, stop conditions, and human handoffs are documented before launch.",
    },
    {
      title: "Real intake paths are tested",
      detail:
        "Office hours, after-hours, duplicate matters, urgent language, failed handoffs, and staff notifications are checked before launch.",
    },
  ],
  complianceNote:
    "Elevate supports approved administrative intake, consultation scheduling, document requests, status communication, and firm operations. It does not provide legal advice, create an attorney-client relationship, perform conflict checks without firm review, accept a matter, set legal strategy, predict outcomes, or replace professional judgment. Privacy, confidentiality, privilege, recording, messaging, consent, retention, security, jurisdiction, and professional-responsibility requirements are reviewed during scope; no legal or compliance guarantee is implied.",
  consentCopy:
    "This form is for law-firm operations inquiries only—do not include client, matter, privileged, or confidential information. By submitting, you agree that Elevate may contact you about this request. Message and data rates may apply. Reply STOP to opt out of text messages.",
  chatWelcome:
    "Hi—I’m Elevate’s AI workflow advisor for law firms. Tell me where new-matter response, consultation scheduling, intake, or client communication gets stuck, and I’ll help identify a practical first workflow.",
  chatSuggestions: [
    "New inquiries wait too long",
    "Intake arrives incomplete",
    "Scheduling takes too much back-and-forth",
  ],
  metaTitle: "Elevate — AI Workflows for Law Firms",
  metaDescription:
    "Explore practical AI new-matter response, consultation scheduling, intake, client follow-up, and law-firm operations workflows.",
  theme: {
    accent: "#315C88",
    accentStrong: "#24486E",
    accentSoft: "rgba(49, 92, 136, 0.16)",
    secondary: "#C49A5A",
  },
} satisfies IcpBundleSource["siteConfig"];

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-start",
    name: "Legal Intake Quick Start",
    setup: 795,
    timeline: "3–5 business days",
    summary:
      "One focused missed-inquiry, consultation reminder, or follow-up workflow.",
  },
  {
    id: "connected-workflow",
    name: "Connected Firm Workflow",
    setup: 1795,
    timeline: "5–8 business days",
    summary:
      "A tailored intake, scheduling, document, or client-communication workflow.",
  },
  {
    id: "growth-system",
    name: "Client Journey System",
    setup: 3495,
    timeline: "1–2 weeks",
    summary:
      "Multi-step intake follow-up, referral routing, engagement support, or client communication.",
  },
  {
    id: "ai-calling",
    name: "24/7 Legal Intake Coverage",
    setup: 5295,
    timeline: "2–3 weeks",
    summary:
      "Approved administrative call flows with structured intake and clear staff escalation.",
    usageNote: "Calling and AI-provider usage is separate",
  },
  {
    id: "advanced",
    name: "Firm Operations Build",
    setup: 8995,
    timeline: "3–5 weeks",
    summary:
      "Multi-office routing, system coordination, source visibility, and operational reporting.",
  },
];

export const workflows: WorkflowItem[] = [
  {
    id: "new-matter-missed-call-response",
    name: "New-Matter Missed-Call Response",
    description:
      "Acknowledges a missed caller, captures approved contact and matter-category details, and alerts the firm without implying representation.",
    categories: ["Popular", "Lead Capture", "Client Intake"],
    icon: "phone-missed",
    badge: "Best first step",
    requirement: "Business calling and approved response language",
    tier: "quick-start",
  },
  {
    id: "instant-legal-inquiry-response",
    name: "Instant Web-Inquiry Response",
    description:
      "Responds to website and campaign inquiries, gathers approved missing details, and routes the next step to the right intake owner.",
    categories: ["Popular", "Lead Capture", "Client Intake"],
    icon: "zap",
    badge: "Quick win",
    requirement: "Lead source and approved reply flow",
    tier: "quick-start",
  },
  {
    id: "matter-type-routing",
    name: "Matter-Type & Office Routing",
    description:
      "Routes inquiries by practice area, geography, office, language, availability, and documented exceptions.",
    categories: ["Popular", "Lead Capture", "Client Intake", "Operations"],
    icon: "route",
    badge: "Admin saver",
    requirement: "Approved routing rules and staff ownership",
    tier: "connected-workflow",
  },
  {
    id: "consultation-request-scheduling",
    name: "Consultation Request & Scheduling",
    description:
      "Offers or requests approved consultation times while keeping conflicts, eligibility, fees, and representation decisions with the firm.",
    categories: ["Popular", "Consultations", "Client Intake"],
    icon: "calendar-check",
    badge: "High impact",
    requirement: "Calendar access and consultation rules",
    tier: "connected-workflow",
  },
  {
    id: "consultation-reminder-reschedule",
    name: "Consultation Reminder & Reschedule",
    description:
      "Sends approved reminders, captures reschedule requests, and keeps cancellations visible to the assigned intake owner.",
    categories: ["Consultations", "Case Follow-Up"],
    icon: "calendar-clock",
    badge: "Quick win",
    requirement: "Calendar trigger and approved messaging",
    tier: "quick-start",
  },
  {
    id: "structured-new-matter-intake",
    name: "Structured New-Matter Intake",
    description:
      "Collects firm-approved administrative information and produces a clean intake summary for human review.",
    categories: ["Popular", "Client Intake", "Operations"],
    icon: "clipboard-list",
    badge: "Admin saver",
    requirement: "Approved fields, privacy review, and secure destination",
    tier: "connected-workflow",
  },
  {
    id: "document-checklist-follow-up",
    name: "Document Checklist Follow-Up",
    description:
      "Tracks firm-requested administrative documents and reminds the sender when an approved checklist item remains incomplete.",
    categories: ["Client Intake", "Case Follow-Up"],
    icon: "file-text",
    requirement: "Approved checklist and secure upload path",
    tier: "connected-workflow",
  },
  {
    id: "prospective-client-follow-up",
    name: "Prospective Client Follow-Up",
    description:
      "Runs an approved follow-up sequence after an inquiry or consultation until the person responds, declines, or needs staff help.",
    categories: ["Popular", "Consultations", "Case Follow-Up"],
    icon: "messages-square",
    badge: "High impact",
    requirement: "Matter status, owner, and stop rules",
    tier: "growth-system",
  },
  {
    id: "engagement-step-reminders",
    name: "Engagement-Step Reminders",
    description:
      "Reminds prospective clients about firm-approved administrative next steps without representing that the matter has been accepted.",
    categories: ["Client Intake", "Case Follow-Up"],
    icon: "bell",
    requirement: "Approved milestone and engagement language",
    tier: "growth-system",
  },
  {
    id: "legal-intake-ai-receptionist",
    name: "24/7 Legal Intake Assistant",
    description:
      "Handles approved administrative calls, captures initial matter details, and transfers urgent, legal, or uncertain questions to staff.",
    categories: ["Popular", "Lead Capture", "Client Intake", "Operations"],
    icon: "headset",
    badge: "AI calling",
    requirement: "Approved script, disclaimers, and escalation path",
    tier: "ai-calling",
  },
  {
    id: "after-hours-legal-intake",
    name: "After-Hours Inquiry Capture",
    description:
      "Acknowledges after-hours inquiries, captures safe administrative details, and follows the firm’s approved urgency and handoff language.",
    categories: ["Lead Capture", "Client Intake", "Operations"],
    icon: "bell",
    badge: "AI calling",
    requirement: "After-hours policy and staff escalation rules",
    tier: "ai-calling",
  },
  {
    id: "client-status-request-routing",
    name: "Client Status-Request Routing",
    description:
      "Captures a status request, confirms receipt, and routes it to the assigned team without generating a substantive case update.",
    categories: ["Case Follow-Up", "Operations"],
    icon: "messages-square",
    requirement: "Matter ownership and approved acknowledgment",
    tier: "connected-workflow",
  },
  {
    id: "referral-intake-follow-up",
    name: "Referral Intake & Follow-Up",
    description:
      "Records referral-source details, routes the inquiry, and keeps the referring relationship informed through approved administrative updates.",
    categories: ["Lead Capture", "Case Follow-Up", "Operations"],
    icon: "users-round",
    requirement: "Referral fields and communication rules",
    tier: "growth-system",
  },
  {
    id: "practice-management-sync",
    name: "Practice-Management & CRM Orchestration",
    description:
      "Coordinates approved inquiry, contact, intake, consultation, and follow-up records across supported firm systems.",
    categories: ["Operations", "Advanced"],
    icon: "database",
    badge: "Advanced",
    requirement: "Supported system access and data mapping",
    tier: "advanced",
  },
  {
    id: "legal-intake-outcome-dashboard",
    name: "Intake & Consultation Outcome Dashboard",
    description:
      "Summarizes inquiry sources, response times, consultation outcomes, unresolved handoffs, and follow-up activity.",
    categories: ["Operations", "Advanced"],
    icon: "chart-column",
    badge: "Advanced",
    requirement: "Lead, call, calendar, and outcome data access",
    tier: "advanced",
  },
  {
    id: "multi-office-intake-orchestration",
    name: "Multi-Office Intake Orchestration",
    description:
      "Coordinates approved intake, routing, scheduling, alerts, records, and reporting across practice areas or offices.",
    categories: ["Client Intake", "Operations", "Advanced"],
    icon: "workflow",
    badge: "Advanced",
    requirement: "Office rules, ownership, privacy, and security review",
    tier: "advanced",
  },
];
