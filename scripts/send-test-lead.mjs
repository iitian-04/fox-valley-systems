const [, , baseUrlArgument = "http://localhost:3000", icp = "home-services"] =
  process.argv;
const secret = process.env.LEAD_TEST_SECRET?.trim();

if (!secret) {
  console.error(
    "LEAD_TEST_SECRET is missing. Add it to .env.local and to the target Vercel environment.",
  );
  process.exit(1);
}

let endpoint;
try {
  endpoint = new URL("/api/internal/webhook-test", baseUrlArgument);
} catch {
  console.error(
    "Pass a complete base URL, for example: npm run test:webhook -- https://your-elevate-domain.com home-services",
  );
  process.exit(1);
}

let response;
try {
  response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ icp }),
    signal: AbortSignal.timeout(15000),
  });
} catch (error) {
  console.error(
    `Could not reach ${endpoint.origin}:`,
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
}

const responseBody = await response.text();
let result;
try {
  result = JSON.parse(responseBody);
} catch {
  result = { error: responseBody || `HTTP ${response.status}` };
}

if (!response.ok) {
  console.error(
    `Test lead failed (${response.status}): ${result.error || "Unknown error"}`,
  );
  process.exit(1);
}

console.log(
  `Test lead delivered for ${result.icp} at ${result.submittedAt}.`,
);
