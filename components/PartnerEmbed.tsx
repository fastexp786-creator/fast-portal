"use client";

/**
 * Dynamic embed for affiliate partner widgets.
 * Add partner-specific embed logic based on partnerName.
 * Example: partner/indeed-jobs, partner/linkedin-jobs
 */
interface PartnerEmbedProps {
  partnerName: string;
}

export default function PartnerEmbed({ partnerName }: PartnerEmbedProps) {
  const displayName = decodeURIComponent(partnerName).replace(/-/g, " ");

  return (
    <div className="partner-embed">
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>
        {displayName} - Job Listings
      </h1>
      <p style={{ color: "#666", marginBottom: 30 }}>
        Add your partner embed code / iframe for &quot;{displayName}&quot; here.
        Configure in <code>components/PartnerEmbed.tsx</code>.
      </p>
      <div
        style={{
          background: "#f9f9f9",
          border: "2px dashed #ddd",
          borderRadius: 12,
          padding: 40,
          textAlign: "center",
        }}
      >
        <p>Partner: <strong>{displayName}</strong></p>
        <p style={{ fontSize: 13 }}>Widget area - add iframe or script embed</p>
      </div>
    </div>
  );
}
