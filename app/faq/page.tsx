import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Fast Job Career",
  description: "Frequently asked questions about Fast Job Career. Find answers to common questions about job searching, applications, and employer services.",
  keywords: "FAQ, frequently asked questions, job search help, career guidance",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Fast Job Career. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQ..."
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

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* For Job Seekers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">For Job Seekers</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I create a profile?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Creating a profile is easy! Click "Sign Up" on the homepage, fill in your 
                  personal information, work experience, and skills. Upload your resume and add a 
                  professional photo to increase your visibility to employers.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Is Fast Job Career free to use?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Yes! Basic job searching and profile creation are completely free. Premium features 
                  like highlighted profiles and advanced analytics are available for paid subscriptions.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I apply for jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Find a job you're interested in and click "Apply Now". You can apply with your 
                  Fast Job Career profile or upload your resume directly. Fill in any additional 
                  required information and submit your application.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How can I improve my chances of getting hired?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Complete your profile with detailed work experience, add relevant skills, 
                  upload a professional resume, and apply to jobs that match your qualifications. 
                  Consider getting a premium subscription for increased visibility.
                </div>
              </details>
            </div>
          </div>

          {/* For Employers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">For Employers</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I post a job?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Sign up for an employer account, go to your dashboard, and click "Post Job". 
                  Fill in the job details, requirements, and compensation information. 
                  Review and publish your posting to start receiving applications.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  What are the pricing plans?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  We offer flexible pricing: Basic ($99/month), Professional ($299/month), 
                  and Enterprise (custom). Each plan includes different features and job posting limits. 
                  Contact sales for enterprise pricing.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I manage applications?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Access your employer dashboard to view all applications. You can filter, sort, 
                  and review candidate profiles. Use our built-in messaging system to communicate 
                  with applicants and schedule interviews.
                </div>
              </details>
            </div>
          </div>

          {/* Account & Technical */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account & Technical</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I reset my password?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Click "Forgot Password" on the login page. Enter your registered email address. 
                  Check your email for a password reset link and follow the instructions to create 
                  a new password.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Is my data secure?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Absolutely! We use industry-standard encryption, secure servers, and regular 
                  security audits. Your personal information is protected and never shared without consent.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I delete my account?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Go to Settings &gt; Account &gt; Delete Account. Follow the confirmation process. 
                  Note that this action is permanent and cannot be undone. Download your data 
                  before deleting if needed.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* International Jobs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">International Jobs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Do I need a visa for international jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Visa requirements vary by country and job type. Research the specific requirements 
                  for your target country. Many employers provide visa sponsorship for qualified 
                  candidates. Check job descriptions for visa information.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I apply for jobs in different countries?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Use our country-specific job boards or filter by location. Ensure your resume 
                  is tailored for international applications. Highlight language skills and 
                  international experience if applicable.
                </div>
              </details>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  What documents do I need?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Common requirements include: updated resume, passport, educational certificates, 
                  work experience letters, and sometimes police clearance. Specific requirements 
                  vary by country and industry.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How does currency work for international jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Salaries are typically shown in local currency. Use our currency converter 
                  to understand equivalent amounts. Consider exchange rates and cost of living 
                  when evaluating international offers.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-blue-800 mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📧 Email Support
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                💬 Live Chat
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📞 Call Support
              </button>
            </div>
            <p className="text-blue-700 text-sm mt-4">
              Response time: Within 24 hours for emails, instant for live chat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
