import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Genius Program",
  "Join Fast Job Career's exclusive Genius Program for premium career development, personalized coaching, and accelerated job placement services.",
  "genius-program"
);

export default function GeniusProgramPage() {
  return (
    <StandardPageLayout
      title="Genius Program"
      description="Join Fast Job Career's exclusive Genius Program for premium career development, personalized coaching, and accelerated job placement services."
      activeSlug="genius-program"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Premium Program
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Genius Program
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Unlock your full potential with our exclusive career development program. Get personalized coaching, premium job access, and accelerated career growth.
          </p>
        </div>

        {/* Program Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">What is the Genius Program?</h2>
            <p className="text-standard mb-6">
              The Genius Program is Fast Job Career's premium career development service designed for ambitious professionals who want to accelerate their career growth. Our program combines personalized coaching, exclusive job opportunities, and advanced career tools to help you achieve your professional goals faster.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Personalized Approach</h3>
                <p className="text-standard text-sm">
                  Custom career plans tailored to your unique goals and aspirations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Accelerated Growth</h3>
                <p className="text-standard text-sm">
                  Fast-track your career with exclusive opportunities and premium support
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Proven Results</h3>
                <p className="text-standard text-sm">
                  95% of Genius Program members achieve their career goals within 6 months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Personal Career Coach</h3>
            <p className="text-standard mb-4">
              Work 1-on-1 with experienced career coaches who understand your industry and goals.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Weekly coaching sessions</li>
              <li>• Industry-specific guidance</li>
              <li>• Interview preparation</li>
              <li>• Salary negotiation support</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Exclusive Job Access</h3>
            <p className="text-standard mb-4">
              Get priority access to premium job opportunities not available to regular users.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Premium job listings</li>
              <li>• Direct employer connections</li>
              <li>• Early application access</li>
              <li>• Referral opportunities</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Advanced Resume Building</h3>
            <p className="text-standard mb-4">
              Professional resume optimization and portfolio development services.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• ATS-optimized resumes</li>
              <li>• Professional portfolio</li>
              <li>• LinkedIn profile optimization</li>
              <li>• Personal branding</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Skill Development</h3>
            <p className="text-standard mb-4">
              Access premium courses and workshops to enhance your professional skills.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Industry certifications</li>
              <li>• Technical skills training</li>
              <li>• Soft skills workshops</li>
              <li>• Leadership development</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Networking Opportunities</h3>
            <p className="text-standard mb-4">
              Connect with industry leaders and professionals in your field.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Exclusive networking events</li>
              <li>• Industry mentorship</li>
              <li>• Professional communities</li>
              <li>• Alumni network</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Career Analytics</h3>
            <p className="text-standard mb-4">
              Track your progress with advanced analytics and insights.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Application tracking</li>
              <li>• Success metrics</li>
              <li>• Market insights</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
        </div>

        {/* Program Tiers */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Choose Your Program</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Basic Genius</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">$299</span>
                <span className="text-standard"> /month</span>
              </div>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ Personal career coach</li>
                <li>✓ Premium job access</li>
                <li>✓ Resume optimization</li>
                <li>✓ Monthly progress reports</li>
                <li>✓ Email support</li>
              </ul>
              <button className="btn-standard w-full">Get Started</button>
            </div>

            <div className="card-standard p-6 border-2 border-blue-500">
              <div className="mb-2 text-center">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-4">Pro Genius</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">$599</span>
                <span className="text-standard"> /month</span>
              </div>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ Everything in Basic</li>
                <li>✓ Weekly coaching sessions</li>
                <li>✓ Skill development courses</li>
                <li>✓ Networking events</li>
                <li>✓ Priority support</li>
                <li>✓ Career analytics</li>
              </ul>
              <button className="btn-standard w-full">Get Started</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Elite Genius</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-black">$999</span>
                <span className="text-standard"> /month</span>
              </div>
              <ul className="space-y-2 text-standard text-sm mb-6">
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited coaching</li>
                <li>✓ Executive mentorship</li>
                <li>✓ Global opportunities</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ Custom career strategy</li>
              </ul>
              <button className="btn-standard w-full">Get Started</button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Success story" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="heading-standard text-base">Sarah Ahmed</h3>
                  <p className="text-standard text-sm">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "The Genius Program helped me land my dream job at Google within 3 months. My coach provided invaluable insights and the premium job access was game-changing."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-standard text-sm ml-2">5.0</span>
              </div>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Success story" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="heading-standard text-base">Michael Chen</h3>
                  <p className="text-standard text-sm">Marketing Director at Microsoft</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "The personalized coaching and networking opportunities in the Genius Program accelerated my career growth beyond my expectations."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-standard text-sm ml-2">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Process */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">How to Join</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Apply Online</h3>
              <p className="text-standard text-sm">
                Fill out our application form with your career goals and background
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Career Assessment</h3>
              <p className="text-standard text-sm">
                Complete our comprehensive career assessment to identify your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Consultation Call</h3>
              <p className="text-standard text-sm">
                Schedule a consultation with our program coordinator to discuss options
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Start Your Journey</h3>
              <p className="text-standard text-sm">
                Begin your personalized career development program
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="btn-standard">Apply Now</button>
            <p className="text-standard text-sm mt-4">
              Questions? <a href="mailto:genius@fastjobcareer.com" className="text-blue-400">Contact our team</a>
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-base mb-2">How long does the program last?</h3>
              <p className="text-standard text-sm">
                The Genius Program is flexible and can be tailored to your needs. Most members see significant results within 3-6 months, but you can continue as long as you find value in the service.
              </p>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-base mb-2">What if I'm not satisfied with the program?</h3>
              <p className="text-standard text-sm">
                We offer a 30-day money-back guarantee. If you're not satisfied with the program within the first 30 days, we'll provide a full refund.
              </p>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-base mb-2">Can I switch between program tiers?</h3>
              <p className="text-standard text-sm">
                Yes, you can upgrade or downgrade your program tier at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
