import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Access | Fast Job Career",
  description: "Access Fast Job Career's powerful API for job listings, candidate data, and recruitment automation. Comprehensive documentation and developer tools.",
  keywords: "API access, job API, developer tools, recruitment API, job listings API",
};

export default function APIAccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fast Job Career API
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate our powerful job search and recruitment API into your applications. 
            Access millions of job listings, candidate profiles, and recruitment tools with ease.
          </p>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Job Search API</h3>
            <p className="text-gray-600 text-sm">
              Search millions of jobs with advanced filters and real-time updates
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Candidate Data</h3>
            <p className="text-gray-600 text-sm">
              Access qualified candidate profiles and resume information securely
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics API</h3>
            <p className="text-gray-600 text-sm">
              Get detailed insights and performance metrics for recruitment campaigns
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Webhooks</h3>
            <p className="text-gray-600 text-sm">
              Real-time notifications for job applications and status changes
            </p>
          </div>
        </div>

        {/* API Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Getting Started */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Getting Started</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">1. Get Your API Key</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Sign up for a developer account and generate your unique API key from the dashboard.
                </p>
                <code className="bg-gray-800 text-green-400 px-3 py-1 rounded text-sm">
                  GET /api/v1/auth/generate-key
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">2. Make Your First Request</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Use your API key to authenticate and start accessing job data.
                </p>
                <code className="bg-gray-800 text-green-400 px-3 py-1 rounded text-sm block">
                  curl -X GET "https://api.fastjobcareer.com/v1/jobs" \<br/>
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                  &nbsp;&nbsp;-H "Content-Type: application/json"
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">3. Explore Endpoints</h3>
                <p className="text-gray-600 text-sm">
                  Browse our comprehensive API documentation for all available endpoints and parameters.
                </p>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Popular Endpoints</h2>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-900">Job Search</h3>
                <code className="text-sm text-gray-600">GET /api/v1/jobs/search</code>
                <p className="text-gray-600 text-sm mt-1">
                  Search jobs with filters for location, industry, experience level
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-900">Job Details</h3>
                <code className="text-sm text-gray-600">GET /api/v1/jobs/{'{job_id}'}</code>
                <p className="text-gray-600 text-sm mt-1">
                  Get detailed information about a specific job posting
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-gray-900">Apply to Job</h3>
                <code className="text-sm text-gray-600">POST /api/v1/jobs/{'{job_id}'}/apply</code>
                <p className="text-gray-600 text-sm mt-1">
                  Submit job applications programmatically
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900">Application Status</h3>
                <code className="text-sm text-gray-600">GET /api/v1/applications/{'{application_id}'}</code>
                <p className="text-gray-600 text-sm mt-1">
                  Track application status and updates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            API Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-4">For testing and development</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  1,000 requests/month
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic job search
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Community support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  No webhooks
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Start Free
              </button>
            </div>

            {/* Professional Tier */}
            <div className="border-2 border-blue-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">For production applications</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  100,000 requests/month
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Full API access
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Webhooks included
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Get Professional
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large-scale applications</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited requests
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom endpoints
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  SLA guarantee
                </li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Developer Resources */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Developer Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Documentation</h3>
              <p className="text-blue-800 text-sm mb-3">
                Comprehensive API documentation with examples
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Docs
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">API Playground</h3>
              <p className="text-blue-800 text-sm mb-3">
                Test API endpoints directly in your browser
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Try Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">SDK Libraries</h3>
              <p className="text-blue-800 text-sm mb-3">
                Official SDKs for popular programming languages
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Download SDKs
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Developer Forum</h3>
              <p className="text-blue-800 text-sm mb-3">
                Connect with other developers and get help
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Join Forum
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Start Building with Fast Job Career API
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of developers using our API to power innovative recruitment solutions. 
              Get started with our free tier today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get API Key
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
