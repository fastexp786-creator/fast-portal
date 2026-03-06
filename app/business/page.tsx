import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Business Solutions",
  "Comprehensive B2B recruitment solutions for businesses. Find top talent, streamline hiring, and grow your team with Fast Job Career's business services.",
  "business"
);

export default function BusinessPage() {
  return (
    <StandardPageLayout
      title="Business Solutions"
      description="Comprehensive B2B recruitment solutions for businesses. Find top talent, streamline hiring, and grow your team with Fast Job Career's business services."
      activeSlug="business"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            For Employers
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Business Solutions
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Transform your recruitment process with our comprehensive B2B solutions. Find top talent, streamline hiring, and build your dream team with Fast Job Career.
          </p>
        </div>

        {/* Business Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">Why Choose Fast Job Career for Business?</h2>
            <p className="text-standard mb-6">
              Fast Job Career is the trusted partner for thousands of businesses worldwide. Our comprehensive recruitment solutions help companies of all sizes find the right talent efficiently and cost-effectively.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Targeted Talent</h3>
                <p className="text-standard text-sm">
                  Access to 2M+ qualified candidates with advanced filtering and matching
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Fast Hiring</h3>
                <p className="text-standard text-sm">
                  Reduce time-to-hire by 60% with our streamlined recruitment process
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Cost Effective</h3>
                <p className="text-standard text-sm">
                  Save up to 70% on recruitment costs compared to traditional methods
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Job Posting Solutions</h3>
            <p className="text-standard mb-4">
              Flexible job posting packages to reach the right candidates quickly and efficiently.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Premium job listings</li>
              <li>• Featured placements</li>
              <li>• Social media promotion</li>
              <li>• Multi-channel distribution</li>
              <li>• Application tracking</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Talent Search</h3>
            <p className="text-standard mb-4">
              Proactive talent sourcing and headhunting services for hard-to-fill positions.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Candidate sourcing</li>
              <li>• Headhunting services</li>
              <li>• Skill-based matching</li>
              <li>• Passive candidate outreach</li>
              <li>• Pipeline building</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Recruitment Process Outsourcing</h3>
            <p className="text-standard mb-4">
              Complete end-to-end recruitment management for high-volume hiring needs.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Full recruitment cycle</li>
              <li>• Candidate screening</li>
              <li>• Interview coordination</li>
              <li>• Offer management</li>
              <li>• Onboarding support</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Employer Branding</h3>
            <p className="text-standard mb-4">
              Build your employer brand and attract top talent with strategic positioning.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Company profile optimization</li>
              <li>• Brand strategy development</li>
              <li>• Content creation</li>
              <li>• Social media management</li>
              <li>• Reputation management</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Assessment & Testing</h3>
            <p className="text-standard mb-4">
              Comprehensive assessment tools to evaluate candidate skills and fit.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Skills assessment tests</li>
              <li>• Personality evaluations</li>
              <li>• Technical screening</li>
              <li>• Cultural fit analysis</li>
              <li>• Reference checking</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Analytics & Insights</h3>
            <p className="text-standard mb-4">
              Data-driven insights to optimize your recruitment strategy and ROI.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Recruitment analytics</li>
              <li>• Market insights</li>
              <li>• Performance metrics</li>
              <li>• ROI tracking</li>
              <li>• Predictive analytics</li>
            </ul>
            <button className="btn-standard w-full mt-4">Learn More</button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Business Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Startup Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">$299</span>
                <span className="text-standard"> /month</span>
              </div>
              <p className="text-standard text-sm mb-4">Perfect for small businesses and startups</p>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ 5 job postings per month</li>
                <li>✓ Basic candidate search</li>
                <li>✓ Company profile</li>
                <li>✓ Email support</li>
                <li>✓ Basic analytics</li>
              </ul>
              <button className="btn-standard w-full">Get Started</button>
            </div>

            <div className="card-standard p-6 border-2 border-blue-500">
              <div className="mb-2 text-center">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-4">Growth Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">$799</span>
                <span className="text-standard"> /month</span>
              </div>
              <p className="text-standard text-sm mb-4">Ideal for growing companies</p>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ 20 job postings per month</li>
                <li>✓ Advanced candidate search</li>
                <li>✓ Featured job placements</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Employer branding tools</li>
              </ul>
              <button className="btn-standard w-full">Get Started</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Enterprise Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">Custom</span>
              </div>
              <p className="text-standard text-sm mb-4">Tailored solutions for large enterprises</p>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ Unlimited job postings</li>
                <li>✓ Full recruitment services</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support 24/7</li>
                <li>✓ Custom solutions</li>
              </ul>
              <button className="btn-standard w-full">Contact Sales</button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Company logo" className="w-12 h-12 rounded mr-4" />
                <div>
                  <h3 className="heading-standard text-base">TechCorp International</h3>
                  <p className="text-standard text-sm">Technology Company • 500+ employees</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "Fast Job Career helped us reduce our time-to-hire by 60% and save $200K annually in recruitment costs. Their talent matching is exceptional."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-standard text-sm ml-2">5.0</span>
              </div>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Company logo" className="w-12 h-12 rounded mr-4" />
                <div>
                  <h3 className="heading-standard text-base">Global Healthcare Solutions</h3>
                  <p className="text-standard text-sm">Healthcare • 1000+ employees</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "The quality of candidates we found through Fast Job Career exceeded our expectations. Their screening process saved us countless hours."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-standard text-sm ml-2">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Industry-Specific Solutions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Technology & IT</h3>
              <p className="text-standard text-sm mb-3">
                Specialized recruitment for tech roles, from developers to cybersecurity experts.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Healthcare & Medical</h3>
              <p className="text-standard text-sm mb-3">
                Comprehensive healthcare recruitment with verified credentials and compliance.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Finance & Banking</h3>
              <p className="text-standard text-sm mb-3">
                Specialized financial services recruitment with compliance and regulatory focus.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Manufacturing</h3>
              <p className="text-standard text-sm mb-3">
                Industrial and manufacturing recruitment with technical skill assessment.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Retail & E-commerce</h3>
              <p className="text-standard text-sm mb-3">
                Retail and e-commerce recruitment for both in-store and digital roles.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Hospitality & Tourism</h3>
              <p className="text-standard text-sm mb-3">
                Hospitality recruitment with customer service and language skills assessment.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Contact Sales */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Ready to Transform Your Recruitment?</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              Let our experts help you find the perfect solution for your business needs.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Schedule a Demo</h3>
                <p className="text-standard text-sm mb-4">
                  See our platform in action and learn how it can benefit your business.
                </p>
                <button className="btn-standard">Schedule Demo</button>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Talk to Sales</h3>
                <p className="text-standard text-sm mb-4">
                  Get personalized recommendations and custom pricing for your needs.
                </p>
                <a href="mailto:employers@fastjobcareer.com" className="btn-standard">Contact Sales</a>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="heading-standard text-base mb-2">Business Support Team</h3>
              <p className="text-standard text-sm">
                <strong>Email:</strong> employers@fastjobcareer.com<br />
                <strong>Phone:</strong> +92 310 0570707<br />
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (PKT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
