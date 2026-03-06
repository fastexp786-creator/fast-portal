import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Partner Help",
  "Comprehensive support and resources for Fast Portal partners. Get help with integration, troubleshooting, and maximizing your partnership benefits.",
  "partner-help"
);

export default function PartnerHelpPage() {
  return (
    <StandardPageLayout 
      title="Partner Help" 
      description="Support and resources for Fast Portal partners to succeed and grow"
      activeSlug="partner-help"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Partner Help & Support Center
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to the Fast Portal Partner Help Center, your comprehensive resource for all partnership-related queries and support. Whether you're a new partner exploring collaboration opportunities or an existing partner seeking technical assistance, we're here to ensure your success on our platform.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Getting Started as a Partner
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Partnering with Fast Portal opens doors to a vast network of job seekers and employers. Our partnership program is designed to create mutually beneficial relationships that drive growth and innovation in the recruitment industry. To begin your partnership journey, start by completing our partner registration form, which helps us understand your business objectives and how we can best support your goals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Once registered, you'll receive access to our partner dashboard, where you can track performance metrics, access marketing materials, and manage your partnership settings. Our onboarding team will schedule a personalized session to walk you through our platform features, best practices, and answer any initial questions you may have about the partnership process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Technical Integration Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our technical integration team provides comprehensive support for API integration, webhook setup, and custom development needs. We offer detailed documentation, sandbox environments, and dedicated technical assistance to ensure seamless integration with your existing systems. Our RESTful APIs are designed with flexibility in mind, supporting various programming languages and frameworks.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Common integration scenarios include job posting automation, candidate data synchronization, and application status tracking. Our technical support team is available 24/7 to assist with integration challenges, code reviews, and optimization recommendations. We also provide SDKs for popular programming languages to accelerate development and ensure best practices implementation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Marketing & Promotional Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Partners gain access to our comprehensive marketing toolkit, including co-branded materials, promotional content, and campaign templates. Our marketing team works closely with partners to develop customized strategies that align with your brand voice and target audience. We provide social media assets, email templates, and landing page designs to help you effectively promote Fast Portal services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Additionally, partners benefit from featured listings on our platform, increased visibility in search results, and priority placement in our partner directory. We regularly organize joint marketing campaigns and events that showcase our partners' services to our extensive user base. Performance analytics and insights help you measure the effectiveness of your marketing efforts and optimize your strategy accordingly.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Common Partner Issues & Solutions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our help center addresses frequently encountered issues and their solutions. API authentication problems, data synchronization delays, and webhook delivery failures are among the common technical challenges our partners face. We've compiled detailed troubleshooting guides and video tutorials to help you resolve these issues quickly and independently.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For billing and payment-related queries, our finance team provides transparent explanations of commission structures, payment schedules, and tax documentation. We understand that financial clarity is crucial for business planning, and we ensure all partners have access to comprehensive financial reporting and analysis tools.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Performance Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Maximizing your partnership potential requires continuous optimization and improvement. Our platform provides detailed analytics dashboards that track key performance indicators including conversion rates, user engagement, and revenue generation. Our success team conducts regular performance reviews and provides actionable insights to help you achieve your partnership goals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We offer advanced training sessions on lead generation, conversion optimization, and customer retention strategies. Partners also receive early access to new features and beta programs, allowing you to stay ahead of the competition and leverage cutting-edge tools before they become widely available.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Community & Networking
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Join our vibrant partner community where you can connect with other partners, share experiences, and learn from industry experts. We organize regular networking events, webinars, and workshops that facilitate knowledge sharing and collaboration. Our partner forum is an excellent platform for asking questions, sharing best practices, and staying updated on industry trends.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Annual partner conferences bring together the entire ecosystem for intensive learning, networking, and strategic planning sessions. These events feature keynote speakers from leading companies, panel discussions on industry challenges, and exclusive previews of upcoming platform enhancements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Contact Support
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our dedicated partner support team is available through multiple channels to assist you with any questions or concerns. For urgent technical issues, our 24/7 helpline ensures immediate assistance. Non-urgent queries can be submitted through our ticketing system, where they are prioritized based on severity and impact on your operations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're committed to your success and continuously improve our support services based on partner feedback. Regular satisfaction surveys and feedback sessions help us understand your needs better and enhance our support offerings. Your success is our success, and we're here to support you every step of the way on your Fast Portal partnership journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
