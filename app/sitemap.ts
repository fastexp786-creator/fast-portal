import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main pages with highest priority
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    
    // Core job pages
    { url: `${SITE_URL}/find-jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/companies`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/apply`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/popular-jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/remote-jobs`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/jobs-by-country`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/jobs-by-city`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/jobs-by-industry`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/jobs-by-airport`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    
    // Travel services
    { url: `${SITE_URL}/travel`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/services/air-tickets`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    
    // Footer pages - legal and support
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/safety`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/report-issue`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/accessibility`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/modern-slavery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/human-rights`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/restaurants`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/how-we-work`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/partner-help`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/list-property`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/become-affiliate`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/guidelines`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/sectors`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    
    // Additional important pages
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/help-center`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    
    // Legal and policy pages
    { url: `${SITE_URL}/awards`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/genius-program`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/business`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/car-rental`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/flights`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/resource-hub`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/partner`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    
    // Authentication pages with low priority
    { url: `${SITE_URL}/auth/login`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.1 },
    { url: `${SITE_URL}/auth/register`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.1 },
    { url: `${SITE_URL}/auth/register/seeker`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.1 },
    { url: `${SITE_URL}/auth/vendor-register`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.1 },
    
    // Additional service pages
    { url: `${SITE_URL}/categories`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/deals`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/register`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/sections`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];
}
