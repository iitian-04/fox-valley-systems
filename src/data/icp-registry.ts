import * as chiropracticClinics from "./icps/chiropractic-clinics";
import * as dentalPractices from "./icps/dental-practices";
import * as dermatologyPractices from "./icps/dermatology-practices";
import * as electricalContractors from "./icps/electrical-contractors";
import * as garageDoorCompanies from "./icps/garage-door-companies";
import { homeServicesBundle } from "./icps/home-services";
import * as hvacCompanies from "./icps/hvac-companies";
import * as independentImagingCenters from "./icps/independent-imaging-centers";
import * as landscapingLawnCareCompanies from "./icps/landscaping-lawn-care-companies";
import * as lawFirms from "./icps/law-firms";
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
  foxValleyTheme,
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
  "law-firms",
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

/**
 * Every vertical resolves to the same Fox Valley theme. `theme()` is kept as a
 * call at each site so the registry reads consistently and so a future
 * per-vertical override has an obvious place to live.
 */
function theme(): ThemeConfig {
  return { ...foxValleyTheme };
}

function source(module: IcpBundleSource): IcpBundleSource {
  return module;
}

const canonicalBundles: Record<IcpSlug, IcpBundle> = {
  "independent-imaging-centers": defineIcpBundle(
    source(independentImagingCenters),
    theme(),
  ),
  "radiology-groups": defineIcpBundle(
    source(radiologyGroups),
    theme(),
  ),
  "orthopedic-practices": defineIcpBundle(
    source(orthopedicPractices),
    theme(),
  ),
  "dental-practices": defineIcpBundle(
    source(dentalPractices),
    theme(),
  ),
  "med-spas": defineIcpBundle(
    source(medSpas),
    theme(),
  ),
  "chiropractic-clinics": defineIcpBundle(
    source(chiropracticClinics),
    theme(),
  ),
  "veterinary-clinics": defineIcpBundle(
    source(veterinaryClinics),
    theme(),
  ),
  "physical-therapy-clinics": defineIcpBundle(
    source(physicalTherapyClinics),
    theme(),
  ),
  "dermatology-practices": defineIcpBundle(
    source(dermatologyPractices),
    theme(),
  ),
  "law-firms": defineIcpBundle(
    source(lawFirms),
    theme(),
  ),
  "hvac-companies": defineIcpBundle(
    source(hvacCompanies),
    theme(),
  ),
  "plumbing-companies": defineIcpBundle(
    source(plumbingCompanies),
    theme(),
  ),
  "roofing-companies": defineIcpBundle(
    source(roofingCompanies),
    theme(),
  ),
  "electrical-contractors": defineIcpBundle(
    source(electricalContractors),
    theme(),
  ),
  "garage-door-companies": defineIcpBundle(
    source(garageDoorCompanies),
    theme(),
  ),
  "pest-control-companies": defineIcpBundle(
    source(pestControlCompanies),
    theme(),
  ),
  "landscaping-lawn-care-companies": defineIcpBundle(
    source(landscapingLawnCareCompanies),
    theme(),
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
