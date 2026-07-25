# Elevate Main

One mobile-first Elevate landing application serving a generic home-services homepage plus 16 industry-specific canonical routes. Every route uses the same tested workflow planner, lead forms, promotional pricing logic, and AI advisor while loading its own copy, workflows, prices, safeguards, prompt context, metadata, and color scheme.

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
/hvac-companies
/plumbing-companies
/roofing-companies
/electrical-contractors
/garage-door-companies
/pest-control-companies
/landscaping-lawn-care-companies
```

Unknown ICP paths return a 404. The path—not a visitor-controlled UTM value—is the trusted source for page content, AI instructions, workflow validation, pricing, and lead routing.

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
OPENAI_API_KEY=
OPENAI_CHAT_MODEL=gpt-5.4-mini
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

- `LEAD_DELIVERY_WEBHOOK_URL` receives workflow-plan and AI-chat leads from every ICP. Payloads include the trusted vertical, active route, regular/live prices, promotional status, and attribution.
- `OPENAI_API_KEY` enables the optional AI workflow advisor.
- `OPENAI_CHAT_MODEL` selects the Responses API model.
- `NEXT_PUBLIC_SITE_URL` enables absolute canonical metadata outside Vercel. Vercel’s production URL is used automatically when available.

## Promotional links

Append `utm_promo=50` to any route:

```text
/dental-practices?utm_source=facebook&utm_campaign=dental-ai&utm_promo=50
```

A valid promotional visit shows 50% live pricing until the visitor’s local midnight. Both lead endpoints independently validate the promotion and calculate regular price, live price, and savings from the trusted ICP configuration.

## Lead and AI endpoints

The browser posts to route-scoped endpoints:

```text
POST /api/{icp}/plan
POST /api/{icp}/chat
```

The server validates `{icp}` against the explicit registry before selecting workflows, prices, safeguards, or AI instructions. Raw URL or UTM values are never inserted into the AI system prompt.

## Deploying to Vercel

Push this folder as one GitHub repository, import it into one Vercel project, and configure the environment variables above. The standard production build command is:

```bash
npm run build
```
