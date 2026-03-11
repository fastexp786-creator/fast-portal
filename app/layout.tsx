import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/constants";
import GlobalLayout from "@/components/GlobalLayout";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Root metadata – child pages override. WordPress-style title template.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fast Job Career | Jobs, Travel & Services Platform",
    template: "%s | Fast Job Career",
  },
  description:
    "Fast Job Career - Your one-stop platform for jobs, travel services, air tickets, visas, and more. Connect with global opportunities and travel worldwide.",
  keywords: "jobs, travel, air tickets, visa services, career portal, travel booking, job search, flights, Fast Job Career",
  authors: [{ name: "Fast Job Career" }],
  creator: "Fast Job Career",
  publisher: "Fast Job Career",
  openGraph: {
    siteName: "Fast Job Career",
    type: "website",
    locale: "en_US",
    title: "Fast Job Career | Jobs, Travel & Services Platform",
    description: "Fast Job Career - Your one-stop platform for jobs, travel services, air tickets, visas, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Job Career | Jobs, Travel & Services Platform",
    description: "Fast Job Career - Your one-stop platform for jobs, travel services, air tickets, visas, and more.",
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
  // WordPress plugins (Yoast/RankMath) verification – .env se add karo
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fast Job Career",
              description: "Your one-stop platform for jobs, travel services, air tickets, visas, and more",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/find-jobs?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Fast Job Career",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/logo.png`,
                },
              },
              sameAs: [
                // Add social media URLs here when available
              ],
            }),
          }}
        />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fast Job Career",
              description: "Leading platform for jobs, travel services, and global opportunities",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
                telephone: "+92-310-0570707",
              },
              areaServed: "Worldwide",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressLocality: "Islamabad",
              },
              sameAs: [
                // Add social media URLs here when available
              ],
            }),
          }}
        />
        {/* Job Posting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fast Job Career",
              url: SITE_URL,
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: "1000+",
                itemListElement: [
                  {
                    "@type": "JobPosting",
                    title: "Various Job Opportunities",
                    description: "Find your dream job with Fast Job Career",
                    employmentType: "FULL_TIME",
                    hiringOrganization: {
                      "@type": "Organization",
                      name: "Fast Job Career",
                    },
                  }
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider locale="en" messages={enMessages as any}>
          <GlobalLayout>{children}</GlobalLayout>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}