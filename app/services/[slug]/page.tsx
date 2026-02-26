import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import {
  SERVICE_CONFIG,
  SERVICE_SLUGS,
  type ServiceSlug,
} from "@/lib/service-config";
import ServicePageClient from "@/components/ServicePageClient";
import PageSidebar from "@/components/PageSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = SERVICE_CONFIG[slug as ServiceSlug];
  if (!config)
    return { title: "Service | Fast Job Career" };

  return {
    title: `${config.title} | Fast Job Career`,
    description: config.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      url: `${SITE_URL}/services/${slug}`,
      title: `${config.title} | Fast Job Career`,
      description: config.tagline,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) notFound();

  const config = SERVICE_CONFIG[slug as ServiceSlug];

  return (
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="page-with-sidebar">
        <PageSidebar activeSlug={slug} />
        <div className="page-main-content">
          <ServicePageClient slug={slug as ServiceSlug} config={config} />
        </div>
      </div>
    </main>
  );
}
