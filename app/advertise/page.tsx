import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise with Us | Fast Job Career",
  description: "Advertise your brand and reach millions of job seekers on Fast Job Career. Targeted advertising solutions for employers and service providers.",
  keywords: "advertise, job advertising, brand promotion, targeted ads, employer marketing",
};

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Advertise with Fast Job Career
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach millions of qualified job seekers and professionals worldwide with our targeted advertising solutions. 
            Promote your brand, jobs, and services to the right audience at the right time.
          </p>
        </div>

        {/* Advertising Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5M+</div>
            <p className="text-gray-600">Monthly Active Users</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-600">Countries Covered</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <p className="text-gray-600">Engagement Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-600">Ad Performance Tracking</p>
          </div>
        </div>

        {/* Advertising Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Job Postings */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💼</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Job Postings</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Promote your job listings to reach more qualified candidates. Featured jobs appear 
              at the top of search results and receive 3x more applications.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Top placement in job search results</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Highlighted job listings with special badges</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Social media promotion across platforms</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Detailed analytics and performance tracking</span>
              </li>
            </ul>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900 mb-1">Starting at $49</div>
              <p className="text-gray-600 text-sm">Per job posting (30 days)</p>
            </div>
          </div>

          {/* Banner Ads */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Banner Advertising</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Display your brand prominently across our platform with customizable banner ads. 
              Target specific demographics, locations, and job categories for maximum impact.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Premium placement on homepage and category pages</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Advanced targeting by location, industry, and skills</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>A/B testing capabilities for optimal performance</span>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Real-time performance monitoring</span>
              </li>
            </ul>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900 mb-1">Starting at $299</div>
              <p className="text-gray-600 text-sm">Per month (CPM based)</p>
            </div>
          </div>
        </div>

        {/* Targeting Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advanced Targeting Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Geographic Targeting</h3>
              <p className="text-gray-600 text-sm">
                Target users by country, city, or region with precision
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Industry Targeting</h3>
              <p className="text-gray-600 text-sm">
                Reach professionals in specific industries and sectors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Demographic Targeting</h3>
              <p className="text-gray-600 text-sm">
                Target by age, experience level, and education
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Time-Based Targeting</h3>
              <p className="text-gray-600 text-sm">
                Schedule ads for optimal times and days
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advertising Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">For small businesses</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$199<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600">• 5 Featured job postings</li>
                <li className="text-sm text-gray-600">• Basic banner placement</li>
                <li className="text-sm text-gray-600">• Standard targeting</li>
                <li className="text-sm text-gray-600">• Monthly reports</li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Choose Starter
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Best Value
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">For growing companies</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">$599<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600">• 20 Featured job postings</li>
                <li className="text-sm text-gray-600">• Premium banner placement</li>
                <li className="text-sm text-gray-600">• Advanced targeting</li>
                <li className="text-sm text-gray-600">• Weekly reports</li>
                <li className="text-sm text-gray-600">• A/B testing</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Choose Professional
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large organizations</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600">• Unlimited job postings</li>
                <li className="text-sm text-gray-600">• Premium banner placement</li>
                <li className="text-sm text-gray-600">• Custom targeting</li>
                <li className="text-sm text-gray-600">• Real-time analytics</li>
                <li className="text-sm text-gray-600">• Dedicated support</li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Start Reaching Your Target Audience Today
            </h2>
            <p className="text-blue-100 mb-6">
              Join thousands of successful advertisers who trust Fast Job Career to connect 
              with qualified professionals and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started Now
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
