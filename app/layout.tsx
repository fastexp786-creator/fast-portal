import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import GlobalLayout from "@/components/GlobalLayout";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "Fast Job Career | World No 1 Job Portal",
    template: "%s | Fast Job Career",
  },
  description:
    "Connecting Global Talent with the World's Best Employers. Find jobs in UAE, Saudi Arabia, UK, Europe, and more.",
  openGraph: {
    siteName: "Fast Job Career",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale="en" messages={enMessages as any}>
          <GlobalLayout>{children}</GlobalLayout>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
