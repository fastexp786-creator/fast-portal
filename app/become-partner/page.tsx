import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Partner | Fast Job Career",
  description: "Partner with Fast Job Career and connect with millions of job seekers. Join our global network of employers and recruitment agencies.",
  keywords: "become partner, partnership opportunities, employer partnership, recruitment partners",
};

export default function BecomePartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Become a Fast Job Career Partner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our global partnership network and connect with millions of qualified job seekers. 
            Expand your reach, streamline recruitment, and grow your business with our comprehensive platform.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">
              Access talent from over 50 countries with localized job posting and candidate matching
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Candidates</h3>
            <p className="text-gray-600 text-sm">
              Connect with pre-screened, qualified professionals across various industries and experience levels
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Tools</h3>
            <p className="text-gray-600 text-sm">
              Use our AI-powered matching, analytics dashboard, and recruitment automation tools
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h3>
            <p className="text-gray-600 text-sm">
              Reduce recruitment costs by up to 60% with our efficient platform and tools
            </p>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Direct Employer */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Employer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Post jobs directly and manage your recruitment pipeline with our comprehensive tools
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited job postings
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Candidate database access
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Application management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Join as Employer
              </button>
            </div>

            {/* Recruitment Agency */}
            <div className="border-2 border-green-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                Recommended
              </div>
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recruitment Agency</h3>
              <p className="text-gray-600 text-sm mb-4">
                Scale your recruitment business with our platform and client management tools
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-client management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Revenue sharing opportunities
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  White-label solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Training and support
                </li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Join as Agency
              </button>
            </div>

            {/* Technology Partner */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Partner</h3>
              <p className="text-gray-600 text-sm mb-4">
                Integrate your HR tech solutions with our platform and expand your market reach
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  API integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Co-marketing opportunities
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Joint development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Technical support
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Join as Tech Partner
              </button>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your company and partnership goals"
                />
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select your country</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="saudi-arabia">Saudi Arabia</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Interest *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select partnership type</option>
                  <option value="employer">Direct Employer</option>
                  <option value="agency">Recruitment Agency</option>
                  <option value="technology">Technology Partner</option>
                  <option value="affiliate">Affiliate Partner</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Submit Partnership Application
          </button>
          <p className="text-gray-600 text-sm mt-4">
            We'll review your application within 3-5 business days and contact you with next steps.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Partnership FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                How long does the application process take?
              </h3>
              <p className="text-blue-800 text-sm">
                Most applications are reviewed within 3-5 business days. We'll contact you via email 
                with additional questions or to schedule a call if needed.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                What are the costs involved?
              </h3>
              <p className="text-blue-800 text-sm">
                We offer flexible pricing plans based on your needs and size. There are no setup fees, 
                and you can start with our free tier to explore the platform.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                Can I integrate with my existing systems?
              </h3>
              <p className="text-blue-800 text-sm">
                Yes! We provide comprehensive API documentation and SDKs for seamless integration 
                with your existing HR and recruitment systems.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                What kind of support do partners receive?
              </h3>
              <p className="text-blue-800 text-sm">
                Partners receive dedicated account managers, priority support, training resources, 
                and access to our partner community for best practices and networking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
