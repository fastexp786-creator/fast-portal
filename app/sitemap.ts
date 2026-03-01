import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { JOB_COUNTRY_SLUGS } from "@/lib/job-country-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const jobPages = [
    { url: `${SITE_URL}/jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    ...JOB_COUNTRY_SLUGS.map(slug => ({
      url: `${SITE_URL}/jobs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${SITE_URL}/find-jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/travel`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/services/air-tickets`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    ...jobPages,
  ];
}
