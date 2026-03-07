import StandardPageLayout from "@/components/StandardPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Fast Job Career",
  description: "Explore partnership opportunities with Fast Job Career. Join our network of employers, recruitment agencies, and educational institutions to connect with top talent worldwide.",
};

export default function PartnersPage() {
  return (
    <StandardPageLayout
      title="Partners"
      subtitle="Collaborate with Fast Job Career"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Partners", href: "/partners" },
      ]}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Partner With Us</h2>
          <p className="text-standard mb-4">
            Fast Job Career partners with leading organizations worldwide to create a 
            comprehensive ecosystem that benefits employers, job seekers, and service 
            providers. Our partnership programs are designed to foster mutual growth 
            and deliver exceptional value to all stakeholders in the recruitment industry.
          </p>
          <p className="text-standard">
            Whether you&apos;re an employer looking to streamline your hiring process, a 
            recruitment agency seeking broader reach, or an educational institution 
            preparing students for international careers, we have partnership solutions 
            tailored to your needs. Join our network of over 5,000 partner organizations 
            across 50 countries.
          </p>
        </section>

        {/* Partner Types */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Types of Partnerships</h2>
          <p className="text-standard mb-4">
            We offer multiple partnership tiers to accommodate different business models 
            and objectives. Each partnership type comes with unique benefits, resources, 
            and support to ensure your success.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-blue-900 mb-3">Employer Partners</h3>
              <p className="text-sm text-blue-800 mb-3">
                Direct employers who post jobs and recruit talent through our platform 
                benefit from priority listings, advanced candidate matching, and 
                dedicated account management.
              </p>
              <ul className="text-sm text-blue-800 space-y-1 list-disc pl-4">
                <li>Priority job posting</li>
                <li>Featured employer branding</li>
                <li>Direct candidate messaging</li>
                <li>Advanced screening tools</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-green-900 mb-3">Agency Partners</h3>
              <p className="text-sm text-green-800 mb-3">
                Recruitment agencies can leverage our platform to find qualified 
                candidates faster and manage multiple client requirements efficiently.
              </p>
              <ul className="text-sm text-green-800 space-y-1 list-disc pl-4">
                <li>Multi-client management</li>
                <li>Bulk job posting</li>
                <li>Commission tracking</li>
                <li>White-label solutions</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-purple-900 mb-3">Educational Partners</h3>
              <p className="text-sm text-purple-800 mb-3">
                Universities, colleges, and training institutions partner with us to 
                provide placement services for their graduates and alumni.
              </p>
              <ul className="text-sm text-purple-800 space-y-1 list-disc pl-4">
                <li>Campus recruitment drives</li>
                <li>Career fair coordination</li>
                <li>Student profile hosting</li>
                <li>Placement analytics</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-amber-900 mb-3">Service Partners</h3>
              <p className="text-sm text-amber-800 mb-3">
                Visa consultants, travel agencies, and relocation services can join 
                our ecosystem to offer comprehensive solutions to job seekers.
              </p>
              <ul className="text-sm text-amber-800 space-y-1 list-disc pl-4">
                <li>Cross-promotion opportunities</li>
                <li>Integrated service packages</li>
                <li>Referral commissions</li>
                <li>Joint marketing campaigns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Partnership Benefits</h2>
          <p className="text-standard mb-4">
            Our partners enjoy a wide range of benefits designed to accelerate their 
            recruitment success and business growth. From technology integration to 
            marketing support, we provide the resources you need.
          </p>
          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-standard text-sm">
                  Access talent pools from over 50 countries with localized support 
                  and multilingual capabilities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fast Track Hiring</h3>
                <p className="text-standard text-sm">
                  Reduce time-to-hire by up to 60% with our AI-powered matching 
                  and streamlined application process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Data & Insights</h3>
                <p className="text-standard text-sm">
                  Make informed decisions with comprehensive analytics on market 
                  trends, salary benchmarks, and candidate behavior.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dedicated Support</h3>
                <p className="text-standard text-sm">
                  Get personalized assistance from our partnership team, including 
                  training, best practices, and ongoing consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Become Partner */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">How to Become a Partner</h2>
          <p className="text-standard mb-4">
            Joining our partner network is a straightforward process. We&apos;ve designed 
            our onboarding to get you up and running quickly while ensuring quality 
            partnerships that benefit our entire ecosystem.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-standard mt-6">
            <li>
              <strong>Submit Application:</strong> Complete our online partner 
              application with details about your organization and partnership goals.
            </li>
            <li>
              <strong>Review Process:</strong> Our team reviews applications within 
              3-5 business days to ensure alignment with our partnership criteria.
            </li>
            <li>
              <strong>Agreement & Onboarding:</strong> Upon approval, sign the partnership 
              agreement and complete our comprehensive onboarding program.
            </li>
            <li>
              <strong>Integration & Training:</strong> Get technical integration support 
              and training on our platform features and best practices.
            </li>
            <li>
              <strong>Launch & Growth:</strong> Go live with your partnership and leverage 
              our ongoing support to maximize your success.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="heading-standard mb-4">Ready to Partner With Us?</h2>
          <p className="text-standard mb-6">
            Join thousands of organizations already benefiting from Fast Job Career partnerships.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/become-partner"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </section>
      </div>
    </StandardPageLayout>
  );
}
