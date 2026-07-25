import type { Metadata, Viewport } from "next";
import { getPublicSiteUrl } from "@/lib/site-url";
import "./globals.css";

const publicSiteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  ...(publicSiteUrl ? { metadataBase: publicSiteUrl } : {}),
  title: {
    default: "Elevate — AI Workflows for Service Businesses",
    template: "%s | Elevate",
  },
  description:
    "Practical AI calling, lead capture, scheduling, follow-up, and operations workflows built around the tools service businesses already use.",
  applicationName: "Elevate",
  keywords: [
    "AI automation",
    "service businesses",
    "home service companies",
    "workflow automation",
    "lead follow-up",
    "operations automation",
  ],
  openGraph: {
    type: "website",
    title: "Elevate — AI Workflows for Service Businesses",
    description:
      "Start with one practical workflow, prove its value, and expand when it earns the next step.",
    siteName: "Elevate",
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
    title: "Elevate — AI Workflows for Service Businesses",
    description:
      "Start with one practical workflow, prove its value, and expand when it earns the next step.",
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
  themeColor: "#0a101b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
