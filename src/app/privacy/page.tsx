import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import {
  LEGAL_ADDRESS,
  LEGAL_BRAND,
  LEGAL_EMAIL,
  LEGAL_ENTITY,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${LEGAL_BRAND} collects, uses, and shares personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      summary="This Policy explains how Fox Valley Systems handles information collected through this website, its workflow-planning forms, and the AI workflow advisor."
    >
      <section>
        <h2>1. Scope and responsible company</h2>
        <p>
          This Privacy Policy applies to the public Fox Valley Systems website,
          workflow-planning forms, AI chat, and related inquiry communications
          operated by {LEGAL_ENTITY} (“Fox Valley Systems,” “we,” “us,” or “our”). It does
          not replace privacy or data-processing terms in a separately signed
          client agreement.
        </p>
        <p>
          Fox Valley Systems is responsible for the personal information described in this
          Policy. Privacy questions and requests may be sent to{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li>
            contact details such as name, business email, telephone number, and
            organization;
          </li>
          <li>
            business details such as website, organization size, current
            software, operational bottlenecks, goals, and selected workflows;
          </li>
          <li>
            AI chat messages, workflow summaries, feedback, and other
            information you choose to submit; and
          </li>
          <li>
            records of your acknowledgement of our Terms, Privacy Policy, and
            permission to respond to a submitted request.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            IP address, device and browser information, operating system,
            approximate location derived from IP, timestamps, and server logs;
          </li>
          <li>
            pages viewed, referring page, landing-page URL, interactions,
            errors, and general usage activity;
          </li>
          <li>
            campaign and attribution data contained in a URL, including UTM
            parameters and Google or Meta click identifiers when present; and
          </li>
          <li>
            cookie, pixel, browser, advertising, and similar online identifiers,
            as well as local timezone used to display time-limited promotions.
          </li>
        </ul>

        <h3>Information from other sources</h3>
        <p>
          We may receive information from advertising, analytics, referral,
          integration, CRM, communications, and other service providers, and
          combine it with information collected through the website.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>
            operate, secure, troubleshoot, and improve the website and AI
            advisor;
          </li>
          <li>
            respond to inquiries, recommend a possible first workflow, prepare
            scope reviews, and communicate about a request;
          </li>
          <li>
            provide requested services and administer client relationships;
          </li>
          <li>
            personalize content, remember preferences, measure promotions, and
            understand website performance;
          </li>
          <li>
            measure advertising, attribute inquiries to campaigns, build
            audiences, and deliver or improve advertising where permitted;
          </li>
          <li>
            detect misuse, protect systems and users, enforce agreements, and
            prevent fraud; and
          </li>
          <li>
            comply with legal obligations and establish, exercise, or defend
            legal claims.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. AI processing</h2>
        <p>
          Messages sent to the AI workflow advisor are transmitted to an AI
          service provider to generate a response. The system may analyze a
          conversation to identify contact details, organization information,
          and a workflow summary when a visitor voluntarily provides them. A
          lead that is ready for follow-up may be delivered to our CRM or other
          lead-management service.
        </p>
        <p>
          Do not include sensitive personal information in AI chat. AI
          responses can be imperfect and are not professional advice or
          decisions about individuals.
        </p>
      </section>

      <section>
        <h2>5. Cookies, analytics, and advertising pixels</h2>
        <p>
          We and our providers may use cookies, pixels, tags, local storage,
          web beacons, and similar technologies. These tools may support
          essential operation, security, preferences, analytics, campaign
          measurement, attribution, audience creation, and advertising.
        </p>
        <p>
          When enabled, analytics and advertising tools may include services
          such as Google Analytics, Google Ads, Meta Pixel, or similar
          platforms. Those providers may collect online identifiers, IP and
          device information, viewed pages, interactions, referring URLs, and
          campaign data. They may combine this information with information
          collected through other sites or services according to their own
          policies and our configuration of the tools.
        </p>
        <p>
          You can control some technologies through browser settings, provider
          opt-out tools, and any consent or privacy-choice control we make
          available. Blocking technologies may affect website features.
          Where required, we will honor applicable browser-based opt-out
          preference signals.
        </p>
      </section>

      <section>
        <h2>6. How we disclose information</h2>
        <p>We may disclose information to:</p>
        <ul>
          <li>
            hosting, security, infrastructure, analytics, advertising, AI,
            CRM, lead-delivery, email, telephone, messaging, scheduling, and
            other providers that support our operations;
          </li>
          <li>
            professional advisers, auditors, insurers, and financial
            institutions;
          </li>
          <li>
            authorities or other parties when reasonably necessary to comply
            with law, protect rights and safety, investigate misuse, or respond
            to valid legal process; and
          </li>
          <li>
            a buyer, investor, lender, or successor in connection with a
            financing, merger, acquisition, reorganization, sale of assets, or
            similar transaction, subject to appropriate safeguards.
          </li>
        </ul>
        <p>
          We do not sell personal information for money. However, some
          analytics and advertising technologies may be considered a “sale,”
          “sharing,” or use for targeted advertising under certain privacy
          laws, even when no money is exchanged. Where those laws apply, you
          may request to opt out as described below.
        </p>
      </section>

      <section id="privacy-choices">
        <h2>7. Your privacy choices and rights</h2>
        <p>
          Depending on where you live and subject to legal exceptions, you may
          have rights to request access, correction, deletion, or a portable
          copy of personal information; learn about collection and disclosure;
          withdraw consent; or opt out of sale, sharing, targeted advertising,
          or certain profiling. We will not unlawfully discriminate against you
          for exercising a privacy right.
        </p>
        <p>
          Submit a request to{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> with the subject
          “Privacy Request.” Describe the request and the state, province, or
          country where you reside. We may verify identity and authority before
          responding. An authorized agent may submit a request where permitted
          by law. If applicable law provides an appeal right, you may appeal a
          denial by replying to our decision.
        </p>
        <p>
          To stop marketing email, use the unsubscribe method in the message.
          To stop text messages, reply STOP. These choices do not prevent
          non-marketing messages reasonably necessary to complete a transaction
          or respond to a request.
        </p>
      </section>

      <section>
        <h2>8. Canadian users</h2>
        <p>
          Fox Valley Systems operates in the United States and may serve Canadian
          businesses. Subject to applicable Canadian privacy law, you may
          request access to and correction of personal information, ask how it
          has been used or disclosed, and withdraw consent subject to legal or
          contractual limits and reasonable notice.
        </p>
        <p>
          Information may be processed in the United States or other
          jurisdictions where our providers operate and may be available to
          courts, law enforcement, or regulators under local law. Contact us to
          ask about our service providers or cross-border processing.
        </p>
      </section>

      <section>
        <h2>9. Sensitive information and health information</h2>
        <p>
          The public website, forms, and AI chat are for business inquiries.
          Do not provide patient information, protected health information,
          medical records, privileged legal information, customer case files,
          credentials, payment-card data, government identifiers, or other
          sensitive personal information.
        </p>
        <p>
          The public website is not a HIPAA-compliant intake channel and does
          not create a business-associate relationship. Any project requiring
          protected health information must be separately evaluated and may
          proceed only under appropriate written agreements and safeguards.
        </p>
      </section>

      <section>
        <h2>10. Retention</h2>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Policy, including
          responding to inquiries, maintaining business and consent records,
          providing services, resolving disputes, enforcing agreements,
          protecting security, and satisfying legal, tax, accounting, or
          reporting obligations. Retention periods vary by the type and
          sensitivity of information and applicable requirements.
        </p>
      </section>

      <section>
        <h2>11. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          measures designed to protect personal information. No transmission,
          storage system, or security measure is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>12. Children</h2>
        <p>
          The website is intended for business users age 18 and older. We do
          not knowingly collect personal information from children. Contact us
          if you believe a child has submitted personal information.
        </p>
      </section>

      <section>
        <h2>13. Changes to this Policy</h2>
        <p>
          We may update this Policy to reflect changes in our practices,
          technology, or legal obligations. We will post the revised Policy and
          update its effective date. When required, we will provide additional
          notice or seek consent.
        </p>
      </section>

      <section>
        <h2>14. Contact us</h2>
        <p>
          Privacy questions, requests, or complaints may be sent to{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> or mailed to{" "}
          {LEGAL_ENTITY}, {LEGAL_ADDRESS}.
        </p>
      </section>
    </LegalPage>
  );
}
