import type { Metadata } from "next";
import { IcpLanding } from "@/components/icp-landing";
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
const publicSiteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  title: { absolute: homeServicesBundle.siteConfig.metaTitle },
  description: homeServicesBundle.siteConfig.metaDescription,
  keywords: [
    "AI automation",
    "home service companies",
    "workflow automation",
    "lead follow-up",
    "dispatch automation",
  ],
  ...(publicSiteUrl
    ? {
        alternates: { canonical: new URL("/", publicSiteUrl) },
      }
    : {}),
  openGraph: {
    type: "website",
    title: homeServicesBundle.siteConfig.metaTitle,
    description: homeServicesBundle.siteConfig.metaDescription,
    siteName: "Elevate",
    ...(publicSiteUrl ? { url: new URL("/", publicSiteUrl) } : {}),
    ...(publicSiteUrl
      ? {
          images: [
            {
              url: new URL("/og.png", publicSiteUrl),
              width: 1200,
              height: 630,
              alt: "Elevate AI workflows for home service companies",
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
      ? { images: [new URL("/og.png", publicSiteUrl)] }
      : {}),
  },
};

export default function HomePage() {
  return (
    <IcpLanding
      key={homeServicesBundle.siteConfig.slug}
      bundle={homeServicesBundle}
    />
  );
}
