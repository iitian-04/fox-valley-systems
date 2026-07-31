import Link from "next/link";
import { ArrowRight, PhoneMissed, Route, Zap } from "lucide-react";
import { ContourField } from "@/components/contour-field";
import { WorkflowStage } from "@/components/workflow-stage";
import { FoxValleyLockup } from "@/components/brand";
import { Reveal } from "@/components/motion";
import { canonicalIcpSlugs } from "@/data/icp-registry";

const STAGES = [
  {
    n: "01",
    title: "Scope",
    body: "We map one trigger end to end — what starts it, the approved response, which system it touches, and who owns the exception.",
  },
  {
    n: "02",
    title: "Build",
    body: "Configured against the software your team already opens every morning. Nothing gets ripped out or replaced.",
  },
  {
    n: "03",
    title: "Test",
    body: "The after-hours call, the out-of-area request, the customer who replies STOP, the moment a human takes over.",
  },
  {
    n: "04",
    title: "Hand off",
    body: "You get the logic, the ownership points, and an operating guide. Your team runs it without us.",
  },
] as const;

const WORKFLOWS = [
  {
    icon: PhoneMissed,
    name: "Missed-Call Job Rescue",
    body: "Responds to missed callers, captures the job details, and alerts the office before the lead goes cold.",
    price: "$795",
  },
  {
    icon: Zap,
    name: "Instant Web-Lead Response",
    body: "Acknowledges form and campaign leads, fills the gaps, and routes each one to the right owner.",
    price: "$795",
  },
  {
    icon: Route,
    name: "Booking & Dispatch Handoff",
    body: "Books inside your rules or creates a clean confirmation task with everything dispatch needs.",
    price: "$1,695",
  },
] as const;

const STATS = [
  { value: "17", label: "Industry workflow libraries" },
  { value: "$795", label: "Typical first build, one-time" },
  { value: "3–5", label: "Business days to launch" },
] as const;

const title = (slug: string) =>
  slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <div className="nav-inner">
          <Link href="/" aria-label="Fox Valley Systems home">
            <FoxValleyLockup compact />
          </Link>
          <nav aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#workflows">Workflows</a>
            <a href="#industries">Industries</a>
          </nav>
          <Link className="nav-cta" href="/plan">
            Build a plan
          </Link>
        </div>
      </header>

      <section className="hero">
        <ContourField />

        <div className="hero-body">
          <div className="hero-copy">
            <Reveal className="hero-eyebrow" as="p">
              Workflow systems for service businesses
            </Reveal>

            <Reveal className="hero-title" as="h1" delay={60}>
              The call you missed at 4pm is the job someone else booked at 5.
            </Reveal>

            <Reveal className="hero-sub" as="p" delay={120}>
              Fox Valley Systems builds one workflow at a time — call handling,
              lead capture, scheduling, follow-up — around the software your
              team already uses. Fixed price. Your team owns it at the end.
            </Reveal>

            <Reveal className="hero-actions" delay={180}>
              <Link className="btn-primary" href="/plan">
                Build your workflow plan
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a className="btn-ghost" href="#how">
                How it works
              </a>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={120}>
            <WorkflowStage />
          </Reveal>
        </div>

        <Reveal className="hero-stats" delay={180}>
          {STATS.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section" id="how">
        <Reveal className="section-head">
          <span className="section-kicker">How it works</span>
          <h2>Four steps. You can see the end from the start.</h2>
        </Reveal>

        <div className="steps-grid">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} className="step-card">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="workflows">
        <Reveal className="section-head">
          <span className="section-kicker">Workflows</span>
          <h2>Start with the one costing you money today.</h2>
          <p>
            Every workflow is a fixed-price build with a defined trigger, an
            approved response, and a named human owner.
          </p>
        </Reveal>

        <div className="workflow-grid">
          {WORKFLOWS.map((w, i) => (
            <Reveal key={w.name} delay={i * 60} className="wf-card">
              <span className="wf-icon" aria-hidden="true">
                <w.icon size={17} strokeWidth={1.7} />
              </span>
              <h3>{w.name}</h3>
              <p>{w.body}</p>
              <footer>
                One-time from <strong>{w.price}</strong>
              </footer>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="workflow-more">
          <Link href="/plan">
            Browse the full library
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section className="section" id="industries">
        <Reveal className="section-head">
          <span className="section-kicker">Industries</span>
          <h2>Seventeen libraries, each tuned to how that trade works.</h2>
        </Reveal>
        <Reveal delay={60} className="industry-cloud">
          {canonicalIcpSlugs.map((slug) => (
            <Link key={slug} href={`/${slug}`}>
              {title(slug)}
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="section cta-section">
        <Reveal className="cta-inner">
          <h2>One workflow. Fixed price. Yours at the end.</h2>
          <p>
            Pick the bottleneck you can already see. We will scope it before
            anyone talks about money.
          </p>
          <Link className="btn-primary" href="/plan">
            Build your workflow plan
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <footer className="landing-foot">
        <div className="foot-inner">
          <FoxValleyLockup compact />
          <nav aria-label="Footer">
            <Link href="/plan">Build a plan</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <small>© {new Date().getFullYear()} Fox Valley Systems</small>
        </div>
      </footer>
    </div>
  );
}
