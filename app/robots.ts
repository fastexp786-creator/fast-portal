import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fastportal.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/jobs",
        "/jobs/*",
        "/find-jobs",
        "/categories",
        "/about",
        "/contact",
        "/apply",
        "/apply/*",
        "/register",
        "/popular-jobs",
        "/remote-jobs",
        "/jobs-by-country",
        "/jobs-by-city",
        "/jobs-by-industry",
        "/jobs-by-airport",
      ],
      disallow: [
        "/api/",
        "/dashboard/",
        "/auth/",
        "/admin/",
        "/_next/",
        "/favicon.ico",
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
