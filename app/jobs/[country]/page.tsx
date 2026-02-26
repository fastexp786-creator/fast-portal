import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return JOB_COUNTRY_SLUGS.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const config = JOB_COUNTRY_CONFIG[country as JobCountrySlug];
  if (!config)
    return { title: "Jobs | Fast Job Career" };

  return {
    title: `${config.label} Jobs | Fast Job Career`,
    description: `${config.description}. Browse latest ${config.label} job vacancies.`,
    alternates: { canonical: `${SITE_URL}/jobs/${country}` },
    openGraph: {
      url: `${SITE_URL}/jobs/${country}`,
      title: `${config.label} Jobs | Fast Job Career`,
      description: config.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function JobsCountryPage({ params }: Props) {
  const { country } = await params;

  if (!JOB_COUNTRY_SLUGS.includes(country as JobCountrySlug)) notFound();

  const config = JOB_COUNTRY_CONFIG[country as JobCountrySlug];
  const cjLocation = CAREERJET_LOCATION[country as JobCountrySlug];

  return (
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="page-with-sidebar">
        <PageSidebar activeSlug={country} />
        <div className="page-main-content">
          <JobsCountryClient
            country={country as JobCountrySlug}
            config={config}
            cjLocation={cjLocation}
          />
        </div>
      </div>
    </main>
  );
}
