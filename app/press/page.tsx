import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Fast Job Career",
  description: "Fast Job Career press releases, media resources, and company news. Get the latest updates about our platform, partnerships, and industry impact.",
  keywords: "press, media, news, press releases, company updates, media resources",
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to the Fast Job Career press room. Find our latest press releases, 
            media resources, and company information for journalists and media professionals.
          </p>
        </div>

        {/* Media Contact */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Media Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-blue-900 mb-4">For Press Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-800">press@fastjobcareer.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📞</span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-800">+92 310 0570707</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🕐</span>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-blue-800">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-4">For General Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-800">info@fastjobcareer.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🌐</span>
                  <div>
                    <div className="font-semibold">Website</div>
                    <div className="text-blue-800">www.fastjobcareer.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Press Releases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Press Releases
          </h2>
          <div className="space-y-8">
            {/* Press Release 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Fast Job Career Reaches 5 Million Users Milestone
                </h3>
                <span className="text-sm text-gray-500">March 15, 2026</span>
              </div>
              <p className="text-gray-600 mb-4">
                Fast Job Career, the leading international job platform, today announced it has 
                surpassed 5 million registered users across 50+ countries. This milestone represents 
                significant growth in the company's mission to connect global talent with international opportunities.
              </p>
              <p className="text-gray-700 mb-4">
                "Reaching 5 million users is a testament to the trust job seekers and employers 
                place in our platform," said CEO Ahmed Hassan. "We've focused on creating 
                a seamless experience that addresses the unique challenges of international recruitment."
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read Full Release
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Press Release 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Launch of AI-Powered Job Matching System
                </h3>
                <span className="text-sm text-gray-500">March 1, 2026</span>
              </div>
              <p className="text-gray-600 mb-4">
                Fast Job Career unveiled its revolutionary AI-powered job matching system that 
                increases candidate-employer matching accuracy by 85%. The new system analyzes 
                skills, experience, and preferences to provide highly personalized job recommendations.
              </p>
              <p className="text-gray-700 mb-4">
                "Our AI matching technology represents a quantum leap in recruitment efficiency," 
                stated CTO Sarah Johnson. "Job seekers now receive opportunities that truly match 
                their career aspirations, while employers save time and resources in finding the right talent."
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read Full Release
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Press Release 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Partnership with Major International Airlines
                </h3>
                <span className="text-sm text-gray-500">February 20, 2026</span>
              </div>
              <p className="text-gray-600 mb-4">
                Fast Job Career announced strategic partnerships with five major international airlines 
                to create dedicated job portals for aviation professionals. This initiative aims to 
                address the growing demand for skilled aviation talent globally.
              </p>
              <p className="text-gray-700 mb-4">
                "The aviation industry represents a significant opportunity for international employment," 
                said Partnership Director Michael Roberts. "These partnerships will help us connect 
                qualified aviation professionals with leading airlines worldwide."
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read Full Release
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Company Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Fast Job Career</h3>
              <p className="text-gray-600 mb-4">
                Fast Job Career is a leading international job platform connecting millions of job seekers 
                with employers across 50+ countries. Founded in 2020, we've revolutionized 
                the recruitment industry with our innovative technology and user-centric approach.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🎯</span>
                  <span className="text-gray-700">Mission: Connect talent with opportunity globally</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🌍</span>
                  <span className="text-gray-700">Founded: 2020</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">👥</span>
                  <span className="text-gray-700">Headquarters: Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🌐</span>
                  <span className="text-gray-700">Global presence: 50+ countries</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">Registered Users</span>
                  <span className="font-bold text-blue-600">5 Million+</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">Partner Companies</span>
                  <span className="font-bold text-blue-600">10,000+</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">Active Job Postings</span>
                  <span className="font-bold text-blue-600">50,000+</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">Countries Served</span>
                  <span className="font-bold text-blue-600">50+</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">Success Rate</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Resources */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Media Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Logo & Branding</h3>
              <p className="text-blue-800 text-sm mb-3">
                Download our official logos and brand guidelines
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Download Assets
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Executive Photos</h3>
              <p className="text-blue-800 text-sm mb-3">
                High-resolution photos of our leadership team
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Gallery
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Company Data</h3>
              <p className="text-blue-800 text-sm mb-3">
                Key metrics, growth charts, and performance data
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Statistics
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📰</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Press Kit</h3>
              <p className="text-blue-800 text-sm mb-3">
                Complete media kit with all essential resources
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Best Job Platform 2025</h3>
              <p className="text-gray-600 text-sm">
                International Recruitment Awards
              </p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tech Innovation Award</h3>
              <p className="text-gray-600 text-sm">
                Global HR Technology Summit 2025
              </p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence in User Experience</h3>
              <p className="text-gray-600 text-sm">
                UX Design Awards 2025
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Media Inquiries Welcome
            </h2>
            <p className="text-gray-300 mb-6">
              For all media inquiries, interview requests, or additional information, 
              please don't hesitate to reach out to our press team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Press Team
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
