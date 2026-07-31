"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  Bell,
  CalendarCheck,
  CalendarClock,
  ChartColumn,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Database,
  FileText,
  Headphones,
  ListChecks,
  MessageCircle,
  MessagesSquare,
  MonitorPlay,
  PhoneMissed,
  Plug,
  Plus,
  RefreshCw,
  Route,
  Search,
  Send,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  type CSSProperties,
  type FormEvent,
  type MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getWorkflowPricing,
  categoryCount,
  type IcpBundle,
  type WorkflowIcon,
  type WorkflowItem,
} from "@/data/icp-types";
import { getChatAdvisorImage, getNicheHeroImage } from "@/data/icp-images";
import { getWorkExample } from "@/data/work-examples";
import { formatUsd } from "@/lib/promo";
import { LEGAL_VERSION } from "@/lib/legal";
import {
  BRAND_NAME,
  BRAND_SHORT,
  FoxValleyLockup,
  FoxValleyMark,
} from "@/components/brand";

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  website: string;
  scale: string;
  software: string;
  bottleneck: string;
  goal: string;
};

type Attribution = {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  utmPromo: string;
  utmIcp: string;
  gclid: string;
  fbclid: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatResponse = {
  reply?: string;
  leadSubmitted?: boolean;
  error?: string;
};

type WebhookTestResponse = {
  leadSubmitted?: boolean;
  submittedAt?: string;
  error?: string;
};

type WebhookTestStatus =
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const WEBHOOK_TEST_CLICK_COUNT = 20;
const WEBHOOK_TEST_CLICK_WINDOW_MS = 8_000;

const iconMap: Record<WorkflowIcon, LucideIcon> = {
  headset: Headphones,
  "phone-missed": PhoneMissed,
  zap: Zap,
  "calendar-check": CalendarCheck,
  "calendar-clock": CalendarClock,
  "clipboard-list": ClipboardList,
  "circle-help": CircleHelp,
  route: Route,
  "file-text": FileText,
  "messages-square": MessagesSquare,
  refresh: RefreshCw,
  database: Database,
  "chart-column": ChartColumn,
  bell: Bell,
  "shield-check": ShieldCheck,
  workflow: Workflow,
  "users-round": UsersRound,
};

const workflowOutcomeByTier: Record<WorkflowItem["tier"], string> = {
  "quick-start": "Faster response with less manual follow-up.",
  "connected-workflow": "Cleaner handoffs with fewer requests slipping through.",
  "growth-system": "More opportunities receive consistent follow-up.",
  "ai-calling": "More calls handled with a clear human handoff.",
  advanced: "Clearer ownership, visibility, and fewer process gaps.",
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  website: "",
  scale: "",
  software: "",
  bottleneck: "",
  goal: "",
};

const emptyAttribution: Attribution = {
  landingPage: "",
  referrer: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
  utmPromo: "",
  utmIcp: "",
  gclid: "",
  fbclid: "",
};

const buildProcessStages = [
  {
    title: "Scope the first win",
    detail: "Map the trigger, approved responses, system access, exceptions, and human owner.",
    deliverable: "Clear scope + confirmed price",
  },
  {
    title: "Build around your tools",
    detail: "Configure one useful workflow without forcing a software replacement.",
    deliverable: "Working workflow ready for review",
  },
  {
    title: "Test real situations",
    detail: "Check normal paths, edge cases, alerts, opt-outs, and human escalation.",
    deliverable: "Completed launch checklist",
  },
  {
    title: "Launch and hand off",
    detail: "Activate the workflow and give your team its logic, ownership points, and operating guide.",
    deliverable: "A workflow your team can run",
  },
] as const;

const selectedLabel = (count: number) =>
  count === 0 ? "No workflows selected" : `${count} workflow${count === 1 ? "" : "s"} selected`;

function Wordmark({ compact = false }: { compact?: boolean }) {
  return <FoxValleyLockup compact={compact} />;
}

function MobileSplash({
  leaving,
  siteConfig,
}: {
  leaving: boolean;
  siteConfig: IcpBundle["siteConfig"];
}) {
  return (
    <div
      className={`mobile-splash${leaving ? " leaving" : ""}`}
      role="status"
      aria-label={`Opening ${BRAND_NAME} for ${siteConfig.industry}`}
    >
      <div className="splash-glow" />
      <Wordmark />
      <span className="splash-kicker">{siteConfig.eyebrow}</span>
      <h1>{siteConfig.mobileHeadline}</h1>
      <p>Start with one workflow. Expand only when the value is clear.</p>
      <div className="splash-tech-card">
        <span><Zap size={18} /></span>
        <div>
          <small>Suggested first win</small>
          <strong>{siteConfig.splashFeature}</strong>
        </div>
        <Check size={16} />
      </div>
      <div className="splash-trust">
        <span><ShieldCheck size={13} />Works with current tools</span>
        <span><Workflow size={13} />Human handoff included</span>
      </div>
      <div className="splash-loader" aria-hidden="true"><span /></div>
    </div>
  );
}

function ProfilePanel({
  onOpenStandards,
  siteConfig,
}: {
  onOpenStandards: () => void;
  siteConfig: IcpBundle["siteConfig"];
}) {
  const nicheHeroImage = getNicheHeroImage(siteConfig.slug);

  return (
    <aside className="profile-panel">
      <div className="profile-copy">
        <div className="eyebrow"><span />{siteConfig.eyebrow}</div>
        <h1>{siteConfig.headline}</h1>
        <p>{siteConfig.subheadline}</p>
      </div>

      <div className="orchestrator-card">
        <div className="orchestrator-image">
          <Image
            src={nicheHeroImage.src}
            alt={nicheHeroImage.alt}
            fill
            sizes="330px"
            loading="eager"
          />
        </div>
        <div className="orchestrator-overlay">
          <span><i />Start with one workflow</span>
          <strong>{siteConfig.outcomeFocus}</strong>
        </div>
      </div>

      <button className="feedback-card" type="button" onClick={onOpenStandards} aria-haspopup="dialog" aria-controls="build-standards-dialog">
        <div className="feedback-signal"><ShieldCheck size={19} /></div>
        <div>
          <strong>Built for a safe first step</strong>
          <span className="feedback-rating-line">Clear scope <i>·</i> One-time build <i>·</i> Human handoff</span>
        </div>
        <ChevronRight size={16} />
      </button>

      <div className="trust-grid">
        {siteConfig.trustItems.map((item) => (
          <span key={item}><Check size={12} />{item}</span>
        ))}
      </div>

      <p className="profile-location"><UsersRound size={13} />Designed for {siteConfig.segment.toLowerCase()}</p>
    </aside>
  );
}

function WorkflowCard({
  workflow,
  selected,
  onToggle,
  delay,
  bundle,
}: {
  workflow: WorkflowItem;
  selected: boolean;
  onToggle: () => void;
  delay: number;
  bundle: IcpBundle;
}) {
  const Icon = iconMap[workflow.icon];
  const pricing = getWorkflowPricing(bundle, workflow);

  return (
    <article
      className={`automation-card ${selected ? "selected" : ""}`}
      style={{ "--card-delay": `${Math.min(delay * 28, 280)}ms` } as CSSProperties}
    >
      <button
        type="button"
        className="card-select-surface"
        onClick={onToggle}
        aria-pressed={selected}
        aria-label={`${selected ? "Remove" : "Add"} ${workflow.name}`}
      >
        <span className="automation-icon"><Icon size={19} strokeWidth={1.8} /></span>
        <span className="automation-copy">
          <span className="automation-title-row">
            <strong>{workflow.name}</strong>
            {workflow.badge && <em>{workflow.badge}</em>}
          </span>
          <span className="automation-description">{workflow.description}</span>
          <span className="workflow-card-notes">
            <span className="workflow-card-note workflow-outcome">
              <TrendingUp size={13} aria-hidden="true" />
              <span><strong>Outcome</strong>{workflow.outcome ?? workflowOutcomeByTier[workflow.tier]}</span>
            </span>
            {workflow.requirement && (
              <span className="workflow-card-note requirement">
                <Plug size={13} aria-hidden="true" />
                <span><strong>Needs</strong>{workflow.requirement}</span>
              </span>
            )}
          </span>
        </span>
        <span className="select-control">
          {selected ? <Check size={15} /> : <Plus size={15} />}
          <em>{selected ? "Added" : "Add"}</em>
        </span>
      </button>
      <div className="card-meta">
        <span className="card-price-primary">
          <small>One-time from</small>
          <strong>{formatUsd(pricing.setup)}</strong>
        </span>
        <span className="card-price-timeline"><strong>{pricing.timeline}</strong><small>{pricing.usageNote ? "+ provider usage" : "Typical launch"}</small></span>
      </div>
    </article>
  );
}

/**
 * Dark is the default treatment. `themeMode="light"` opts a route into the
 * light token set; both read the same token names, so nothing else changes.
 */
export function IcpLanding({
  bundle,
  themeMode = "dark",
}: {
  bundle: IcpBundle;
  themeMode?: "dark" | "light";
}) {
  const { categoryTabs, pricingTiers, siteConfig, workflows } = bundle;
  const chatAdvisorImage = getChatAdvisorImage(siteConfig.slug);
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState<FormData>(initialForm);
  const [attribution, setAttribution] = useState<Attribution>(emptyAttribution);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [submitError, setSubmitError] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [standardsOpen, setStandardsOpen] = useState(false);
  const [workExampleOpen, setWorkExampleOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: siteConfig.chatWelcome },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatSending, setChatSending] = useState(false);
  const [chatLeadCaptured, setChatLeadCaptured] = useState(false);
  const [legalConsent, setLegalConsent] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [webhookTestStatus, setWebhookTestStatus] =
    useState<WebhookTestStatus | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const logoClickTimesRef = useRef<number[]>([]);

  const stepContent = [
    {
      label: "Choose a first workflow",
      detail: `Select the inquiry, scheduling, follow-up, or operations workflows worth reviewing for your ${siteConfig.audienceLabel}.`,
    },
    {
      label: "Add a little context",
      detail: "A short brief helps us recommend the smallest useful first build.",
    },
    {
      label: "Review your plan",
      detail: "Confirm the workflow, starting range, and contact details before sending.",
    },
  ];

  /**
   * Surface tokens now live in `globals.css` so every route renders the same
   * Fox Valley palette. Only the accent and the light-surface value are echoed
   * here, which keeps the theme contract intact without letting a per-vertical
   * config quietly repaint the app.
   */
  const themeStyle = {
    "--brand": siteConfig.theme.primary,
    "--blue": siteConfig.theme.primary,
    "--accent-strong": siteConfig.theme.accentStrong,
    "--accent-soft": siteConfig.theme.accentSoft,
    "--theme-background": siteConfig.theme.background,
  } as CSSProperties;

  const selectedWorkflows = useMemo(
    () => selectedIds.map((id) => workflows.find((workflow) => workflow.id === id)).filter(Boolean) as WorkflowItem[],
    [selectedIds, workflows],
  );

  const filteredWorkflows = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return workflows.filter((workflow) => {
      if (activeCategory !== "All" && !workflow.categories.includes(activeCategory)) return false;
      if (activeCategory !== "All" || !normalizedSearch) return true;
      return [workflow.name, workflow.description, workflow.categories.join(" "), workflow.badge ?? "", workflow.requirement ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
    });
  }, [activeCategory, searchTerm, workflows]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leaveTimer = window.setTimeout(() => setSplashLeaving(true), reduceMotion ? 120 : 900);
    const hideTimer = window.setTimeout(() => setShowSplash(false), reduceMotion ? 200 : 1180);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const visualViewport = window.visualViewport;
    let frame = 0;
    const updateViewport = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const height = visualViewport?.height ?? window.innerHeight;
        const top = visualViewport?.offsetTop ?? 0;
        document.documentElement.style.setProperty("--app-viewport-height", `${height}px`);
        document.documentElement.style.setProperty("--app-viewport-top", `${top}px`);
      });
    };
    updateViewport();
    visualViewport?.addEventListener("resize", updateViewport);
    visualViewport?.addEventListener("scroll", updateViewport);
    window.addEventListener("resize", updateViewport);
    return () => {
      window.cancelAnimationFrame(frame);
      visualViewport?.removeEventListener("resize", updateViewport);
      visualViewport?.removeEventListener("scroll", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAttribution({
      landingPage: window.location.href,
      referrer: document.referrer,
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
      utmPromo: params.get("utm_promo") ?? "",
      utmIcp: params.get("utm_icp") ?? "",
      gclid: params.get("gclid") ?? "",
      fbclid: params.get("fbclid") ?? "",
    });
  }, []);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatSending]);

  useEffect(() => {
    const modalOpen =
      chatOpen || pricingOpen || standardsOpen || workExampleOpen;
    document.body.classList.toggle("modal-open", modalOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setChatOpen(false);
      setPricingOpen(false);
      setStandardsOpen(false);
      setWorkExampleOpen(false);
    };
    if (modalOpen) window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [chatOpen, pricingOpen, standardsOpen, workExampleOpen]);

  useEffect(() => {
    if (webhookTestStatus?.state !== "success") return;
    const hideTimer = window.setTimeout(
      () => setWebhookTestStatus(null),
      6_000,
    );
    return () => window.clearTimeout(hideTimer);
  }, [webhookTestStatus]);

  const toggleWorkflow = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id],
    );
  };

  const updateForm = (field: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleBusinessSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!legalConsent) return;
    setStep(3);
  };

  const sendLogoWebhookTest = async (clickTimes: number[]) => {
    const clickIntervalsMs = clickTimes
      .slice(1)
      .map((time, index) => time - clickTimes[index]);

    setWebhookTestStatus({
      state: "sending",
      message: `Sending a fully populated ${siteConfig.industry} test lead…`,
    });

    try {
      const response = await fetch("/api/internal/webhook-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          icp: siteConfig.slug,
          trigger: "logo-20-clicks",
          clickIntervalsMs,
        }),
      });
      const data = await response.json() as WebhookTestResponse;

      if (!response.ok || !data.leadSubmitted) {
        throw new Error(
          response.status === 404
            ? "Test trigger rejected. Check LEAD_TEST_SECRET in Vercel and redeploy."
            : data.error || "The test webhook could not be delivered.",
        );
      }

      setWebhookTestStatus({
        state: "success",
        message: `Test webhook sent for ${siteConfig.industry}.`,
      });
    } catch (error) {
      setWebhookTestStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "The test webhook could not be delivered.",
      });
    }
  };

  const handleBrandClick = (event: MouseEvent<HTMLButtonElement>) => {
    setStep(1);
    if (!event.isTrusted || webhookTestStatus?.state === "sending") return;

    const now = Date.now();
    const recentClicks = logoClickTimesRef.current.filter(
      (clickTime) => now - clickTime <= WEBHOOK_TEST_CLICK_WINDOW_MS,
    );
    recentClicks.push(now);
    logoClickTimesRef.current = recentClicks;

    if (recentClicks.length !== WEBHOOK_TEST_CLICK_COUNT) return;

    logoClickTimesRef.current = [];
    void sendLogoWebhookTest(recentClicks);
  };

  const sendPlan = async () => {
    setSubmitState("sending");
    setSubmitError("");
    try {
      const response = await fetch(`/api/${siteConfig.slug}/plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          attribution,
          promotion: null,
          legalConsent,
          legalVersion: LEGAL_VERSION,
          automations: selectedWorkflows.map(({ id }) => ({ id })),
        }),
      });
      const data = await response.json() as { error?: string };
      if (!response.ok) throw new Error(data.error || "We couldn’t send your plan just now.");
      setSubmitState("success");
      setStep(4);
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "We couldn’t send your plan just now.");
    }
  };

  const sendChat = async (messageOverride?: string) => {
    const content = (messageOverride ?? chatInput).trim();
    if (!content || chatSending) return;
    const userMessage: ChatMessage = { id: `user-${Date.now()}`, role: "user", content };
    const nextMessages = [...chatMessages, userMessage];
    setChatMessages(nextMessages);
    setChatInput("");
    setChatSending(true);
    try {
      const response = await fetch(`/api/${siteConfig.slug}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({ role, content: messageContent })),
          leadCaptured: chatLeadCaptured,
          attribution,
          promotion: null,
        }),
      });
      const data = await response.json() as ChatResponse;
      if (!response.ok || !data.reply) throw new Error(data.error || "The advisor is temporarily unavailable.");
      setChatMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: "assistant", content: data.reply! },
      ]);
      if (data.leadSubmitted) setChatLeadCaptured(true);
    } catch (error) {
      setChatMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content: `${error instanceof Error ? error.message : "The advisor is temporarily unavailable."} You can still use the workflow plan form on this page.`,
        },
      ]);
    } finally {
      setChatSending(false);
    }
  };

  const stepTitle = step <= 3 ? stepContent[step - 1] : null;
  const quickStartTier = pricingTiers.find((tier) => tier.id === "quick-start");
  if (!quickStartTier) {
    throw new Error(`Missing quick-start pricing for ${siteConfig.slug}`);
  }
  const workExample = getWorkExample(siteConfig.slug);

  return (
    <main
      className={`screen${themeMode === "light" ? " theme-light" : ""}`}
      style={themeStyle}
    >
      {showSplash && <MobileSplash leaving={splashLeaving} siteConfig={siteConfig} />}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <button className="site-header-brand" type="button" onClick={handleBrandClick} aria-label={`${BRAND_NAME} home`}>
          <Wordmark compact />
          <span><strong>{siteConfig.industry}</strong><small>Workflow systems for service businesses</small></span>
        </button>

        <nav className="site-header-nav" aria-label="Primary navigation">
          <button type="button" onClick={() => setStep(1)}>Workflows</button>
          <button type="button" onClick={() => setPricingOpen(true)}>Pricing</button>
          <button type="button" onClick={() => setStandardsOpen(true)} aria-haspopup="dialog" aria-controls="build-standards-dialog">How we build</button>
        </nav>

        {workExample ? (
          <button
            className="workflow-library-trigger work-example-trigger"
            type="button"
            onClick={() => setWorkExampleOpen(true)}
            aria-haspopup="dialog"
            aria-controls="work-example-dialog"
          >
            <span className="work-example-mark" aria-hidden="true"><MonitorPlay size={18} /></span>
            <span className="workflow-library-trigger-copy">
              <strong>See what a better customer journey feels like</strong>
              <small>{workExample.name} · interactive live project</small>
            </span>
            <ChevronRight size={16} />
          </button>
        ) : (
          <button className="workflow-library-trigger" type="button" onClick={() => setPricingOpen(true)}>
            <span className="workflow-library-industries" aria-hidden="true"><i>01</i><i>02</i><i>03</i></span>
            <span className="workflow-library-trigger-copy">
              <strong>Start with a practical first win</strong>
              <small>{`One-time from ${formatUsd(quickStartTier.setup)} · no forced software replacement`}</small>
            </span>
            <ChevronRight size={16} />
          </button>
        )}

        <button className="site-header-cta" type="button" onClick={() => setChatOpen(true)}>
          <MessageCircle size={16} />
          <span>24/7 Chat</span>
        </button>
      </header>

      {webhookTestStatus && (
        <div
          className={`webhook-test-toast ${webhookTestStatus.state}`}
          role="status"
          aria-live="polite"
        >
          <span aria-hidden="true">
            {webhookTestStatus.state === "sending" ? (
              <RefreshCw size={17} />
            ) : webhookTestStatus.state === "success" ? (
              <Check size={17} />
            ) : (
              <X size={17} />
            )}
          </span>
          <div>
            <strong>
              {webhookTestStatus.state === "sending"
                ? "Webhook test"
                : webhookTestStatus.state === "success"
                  ? "Test delivered"
                  : "Test failed"}
            </strong>
            <small>{webhookTestStatus.message}</small>
          </div>
          {webhookTestStatus.state !== "sending" && (
            <button
              type="button"
              onClick={() => setWebhookTestStatus(null)}
              aria-label="Dismiss webhook test status"
            >
              <X size={14} />
            </button>
          )}
        </div>
      )}

      <section className="app-shell" aria-label={`${BRAND_NAME} workflow planner for ${siteConfig.industry}`}>
        <ProfilePanel siteConfig={siteConfig} onOpenStandards={() => setStandardsOpen(true)} />

        <div className="workspace">
          {step <= 3 && stepTitle && (
            <header className="progress-header">
              <div className="step-heading">
                <span className="step-index">0{step}</span>
                <div>
                  <span>Step {step} of 3</span>
                  <h2>{stepTitle.label}</h2>
                  <p>{stepTitle.detail}</p>
                </div>
              </div>
              <nav className="step-track" aria-label="Plan progress">
                {[1, 2, 3].map((trackStep) => (
                  <button
                    type="button"
                    key={trackStep}
                    className={trackStep === step ? "active" : trackStep < step ? "complete" : ""}
                    onClick={() => {
                      if (trackStep === 1 || trackStep < step) setStep(trackStep);
                    }}
                    aria-label={`Go to step ${trackStep}`}
                  >
                    {trackStep < step ? <Check size={11} /> : trackStep}
                  </button>
                ))}
              </nav>
            </header>
          )}

          <div className="workspace-content" ref={contentRef}>
            {step === 1 && (
              <section className="step-panel catalog-panel">
                <div className="mobile-context">
                  <div><span>{siteConfig.eyebrow}</span><strong>{siteConfig.mobileHeadline}</strong></div>
                  <small><Check size={11} />One-time builds · Human handoff · Current tools</small>
                </div>

                <div className="catalog-toolbar">
                  <div className="category-tabs" role="tablist" aria-label="Workflow categories">
                    {categoryTabs.map((category) => (
                      <button
                        type="button"
                        key={category}
                        role="tab"
                        aria-selected={activeCategory === category}
                        className={activeCategory === category ? "active" : ""}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}<span>{categoryCount(bundle, category)}</span>
                      </button>
                    ))}
                  </div>
                  {activeCategory === "All" && (
                    <label className="search-field">
                      <Search size={16} />
                      <input
                        type="search"
                        placeholder="Search workflows"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                      />
                      {searchTerm && <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search"><X size={14} /></button>}
                    </label>
                  )}
                </div>

                <div className="catalog-intro">
                  <div>
                    <span>{activeCategory === "All" ? `${siteConfig.industry} workflow library` : activeCategory}</span>
                    <h3>{activeCategory === "Popular" ? "Start with the leak you can already see" : `Explore ${activeCategory.toLowerCase()}`}</h3>
                  </div>
                  <div className="catalog-status"><p>{filteredWorkflows.length} workflow{filteredWorkflows.length === 1 ? "" : "s"}</p><button type="button" onClick={() => setPricingOpen(true)}>Pricing guide</button></div>
                </div>

                <section className="pricing-strip" aria-label="Start-small pricing">
                  <span className="pricing-strip-icon"><BadgeDollarSign size={19} /></span>
                  <div className="pricing-strip-copy">
                    <span>Start with a useful first workflow</span>
                    <strong>{siteConfig.quickStartPitch}</strong>
                    <small>One-time build · configuration, testing, and handoff included.</small>
                  </div>
                  <div className="pricing-strip-numbers">
                    <span>
                      <small>One-time from</small>
                      <strong>{formatUsd(quickStartTier.setup)}</strong>
                    </span>
                    <i>·</i>
                    <span><small>Typical launch</small><strong>{quickStartTier.timeline}</strong></span>
                  </div>
                  <button type="button" onClick={() => setPricingOpen(true)}>Compare tiers <ChevronRight size={14} /></button>
                </section>

                {filteredWorkflows.length > 0 ? (
                  <div className="automation-grid">
                    {filteredWorkflows.map((workflow, index) => (
                      <WorkflowCard
                        key={workflow.id}
                        workflow={workflow}
                        selected={selectedIds.includes(workflow.id)}
                        onToggle={() => toggleWorkflow(workflow.id)}
                        delay={index}
                        bundle={bundle}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="empty-search"><Search size={26} /><strong>No workflows found</strong><span>Try another phrase or category.</span></div>
                )}
              </section>
            )}

            {step === 2 && (
              <section className="step-panel business-panel">
                <div className="form-lead">
                  <div className="form-lead-icon"><Workflow size={23} /></div>
                  <div><span>Short configuration brief</span><h3>Give the workflow enough operating context.</h3></div>
                  <p>We use this to recommend a sensible first build—not to drop you into a generic package.</p>
                </div>
                <form id="business-form" className="business-form" onSubmit={handleBusinessSubmit}>
                  <div className="form-section-heading"><span>01</span><div><strong>Who should receive the plan?</strong><p>Only the essentials are required.</p></div></div>
                  <div className="field-grid">
                    <label><span>Full name</span><input required autoComplete="name" value={form.name} onChange={(event) => updateForm("name", event.target.value)} placeholder="Your name" /></label>
                    <label><span>Work email</span><input required type="email" autoComplete="email" value={form.email} onChange={(event) => updateForm("email", event.target.value)} placeholder="you@organization.com" /></label>
                    <label><span>Phone <em>Optional</em></span><input type="tel" autoComplete="tel" value={form.phone} onChange={(event) => updateForm("phone", event.target.value)} placeholder="(555) 000-0000" /></label>
                    <label><span>Organization</span><input required autoComplete="organization" value={form.organization} onChange={(event) => updateForm("organization", event.target.value)} placeholder={`${siteConfig.industry} name`} /></label>
                    <label><span>Website <em>Optional</em></span><input type="url" value={form.website} onChange={(event) => updateForm("website", event.target.value)} placeholder="https://organization.com" /></label>
                    <label><span>{siteConfig.scaleLabel} <em>Optional</em></span><select value={form.scale} onChange={(event) => updateForm("scale", event.target.value)}><option value="">Select an option</option>{siteConfig.scaleOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
                  </div>

                  <div className="form-section-heading"><span>02</span><div><strong>Where is the bottleneck?</strong><p>A rough answer is enough for a first review.</p></div></div>
                  <div className="field-grid">
                    <label className="wide"><span>{siteConfig.softwareLabel} <em>Optional</em></span><input value={form.software} onChange={(event) => updateForm("software", event.target.value)} placeholder={siteConfig.softwarePlaceholder} /></label>
                    <label className="wide"><span>Primary operational bottleneck</span><select required value={form.bottleneck} onChange={(event) => updateForm("bottleneck", event.target.value)}><option value="" disabled>Select the biggest bottleneck</option>{siteConfig.bottlenecks.map((option) => <option key={option}>{option}</option>)}</select></label>
                    <label className="wide"><span>What should the first workflow improve? <em>Optional</em></span><textarea value={form.goal} onChange={(event) => updateForm("goal", event.target.value)} placeholder="Describe the repetitive task, access gap, missed opportunity, or handoff you want fixed." /></label>
                  </div>
                  <div className={`form-consent${legalConsent ? "" : " unchecked"}`}>
                    <input
                      id="legal-consent"
                      type="checkbox"
                      checked={legalConsent}
                      onChange={(event) => setLegalConsent(event.target.checked)}
                      required
                      aria-describedby="legal-consent-detail"
                    />
                    <div>
                      <label htmlFor="legal-consent">
                        I agree to the Terms, acknowledge the Privacy Policy, and
                        allow {BRAND_SHORT} to contact me about this request.
                      </label>
                      <p id="legal-consent-detail">
                        <Link href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
                        <span>·</span>
                        <Link href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                        <span>—</span>
                        {siteConfig.consentCopy}
                      </p>
                    </div>
                  </div>
                </form>
              </section>
            )}

            {step === 3 && (
              <section className="step-panel review-panel">
                <div className="review-hero">
                  <span><ClipboardList size={14} /> {BRAND_SHORT} workflow plan</span>
                  <h3>{form.organization || "Your organization"}, configured around the way you already work.</h3>
                  <p>We’ll review workflow logic, system access, human handoffs, and applicable safeguards before recommending scope.</p>
                </div>

                <div className="review-layout">
                  <section className="review-card selected-review">
                    <header><div><span>Selected workflows</span><strong>{selectedWorkflows.length} workflow{selectedWorkflows.length === 1 ? "" : "s"}</strong></div><button type="button" onClick={() => setStep(1)}>Edit</button></header>
                    <div className="review-automation-list">
                      {selectedWorkflows.map((workflow) => {
                        const Icon = iconMap[workflow.icon];
                        const pricing = getWorkflowPricing(bundle, workflow);
                        return (
                          <div key={workflow.id}>
                            <span><Icon size={16} /></span>
                            <div>
                              <strong>{workflow.name}</strong>
                              <small>{workflow.description}</small>
                              <em>
                                One-time from{" "}
                                <strong>{formatUsd(pricing.setup)}</strong>
                                {" · "}typically {pricing.timeline}{pricing.usageNote ? " · provider usage separate" : ""}
                              </em>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="bundle-note"><BadgeDollarSign size={15} /><span><strong>Starting prices, not a surprise quote.</strong> Shared setup may change a multi-workflow proposal; final scope comes first.</span></p>
                  </section>

                  <div className="review-side">
                    <section className="review-card">
                      <header><div><span>Contact details</span><strong>{form.organization}</strong></div><button type="button" onClick={() => setStep(2)}>Edit</button></header>
                      <dl>
                        <div><dt>Contact</dt><dd>{form.name}</dd></div>
                        <div><dt>Email</dt><dd>{form.email}</dd></div>
                        {form.phone && <div><dt>Phone</dt><dd>{form.phone}</dd></div>}
                        {form.scale && <div><dt>Scale</dt><dd>{form.scale}</dd></div>}
                        <div><dt>Bottleneck</dt><dd>{form.bottleneck}</dd></div>
                        {form.software && <div><dt>Systems</dt><dd>{form.software}</dd></div>}
                      </dl>
                    </section>
                    {form.goal && <section className="review-card bottleneck-card"><span>Desired first outcome</span><strong>{form.goal}</strong></section>}
                  </div>
                </div>

                <div className="compliance-note"><ShieldCheck size={20} /><p><strong>Scope and safeguards are confirmed before launch.</strong> {siteConfig.complianceNote}</p></div>
                {submitState === "error" && <p className="submit-error" role="alert">{submitError} Please try again.</p>}
              </section>
            )}

            {step === 4 && (
              <section className="success-panel">
                <div className="success-orbit"><span><Check size={26} /></span></div>
                <span className="success-kicker">Plan request received</span>
                <h2>Your workflow plan is ready for review.</h2>
                <p>{BRAND_SHORT} will review the {selectedWorkflows.length} selected workflow{selectedWorkflows.length === 1 ? "" : "s"} and follow up with the smallest sensible next step.</p>
                <div className="success-summary">
                  <div><span>Organization</span><strong>{form.organization}</strong></div>
                  <div><span>Workflows</span><strong>{selectedWorkflows.length}</strong></div>
                  <div><span>Next step</span><strong>Scope review</strong></div>
                </div>
                <button type="button" className="restart-button" onClick={() => { setStep(1); setSubmitState("idle"); }}>Review selections</button>
              </section>
            )}
          </div>

          {step <= 3 && (
            <footer className="action-bar">
              {step === 1 && (
                <>
                  <div className="selection-summary">
                    <span className={selectedIds.length ? "has-selection" : ""}>{selectedIds.length || <Plus size={15} />}</span>
                    <div><strong>{selectedLabel(selectedIds.length)}</strong><small>{selectedIds.length ? "Ready for a short business brief" : "Select at least one workflow to continue."}</small></div>
                  </div>
                  <button type="button" className="primary-action" disabled={!selectedIds.length} onClick={() => setStep(2)}>Build My Workflow Plan <ArrowRight size={17} /></button>
                </>
              )}
              {step === 2 && (
                <>
                  <button type="button" className="back-action" onClick={() => setStep(1)}><ArrowLeft size={16} />Back</button>
                  <div className="action-context"><strong>{selectedIds.length} workflow{selectedIds.length === 1 ? "" : "s"} selected</strong><span>No payment required</span></div>
                  <button type="submit" form="business-form" className="primary-action" disabled={!legalConsent}>Review My Plan <ArrowRight size={17} /></button>
                </>
              )}
              {step === 3 && (
                <>
                  <button type="button" className="back-action" onClick={() => setStep(2)}><ArrowLeft size={16} />Back</button>
                  <div className="action-context"><strong>Ready to send</strong><span>Scope review comes before any build</span></div>
                  <button type="button" className="primary-action" disabled={submitState === "sending" || !legalConsent} onClick={sendPlan}>
                    {submitState === "sending" ? <><span className="button-spinner" />Sending…</> : <>Send My Workflow Plan <Send size={17} /></>}
                  </button>
                </>
              )}
            </footer>
          )}
        </div>
      </section>

      {workExampleOpen && workExample && (
        <div
          className="work-example-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setWorkExampleOpen(false);
            }
          }}
        >
          <section
            id="work-example-dialog"
            className="work-example-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-example-title"
            aria-describedby="work-example-description"
          >
            <header className="work-example-header">
              <div>
                <span><i /> Interactive work · {workExample.name}</span>
                <h2 id="work-example-title">See what a better customer journey feels like.</h2>
                <p id="work-example-description">{workExample.summary}</p>
              </div>
              <div className="work-example-actions">
                <button
                  type="button"
                  autoFocus
                  onClick={() => setWorkExampleOpen(false)}
                  aria-label="Close live work example"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div className="work-example-browser">
              <div className="work-example-browser-bar">
                <span aria-hidden="true"><i /><i /><i /></span>
                <strong>
                  {workExample.name}
                  <small>Scrollable · fully interactive</small>
                </strong>
                <em aria-hidden="true">Live demo</em>
              </div>
              <div className="work-example-frame">
                <iframe
                  src={workExample.url}
                  title={`${workExample.name} live customer journey`}
                  loading="lazy"
                  scrolling="yes"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols"
                />
              </div>
            </div>
          </section>
        </div>
      )}

      {standardsOpen && (
        <div className="client-reviews-overlay" onPointerDown={(event) => { if (event.target === event.currentTarget) setStandardsOpen(false); }}>
          <section id="build-standards-dialog" className="client-reviews-sheet" role="dialog" aria-modal="true" aria-labelledby="build-standards-title" aria-describedby="build-standards-description">
            <header className="client-reviews-header">
              <div>
                <span>How we deliver</span>
                <h2 id="build-standards-title">One useful workflow—clearly scoped, tested, and handed off.</h2>
                <p id="build-standards-description">Start with the bottleneck you can see. Keep your team in control. Expand only when the first workflow earns it.</p>
              </div>
              <button type="button" autoFocus onClick={() => setStandardsOpen(false)} aria-label="Close build standards"><X size={18} /></button>
            </header>

            <ol className="build-process-list" aria-label="Delivery stages">
              {buildProcessStages.map((stage, index) => (
                <li className="build-process-card" key={stage.title}>
                  <div className="build-process-stage" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>Stage {index + 1}</small>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                  <footer>
                    <span>Deliverable</span>
                    <strong>{stage.deliverable}</strong>
                  </footer>
                </li>
              ))}
            </ol>

            {siteConfig.buildNotes[0] && (
              <aside className="build-niche-note" aria-labelledby="build-niche-note-title">
                <span aria-hidden="true"><ListChecks size={17} /></span>
                <div>
                  <small>Configured for {siteConfig.industry}</small>
                  <h3 id="build-niche-note-title">{siteConfig.buildNotes[0].title}</h3>
                </div>
                <p>{siteConfig.buildNotes[0].detail}</p>
              </aside>
            )}

            <section className="build-assurance-row" aria-labelledby="build-assurances-title">
              <strong id="build-assurances-title">Built into every first project</strong>
              <ul>
                {siteConfig.trustItems.map((item) => (
                  <li key={item}><Check size={12} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </section>

            <footer className="client-reviews-footer">
              <p><ShieldCheck size={15} aria-hidden="true" /><span><strong>Know what happens next.</strong> Scope, price, access, testing, and ownership are confirmed before launch.</span></p>
              <div><button type="button" onClick={() => setStandardsOpen(false)}>Explore first workflows</button><button type="button" onClick={() => { setStandardsOpen(false); setChatOpen(true); }}>Ask a question <ChevronRight size={14} /></button></div>
            </footer>
          </section>
        </div>
      )}

      {pricingOpen && (
        <div className="pricing-overlay" role="dialog" aria-modal="true" aria-labelledby="pricing-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setPricingOpen(false); }}>
          <section className="pricing-modal">
            <header>
              <div>
                <span>One-time starting prices</span>
                <h2 id="pricing-title">Enter through one clear workflow. Expand only when it earns the next step.</h2>
                <p>Starting prices include discovery, implementation, testing, and launch handoff for the defined workflow.</p>
              </div>
              <button type="button" onClick={() => setPricingOpen(false)} aria-label="Close pricing guide"><X size={18} /></button>
            </header>
            <div className="pricing-tier-grid">
              {pricingTiers.map((tier) => {
                return (
                  <article key={tier.id} className={tier.id === "quick-start" ? "featured" : ""}>
                    <span>{tier.id === "quick-start" ? "Best first step" : tier.name}</span>
                    <h3>{tier.name}</h3>
                    <div className="tier-price">
                      <span className="tier-price-values">
                        <strong>{formatUsd(tier.setup)}</strong>
                      </span>
                      <small>one-time from</small>
                    </div>
                    <div><strong>{tier.timeline}</strong><small>typical launch</small></div>
                    <p>{tier.summary}</p>
                    {tier.usageNote && <em>{tier.usageNote}</em>}
                  </article>
                );
              })}
            </div>
            <footer><ShieldCheck size={17} /><p><strong>No agency subscription hidden in these prices.</strong> Final scope and unavoidable phone, messaging, AI, or software usage are shown before launch.</p><button type="button" onClick={() => setPricingOpen(false)}>Explore workflows</button></footer>
          </section>
        </div>
      )}

      {chatOpen && (
        <div className="chat-overlay" role="dialog" aria-modal="true" aria-label={`${BRAND_SHORT} workflow advisor`} onMouseDown={(event) => { if (event.target === event.currentTarget) setChatOpen(false); }}>
          <div className="chat-shell">
            <aside className="chat-visual">
              <button type="button" className="chat-close-mobile" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button>
              <div className="chat-brand"><Wordmark compact /><span>24/7 Chat</span></div>
              <div className="advisor-portrait"><Image src={chatAdvisorImage.src} alt={chatAdvisorImage.alt} fill sizes="(max-width: 760px) 180px, 330px" loading="eager" /></div>
              <span className="advisor-status"><i /> {chatAdvisorImage.label}</span>
              <h2>Find the first workflow worth building.</h2>
              <p>Describe the bottleneck. The advisor will help frame a practical starting point for {siteConfig.audiencePlural}.</p>
              <div className="chat-principles"><span><Check size={12} />No generic package</span><span><Check size={12} />Human handoff</span><span><Check size={12} />Scope first</span></div>
            </aside>
            <section className="chat-conversation">
              <header><div><span>{BRAND_SHORT}</span><strong>Workflow advisor</strong></div><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button></header>
              <div className="chat-messages">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`chat-message ${message.role}`}>
                    {message.role === "assistant" && <span className="message-avatar"><FoxValleyMark className="message-avatar-mark" /></span>}
                    <p>{message.content}</p>
                  </div>
                ))}
                {chatMessages.length === 1 && (
                  <div className="chat-suggestions">
                    {siteConfig.chatSuggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => sendChat(suggestion)}>{suggestion}<ChevronRight size={14} /></button>)}
                  </div>
                )}
                {chatSending && <div className="chat-message assistant"><span className="message-avatar"><FoxValleyMark className="message-avatar-mark" /></span><div className="typing"><i /><i /><i /></div></div>}
                <div ref={chatEndRef} />
              </div>
              <form className="chat-composer" onSubmit={(event) => { event.preventDefault(); sendChat(); }}>
                <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Describe where work gets stuck…" disabled={chatSending} />
                <button type="submit" disabled={!chatInput.trim() || chatSending} aria-label="Send message"><Send size={17} /></button>
              </form>
              <p className="chat-disclaimer">Answers here are a starting point, not a quote. {BRAND_SHORT} confirms scope, feasibility, safeguards, and human handoffs before any build.</p>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
