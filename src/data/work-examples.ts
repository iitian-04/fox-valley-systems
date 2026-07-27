import type { TrustedIcpSlug } from "./icp-registry";

export type WorkExample = {
  name: string;
  url: string;
  summary: string;
};

const homeServicesExample: WorkExample = {
  name: "Nico’s Heating & Air",
  url: "https://hvac-b2b-demo.elevateagency.ai/?embed=1",
  summary:
    "Explore a live home-service journey that moves from service selection to an available appointment request in one clear flow.",
};

const dentalExample: WorkExample = {
  name: "DentalCare Queens",
  url: "https://dental-b2b-demo.elevateagency.ai/?embed=1",
  summary:
    "Explore a live dental journey built to answer questions, establish trust, and make requesting the right appointment feel simple.",
};

const legalExample: WorkExample = {
  name: "Elevate Legal",
  url: "https://legal-b2b-demo.elevateagency.ai/?embed=1",
  summary:
    "Explore a live legal journey that makes consultation options, initial fees, scheduling, and intake easier to understand.",
};

const workExamples = {
  "home-services": homeServicesExample,
  "hvac-companies": homeServicesExample,
  "plumbing-companies": homeServicesExample,
  "roofing-companies": homeServicesExample,
  "electrical-contractors": homeServicesExample,
  "garage-door-companies": homeServicesExample,
  "pest-control-companies": homeServicesExample,
  "landscaping-lawn-care-companies": homeServicesExample,
  "dental-practices": dentalExample,
  "law-firms": legalExample,
} satisfies Partial<Record<TrustedIcpSlug, WorkExample>>;

export function getWorkExample(slug: string): WorkExample | undefined {
  return workExamples[slug as keyof typeof workExamples];
}
