import StandardPageLayout from "@/components/StandardPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program | Fast Job Career",
  description: "Join Fast Job Career affiliate program and earn commissions by promoting our job portal. Partner with us to help job seekers find their dream careers abroad.",
};

export default function AffiliatePage() {
  return (
    <StandardPageLayout
      title="Affiliate Program"
      description="Join Fast Job Career affiliate program and earn commissions by promoting our job portal. Partner with us to help job seekers find their dream careers abroad."
      activeSlug="affiliate"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Join Our Affiliate Network</h2>
          <p className="text-standard mb-4">
            Fast Job Career&​apos;s affiliate program offers a lucrative opportunity for 
            bloggers, website owners, influencers, and digital marketers to monetize 
            their traffic. By promoting our international job portal, you can earn 
            substantial commissions while helping job seekers find meaningful employment 
            opportunities abroad. Our program is designed to be transparent, rewarding, 
            and easy to participate in.
          </p>
          <p className="text-standard">
            Whether you run a career blog, a travel website, or a social media channel 
            focused on professional development, our affiliate program provides you with 
            tools and resources you need to succeed. Join thousands of affiliates 
            worldwide who are already earning with Fast Job Career.
          </p>
        </section>

        {/* Commission Structure */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Commission Structure</h2>
          <p className="text-standard mb-4">
            We offer competitive commission rates that reward your efforts fairly. 
            Our tiered commission structure ensures that the more successful referrals 
            you make, the higher your earnings. Starting at 10% for new affiliates, 
            you can progress up to 25% commission as you generate more quality referrals.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-standard">
            <li>Starter Tier: 10% commission on all successful job placements</li>
            <li>Professional Tier: 15% commission after 50 successful referrals</li>
            <li>Elite Tier: 20% commission after 100 successful referrals</li>
            <li>VIP Tier: 25% commission after 250 successful referrals</li>
            <li>Bonus payments for high-volume affiliates</li>
          </ul>
        </section>

        {/* Why Partner With Us */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Why Partner With Fast Job Career?</h2>
          <p className="text-standard mb-4">
            As a leading international job portal specializing in overseas employment 
            opportunities, Fast Job Career offers unique advantages to our affiliate 
            partners. Our platform connects job seekers with employers in the Middle East, 
            Europe, Asia, and beyond, providing a valuable service that has high demand.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">High Conversion Rates</h3>
              <p className="text-sm text-blue-800">
                Our optimized platform and targeted job listings result in industry-leading 
                conversion rates for affiliate referrals.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Long Cookie Duration</h3>
              <p className="text-sm text-green-800">
                90-day cookie tracking ensures you get credit for all referrals, even if 
                they convert later.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Real-Time Analytics</h3>
              <p className="text-sm text-purple-800">
                Access detailed reporting and analytics to track your performance 
                and optimize your campaigns.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Dedicated Support</h3>
              <p className="text-sm text-amber-800">
                Our affiliate management team provides personalized support, marketing 
                materials, and strategic guidance.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">How It Works</h2>
          <p className="text-standard mb-4">
            Getting started with our affiliate program is simple and straightforward. 
            We&​apos;ve streamlined the onboarding process so you can start earning quickly. 
            Within minutes of approval, you&​apos;ll have access to your affiliate dashboard 
            and marketing materials.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-standard">
            <li>
              <strong>Apply Online:</strong> Fill out our simple application form with 
              your website or platform details.
            </li>
            <li>
              <strong>Get Approved:</strong> Our team reviews applications within 24-48 
              hours to ensure quality partnerships.
            </li>
            <li>
              <strong>Access Dashboard:</strong> Upon approval, receive login credentials 
              for your affiliate dashboard.
            </li>
            <li>
              <strong>Get Marketing Materials:</strong> Download banners, text links, and 
              promotional content tailored to your audience.
            </li>
            <li>
              <strong>Start Promoting:</strong> Share your unique affiliate links across 
              your platforms and begin earning commissions.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="heading-standard mb-4">Ready to Start Earning?</h2>
          <p className="text-standard mb-6">
            Join our affiliate program today and turn your audience into revenue.
          </p>
          <a
            href="/become-affiliate"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Apply Now
          </a>
        </section>
      </div>
    </StandardPageLayout>
  );
}