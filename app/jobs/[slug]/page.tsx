import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import {
  JOB_COUNTRY_CONFIG,
  JOB_COUNTRY_SLUGS,
  CAREERJET_LOCATION,
  type JobCountrySlug,
} from "@/lib/job-country-config";
import JobsCountryClient from "@/components/JobsCountryClient";
import PageSidebar from "@/components/PageSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Case 1: Country
  if (JOB_COUNTRY_SLUGS.includes(slug as any)) {
    const config = JOB_COUNTRY_CONFIG[slug as JobCountrySlug];
    if (!config) return { title: "Jobs | Fast Job Career" };

    const ogImage = `${SITE_URL}/vercel.svg`;
    return {
      title: `Latest ${config.label} Jobs 2026 - Fast Job Career`,
      description: `Explore ${config.label} vacancies. ${config.description} — updated for 2026.`,
      alternates: { canonical: `${SITE_URL}/jobs/${slug}` },
      openGraph: {
        url: `${SITE_URL}/jobs/${slug}`,
        title: `Latest ${config.label} Jobs 2026 - Fast Job Career`,
        description: `Explore ${config.label} vacancies. ${config.description}`,
        images: [ogImage],
      },
      twitter: {
        card: "summary_large_image",
        title: `Latest ${config.label} Jobs 2026 - Fast Job Career`,
        description: `Explore ${config.label} vacancies. ${config.description}`,
        images: [ogImage],
      },
      robots: { index: true, follow: true },
    };
  }

  // Case 2: Job (Redirect to singular)
  // We don't need full metadata here as we are redirecting
  return {
    title: "Job Details | Fast Job Career",
  };
}

export default async function JobsPage({ params }: Props) {
  const { slug } = await params;

  // Case 1: Country
  if (JOB_COUNTRY_SLUGS.includes(slug as any)) {
    const country = slug as JobCountrySlug;
    const config = JOB_COUNTRY_CONFIG[country];
    const cjLocation = CAREERJET_LOCATION[country];

    return (
      <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
        <div className="page-with-sidebar">
          <PageSidebar activeSlug={country} />
          <div className="page-main-content">
            <JobsCountryClient
              country={country}
              config={config}
              cjLocation={cjLocation}
            />
          </div>
        </div>
      </main>
    );
  }

  // Case 2: Not a country -> Redirect to singular /job/[slug]
  // This resolves the conflict by routing non-country slugs to the job detail page
  redirect(`/job/${slug}`);
}
