# Fox Valley Systems

One mobile-first landing application serving a generic home-services homepage plus 17 industry-specific canonical routes. Every route uses the same workflow planner, lead forms, promotional pricing logic, and chat advisor while loading its own copy, workflows, prices, safeguards, prompt context, and metadata.

Unlike the previous build, **every route now renders the same visual theme.** Verticals differentiate through copy, imagery, and workflow catalogues — not color.

## Brand

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#0a0c0f` | Page background |
| Charcoal surfaces | `#15181d` → `#252a32` | Panels, cards, headers |
| Text | `#f4f5f7` | Primary type |
| Silver | `#98a1ac` / `#6c757f` | Secondary and tertiary type |
| Accent | `#e8722a` | Primary actions, focus rings, one highlight per view |
| Positive | `#4fa97c` | Success states only |

Design tokens live at the top of `src/app/globals.css`. The names `--blue`, `--cyan`, `--green`, and `--yellow` are retained as *slots*, not hues — they are referenced in roughly ninety places and are documented in that file.

Typography is Inter, self-hosted via `next/font`, with tightened tracking on headings.

### Assets

```text
src/components/brand.tsx       React mark + lockup (mark inherits currentColor)
src/app/icon.svg               Favicon
public/brand/mark.svg          Dark mark, for light backgrounds
public/brand/mark-inverse.svg  White mark, for dark backgrounds
public/og.png                  1200×630 social card
```

The mark is a vector trace of the supplied logo artwork. Its dark geometry uses `currentColor`, so it inherits surrounding type color; the ears and inner wedge keep the accent via `--fv-mark-accent`.

## Routes

The bare domain (`/`) presents the generic **Home Service Companies** experience.

Canonical ICP routes:

```text
/independent-imaging-centers
/radiology-groups
/orthopedic-practices
/dental-practices
/med-spas
/chiropractic-clinics
/veterinary-clinics
/physical-therapy-clinics
/dermatology-practices
/law-firms
/hvac-companies
/plumbing-companies
/roofing-companies
/electrical-contractors
/garage-door-companies
/pest-control-companies
/landscaping-lawn-care-companies
```

Unknown ICP paths return a 404. The path—not a visitor-controlled UTM value—is the trusted source for page content, chat instructions, workflow validation, pricing, and lead routing.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

```dotenv
LEAD_DELIVERY_WEBHOOK_URL=https://your-webhook.example/leads
LEAD_TEST_SECRET=generate-a-long-random-secret
OPENAI_API_KEY=
OPENAI_CHAT_MODEL=gpt-5.4-mini
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

- `LEAD_DELIVERY_WEBHOOK_URL` receives workflow-plan and chat leads from every ICP. Payloads include the trusted vertical, active route, regular/live prices, promotional status, and attribution.
- `LEAD_TEST_SECRET` enables the protected test-lead trigger and authenticates the optional terminal test command. Use a long random value in the target Vercel environment.
- `OPENAI_API_KEY` enables the optional chat advisor. Without it the site still builds and runs; the chat panel returns a graceful unavailable message.
- `OPENAI_CHAT_MODEL` selects the Responses API model.
- `NEXT_PUBLIC_SITE_URL` enables absolute canonical metadata outside Vercel. Vercel's production URL is used automatically when available.

## Outstanding items before launch

Search the codebase for `TODO(fox-valley)`:

1. **`src/lib/legal.ts`** — entity name, business address, and contact email are placeholders. The Terms and Privacy pages render them verbatim.
2. **`src/data/work-examples.ts`** — the three interactive demos are still served from the previous brand's domain and are embedded in an iframe, so the old brand is visible inside the demo modal.

Webhook payload identifiers were also renamed as part of the rebrand: `elevate-chat` / `elevate-plan` / `elevate-test` are now `fox-valley-chat` / `fox-valley-plan` / `fox-valley-test`. Any downstream automation that filters on `source` needs updating.

## Promotional links

Append `utm_promo=50` to any route:

```text
/dental-practices?utm_source=facebook&utm_campaign=dental&utm_promo=50
```

A valid promotional visit shows 50% live pricing until the visitor's local midnight. Both lead endpoints independently validate the promotion and calculate regular price, live price, and savings from the trusted ICP configuration.

## Lead and chat endpoints

The browser posts to route-scoped endpoints:

```text
POST /api/{icp}/plan
POST /api/{icp}/chat
```

The server validates `{icp}` against the explicit registry before selecting workflows, prices, safeguards, or advisor instructions. Raw URL or UTM values are never inserted into the system prompt.

## Testing lead delivery

The hidden test endpoint sends a fully populated synthetic lead through the same webhook delivery function used by real submissions. It returns a 404 when `LEAD_TEST_SECRET` is missing or when a request does not satisfy one of the protected trigger paths.

Generate a secret and add it to `.env.local` and the target Vercel environment:

```bash
openssl rand -hex 32
```

On the website, click or tap the header logo exactly 20 times in quick succession. The current route determines the test ICP, and a small status message confirms whether delivery succeeded. The browser trigger requires trusted click events, same-origin request metadata, human-like click timing, and a server-side cooldown. `LEAD_TEST_SECRET` stays server-side and acts as the enable/disable switch.

The endpoint can also be tested from the project folder:

```bash
npm run test:webhook -- https://your-production-domain.com home-services
```

Test deliveries use `source: "fox-valley-test"`, `isTest: true`, a reserved fictional phone number, a non-deliverable example email address, and the heading `TEST LEAD — DO NOT CONTACT` in the brief.

## Deploying to Vercel

Push this folder as one GitHub repository, import it into one Vercel project, and configure the environment variables above. The standard production build command is:

```bash
npm run build
```
