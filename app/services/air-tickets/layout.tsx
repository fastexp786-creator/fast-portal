import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Air Tickets - Book Flights Worldwide | Fast Portal",
  description: "Search and book flights worldwide with Fast Portal. Find best deals on domestic and international flights. Compare prices and book your next trip.",
  keywords: "air tickets, flight booking, cheap flights, airline tickets, travel booking, flight search",
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  alternates: {
    canonical: `${SITE_URL}/services/air-tickets`,
  },
  openGraph: {
    url: `${SITE_URL}/services/air-tickets`,
    title: "Air Tickets - Book Flights Worldwide | Fast Portal",
    description: "Search and book flights worldwide with Fast Portal. Find best deals on domestic and international flights.",
    type: "website",
    siteName: "Fast Portal",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Tickets - Book Flights Worldwide | Fast Portal",
    description: "Search and book flights worldwide with Fast Portal. Find best deals on domestic and international flights.",
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

export default function AirTicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Air Tickets Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Air Tickets Booking Service",
            description: "Search and book flights worldwide with Fast Portal. Find best deals on domestic and international flights.",
            provider: {
              "@type": "Organization",
              name: "Fast Portal",
              url: SITE_URL,
            },
            serviceType: "FlightBookingService",
            areaServed: "Worldwide",
            offers: {
              "@type": "Offer",
              description: "Flight booking services with competitive prices",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
