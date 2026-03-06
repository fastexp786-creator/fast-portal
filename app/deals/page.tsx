import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Exclusive Deals",
  "Discover exclusive deals and special offers for Fast Job Career members. Get discounts on career services, training programs, and job search tools.",
  "deals"
);

export default function DealsPage() {
  return (
    <StandardPageLayout
      title="Exclusive Deals"
      description="Discover exclusive deals and special offers for Fast Job Career members. Get discounts on career services, training programs, and job search tools."
      activeSlug="deals"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Special Offers
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Exclusive Deals & Offers
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Save money on career services, training programs, and job search tools with our exclusive member deals. Limited time offers for Fast Job Career members.
          </p>
        </div>

        {/* Featured Deals */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🔥 Hot Deals This Week</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                  LIMITED TIME
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Resume Writing Service</h3>
              <p className="text-standard mb-4">
                Professional resume writing by industry experts with ATS optimization and keyword research.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$199</span>
                <span className="text-2xl font-bold text-black ml-2">$99</span>
                <span className="text-green-500 font-semibold ml-2">50% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Professional resume writer</li>
                <li>• ATS optimization</li>
                <li>• 2 revisions included</li>
                <li>• 48-hour delivery</li>
              </ul>
              <button className="btn-standard w-full">Get Deal</button>
              <p className="text-xs text-gray-400 mt-2">Ends in 3 days</p>
            </div>

            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                  POPULAR
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Interview Coaching Package</h3>
              <p className="text-standard mb-4">
                3-session interview coaching package with mock interviews and personalized feedback.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$299</span>
                <span className="text-2xl font-bold text-black ml-2">$149</span>
                <span className="text-green-500 font-semibold ml-2">50% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• 3 coaching sessions</li>
                <li>• Mock interviews</li>
                <li>• Recording and analysis</li>
                <li>• Follow-up support</li>
              </ul>
              <button className="btn-standard w-full">Get Deal</button>
              <p className="text-xs text-gray-400 mt-2">Ends in 5 days</p>
            </div>

            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  NEW
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">LinkedIn Profile Optimization</h3>
              <p className="text-standard mb-4">
                Complete LinkedIn profile makeover to attract recruiters and professional opportunities.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$149</span>
                <span className="text-2xl font-bold text-black ml-2">$79</span>
                <span className="text-green-500 font-semibold ml-2">47% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Profile audit and analysis</li>
                <li>• Professional headline</li>
                <li>• Content optimization</li>
                <li>• Networking strategy</li>
              </ul>
              <button className="btn-standard w-full">Get Deal</button>
              <p className="text-xs text-gray-400 mt-2">Ends in 7 days</p>
            </div>
          </div>
        </div>

        {/* Category Deals */}
        <div className="space-y-8">
          <div>
            <h2 className="heading-standard text-xl mb-6">📚 Training & Certification Deals</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Digital Marketing Course</h3>
                <p className="text-standard text-sm mb-3">
                  Comprehensive digital marketing certification with hands-on projects.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$499</span>
                    <span className="text-lg font-bold text-black ml-2">$299</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">40% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Project Management Certification</h3>
                <p className="text-standard text-sm mb-3">
                  PMP certification prep course with expert instructors and practice exams.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$799</span>
                    <span className="text-lg font-bold text-black ml-2">$499</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">38% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Data Science Bootcamp</h3>
                <p className="text-standard text-sm mb-3">
                  12-week intensive data science program with job placement assistance.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$2,999</span>
                    <span className="text-lg font-bold text-black ml-2">$1,999</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">33% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Web Development Course</h3>
                <p className="text-standard text-sm mb-3">
                  Full-stack web development course with real-world projects and portfolio building.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$899</span>
                    <span className="text-lg font-bold text-black ml-2">$599</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">33% OFF</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-standard text-xl mb-6">💼 Career Services Deals</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Career Assessment Package</h3>
                <p className="text-standard text-sm mb-3">
                  Comprehensive career assessment with personality tests and skill analysis.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$149</span>
                    <span className="text-lg font-bold text-black ml-2">$89</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">40% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Job Search Strategy Session</h3>
                <p className="text-standard text-sm mb-3">
                  2-hour personalized job search strategy session with career experts.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$199</span>
                    <span className="text-lg font-bold text-black ml-2">$119</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">40% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Portfolio Review Service</h3>
                <p className="text-standard text-sm mb-3">
                  Professional portfolio review with improvement recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$99</span>
                    <span className="text-lg font-bold text-black ml-2">$59</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">40% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Salary Negotiation Coaching</h3>
                <p className="text-standard text-sm mb-3">
                  Learn salary negotiation techniques and practice with expert coaches.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$179</span>
                    <span className="text-lg font-bold text-black ml-2">$99</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">45% OFF</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-standard text-xl mb-6">🛠️ Tools & Resources Deals</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Premium Job Search Tools</h3>
                <p className="text-standard text-sm mb-3">
                  Annual subscription to premium job search and tracking tools.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$299</span>
                    <span className="text-lg font-bold text-black ml-2">$149</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">50% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Resume Templates Bundle</h3>
                <p className="text-standard text-sm mb-3">
                  Premium resume templates package with 50+ professional designs.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$49</span>
                    <span className="text-lg font-bold text-black ml-2">$19</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">61% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Interview Questions Database</h3>
                <p className="text-standard text-sm mb-3">
                  Access to 1000+ interview questions with expert answers by industry.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$79</span>
                    <span className="text-lg font-bold text-black ml-2">$39</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">51% OFF</span>
                </div>
              </div>

              <div className="card-standard p-4">
                <h3 className="heading-standard text-base mb-2">Career Planning Software</h3>
                <p className="text-standard text-sm mb-3">
                  Advanced career planning and goal tracking software with analytics.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">$149</span>
                    <span className="text-lg font-bold text-black ml-2">$79</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">47% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Get Exclusive Deals</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              Subscribe to our newsletter and be the first to know about new deals and exclusive offers.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-standard flex-1"
                />
                <button type="submit" className="btn-standard">
                  Subscribe
                </button>
              </form>
            </div>
            <p className="text-standard text-sm mt-4">
              Join 50,000+ members getting exclusive deals every week!
            </p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-12">
          <h2 className="heading-standard text-lg mb-4">Deal Terms & Conditions</h2>
          <div className="card-standard p-6">
            <ul className="space-y-2 text-standard text-sm">
              <li>• All deals are for Fast Job Career members only</li>
              <li>• Limited time offers - subject to availability</li>
              <li>• Cannot be combined with other promotions</li>
              <li>• No refunds on digital products</li>
              <li>• Terms may vary by service provider</li>
            </ul>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
