import { SITE_URL } from "@/lib/constants";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fast Job Career",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Connecting Global Talent with the World's Best Employers. Find jobs in UAE, Saudi Arabia, UK, Europe, and more.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-310-0570707",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: "English, Urdu",
    },
    sameAs: [
      "https://www.facebook.com/FastJobCareer/",
      "https://x.com/fastjobcareer",
      "https://www.instagram.com/fastjobcareer/",
      "https://www.linkedin.com/company/fastjobcareer/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fast Job Career",
    url: SITE_URL,
    description:
      "World No 1 Job Portal. Connecting Global Talent with the World's Best Employers.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/vacancies?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
