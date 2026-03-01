import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import GlobalLayout from "@/components/GlobalLayout";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Root metadata – child pages override. WordPress-style title template.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fast Portal | Jobs, Travel & Services Platform",
    template: "%s | Fast Portal",
  },
  description:
    "Fast Portal - Your one-stop platform for jobs, travel services, air tickets, visas, and more. Connect with global opportunities and travel worldwide.",
  keywords: "jobs, travel, air tickets, visa services, career portal, travel booking, job search, flights",
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  openGraph: {
    siteName: "Fast Portal",
    type: "website",
    locale: "en_US",
    title: "Fast Portal | Jobs, Travel & Services Platform",
    description: "Fast Portal - Your one-stop platform for jobs, travel services, air tickets, visas, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Portal | Jobs, Travel & Services Platform",
    description: "Fast Portal - Your one-stop platform for jobs, travel services, air tickets, visas, and more.",
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
    // yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
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
              name: "Fast Portal",
              description: "Your one-stop platform for jobs, travel services, air tickets, visas, and more",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/find-jobs?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Fast Portal",
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
              name: "Fast Portal",
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
              },
              areaServed: "Worldwide",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale="en" messages={enMessages as any}>
          <GlobalLayout>{children}</GlobalLayout>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
