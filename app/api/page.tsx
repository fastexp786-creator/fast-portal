import StandardPageLayout from "@/components/StandardPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Access | Fast Job Career",
  description: "Integrate with Fast Job Career's powerful API to access job listings, candidate data, and recruitment tools. Build custom solutions for your hiring needs.",
};

export default function APIAccessPage() {
  return (
    <StandardPageLayout
      title="API Access"
        description="Integrate with Fast Job Career's powerful API to access job listings, candidate data, and recruitment tools. Build custom solutions for your hiring needs."
      activeSlug="api"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Fast Job Career API Platform</h2>
          <p className="text-standard mb-4">
            Our comprehensive API platform empowers developers, HR tech companies, and 
            enterprise clients to integrate Fast Job Career&apos;s extensive job database and 
            recruitment capabilities directly into their applications. With RESTful endpoints, 
            real-time data access, and robust security measures, you can build powerful 
            solutions that streamline the hiring process.
          </p>
          <p className="text-standard">
            Whether you&apos;re building a job board, developing an applicant tracking system, 
            or creating custom recruitment software, our API provides the flexibility and 
            reliability you need. Access millions of job listings across 50+ countries and 
            connect with qualified candidates worldwide.
          </p>
        </section>

        {/* API Features */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">API Features & Capabilities</h2>
          <p className="text-standard mb-4">
            Our API is designed with developer experience in mind, offering comprehensive 
            features that cover every aspect of job data and recruitment management. 
            From basic job searches to advanced analytics, we provide the tools you need 
            to build exceptional applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-blue-900">Job Search & Listings</h3>
              <ul className="list-disc pl-5 space-y-2 text-standard text-sm">
                <li>Search jobs by keyword, location, category, and salary</li>
                <li>Filter by job type, experience level, and industry</li>
                <li>Access real-time job postings and updates</li>
                <li>Get detailed job descriptions and requirements</li>
                <li>View company profiles and employer information</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-green-900">Candidate Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-standard text-sm">
                <li>Upload and manage candidate profiles</li>
                <li>Parse resumes and extract key information</li>
                <li>Track application status and progress</li>
                <li>Access candidate matching algorithms</li>
                <li>Manage interview scheduling</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-purple-900">Analytics & Reporting</h3>
              <ul className="list-disc pl-5 space-y-2 text-standard text-sm">
                <li>Job market trends and insights</li>
                <li>Application and conversion analytics</li>
                <li>Salary benchmarking data</li>
                <li>Geographic job distribution reports</li>
                <li>Industry-specific hiring metrics</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-amber-900">Integration Tools</h3>
              <ul className="list-disc pl-5 space-y-2 text-standard text-sm">
                <li>Webhooks for real-time notifications</li>
                <li>Batch processing capabilities</li>
                <li>Data export and synchronization</li>
                <li>Authentication and secure access</li>
                <li>Rate limiting and usage monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">API Pricing Plans</h2>
          <p className="text-standard mb-6">
            Choose the plan that fits your needs. All plans include full API access with 
            varying request limits and support levels.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Starter</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Free</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>1,000 requests/month</li>
                <li>Basic job search</li>
                <li>Community support</li>
                <li>Standard rate limits</li>
              </ul>
              <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </span>
              <h3 className="font-bold text-xl mb-2">Professional</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$99/mo</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>50,000 requests/month</li>
                <li>Advanced search filters</li>
                <li>Priority email support</li>
                <li>Higher rate limits</li>
                <li>Analytics access</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Enterprise</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
              <ul className="text-sm space-y-2 mb-6 text-left">
                <li>Unlimited requests</li>
                <li>Full API access</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
                <li>SLA guarantee</li>
              </ul>
              <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Documentation & Resources</h2>
          <p className="text-standard mb-4">
            Get started quickly with our comprehensive documentation, SDKs, and code examples. 
            Our developer resources are designed to help you integrate seamlessly and resolve 
            any questions you may have.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View Documentation
            </a>
            <a
              href="#"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Download SDK
            </a>
            <a
              href="#"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Code Examples
            </a>
          </div>
        </section>
      </div>
    </StandardPageLayout>
  );
}
