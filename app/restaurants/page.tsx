import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = generateStandardMetadata(
  "Restaurant Recommendations",
  "Discover top-rated restaurants in your area with detailed reviews, ratings, and contact information for Fast Job Career users.",
  "restaurants"
);

export default function RestaurantRecommendationsPage() {
  return (
    <StandardPageLayout
      title="Restaurant Recommendations"
      description="Discover top-rated restaurants in your area with detailed reviews, ratings, and contact information for Fast Job Career users."
      activeSlug="restaurants" 
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Your existing restaurant content */}
      </div>
    </StandardPageLayout>
  );
}