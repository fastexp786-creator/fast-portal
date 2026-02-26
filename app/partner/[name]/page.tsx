import type { Metadata } from "next";
import PartnerEmbed from "@/components/PartnerEmbed";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const title = decodeURIComponent(name).replace(/-/g, " ");
  return {
    title: `${title} Jobs`,
    description: `Partner job listings - ${title}`,
    alternates: { canonical: `/partner/${name}` },
    robots: { index: true, follow: true },
  };
}

export default async function PartnerPage({ params }: Props) {
  const { name } = await params;
  return (
    <div style={{ padding: "30px 5%", minHeight: "60vh" }}>
      <PartnerEmbed partnerName={name} />
    </div>
  );
}
