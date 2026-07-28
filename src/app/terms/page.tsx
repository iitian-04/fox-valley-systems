import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import {
  LEGAL_ADDRESS,
  LEGAL_BRAND,
  LEGAL_EMAIL,
  LEGAL_ENTITY,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${LEGAL_BRAND} website and AI workflow advisor.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      summary="These Terms govern this website, its workflow-planning tools, and the Elevate AI advisor. A separately signed service agreement or statement of work governs any paid implementation services."
    >
      <section>
        <h2>1. Acceptance and eligibility</h2>
        <p>
          By accessing or using this website, submitting an inquiry, or using
          the AI workflow advisor, you agree to these Terms. If you use the
          website for an organization, you represent that you have authority to
          act for that organization. You must be at least 18 years old and able
          to enter into a binding agreement.
        </p>
      </section>

      <section>
        <h2>2. Website scope and separate service agreements</h2>
        <p>
          This website helps businesses explore possible automation workflows
          and request a scope review. Website content, examples, starting
          prices, promotions, timelines, and AI responses are informational and
          do not create a commitment to deliver services.
        </p>
        <p>
          Paid implementation work begins only after the parties agree to a
          separate written proposal, statement of work, order form, or service
          agreement. If that agreement conflicts with these Terms, the signed
          agreement controls for the paid services it covers.
        </p>
      </section>

      <section>
        <h2>3. Estimates, promotions, and results</h2>
        <p>
          Published prices are starting estimates based on a typical scope.
          Final price, timing, feasibility, dependencies, third-party usage
          charges, and deliverables are confirmed only after review. Promotions
          may be limited, changed, withdrawn, or subject to additional terms.
        </p>
        <p>
          Elevate does not guarantee revenue, savings, leads, bookings,
          conversion rates, uptime, response times, business outcomes, clinical
          outcomes, legal results, or regulatory compliance.
        </p>
      </section>

      <section>
        <h2>4. AI advisor and no professional advice</h2>
        <p>
          The AI advisor is an automated system. Its responses may be
          incomplete, inaccurate, outdated, or unsuitable for your situation.
          You are responsible for independently reviewing outputs before
          relying on or implementing them.
        </p>
        <p>
          Elevate is not a law firm, medical provider, financial adviser,
          emergency service, licensed trade contractor, or compliance
          authority. Nothing on this website is legal, medical, clinical,
          safety, tax, financial, or other professional advice. Using the
          website does not create an attorney-client, provider-patient,
          fiduciary, contractor-customer, or other professional relationship.
        </p>
      </section>

      <section>
        <h2>5. Your responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>
            the accuracy, legality, and rights associated with information,
            instructions, content, and data you provide;
          </li>
          <li>
            obtaining required permissions, licenses, notices, consents, and
            approvals for calling, texting, email, recording, advertising,
            data use, and system access;
          </li>
          <li>
            human review of automated decisions, communications, quotes,
            scheduling, routing, and other outputs;
          </li>
          <li>
            compliance with professional, industry, privacy, consumer
            protection, accessibility, employment, and local requirements that
            apply to your organization; and
          </li>
          <li>
            maintaining appropriate security, backups, credentials, and
            internal access controls.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Sensitive information and prohibited submissions</h2>
        <p>
          Do not submit patient information, protected health information,
          medical records, privileged legal information, customer case files,
          government identifiers, payment-card data, account credentials,
          passwords, API keys, or other sensitive personal information through
          the public website or AI chat.
        </p>
        <p>
          The public website and AI chat are not HIPAA-compliant intake
          channels. Elevate does not act as a HIPAA business associate through
          this website. Any handling of protected health information requires
          advance written approval, a signed business associate agreement when
          legally required, and a separately approved technical scope.
        </p>
      </section>

      <section>
        <h2>7. Acceptable use</h2>
        <p>You may not:</p>
        <ul>
          <li>
            use the website or outputs for unlawful, deceptive, harmful,
            discriminatory, abusive, or rights-infringing activity;
          </li>
          <li>
            attempt to access non-public systems, bypass safeguards, probe for
            vulnerabilities, introduce malware, or interfere with operation;
          </li>
          <li>
            impersonate another person, misrepresent authority, or submit
            information you are not authorized to provide;
          </li>
          <li>
            scrape, copy, reverse engineer, resell, or commercially exploit the
            website except as permitted in writing; or
          </li>
          <li>
            use automated outputs without appropriate human review where they
            could materially affect a person&apos;s health, safety, legal
            rights, employment, housing, credit, or access to essential
            services.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Third-party services</h2>
        <p>
          Workflows may depend on third-party software, AI models, hosting,
          telecommunications, messaging, advertising, CRM, scheduling, payment,
          or other providers. Elevate does not control and is not responsible
          for third-party terms, pricing, policies, availability, security,
          changes, suspensions, data practices, or performance. Third-party
          charges are your responsibility unless a signed agreement says
          otherwise.
        </p>
      </section>

      <section>
        <h2>9. Intellectual property and feedback</h2>
        <p>
          The website, its design, text, software, branding, and original
          content are owned by or licensed to {LEGAL_ENTITY} and are protected
          by applicable intellectual-property laws. These Terms give you only a
          limited, revocable, non-exclusive right to use the website for its
          intended business-inquiry purpose.
        </p>
        <p>
          If you provide suggestions or feedback, you grant Elevate a
          worldwide, perpetual, irrevocable, royalty-free right to use it
          without restriction or compensation, provided we do not publicly
          identify you without permission.
        </p>
      </section>

      <section>
        <h2>10. No confidentiality through the public website</h2>
        <p>
          Public website and chat submissions are not confidential,
          attorney-client privileged, or subject to a professional duty of
          confidentiality. Do not submit confidential information before a
          written agreement covering that information is in place.
        </p>
      </section>

      <section>
        <h2>11. Disclaimer of warranties</h2>
        <p>
          To the fullest extent permitted by law, the website, AI advisor, and
          all website content are provided “as is” and “as available.” Elevate
          disclaims all express, implied, and statutory warranties, including
          merchantability, fitness for a particular purpose, title,
          non-infringement, accuracy, availability, security, and that the
          website will be uninterrupted or error-free.
        </p>
      </section>

      <section>
        <h2>12. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Elevate and its owners,
          personnel, contractors, and affiliates will not be liable for
          indirect, incidental, special, exemplary, punitive, or consequential
          damages, or for lost profits, revenue, business, goodwill,
          opportunities, or data, arising from the website or AI advisor.
        </p>
        <p>
          To the fullest extent permitted by law, total liability arising from
          or relating to this website or AI advisor will not exceed the greater
          of US $100 or the amount you paid specifically to access the website
          during the six months before the event giving rise to the claim.
          Liability for separately contracted paid services is governed by the
          applicable signed agreement. These limits do not apply where the law
          does not allow them.
        </p>
      </section>

      <section>
        <h2>13. Indemnification</h2>
        <p>
          To the fullest extent permitted by law, you will defend, indemnify,
          and hold harmless Elevate and its owners, personnel, contractors, and
          affiliates from third-party claims, losses, liabilities, damages,
          judgments, and reasonable costs arising from your unlawful use of the
          website, your submissions or instructions, your violation of these
          Terms, or your violation of another person&apos;s rights.
        </p>
      </section>

      <section>
        <h2>14. Suspension and termination</h2>
        <p>
          Elevate may restrict or terminate access to the website at any time
          when reasonably necessary to protect the website, users, third
          parties, or Elevate, or in response to suspected misuse or legal
          requirements. Provisions that by their nature should survive
          termination will remain effective.
        </p>
      </section>

      <section>
        <h2>15. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Wyoming, without
          regard to conflict-of-law rules. Any dispute not governed by a
          separate signed agreement must be brought exclusively in the state or
          federal courts with jurisdiction in or serving Sheridan County,
          Wyoming, and each party consents to that jurisdiction and venue.
        </p>
      </section>

      <section>
        <h2>16. General terms</h2>
        <p>
          Neither party is liable for delay caused by events beyond its
          reasonable control. If any provision is unenforceable, it will be
          limited to the minimum extent necessary and the remaining provisions
          will continue. Failure to enforce a provision is not a waiver. You
          may not assign these Terms without Elevate&apos;s written consent.
          These Terms and any applicable signed agreement are the complete
          agreement concerning their respective subject matter.
        </p>
      </section>

      <section>
        <h2>17. Changes and contact</h2>
        <p>
          Elevate may update these Terms by posting a revised version and
          changing the effective date. Changes apply prospectively unless the
          law permits otherwise. Questions may be sent to{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> or mailed to{" "}
          {LEGAL_ENTITY}, {LEGAL_ADDRESS}.
        </p>
      </section>
    </LegalPage>
  );
}
