import * as chiropracticClinics from "./icps/chiropractic-clinics";
import * as dentalPractices from "./icps/dental-practices";
import * as dermatologyPractices from "./icps/dermatology-practices";
import * as electricalContractors from "./icps/electrical-contractors";
import * as garageDoorCompanies from "./icps/garage-door-companies";
import { homeServicesBundle } from "./icps/home-services";
import * as hvacCompanies from "./icps/hvac-companies";
import * as independentImagingCenters from "./icps/independent-imaging-centers";
import * as landscapingLawnCareCompanies from "./icps/landscaping-lawn-care-companies";
import * as medSpas from "./icps/med-spas";
import * as orthopedicPractices from "./icps/orthopedic-practices";
import * as pestControlCompanies from "./icps/pest-control-companies";
import * as physicalTherapyClinics from "./icps/physical-therapy-clinics";
import * as plumbingCompanies from "./icps/plumbing-companies";
import * as radiologyGroups from "./icps/radiology-groups";
import * as roofingCompanies from "./icps/roofing-companies";
import * as veterinaryClinics from "./icps/veterinary-clinics";
import {
  defineIcpBundle,
  type IcpBundle,
  type IcpBundleSource,
  type ThemeConfig,
} from "./icp-types";

export const canonicalIcpSlugs = [
  "independent-imaging-centers",
  "radiology-groups",
  "orthopedic-practices",
  "dental-practices",
  "med-spas",
  "chiropractic-clinics",
  "veterinary-clinics",
  "physical-therapy-clinics",
  "dermatology-practices",
  "hvac-companies",
  "plumbing-companies",
  "roofing-companies",
  "electrical-contractors",
  "garage-door-companies",
  "pest-control-companies",
  "landscaping-lawn-care-companies",
] as const;

export type IcpSlug = (typeof canonicalIcpSlugs)[number];

export const defaultIcpSlug = "home-services" as const;

export type TrustedIcpSlug = IcpSlug | typeof defaultIcpSlug;

const canonicalIcpSlugSet = new Set<string>(canonicalIcpSlugs);

function theme(
  primary: string,
  accent: string,
  dark: string,
  background: string,
  primaryRgb: string,
): ThemeConfig {
  return {
    primary,
    accent,
    accentStrong: primary,
    accentSoft: `rgba(${primaryRgb}, 0.16)`,
    secondary: accent,
    dark,
    background,
  };
}

function source(module: IcpBundleSource): IcpBundleSource {
  return module;
}

const canonicalBundles: Record<IcpSlug, IcpBundle> = {
  "independent-imaging-centers": defineIcpBundle(
    source(independentImagingCenters),
    theme("#155EEF", "#14B8A6", "#0B1F3A", "#F5F9FF", "21, 94, 239"),
  ),
  "radiology-groups": defineIcpBundle(
    source(radiologyGroups),
    theme("#4F46E5", "#22D3EE", "#161742", "#F7F7FF", "79, 70, 229"),
  ),
  "orthopedic-practices": defineIcpBundle(
    source(orthopedicPractices),
    theme("#0F6B78", "#F59E0B", "#102A2F", "#F3FAFA", "15, 107, 120"),
  ),
  "dental-practices": defineIcpBundle(
    source(dentalPractices),
    theme("#006D77", "#55C2FF", "#102A43", "#F4FBFC", "0, 109, 119"),
  ),
  "med-spas": defineIcpBundle(
    source(medSpas),
    theme("#7C3AED", "#F472B6", "#2E1065", "#FCF7FF", "124, 58, 237"),
  ),
  "chiropractic-clinics": defineIcpBundle(
    source(chiropracticClinics),
    theme("#1D4ED8", "#84CC16", "#172554", "#F7FAFF", "29, 78, 216"),
  ),
  "veterinary-clinics": defineIcpBundle(
    source(veterinaryClinics),
    theme("#047857", "#F59E0B", "#173B31", "#F4FBF7", "4, 120, 87"),
  ),
  "physical-therapy-clinics": defineIcpBundle(
    source(physicalTherapyClinics),
    theme("#0F766E", "#FB923C", "#123A3A", "#F2FBFA", "15, 118, 110"),
  ),
  "dermatology-practices": defineIcpBundle(
    source(dermatologyPractices),
    theme("#9D174D", "#A78BFA", "#3F1027", "#FFF7FA", "157, 23, 77"),
  ),
  "hvac-companies": defineIcpBundle(
    source(hvacCompanies),
    theme("#075985", "#F97316", "#0C2D48", "#F3F9FC", "7, 89, 133"),
  ),
  "plumbing-companies": defineIcpBundle(
    source(plumbingCompanies),
    theme("#0369A1", "#06B6D4", "#082F49", "#F0F9FF", "3, 105, 161"),
  ),
  "roofing-companies": defineIcpBundle(
    source(roofingCompanies),
    theme("#9A3412", "#FBBF24", "#3B1D12", "#FFF8F3", "154, 52, 18"),
  ),
  "electrical-contractors": defineIcpBundle(
    source(electricalContractors),
    theme("#7C2D12", "#FACC15", "#271A0C", "#FFFBEF", "124, 45, 18"),
  ),
  "garage-door-companies": defineIcpBundle(
    source(garageDoorCompanies),
    theme("#B42318", "#38BDF8", "#36120F", "#FFF7F5", "180, 35, 24"),
  ),
  "pest-control-companies": defineIcpBundle(
    source(pestControlCompanies),
    theme("#3F6212", "#EAB308", "#1A2E05", "#F8FBEF", "63, 98, 18"),
  ),
  "landscaping-lawn-care-companies": defineIcpBundle(
    source(landscapingLawnCareCompanies),
    theme("#166534", "#84CC16", "#102A1B", "#F4FAF4", "22, 101, 52"),
  ),
};

for (const slug of canonicalIcpSlugs) {
  if (canonicalBundles[slug].siteConfig.slug !== slug) {
    throw new Error(`Canonical ICP registry mismatch for "${slug}".`);
  }
}

const trustedBundles: Readonly<Record<TrustedIcpSlug, IcpBundle>> = {
  [defaultIcpSlug]: homeServicesBundle,
  ...canonicalBundles,
};

export function isCanonicalIcpSlug(raw: unknown): raw is IcpSlug {
  return typeof raw === "string" && canonicalIcpSlugSet.has(raw);
}

export function getIcpBundle(raw: unknown): IcpBundle | undefined {
  if (raw === defaultIcpSlug) {
    return trustedBundles[defaultIcpSlug];
  }

  if (!isCanonicalIcpSlug(raw)) {
    return undefined;
  }

  return trustedBundles[raw];
}
