import type { Metadata } from "next";
import { IcpLanding } from "@/components/icp-landing";
import { getNicheHeroImage } from "@/data/icp-images";
import { defaultIcpSlug, getIcpBundle } from "@/data/icp-registry";
import { getPublicSiteUrl } from "@/lib/site-url";

function getHomeServicesBundle() {
  const bundle = getIcpBundle(defaultIcpSlug);

  if (!bundle) {
    throw new Error("The default home-services configuration is missing.");
  }

  return bundle;
}

const homeServicesBundle = getHomeServicesBundle();
const homeServicesHero = getNicheHeroImage(homeServicesBundle.siteConfig.slug);
const publicSiteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  title: "Build your workflow plan",
  description: homeServicesBundle.siteConfig.metaDescription,
  keywords: [
    "workflow automation",
    "home service companies",
    "lead follow-up",
    "dispatch automation",
    "call handling",
  ],
  ...(publicSiteUrl
    ? {
        alternates: { canonical: new URL("/plan", publicSiteUrl) },
      }
    : {}),
  openGraph: {
    type: "website",
    title: homeServicesBundle.siteConfig.metaTitle,
    description: homeServicesBundle.siteConfig.metaDescription,
    siteName: "Fox Valley Systems",
    ...(publicSiteUrl ? { url: new URL("/plan", publicSiteUrl) } : {}),
    ...(publicSiteUrl
      ? {
          images: [
            {
              url: new URL(homeServicesHero.src, publicSiteUrl),
              alt: homeServicesHero.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: homeServicesBundle.siteConfig.metaTitle,
    description: homeServicesBundle.siteConfig.metaDescription,
    ...(publicSiteUrl
      ? { images: [new URL(homeServicesHero.src, publicSiteUrl)] }
      : {}),
  },
};

export default function PlanPage() {
  return (
    <IcpLanding
      key={homeServicesBundle.siteConfig.slug}
      bundle={homeServicesBundle}
    />
  );
}
