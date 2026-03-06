import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import PageSidebar from "@/components/PageSidebar";

interface StandardPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  activeSlug: string;
}

export function generateStandardMetadata(title: string, description: string, slug: string): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: `${title} | Fast Job Career`,
    description,
    keywords: `${title.toLowerCase()}, Fast Job Career, jobs, careers, employment`,
    authors: [{ name: "Fast Job Career" }],
    creator: "Fast Job Career",
    publisher: "Fast Job Career",
    alternates: {
      canonical: `${SITE_URL}/${slug}`,
    },
    openGraph: {
      url: `${SITE_URL}/${slug}`,
      title: `${title} | Fast Job Career`,
      description,
      type: "website",
      siteName: "Fast Job Career",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Fast Job Career`,
      description,
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
}

export default function StandardPageLayout({ 
  children, 
  title, 
  description, 
  activeSlug 
}: StandardPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="page-with-sidebar">
        <PageSidebar activeSlug={activeSlug} />
        <div className="page-main-content">
          {children}
        </div>
      </div>
    </main>
  );
}
