import type { TrustedIcpSlug } from "./icp-registry";

type NicheHeroImage = {
  src: string;
  alt: string;
};

type ChatAdvisorImage = {
  src: string;
  alt: string;
  label: string;
};

type ChatAdvisorGroup = "medical" | "legal" | "home-services";

const nicheHeroImages = {
  "home-services": {
    src: "/niche-heroes/home-services-v2.jpg",
    alt: "Home service technicians arriving for a residential service call",
  },
  "independent-imaging-centers": {
    src: "/niche-heroes/independent-imaging-centers.jpg",
    alt: "Radiologic technologist preparing a patient for an MRI scan",
  },
  "radiology-groups": {
    src: "/niche-heroes/radiology-groups.jpg",
    alt: "Radiologist reviewing diagnostic scans at a workstation",
  },
  "orthopedic-practices": {
    src: "/niche-heroes/orthopedic-practices.jpg",
    alt: "Orthopedic physician examining a patient’s knee",
  },
  "dental-practices": {
    src: "/niche-heroes/dental-practices.jpg",
    alt: "Dentist treating a patient in a modern operatory",
  },
  "med-spas": {
    src: "/niche-heroes/med-spas.jpg",
    alt: "Aesthetic clinician performing a facial treatment",
  },
  "chiropractic-clinics": {
    src: "/niche-heroes/chiropractic-clinics.jpg",
    alt: "Chiropractor guiding a patient through treatment",
  },
  "veterinary-clinics": {
    src: "/niche-heroes/veterinary-clinics.jpg",
    alt: "Veterinarian examining a dog in a clinic",
  },
  "physical-therapy-clinics": {
    src: "/niche-heroes/physical-therapy-clinics.jpg",
    alt: "Physical therapist guiding a patient through an exercise",
  },
  "dermatology-practices": {
    src: "/niche-heroes/dermatology-practices.jpg",
    alt: "Dermatologist examining a patient’s skin with a dermatoscope",
  },
  "law-firms": {
    src: "/niche-heroes/law-firms.jpg",
    alt: "Attorney listening to a client during a consultation",
  },
  "hvac-companies": {
    src: "/niche-heroes/hvac-companies.jpg",
    alt: "HVAC technician servicing a residential condenser",
  },
  "plumbing-companies": {
    src: "/niche-heroes/plumbing-companies.jpg",
    alt: "Plumber repairing residential pipework beneath a sink",
  },
  "roofing-companies": {
    src: "/niche-heroes/roofing-companies.jpg",
    alt: "Roofer inspecting shingles on a residential roof",
  },
  "electrical-contractors": {
    src: "/niche-heroes/electrical-contractors.jpg",
    alt: "Electrician inspecting a residential breaker panel",
  },
  "garage-door-companies": {
    src: "/niche-heroes/garage-door-companies.jpg",
    alt: "Garage door technician inspecting a residential door track",
  },
  "pest-control-companies": {
    src: "/niche-heroes/pest-control-companies.jpg",
    alt: "Pest control technician treating a home’s exterior",
  },
  "landscaping-lawn-care-companies": {
    src: "/niche-heroes/landscaping-lawn-care-companies.jpg",
    alt: "Lawn care professional maintaining a residential property",
  },
} as const satisfies Record<TrustedIcpSlug, NicheHeroImage>;

const chatAdvisorGroups = {
  "home-services": "home-services",
  "independent-imaging-centers": "medical",
  "radiology-groups": "medical",
  "orthopedic-practices": "medical",
  "dental-practices": "medical",
  "med-spas": "medical",
  "chiropractic-clinics": "medical",
  "veterinary-clinics": "medical",
  "physical-therapy-clinics": "medical",
  "dermatology-practices": "medical",
  "law-firms": "legal",
  "hvac-companies": "home-services",
  "plumbing-companies": "home-services",
  "roofing-companies": "home-services",
  "electrical-contractors": "home-services",
  "garage-door-companies": "home-services",
  "pest-control-companies": "home-services",
  "landscaping-lawn-care-companies": "home-services",
} as const satisfies Record<TrustedIcpSlug, ChatAdvisorGroup>;

const chatAdvisorImages = {
  medical: {
    src: "/chat-advisors/medical.jpg",
    alt: "Friendly medical workflow advisor",
    label: "Medical workflow advisor",
  },
  legal: {
    src: "/chat-advisors/legal.jpg",
    alt: "Friendly legal workflow advisor",
    label: "Legal workflow advisor",
  },
  "home-services": {
    src: "/chat-advisors/home-services.jpg",
    alt: "Friendly home services workflow advisor",
    label: "Home services workflow advisor",
  },
} as const satisfies Record<ChatAdvisorGroup, ChatAdvisorImage>;

export function getNicheHeroImage(slug: string): NicheHeroImage {
  const image = nicheHeroImages[slug as TrustedIcpSlug];

  if (!image) {
    throw new Error(`Missing niche hero image configuration for "${slug}".`);
  }

  return image;
}

export function getChatAdvisorImage(slug: string): ChatAdvisorImage {
  const group = chatAdvisorGroups[slug as TrustedIcpSlug];

  if (!group) {
    throw new Error(`Missing chat advisor image configuration for "${slug}".`);
  }

  return chatAdvisorImages[group];
}
