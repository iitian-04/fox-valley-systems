"use client";

import Image from "next/image";
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
  PhoneMissed,
  Plus,
  RefreshCw,
  Route,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  type CSSProperties,
  type FormEvent,
  useCallback,
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
import {
  createLocalPromotion,
  formatUsd,
  getLivePriceUsd,
  PROMO_QUERY_PARAM,
  type PromotionInput,
} from "@/lib/promo";

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

const selectedLabel = (count: number) =>
  count === 0 ? "No workflows selected" : `${count} workflow${count === 1 ? "" : "s"} selected`;

function Wordmark({ compact = false }: { compact?: boolean }) {
  return <span className={`elevate-wordmark${compact ? " compact" : ""}`}>Elevate</span>;
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
      aria-label={`Opening Elevate for ${siteConfig.industry}`}
    >
      <div className="splash-glow" />
      <Wordmark />
      <span className="splash-kicker">{siteConfig.eyebrow}</span>
      <h1>{siteConfig.mobileHeadline}</h1>
      <p>Start with one workflow. Expand only when the value is clear.</p>
      <div className="splash-tech-card">
        <span><Zap size={18} /></span>
        <div><small>Suggested first win</small><strong>{siteConfig.splashFeature}</strong></div>
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

function PromoBanner({
  promotion,
  regularPrice,
  onExpire,
}: {
  promotion: PromotionInput;
  regularPrice: number;
  onExpire: () => void;
}) {
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, Date.parse(promotion.expiresAt) - Date.now()),
  );
  const expiredRef = useRef(false);

  useEffect(() => {
    const updateRemaining = () => {
      const nextRemaining = Math.max(0, Date.parse(promotion.expiresAt) - Date.now());
      setRemainingMs(nextRemaining);
      if (nextRemaining === 0 && !expiredRef.current) {
        expiredRef.current = true;
        onExpire();
      }
    };
    const updateWhenVisible = () => {
      if (document.visibilityState === "visible") updateRemaining();
    };
    updateRemaining();
    const timer = window.setInterval(updateRemaining, 1000);
    window.addEventListener("focus", updateRemaining);
    document.addEventListener("visibilitychange", updateWhenVisible);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", updateRemaining);
      document.removeEventListener("visibilitychange", updateWhenVisible);
    };
  }, [onExpire, promotion.expiresAt]);

  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number) => value.toString().padStart(2, "0");
  const livePrice = getLivePriceUsd(regularPrice, true);

  return (
    <aside className="promo-banner" aria-label="50 percent promotional pricing">
      <div className="promo-banner-copy">
        <span><Sparkles size={16} />50% off</span>
        <div>
          <strong>Your link price is reserved until midnight today.</strong>
          <small>Every workflow is half price · starting at {formatUsd(livePrice)} instead of {formatUsd(regularPrice)}</small>
        </div>
      </div>
      <time
        className="promo-countdown"
        dateTime={promotion.expiresAt}
        role="timer"
        aria-label="Promotional pricing ends at your local midnight"
      >
        <span><strong>{pad(hours)}</strong><small>hrs</small></span>
        <i>:</i>
        <span><strong>{pad(minutes)}</strong><small>min</small></span>
        <i>:</i>
        <span><strong>{pad(seconds)}</strong><small>sec</small></span>
      </time>
    </aside>
  );
}

function ProfilePanel({
  onOpenStandards,
  siteConfig,
}: {
  onOpenStandards: () => void;
  siteConfig: IcpBundle["siteConfig"];
}) {
  return (
    <aside className="profile-panel">
      <div className="profile-copy">
        <div className="eyebrow"><span />{siteConfig.eyebrow}</div>
        <h1>{siteConfig.headline}</h1>
        <p>{siteConfig.subheadline}</p>
      </div>

      <div className="orchestrator-card" aria-label="Connected workflow illustration">
        <div className="orchestrator-image">
          <Image
            src="/automation-orchestrator-cutout.png"
            alt="Connected automation workflow components"
            fill
            sizes="330px"
            priority
          />
        </div>
        <div className="orchestrator-overlay">
          <span><i />Start with one workflow</span>
          <strong>{siteConfig.outcomeFocus}</strong>
        </div>
      </div>

      <button className="feedback-card" type="button" onClick={onOpenStandards}>
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
  promoActive,
  bundle,
}: {
  workflow: WorkflowItem;
  selected: boolean;
  onToggle: () => void;
  delay: number;
  promoActive: boolean;
  bundle: IcpBundle;
}) {
  const Icon = iconMap[workflow.icon];
  const pricing = getWorkflowPricing(bundle, workflow);
  const livePrice = getLivePriceUsd(pricing.setup, promoActive);

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
          {workflow.requirement && <span className="requirement">Needs: {workflow.requirement}</span>}
        </span>
        <span className="select-control">{selected ? <Check size={16} /> : <Plus size={16} />}</span>
      </button>
      <div className="card-meta">
        <span className={`card-price-primary${promoActive ? " promo-active" : ""}`}>
          <small>{promoActive ? "50% promo from" : "One-time from"}</small>
          <strong>{formatUsd(livePrice)}</strong>
          {promoActive && <del>{formatUsd(pricing.setup)}</del>}
        </span>
        <span className="card-price-timeline"><strong>{pricing.timeline}</strong><small>{pricing.usageNote ? "+ provider usage" : "Typical launch"}</small></span>
      </div>
    </article>
  );
}

export function IcpLanding({ bundle }: { bundle: IcpBundle }) {
  const { categoryTabs, pricingTiers, siteConfig, workflows } = bundle;
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
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: siteConfig.chatWelcome },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatSending, setChatSending] = useState(false);
  const [chatLeadCaptured, setChatLeadCaptured] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [promotion, setPromotion] = useState<PromotionInput | null>(null);
  const [promoExpired, setPromoExpired] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

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

  const themeStyle = {
    "--blue": siteConfig.theme.primary,
    "--blue-2": siteConfig.theme.primary,
    "--cyan": siteConfig.theme.accent,
    "--green": siteConfig.theme.accent,
    "--yellow": siteConfig.theme.accent,
    "--accent-strong": siteConfig.theme.accentStrong,
    "--accent-soft": siteConfig.theme.accentSoft,
    "--canvas": siteConfig.theme.dark,
    "--canvas-2": `color-mix(in srgb, ${siteConfig.theme.dark} 86%, ${siteConfig.theme.primary})`,
    "--shell": `color-mix(in srgb, ${siteConfig.theme.dark} 80%, #263247)`,
    "--sidebar": `color-mix(in srgb, ${siteConfig.theme.dark} 84%, #202c40)`,
    "--panel": `color-mix(in srgb, ${siteConfig.theme.dark} 72%, #33425a)`,
    "--panel-2": `color-mix(in srgb, ${siteConfig.theme.dark} 67%, #3a4b66)`,
    "--card": `color-mix(in srgb, ${siteConfig.theme.dark} 62%, #40526e)`,
    "--card-hover": `color-mix(in srgb, ${siteConfig.theme.dark} 54%, #4c607f)`,
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
    const utmPromo = params.get(PROMO_QUERY_PARAM) ?? "";
    setAttribution({
      landingPage: window.location.href,
      referrer: document.referrer,
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
      utmPromo,
      utmIcp: params.get("utm_icp") ?? "",
      gclid: params.get("gclid") ?? "",
      fbclid: params.get("fbclid") ?? "",
    });
    setPromotion(createLocalPromotion(utmPromo));
  }, []);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatSending]);

  useEffect(() => {
    const modalOpen = chatOpen || pricingOpen || standardsOpen;
    document.body.classList.toggle("modal-open", modalOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setChatOpen(false);
      setPricingOpen(false);
      setStandardsOpen(false);
    };
    if (modalOpen) window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [chatOpen, pricingOpen, standardsOpen]);

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
    setStep(3);
  };

  const expirePromotion = useCallback(() => {
    setPromotion(null);
    setPromoExpired(true);
  }, []);

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
          promotion,
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
          promotion,
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
  const promoActive = promotion !== null;
  const quickStartLivePrice = getLivePriceUsd(quickStartTier.setup, promoActive);

  return (
    <main className="screen" style={themeStyle}>
      {showSplash && <MobileSplash leaving={splashLeaving} siteConfig={siteConfig} />}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <button className="site-header-brand" type="button" onClick={() => setStep(1)} aria-label="Elevate home">
          <Wordmark compact />
          <span><strong>{siteConfig.industry}</strong><small>AI workflow planner</small></span>
        </button>

        <nav className="site-header-nav" aria-label="Primary navigation">
          <button type="button" onClick={() => setStep(1)}>Workflows</button>
          <button type="button" onClick={() => setPricingOpen(true)}>Pricing</button>
          <button type="button" onClick={() => setStandardsOpen(true)}>How we build</button>
        </nav>

        <button className="workflow-library-trigger" type="button" onClick={() => setPricingOpen(true)}>
          <span className="workflow-library-industries" aria-hidden="true"><i>01</i><i>02</i><i>03</i></span>
          <span className="workflow-library-trigger-copy">
            <strong>Start with a practical first win</strong>
            <small>
              {promoActive
                ? `50% promo from ${formatUsd(quickStartLivePrice)} · normally ${formatUsd(quickStartTier.setup)}`
                : `One-time from ${formatUsd(quickStartTier.setup)} · no forced software replacement`}
            </small>
          </span>
          <ChevronRight size={16} />
        </button>

        <button className="site-header-cta" type="button" onClick={() => setChatOpen(true)}>
          <MessageCircle size={16} />
          <span>Ask AI advisor</span>
        </button>
      </header>

      {promotion && (
        <PromoBanner
          promotion={promotion}
          regularPrice={quickStartTier.setup}
          onExpire={expirePromotion}
        />
      )}
      {promoExpired && <p className="sr-only" role="status">The promotional window ended. Regular starting prices are now shown.</p>}

      <section className="app-shell" aria-label={`Elevate workflow planner for ${siteConfig.industry}`}>
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
                    <span className={promoActive ? "promo-active" : ""}>
                      <small>{promoActive ? "50% promo from" : "One-time from"}</small>
                      <strong>{formatUsd(quickStartLivePrice)}</strong>
                      {promoActive && <del>{formatUsd(quickStartTier.setup)}</del>}
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
                        promoActive={promoActive}
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
                <p className="form-safety-note"><ShieldCheck size={15} /><span>Business operations only. Do not submit patient, customer, client, employee, or other sensitive personal information.</span></p>
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
                </form>
              </section>
            )}

            {step === 3 && (
              <section className="step-panel review-panel">
                <div className="review-hero">
                  <span><Sparkles size={14} /> Elevate workflow plan</span>
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
                        const livePrice = getLivePriceUsd(pricing.setup, promoActive);
                        return (
                          <div key={workflow.id}>
                            <span><Icon size={16} /></span>
                            <div>
                              <strong>{workflow.name}</strong>
                              <small>{workflow.description}</small>
                              <em className={promoActive ? "promo-active" : ""}>
                                {promoActive ? "50% promo from " : "One-time from "}
                                <strong>{formatUsd(livePrice)}</strong>
                                {promoActive && <> <del>{formatUsd(pricing.setup)}</del></>}
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
                <p className="consent-copy">{siteConfig.consentCopy}</p>
                {submitState === "error" && <p className="submit-error" role="alert">{submitError} Please try again.</p>}
              </section>
            )}

            {step === 4 && (
              <section className="success-panel">
                <div className="success-orbit"><span><Check size={26} /></span></div>
                <span className="success-kicker">Plan request received</span>
                <h2>Your workflow plan is ready for review.</h2>
                <p>Elevate will review the {selectedWorkflows.length} selected workflow{selectedWorkflows.length === 1 ? "" : "s"} and follow up with the smallest sensible next step.</p>
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
                  <button type="submit" form="business-form" className="primary-action">Review My Plan <ArrowRight size={17} /></button>
                </>
              )}
              {step === 3 && (
                <>
                  <button type="button" className="back-action" onClick={() => setStep(2)}><ArrowLeft size={16} />Back</button>
                  <div className="action-context"><strong>Ready to send</strong><span>Scope review comes before any build</span></div>
                  <button type="button" className="primary-action" disabled={submitState === "sending"} onClick={sendPlan}>
                    {submitState === "sending" ? <><span className="button-spinner" />Sending…</> : <>Send My Workflow Plan <Send size={17} /></>}
                  </button>
                </>
              )}
            </footer>
          )}
        </div>
      </section>

      {standardsOpen && (
        <div className="client-reviews-overlay" role="dialog" aria-modal="true" aria-labelledby="build-standards-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setStandardsOpen(false); }}>
          <section className="client-reviews-sheet">
            <header className="client-reviews-header">
              <div>
                <span>How Elevate builds</span>
                <h2 id="build-standards-title">A useful first automation without a giant transformation project.</h2>
                <p>Clear scope, one-time project pricing, real testing, and a handoff your team can operate.</p>
              </div>
              <button type="button" onClick={() => setStandardsOpen(false)} aria-label="Close build standards"><X size={18} /></button>
            </header>

            <div className="client-proof-summary">
              <div className="client-proof-mark">
                <span>One-time project</span>
                <div><ShieldCheck size={22} /></div>
                <strong>Start narrow. Build confidence.</strong>
                <small>Discovery, implementation, testing, and launch handoff are included in the starting project price.</small>
              </div>
              <div className="build-assurances">
                {siteConfig.trustItems.map((item) => (
                  <div key={item}><ShieldCheck size={16} /><span><strong>{item}</strong><small>Confirmed during scope review</small></span></div>
                ))}
              </div>
            </div>

            <div className="client-review-list">
              {siteConfig.buildNotes.map((note) => (
                <article className="client-review-card" key={note.title}>
                  <div className="client-review-meta"><span>Build standard</span><div><ListChecks size={16} /></div></div>
                  <h3>{note.title}</h3>
                  <p>{note.detail}</p>
                  <footer><span><strong>Elevate</strong><small>Delivery commitment</small></span><em>Scope before build</em></footer>
                </article>
              ))}
            </div>

            <footer className="client-reviews-footer">
              <p><ShieldCheck size={15} /><span><strong>Know what you are buying.</strong> Final scope, system access, human handoffs, third-party usage, and launch requirements are reviewed before implementation.</span></p>
              <div><button type="button" onClick={() => setStandardsOpen(false)}>Explore workflows</button><button type="button" onClick={() => { setStandardsOpen(false); setChatOpen(true); }}>Ask AI advisor <ChevronRight size={14} /></button></div>
            </footer>
          </section>
        </div>
      )}

      {pricingOpen && (
        <div className="pricing-overlay" role="dialog" aria-modal="true" aria-labelledby="pricing-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setPricingOpen(false); }}>
          <section className="pricing-modal">
            <header>
              <div>
                <span>{promoActive ? "50% link promotion active" : "One-time starting prices"}</span>
                <h2 id="pricing-title">{promoActive ? "Half-price workflow starts, reserved until midnight today." : "Enter through one clear workflow. Expand only when it earns the next step."}</h2>
                <p>Starting prices include discovery, implementation, testing, and launch handoff for the defined workflow.</p>
              </div>
              <button type="button" onClick={() => setPricingOpen(false)} aria-label="Close pricing guide"><X size={18} /></button>
            </header>
            <div className="pricing-tier-grid">
              {pricingTiers.map((tier) => {
                const livePrice = getLivePriceUsd(tier.setup, promoActive);
                return (
                  <article key={tier.id} className={tier.id === "quick-start" ? "featured" : ""}>
                    <span>{promoActive ? "50% off today" : tier.id === "quick-start" ? "Best first step" : tier.name}</span>
                    <h3>{tier.name}</h3>
                    <div className={`tier-price${promoActive ? " promo-active" : ""}`}>
                      <span className="tier-price-values">
                        <strong>{formatUsd(livePrice)}</strong>
                        {promoActive && <del>{formatUsd(tier.setup)}</del>}
                      </span>
                      <small>{promoActive ? "promo · one-time from" : "one-time from"}</small>
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
        <div className="chat-overlay" role="dialog" aria-modal="true" aria-label="Elevate AI workflow advisor" onMouseDown={(event) => { if (event.target === event.currentTarget) setChatOpen(false); }}>
          <div className="chat-shell">
            <aside className="chat-visual">
              <button type="button" className="chat-close-mobile" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button>
              <div className="chat-brand"><Wordmark compact /><span>Elevate</span></div>
              <div className="voice-orb"><Image src="/ai-voice-orb-cutout.png" alt="Abstract AI assistant visualization" fill sizes="360px" loading="eager" /></div>
              <span className="advisor-status"><i /> AI workflow advisor</span>
              <h2>Find the first workflow worth building.</h2>
              <p>Describe the bottleneck. The advisor will help frame a practical starting point for {siteConfig.audiencePlural}.</p>
              <div className="chat-principles"><span><Check size={12} />No generic package</span><span><Check size={12} />Human handoff</span><span><Check size={12} />Scope first</span></div>
            </aside>
            <section className="chat-conversation">
              <header><div><span>Elevate AI</span><strong>Workflow advisor</strong></div><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button></header>
              <div className="chat-messages">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`chat-message ${message.role}`}>
                    {message.role === "assistant" && <span className="message-avatar"><Sparkles size={13} /></span>}
                    <p>{message.content}</p>
                  </div>
                ))}
                {chatMessages.length === 1 && (
                  <div className="chat-suggestions">
                    {siteConfig.chatSuggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => sendChat(suggestion)}>{suggestion}<ChevronRight size={14} /></button>)}
                  </div>
                )}
                {chatSending && <div className="chat-message assistant"><span className="message-avatar"><Sparkles size={13} /></span><div className="typing"><i /><i /><i /></div></div>}
                <div ref={chatEndRef} />
              </div>
              <form className="chat-composer" onSubmit={(event) => { event.preventDefault(); sendChat(); }}>
                <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Describe where work gets stuck…" disabled={chatSending} />
                <button type="submit" disabled={!chatInput.trim() || chatSending} aria-label="Send message"><Send size={17} /></button>
              </form>
              <p className="chat-disclaimer">AI responses can be imperfect. Elevate confirms scope, feasibility, safeguards, and human handoffs before launch.</p>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
