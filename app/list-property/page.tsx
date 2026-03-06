import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "List Property",
  "List your residential, commercial, and rental properties on Fast Portal. Reach millions of potential tenants and buyers with our comprehensive property listing platform.",
  "list-property"
);

export default function ListPropertyPage() {
  return (
    <StandardPageLayout 
      title="List Property" 
      description="Comprehensive property listing platform for landlords, agents, and property owners to reach potential tenants and buyers"
      activeSlug="list-property"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              List Your Property on Fast Portal
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to Fast Portal's premier property listing platform, where property owners, landlords, and real estate agents can showcase their properties to millions of potential tenants and buyers. Our comprehensive listing service is designed to maximize your property's visibility and accelerate the leasing or sales process through advanced technology and targeted marketing.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Why List Your Property with Fast Portal?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal stands as the leading digital marketplace connecting property owners with qualified tenants and buyers across residential, commercial, and vacation rental segments. Our platform leverages sophisticated algorithms and extensive market data to ensure your property reaches the most relevant audience based on location, price range, and specific requirements. With over millions of monthly active users actively searching for properties, your listing gains unparalleled exposure in the competitive real estate market.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our user-friendly interface allows you to create detailed property listings with high-resolution photos, virtual tours, floor plans, and comprehensive descriptions. The platform supports multiple listing types including apartments, houses, villas, commercial spaces, office buildings, retail outlets, and vacation rentals. Each listing receives dedicated SEO optimization to improve visibility on search engines, driving organic traffic to your property.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Types of Properties You Can List
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal accommodates diverse property types to cater to various market segments. Residential properties include apartments, condominiums, single-family homes, townhouses, and luxury villas. Commercial listings encompass office spaces, retail shops, warehouses, industrial facilities, and mixed-use developments. Vacation rental properties such as holiday homes, beach houses, mountain cabins, and city apartments can also be listed to attract short-term tenants and tourists.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Specialized property categories include student housing, senior living communities, co-living spaces, and serviced apartments. Each property type benefits from tailored features and search filters that help potential tenants or buyers find exactly what they're looking for. Our platform also supports new construction projects, off-plan sales, and property developments, allowing developers to showcase upcoming projects to early investors and buyers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Creating an Effective Property Listing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A successful property listing begins with comprehensive and accurate information. Start by providing essential details including property type, location, size, number of rooms, bathrooms, and parking availability. High-quality photographs are crucial – we recommend including exterior shots, interior room photos, amenities, and neighborhood views. Virtual tours and video walkthroughs significantly increase engagement and help potential tenants visualize themselves in the space.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Detailed descriptions should highlight unique features, recent renovations, energy efficiency ratings, and proximity to essential amenities like schools, hospitals, public transportation, and shopping centers. Include information about utilities, maintenance responsibilities, and any additional services included in the rent or sale price. For commercial properties, specify zoning regulations, accessibility features, and potential business uses.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Pricing and Subscription Plans
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal offers flexible pricing options to accommodate different listing needs and budgets. Our basic listing package includes standard features like photo uploads, basic descriptions, and visibility in search results. Premium listings benefit from enhanced visibility, featured placement, virtual tour support, and detailed analytics about views and inquiries. Enterprise packages cater to property management companies and real estate agencies with multiple listings, offering bulk discounts and advanced management tools.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Subscription plans can be customized based on listing duration, property type, and geographic coverage. We also offer pay-per-lead options where you only pay for qualified inquiries, ensuring cost-effectiveness for high-value properties. Seasonal promotions and discounted rates for long-term listings provide additional value for property owners looking to maximize their return on investment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Lead Management and Communication
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our integrated lead management system helps you efficiently handle inquiries and track potential tenants or buyers. Receive notifications for new inquiries, schedule viewings directly through the platform, and maintain communication history with each prospect. The system automatically qualifies leads based on your specified criteria, saving time and focusing your efforts on serious candidates.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Advanced features include automated response templates, calendar integration for scheduling viewings, and document sharing capabilities for lease agreements or sales contracts. The platform also supports background check services for tenant screening and credit verification for buyer pre-qualification, streamlining the entire process from listing to closing.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Marketing and Promotion Tools
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal provides comprehensive marketing tools to enhance your property's visibility across multiple channels. Your listings automatically appear on our website, mobile app, and partner networks. Social media integration allows you to share listings on Facebook, Instagram, and LinkedIn with just one click. Email marketing campaigns can target specific demographics based on location, budget, and preferences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Premium listings benefit from featured placement on our homepage, targeted advertising campaigns, and inclusion in our weekly property newsletters. Analytics dashboards provide insights into listing performance, including view counts, inquiry rates, and conversion metrics. This data helps you optimize your listing strategy and adjust pricing or marketing approaches based on market response.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Legal and Compliance Support
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Navigating property laws and regulations can be complex, which is why Fast Portal provides resources and guidance to ensure compliance. Our platform includes standard lease agreement templates, sales contract templates, and disclosure forms that meet local legal requirements. We also maintain updated information about zoning laws, property taxes, and rental regulations in different jurisdictions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For complex transactions, we connect you with verified real estate attorneys, property inspectors, and financial advisors who can provide professional assistance. Our dispute resolution services help mediate conflicts between landlords and tenants or buyers and sellers, ensuring fair and amicable solutions. Fast Portal is committed to maintaining a trustworthy marketplace where all parties can transact with confidence and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
