import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Hub | Fast Job Career",
  description: "Join Fast Job Career Partner Hub and connect with millions of job seekers worldwide. List your jobs, reach qualified candidates, and grow your business.",
  keywords: "partner hub, job posting, recruitment, employer services, talent acquisition",
};

export default function PartnerHubPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your recruitment strategy with Fast Job Career's comprehensive partner platform. 
            Connect with millions of qualified candidates across 50+ countries and streamline your hiring process.
          </p>
        </div>

        {/* Partner Benefits */}
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Targeted Matching</h3>
            <p className="text-gray-600 text-sm">
              AI-powered candidate matching ensures you connect with the most qualified professionals
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600 text-sm">
              Real-time insights into job performance, candidate engagement, and hiring metrics
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h3>
            <p className="text-gray-600 text-sm">
              Flexible pricing plans designed for businesses of all sizes and recruitment needs
            </p>
          </div>
        </div>

        {/* Partner Tiers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Partnership Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for small businesses</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 5 active job postings
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic candidate search
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Monthly analytics report
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-blue-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Ideal for growing companies</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 25 active job postings
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced candidate search
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time analytics
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Featured job listings
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large organizations</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited job postings
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium candidate matching
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  White-label solutions
                </li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🏢</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">TechCorp Solutions</h4>
                  <p className="text-sm text-gray-600">Technology Company</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "Fast Job Career helped us hire 50+ developers across 3 countries in just 2 months. 
                The quality of candidates is exceptional."
              </p>
              <p className="text-sm text-gray-500">- Sarah Chen, HR Director</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Global Healthcare</h4>
                  <p className="text-sm text-gray-600">Healthcare Provider</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "We've reduced our hiring time by 60% and found qualified medical professionals 
                from around the world through this platform."
              </p>
              <p className="text-sm text-gray-500">- Dr. Michael Roberts, CEO</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🏭</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Manufacturing Pro</h4>
                  <p className="text-sm text-gray-600">Industrial Company</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "The partner portal is intuitive and the candidate quality is outstanding. 
                We've filled positions we struggled with for years."
              </p>
              <p className="text-sm text-gray-500">- Ahmed Hassan, Operations Manager</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of companies that trust Fast Job Career for their hiring needs. 
              Start connecting with top talent today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
