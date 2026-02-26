export const SERVICE_SLUGS = [
  "air-tickets",
  "luxury-stays",
  "cruise-cloud",
  "umrah-2026",
  "premium-rentals",
  "visit-visa-tours",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_CONFIG: Record<
  ServiceSlug,
  {
    title: string;
    tagline: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
  }
> = {
  "air-tickets": {
    title: "Air Tickets",
    tagline: "Find the cheapest worldwide airfares",
    description:
      "Compare and book flights across all major airlines with instant booking, flexible dates, and competitive rates for Gulf, Europe, and beyond.",
    features: [
      "Best prices on Emirates, Qatar, PIA, Turkish, and more",
      "Flexible date search and multi-city options",
      "24/7 booking support and e-ticket delivery",
    ],
    ctaLabel: "Search Flights",
    ctaHref: "https://fastjobcareer.com/air-tickets/",
  },
  "luxury-stays": {
    title: "Luxury Hotel Bookings",
    tagline: "5-star hotels and premium apartments worldwide",
    description:
      "Book luxury hotels and premium apartments at discounted rates with 24/7 support for Dubai, Saudi, Europe, and global destinations.",
    features: [
      "5-star hotels and serviced apartments",
      "Discounted corporate and group rates",
      "24/7 concierge and support",
    ],
    ctaLabel: "Book Luxury Stays",
    ctaHref: "https://fastjobcareer.com/luxury-stays/",
  },
  "cruise-cloud": {
    title: "Cruise Cloud",
    tagline: "Dream voyages and luxury cruise packages",
    description:
      "Book international cruises and luxury sea travel packages with the best deals on top cruise lines and itineraries.",
    features: [
      "Major cruise lines and luxury voyages",
      "Group and corporate packages",
      "Full travel and visa assistance",
    ],
    ctaLabel: "Explore Cruises",
    ctaHref: "https://fastjobcareer.com/cruise-careers/",
  },
  "umrah-2026": {
    title: "Umrah 2026",
    tagline: "Exclusive Umrah packages for 2026",
    description:
      "Complete Umrah packages including luxury hotels, transport, and full visa assistance for a blessed journey.",
    features: [
      "Luxury hotels near Haram",
      "Transport and guided support",
      "Complete visa processing",
    ],
    ctaLabel: "Enquire Umrah",
    ctaHref: "https://wa.me/923100570707",
  },
  "premium-rentals": {
    title: "Premium Rentals",
    tagline: "Professional car rental services",
    description:
      "Reliable car rental services for business trips and family vacations across Gulf, Europe, and global destinations.",
    features: [
      "Business and leisure rentals",
      "Multiple pickup locations",
      "24/7 roadside assistance",
    ],
    ctaLabel: "Book Rentals",
    ctaHref: "https://indrive.tpo.lv/33l5pdyO",
  },
  "visit-visa-tours": {
    title: "Visit Visa & Tours",
    tagline: "Fast-track visa processing worldwide",
    description:
      "Expert visit visa processing for Dubai, UK, USA, Schengen, and more with complete documentation support.",
    features: [
      "Dubai, UK, USA, Schengen visas",
      "Expert documentation support",
      "Fast-track processing options",
    ],
    ctaLabel: "Apply for Visa",
    ctaHref: "https://fastjobcareer.com/visit-visa-tours/",
  },
};
