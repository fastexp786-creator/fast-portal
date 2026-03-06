import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Awards & Recognition",
  "Explore Fast Job Career's awards, recognitions, and achievements in the recruitment and job search industry. Our commitment to excellence has been recognized globally.",
  "awards"
);

export default function AwardsPage() {
  return (
    <StandardPageLayout
      title="Awards & Recognition"
      description="Explore Fast Job Career's awards, recognitions, and achievements in the recruitment and job search industry. Our commitment to excellence has been recognized globally."
      activeSlug="awards"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Recognition & Excellence
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Awards & Recognition
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Fast Job Career has been recognized globally for innovation, excellence, and impact in the recruitment industry. Our awards reflect our commitment to transforming how people find jobs and how companies hire talent.
          </p>
        </div>

        {/* Featured Awards */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🏆 Major Awards & Recognition</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏅</span>
                </div>
                <div>
                  <h3 className="heading-standard text-lg">Best Recruitment Platform 2024</h3>
                  <p className="text-standard text-sm">Global HR Tech Awards</p>
                </div>
              </div>
              <p className="text-standard mb-4">
                Recognized as the leading recruitment platform for innovation in AI-powered matching and user experience design.
              </p>
              <ul className="space-y-1 text-standard text-sm">
                <li>• AI-powered candidate matching</li>
                <li>• 95% user satisfaction rate</li>
                <li>• 2M+ successful placements</li>
                <li>• Global reach across 50+ countries</li>
              </ul>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎖️</span>
                </div>
                <div>
                  <h3 className="heading-standard text-lg">Innovation Excellence Award 2023</h3>
                  <p className="text-standard text-sm">Tech Recruitment Summit</p>
                </div>
              </div>
              <p className="text-standard mb-4">
                Awarded for groundbreaking technology that revolutionizes how job seekers and employers connect.
              </p>
              <ul className="space-y-1 text-standard text-sm">
                <li>• Advanced machine learning algorithms</li>
                <li>• Real-time job matching</li>
                <li>• Mobile-first design approach</li>
                <li>• Predictive analytics integration</li>
              </ul>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🥇</span>
                </div>
                <div>
                  <h3 className="heading-standard text-lg">Customer Choice Award 2023</h3>
                  <p className="text-standard text-sm">Recruitment Industry Association</p>
                </div>
              </div>
              <p className="text-standard mb-4">
                Voted by users as the most trusted and reliable recruitment platform in the industry.
              </p>
              <ul className="space-y-1 text-standard text-sm">
                <li>• 4.9/5 user rating</li>
                <li>• 10,000+ verified reviews</li>
                <li>• 98% customer retention</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="heading-standard text-lg">Best Mobile App 2022</h3>
                  <p className="text-standard text-sm">Mobile App Awards</p>
                </div>
              </div>
              <p className="text-standard mb-4">
                Recognized for excellence in mobile application design and functionality for job seekers on the go.
              </p>
              <ul className="space-y-1 text-standard text-sm">
                <li>• 1M+ mobile downloads</li>
                <li>• 4.8/5 app store rating</li>
                <li>• Offline functionality</li>
                <li>• Push notification system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🌍 Industry Recognition</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Market Leader</h3>
              <p className="text-standard text-sm">
                Recognized as the market leader in online recruitment with 35% market share in key regions.
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌟</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Quality Excellence</h3>
              <p className="text-standard text-sm">
                ISO 9001 certified for quality management in recruitment services and platform operations.
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Security Excellence</h3>
              <p className="text-standard text-sm">
                Recognized for outstanding data security and privacy protection measures.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">📜 Certifications & Accreditations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">ISO 9001:2015</h3>
              <p className="text-standard text-sm">
                Quality management system certification for recruitment services excellence.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">ISO 27001:2013</h3>
              <p className="text-standard text-sm">
                Information security management system certification for data protection.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">GDPR Compliant</h3>
              <p className="text-standard text-sm">
                Full compliance with EU General Data Protection Regulation requirements.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">SOC 2 Type II</h3>
              <p className="text-standard text-sm">
                Security operations center compliance for service organization controls.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">PCI DSS Level 1</h3>
              <p className="text-standard text-sm">
                Payment card industry data security standard compliance.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">HIPAA Compliant</h3>
              <p className="text-standard text-sm">
                Healthcare information privacy and security compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Press & Media */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">📰 Press & Media Recognition</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Forbes - "Top 10 HR Tech Companies"</h3>
              <p className="text-standard text-sm">
                Featured in Forbes as one of the top 10 HR technology companies revolutionizing recruitment.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">TechCrunch - "Startup of the Year"</h3>
              <p className="text-standard text-sm">
                Recognized by TechCrunch as the most innovative startup in the HR technology space.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Business Insider - "Best Places to Work"</h3>
              <p className="text-standard text-sm">
                Listed as one of the best places to work for technology professionals.
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Wall Street Journal - "Market Disruptor"</h3>
              <p className="text-standard text-sm">
                Recognized as a major disruptor in the traditional recruitment industry.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">💬 Industry Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Industry expert" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="heading-standard text-base">John Anderson</h3>
                  <p className="text-standard text-sm">HR Director, Global Tech Corp</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "Fast Job Career has transformed how we approach recruitment. Their platform's efficiency and quality of candidates have exceeded our expectations."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <div className="card-standard p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Industry expert" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="heading-standard text-base">Sarah Mitchell</h3>
                  <p className="text-standard text-sm">CEO, Recruitment Solutions Inc</p>
                </div>
              </div>
              <p className="text-standard text-sm mb-4">
                "The innovation and technology behind Fast Job Career sets them apart. They're truly revolutionizing the recruitment industry."
              </p>
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Gallery */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">🖼️ Awards Gallery</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-standard p-6 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="heading-standard text-base mb-2">2024 Awards</h3>
              <p className="text-standard text-sm">
                Best Recruitment Platform, Innovation Excellence
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏅</span>
              </div>
              <h3 className="heading-standard text-base mb-2">2023 Awards</h3>
              <p className="text-standard text-sm">
                Customer Choice, Best Mobile App, Market Leader
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥇</span>
              </div>
              <h3 className="heading-standard text-base mb-2">2022 Awards</h3>
              <p className="text-standard text-sm">
                Quality Excellence, Security Excellence, Innovation Award
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Awards */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Awards & Recognition Inquiries</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              For media inquiries, award nominations, or partnership opportunities, please contact our awards and recognition team.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Media Contact</h3>
                <p className="text-standard text-sm mb-4">
                  For press releases, interviews, and media coverage requests.
                </p>
                <p className="text-standard">
                  <strong>Email:</strong> media@fastjobcareer.com<br />
                  <strong>Phone:</strong> +92 310 0570707 ext. 201
                </p>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Awards Team</h3>
                <p className="text-standard text-sm mb-4">
                  For award nominations, certifications, and recognition inquiries.
                </p>
                <p className="text-standard">
                  <strong>Email:</strong> awards@fastjobcareer.com<br />
                  <strong>Phone:</strong> +92 310 0570707 ext. 202
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
