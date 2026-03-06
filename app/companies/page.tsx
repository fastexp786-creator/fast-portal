import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Companies & Employers",
  "Discover and connect with top companies and employers on Fast Job Career. Browse company profiles, job openings, and career opportunities across various industries.",
  "companies"
);

export default function CompaniesPage() {
  return (
    <StandardPageLayout
      title="Companies & Employers"
      description="Discover and connect with top companies and employers on Fast Job Career. Browse company profiles, job openings, and career opportunities across various industries."
      activeSlug="companies"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Top Employers
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Companies & Employers
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Connect with leading companies and explore exciting career opportunities across various industries and locations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Companies */}
          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">TC</span>
              </div>
              <div>
                <h3 className="heading-standard">TechCorp International</h3>
                <p className="text-standard text-sm">Technology • Dubai, UAE</p>
              </div>
            </div>
            <p className="text-standard">
              Leading technology company specializing in software development, AI solutions, and digital transformation services across the Middle East.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">250+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>

          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold">MH</span>
              </div>
              <div>
                <h3 className="heading-standard">MediCare Hospitals</h3>
                <p className="text-standard text-sm">Healthcare • Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <p className="text-standard">
              Premier healthcare provider with state-of-the-art medical facilities and internationally trained medical professionals.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">180+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>

          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">CF</span>
              </div>
              <div>
                <h3 className="heading-standard">Construction Force</h3>
                <p className="text-standard text-sm">Construction • Doha, Qatar</p>
              </div>
            </div>
            <p className="text-standard">
              Major construction company involved in infrastructure projects, commercial buildings, and residential developments.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">320+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>

          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-white font-bold">FH</span>
              </div>
              <div>
                <h3 className="heading-standard">Food & Hospitality</h3>
                <p className="text-standard text-sm">Hospitality • Abu Dhabi, UAE</p>
              </div>
            </div>
            <p className="text-standard">
              Luxury hotel chain and restaurant group offering premium dining experiences and accommodation services.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">150+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>

          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold">EL</span>
              </div>
              <div>
                <h3 className="heading-standard">Energy Logistics</h3>
                <p className="text-standard text-sm">Oil & Gas • Kuwait</p>
              </div>
            </div>
            <p className="text-standard">
              Leading energy sector company providing logistics, transportation, and supply chain solutions for oil and gas industry.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">250+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>

          <div className="card-standard">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold">FS</span>
              </div>
              <div>
                <h3 className="heading-standard">Financial Services</h3>
                <p className="text-standard text-sm">Banking • Manama, Bahrain</p>
              </div>
            </div>
            <p className="text-standard">
              Comprehensive financial institution offering banking, investment, and insurance services across the Gulf region.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">180+ Open Positions</span>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">View Jobs →</a>
            </div>
          </div>
        </div>

        {/* Industry Categories */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl">Browse by Industry</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Technology</h3>
              <p className="text-standard text-sm">450+ companies</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Healthcare</h3>
              <p className="text-standard text-sm">320+ companies</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Construction</h3>
              <p className="text-standard text-sm">280+ companies</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Hospitality</h3>
              <p className="text-standard text-sm">190+ companies</p>
            </a>
          </div>
        </div>

        {/* Additional Content for 300+ words */}
        <div className="mt-12 space-y-6 text-sm text-standard">
          <section>
            <h2 className="heading-standard text-xl">Why Partner with Fast Job Career?</h2>
            <p>
              Fast Job Career connects thousands of companies with qualified candidates across the Gulf region and beyond. Our platform offers employers a comprehensive recruitment solution that saves time, reduces costs, and improves hiring quality. Whether you're a small startup or a multinational corporation, our tailored recruitment services meet your specific needs.
            </p>
            <p>
              Companies partnering with Fast Job Career gain access to our extensive talent pool, advanced matching algorithms, and streamlined recruitment processes. Our employer dashboard provides real-time analytics, applicant tracking, and communication tools to manage the entire hiring lifecycle efficiently.
            </p>
          </section>

          <section>
            <h2 className="heading-standard text-xl">Employer Benefits</h2>
            <p>
              Partner companies enjoy numerous benefits including priority job postings, enhanced company profiles, direct access to candidate databases, and dedicated account management. Our platform also offers employer branding opportunities, job fair participation, and recruitment analytics to optimize your hiring strategy.
            </p>
            <p>
              We understand that every company has unique recruitment needs. That's why we offer flexible pricing plans, customizable job posting packages, and value-added services like background verification, skills assessment, and interview scheduling support.
            </p>
          </section>

          <section>
            <h2 className="heading-standard text-xl">Quality Assurance</h2>
            <p>
              All companies listed on Fast Job Career undergo a verification process to ensure authenticity and legitimacy. We verify business registration, contact information, and hiring requirements to maintain a trustworthy platform for job seekers. This rigorous vetting process helps prevent fraudulent job postings and protects both employers and candidates.
            </p>
            <p>
              Our commitment to quality extends to the candidates we connect with your company. We verify candidate credentials, conduct preliminary screenings, and ensure that applicants meet your specified requirements before they reach your shortlist. This pre-qualification process saves valuable time and resources in the recruitment process.
            </p>
          </section>
        </div>

        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center">List Your Company</h2>
          <div className="text-center">
            <p className="mb-6 text-standard">
              Join thousands of companies using Fast Job Career to find top talent. Create your company profile and start posting jobs today.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:employers@fastjobcareer.com"
                className="btn-standard"
              >
                Contact Sales Team
              </a>
              <p className="text-xs text-gray-400">
                Email: employers@fastjobcareer.com | Phone: +92 310 0570707
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
