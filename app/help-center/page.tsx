<<<<<<< HEAD
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Help Center | Fast Job Career - Support & Assistance",
  description: "Get comprehensive help and support for Fast Job Career services. Find answers to common questions, contact support, and access resources for job seekers and employers.",
  keywords: "help center, support, customer service, job portal help, Fast Job Career assistance",
  authors: [{ name: "Fast Job Career" }],
  creator: "Fast Job Career",
  publisher: "Fast Job Career",
  alternates: {
    canonical: `${SITE_URL}/help-center`,
  },
  openGraph: {
    url: `${SITE_URL}/help-center`,
    title: "Help Center | Fast Job Career - Support & Assistance",
    description: "Get comprehensive help and support for Fast Job Career services. Find answers to common questions, contact support, and access resources for job seekers and employers.",
    type: "website",
    siteName: "Fast Job Career",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Fast Job Career - Support & Assistance",
    description: "Get comprehensive help and support for Fast Job Career services. Find answers to common questions, contact support, and access resources for job seekers and employers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
=======
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Fast Job Career",
  description: "Get comprehensive help and support for Fast Job Career. Find answers to common questions, troubleshooting guides, and contact options.",
  keywords: "help center, support, FAQ, troubleshooting, customer service",
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
};

export default function HelpCenterPage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Support Center
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Help Center
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Find answers, get support, and learn how to make the most of Fast Job Career's comprehensive job portal services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* For Job Seekers */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-blue-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">For Job Seekers</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">How to create your profile</a></li>
              <li><a href="#" className="hover:text-blue-400">Search and apply for jobs</a></li>
              <li><a href="#" className="hover:text-blue-400">Track application status</a></li>
              <li><a href="#" className="hover:text-blue-400">Resume building tips</a></li>
              <li><a href="#" className="hover:text-blue-400">Interview preparation</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-green-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">For Employers</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Post job vacancies</a></li>
              <li><a href="#" className="hover:text-blue-400">Manage applications</a></li>
              <li><a href="#" className="hover:text-blue-400">Search candidate database</a></li>
              <li><a href="#" className="hover:text-blue-400">Company branding</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing plans</a></li>
            </ul>
          </div>

          {/* Account & Settings */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-purple-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Account & Settings</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Login and password issues</a></li>
              <li><a href="#" className="hover:text-blue-400">Profile settings</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy settings</a></li>
              <li><a href="#" className="hover:text-blue-400">Notification preferences</a></li>
              <li><a href="#" className="hover:text-blue-400">Delete account</a></li>
            </ul>
          </div>

          {/* Travel & Visa */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-orange-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Travel & Visa</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Visa application process</a></li>
              <li><a href="#" className="hover:text-blue-400">Document requirements</a></li>
              <li><a href="#" className="hover:text-blue-400">Travel booking services</a></li>
              <li><a href="#" className="hover:text-blue-400">Accommodation assistance</a></li>
              <li><a href="#" className="hover:text-blue-400">Country-specific information</a></li>
            </ul>
          </div>

          {/* Billing & Payments */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-red-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Billing & Payments</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Payment methods</a></li>
              <li><a href="#" className="hover:text-blue-400">Invoice and receipts</a></li>
              <li><a href="#" className="hover:text-blue-400">Refund policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Subscription management</a></li>
              <li><a href="#" className="hover:text-blue-400">Payment issues</a></li>
            </ul>
          </div>

          {/* Technical Support */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-full bg-teal-600 p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Technical Support</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Website troubleshooting</a></li>
              <li><a href="#" className="hover:text-blue-400">Mobile app issues</a></li>
              <li><a href="#" className="hover:text-blue-400">Browser compatibility</a></li>
              <li><a href="#" className="hover:text-blue-400">Performance issues</a></li>
              <li><a href="#" className="hover:text-blue-400">Report bugs</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 rounded-lg bg-gray-800 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Still Need Help?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Our Support Team</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@fastjobcareer.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+92 310 0570707</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Fri: 9:00 AM - 6:00 PM (PKT)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Popular Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400">Getting Started Guide</a></li>
                <li><a href="#" className="hover:text-blue-400">Video Tutorials</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ Section</a></li>
                <li><a href="#" className="hover:text-blue-400">Community Forum</a></li>
              </ul>
=======
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
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Additional Content for 300+ words */}
        <div className="mt-12 space-y-6 text-sm text-gray-300">
          <p>
            Fast Job Career's Help Center is designed to provide comprehensive support for all users, whether you're a job seeker looking for your next opportunity or an employer seeking top talent. Our support system is built on the foundation of accessibility, efficiency, and user satisfaction. We understand that navigating the job market can be challenging, especially when exploring international opportunities, which is why our help resources are structured to address every possible question and concern you might have.
          </p>
          <p>
            Our dedicated support team consists of experienced professionals who are well-versed in the intricacies of international recruitment, visa processes, and career development. They undergo regular training to stay updated with the latest industry trends, immigration policies, and platform features. This ensures that you receive accurate, timely, and relevant information whenever you reach out for assistance. We offer multiple channels of communication including email, phone support, and live chat to accommodate your preferences and urgency levels.
          </p>
          <p>
            Beyond direct support, we've invested heavily in creating self-service resources that empower users to find answers independently. Our comprehensive knowledge base contains detailed articles, step-by-step guides, video tutorials, and frequently asked questions covering everything from basic account setup to complex visa application procedures. These resources are regularly updated based on user feedback and emerging needs, ensuring that the information remains current and relevant to your job search journey.
          </p>
          <p>
            We also recognize that different users have different levels of technical proficiency and learning preferences. That's why our help content is presented in various formats - written guides for those who prefer reading, video tutorials for visual learners, and interactive walkthroughs for hands-on learners. Our commitment to accessibility means that all help resources are optimized for different devices and screen sizes, allowing you to access support whether you're using a desktop computer, tablet, or mobile phone.
          </p>
          <p>
            The Help Center also serves as a valuable feedback channel for us to continuously improve our services. Every interaction, whether it's a support ticket, community forum post, or resource usage, provides insights into user needs and pain points. We analyze this data regularly to identify trends, improve our platform features, and enhance our support processes. This user-centric approach ensures that Fast Job Career evolves in alignment with our users' needs and expectations.
          </p>
        </div>
      </div>
    </main>
=======
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
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
  );
}
