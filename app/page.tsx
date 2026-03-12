import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import EnhancedHomeClient from "@/components/EnhancedHomeClient";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fast Portal | Jobs, Travel & Services Platform",
    template: "%s | Fast Portal",
  },
  description:
    "Fast Portal - Your one-stop platform for jobs, travel services, air tickets, visas, and more. AI-powered job matching, advanced filters, mobile swipe interface, and personalized job alerts.",
  keywords: [
    "jobs",
    "career",
    "travel",
    "air tickets",
    "visa services",
    "job search",
    "employment",
    "recruitment",
    "gulf jobs",
    "UAE jobs",
    "Saudi jobs",
    "UK jobs",
    "Europe jobs",
    "work visa",
    "AI job matching",
    "mobile jobs",
    "job alerts"
  ],
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    siteName: "Fast Portal",
    title: "Fast Portal | Jobs, Travel & Services Platform",
    description: "AI-powered job matching, advanced filters, and mobile swipe interface",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Portal | Jobs, Travel & Services Platform",
    description: "AI-powered job matching, advanced filters, and mobile swipe interface",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <EnhancedHomeClient />
    </>
  );
}
