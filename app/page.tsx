import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import HomeClient from "@/components/HomeClient";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fast Job Career | World No 1 Job Portal",
    template: "%s | Fast Job Career",
  },
  description:
    "Connecting Global Talent with the World's Best Employers. Find jobs in UAE, Saudi Arabia, UK, Europe, and more. Visit visa, Umrah, air tickets, and career services.",
  keywords: [
    "jobs",
    "career",
    "gulf jobs",
    "UAE jobs",
    "Saudi jobs",
    "UK jobs",
    "Europe jobs",
    "work visa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: "Fast Job Career",
    title: "Fast Job Career | World No 1 Job Portal",
    description: "Connecting Global Talent with the World's Best Employers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Job Career | World No 1 Job Portal",
    description: "Connecting Global Talent with the World's Best Employers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HomeClient />
    </>
  );
}
