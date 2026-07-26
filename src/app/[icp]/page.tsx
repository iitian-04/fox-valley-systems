import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IcpLanding } from "@/components/icp-landing";
import { getNicheHeroImage } from "@/data/icp-images";
import {
  canonicalIcpSlugs,
  getIcpBundle,
  isCanonicalIcpSlug,
} from "@/data/icp-registry";
import { getPublicSiteUrl } from "@/lib/site-url";

type IcpPageProps = {
  params: Promise<{ icp: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return canonicalIcpSlugs.map((icp) => ({ icp }));
}

export async function generateMetadata({
  params,
}: IcpPageProps): Promise<Metadata> {
  const { icp } = await params;
  if (!isCanonicalIcpSlug(icp)) return {};

  const bundle = getIcpBundle(icp);
  if (!bundle) return {};

  const { siteConfig } = bundle;
  const nicheHeroImage = getNicheHeroImage(siteConfig.slug);
  const route = `/${siteConfig.slug}`;
  const publicSiteUrl = getPublicSiteUrl();

  return {
    title: { absolute: siteConfig.metaTitle },
    description: siteConfig.metaDescription,
    keywords: [
      "AI automation",
      siteConfig.industry,
      "workflow automation",
      "lead follow-up",
      "operations automation",
    ],
    alternates: publicSiteUrl
      ? { canonical: new URL(route, publicSiteUrl) }
      : undefined,
    openGraph: {
      type: "website",
      title: siteConfig.metaTitle,
      description: siteConfig.metaDescription,
      siteName: "Elevate",
      ...(publicSiteUrl ? { url: new URL(route, publicSiteUrl) } : {}),
      ...(publicSiteUrl
        ? {
            images: [
              {
                url: new URL(nicheHeroImage.src, publicSiteUrl),
                alt: nicheHeroImage.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.metaTitle,
      description: siteConfig.metaDescription,
      ...(publicSiteUrl
        ? { images: [new URL(nicheHeroImage.src, publicSiteUrl)] }
        : {}),
    },
  };
}

export default async function IcpPage({ params }: IcpPageProps) {
  const { icp } = await params;
  if (!isCanonicalIcpSlug(icp)) notFound();

  const bundle = getIcpBundle(icp);
  if (!bundle) notFound();

  return <IcpLanding key={bundle.siteConfig.slug} bundle={bundle} />;
}
