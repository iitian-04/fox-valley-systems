import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { getPublicSiteUrl } from "@/lib/site-url";
import "./globals.css";

const publicSiteUrl = getPublicSiteUrl();

/**
 * Two faces, each with one job.
 *
 * Inter carries every piece of interface text — labels, body copy, prices,
 * form fields. Instrument Serif is used only for h1 and h2, which are all
 * 20px or larger; it is a display face and falls apart at small sizes.
 *
 * Both are loaded through `next/font`, so they are self-hosted at build time
 * and add no third-party request at runtime.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const TITLE = "Fox Valley Systems — Practical AI Workflows for Service Businesses";
const DESCRIPTION =
  "Fox Valley Systems builds one useful workflow at a time — call handling, lead capture, scheduling, and follow-up — around the tools your team already uses.";
const SOCIAL_DESCRIPTION =
  "Start with one workflow, see what it changes, and expand only when it earns the next step.";

export const metadata: Metadata = {
  ...(publicSiteUrl ? { metadataBase: publicSiteUrl } : {}),
  title: {
    default: TITLE,
    template: "%s | Fox Valley Systems",
  },
  description: DESCRIPTION,
  applicationName: "Fox Valley Systems",
  keywords: [
    "workflow automation",
    "service businesses",
    "home service companies",
    "lead follow-up",
    "scheduling automation",
    "operations automation",
  ],
  openGraph: {
    type: "website",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    siteName: "Fox Valley Systems",
    ...(publicSiteUrl
      ? {
          images: [
            {
              url: new URL("/og.png", publicSiteUrl),
              width: 1200,
              height: 630,
              alt: "Fox Valley Systems — practical workflows for service businesses",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    ...(publicSiteUrl
      ? { images: [new URL("/og.png", publicSiteUrl)] }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: "#0a0c0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
