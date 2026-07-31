import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { getPublicSiteUrl } from "@/lib/site-url";

const publicSiteUrl = getPublicSiteUrl();

const TITLE = "Fox Valley Systems — Workflow Systems for Service Businesses";
const DESCRIPTION =
  "One workflow at a time — call handling, lead capture, scheduling, and follow-up — built around the software your team already uses. Fixed price, no retainer, your team owns it.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "workflow automation",
    "home service companies",
    "lead follow-up",
    "dispatch automation",
    "call handling",
  ],
  ...(publicSiteUrl
    ? { alternates: { canonical: new URL("/", publicSiteUrl) } }
    : {}),
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Fox Valley Systems",
    ...(publicSiteUrl ? { url: new URL("/", publicSiteUrl) } : {}),
    ...(publicSiteUrl
      ? {
          images: [
            {
              url: new URL("/og.png", publicSiteUrl),
              width: 1200,
              height: 630,
              alt: "Fox Valley Systems",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    ...(publicSiteUrl ? { images: [new URL("/og.png", publicSiteUrl)] } : {}),
  },
};

export default function HomePage() {
  return <Landing />;
}
