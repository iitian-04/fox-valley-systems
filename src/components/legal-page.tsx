import Link from "next/link";
import type { ReactNode } from "react";
import {
  LEGAL_ADDRESS,
  LEGAL_BRAND,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_EMAIL,
  LEGAL_ENTITY,
} from "@/lib/legal";
import { FoxValleyMark } from "@/components/brand";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  children,
}: LegalPageProps) {
  return (
    <main className="legal-screen">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Return to Fox Valley Systems">
          <FoxValleyMark />
          {LEGAL_BRAND}
        </Link>
        <nav aria-label="Legal navigation">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link className="legal-back" href="/">Back to Fox Valley Systems</Link>
        </nav>
      </header>

      <article className="legal-document">
        <header className="legal-document-heading">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <dl>
            <div>
              <dt>Effective</dt>
              <dd>{LEGAL_EFFECTIVE_DATE}</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>{LEGAL_ENTITY}</dd>
            </div>
          </dl>
        </header>

        <div className="legal-content">{children}</div>

        <footer className="legal-document-footer">
          <div>
            <strong>{LEGAL_ENTITY}</strong>
            <span>{LEGAL_ADDRESS}</span>
          </div>
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </footer>
      </article>
    </main>
  );
}
