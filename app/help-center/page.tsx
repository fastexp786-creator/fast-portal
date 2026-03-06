import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Fast Job Career",
  description: "Get comprehensive help and support for Fast Job Career. Find answers to common questions, troubleshooting guides, and contact options.",
  keywords: "help center, support, FAQ, troubleshooting, customer service",
};

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need. 
            Our comprehensive help center covers everything from job searching to employer services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, and guides..."
                className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400 text-xl">🔍</span>
              </div>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">For Job Seekers</h3>
            <p className="text-gray-600 text-sm mb-4">
              Everything you need to know about finding and applying for jobs
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • How to create a profile
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Job application guide
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Resume building tips
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Interview preparation
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">For Employers</h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete guide to posting jobs and managing applications
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Posting job listings
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Managing applications
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Candidate search
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Pricing and billing
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Account & Settings</h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage your account and customize your experience
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Account security
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Privacy settings
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Email preferences
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Account deletion
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Billing & Payments</h3>
            <p className="text-gray-600 text-sm mb-4">
              Understand our pricing and payment options
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Payment methods
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Invoices and receipts
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Refund policy
              </li>
              <li className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                • Subscription management
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                How to Apply for Jobs Internationally
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Learn the step-by-step process for applying to jobs in different countries, 
                including visa requirements and documentation.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                Optimizing Your Job Profile
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Tips and best practices for creating a standout profile that attracts 
                recruiters and increases your visibility.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                Understanding Job Scams
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Learn how to identify and avoid fraudulent job postings to protect yourself 
                during your job search.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                Employer Dashboard Guide
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete walkthrough of the employer dashboard, including posting jobs 
                and managing candidates efficiently.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                Payment and Billing FAQ
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Common questions about payments, subscriptions, and billing cycles 
                for both job seekers and employers.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">
                Mobile App Troubleshooting
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Solutions to common issues with the Fast Job Career mobile app, 
                including login problems and notification issues.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">▶️</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Getting Started</h3>
                <p className="text-blue-800 text-sm">
                  Quick start guide for new users
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">▶️</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Job Search Tips</h3>
                <p className="text-blue-800 text-sm">
                  Advanced search techniques
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">▶️</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Employer Guide</h3>
                <p className="text-blue-800 text-sm">
                  Posting and managing jobs
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">▶️</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Mobile App</h3>
                <p className="text-blue-800 text-sm">
                  Using the app effectively
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Still Need Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get instant help from our support team
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Send us a detailed message
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
                Send Email
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Speak with our support team
              </p>
              <div className="text-gray-900 font-bold">
                +92 310 0570707
              </div>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 9AM-6PM PKT
              </p>
            </div>
          </div>
        </div>

        {/* Community Forum */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-300 mb-6">
              Connect with other users, share experiences, and get help from our active community forum.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Visit Community Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
