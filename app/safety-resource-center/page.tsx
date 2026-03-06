import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Resource Center | Fast Job Career",
  description: "Comprehensive safety resources for job seekers. Learn to identify scams, protect your information, and stay safe during your job search.",
  keywords: "job safety, scam prevention, job security, safe job search, career safety",
};

export default function SafetyResourceCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safety Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our top priority. Learn how to protect yourself from job scams, 
            identify fraudulent postings, and conduct a secure job search with our comprehensive safety resources.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              🚨 Report a Safety Issue
            </h2>
            <p className="text-red-800 mb-6">
              If you've encountered a scam or suspicious activity, report it immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Report Scam
              </button>
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Red Flags */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚩</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Red Flags to Watch For</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Requests for Payment</h3>
                  <p className="text-gray-600 text-sm">
                    Legitimate employers never ask for payment for job applications, training, or equipment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Vague Job Descriptions</h3>
                  <p className="text-gray-600 text-sm">
                    Be cautious of postings with unclear responsibilities, requirements, or company information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Unprofessional Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Watch for poor grammar, generic email addresses, or communication outside business hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Pressure Tactics</h3>
                  <p className="text-gray-600 text-sm">
                    Legitimate recruiters don't use high-pressure tactics or create false urgency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Personal Information Requests</h3>
                  <p className="text-gray-600 text-sm">
                    Never share bank details, passwords, or copies of personal documents upfront.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Safety Best Practices</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Research Companies</h3>
                  <p className="text-gray-600 text-sm">
                    Verify company legitimacy through official websites, reviews, and business registrations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Use Secure Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Keep all job search communication on our platform until you verify the employer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Protect Personal Information</h3>
                  <p className="text-gray-600 text-sm">
                    Only share necessary information and never send financial details or copies of documents.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Trust Your Instincts</h3>
                  <p className="text-gray-600 text-sm">
                    If something feels wrong about a job opportunity, it probably is. Walk away.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Meet in Public Places</h3>
                  <p className="text-gray-600 text-sm">
                    For in-person interviews, choose public locations and tell someone your plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Scams */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Job Scams to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-900 mb-3 text-center">
                💰 Payment-for-Job Scam
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Scammers ask you to pay for training, background checks, or equipment before starting work.
              </p>
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-bold text-red-900 mb-2 text-sm">Warning Signs:</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Request for payment upfront</li>
                  <li>• Promises of guaranteed employment</li>
                  <li>• Pressure to pay quickly</li>
                </ul>
              </div>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-900 mb-3 text-center">
                🏭 Fake Company Scam
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Scammers create fake company profiles using real company names and logos.
              </p>
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-bold text-red-900 mb-2 text-sm">How to Verify:</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Check official company website</li>
                  <li>• Search for company reviews</li>
                  <li>• Verify contact information</li>
                </ul>
              </div>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-900 mb-3 text-center">
                📧 Phishing Scam
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Fake emails designed to steal your personal information and login credentials.
              </p>
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-bold text-red-900 mb-2 text-sm">Protection Tips:</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Check sender email address</li>
                  <li>• Look for grammar errors</li>
                  <li>• Never click suspicious links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Process */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            How We Verify Employers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Business Registration</h3>
              <p className="text-blue-800 text-sm">
                We verify official business registration and legal status
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Website Verification</h3>
              <p className="text-blue-800 text-sm">
                Company websites are checked for authenticity and security
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Contact Verification</h3>
              <p className="text-blue-800 text-sm">
                Phone numbers and addresses are verified for legitimacy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Review Monitoring</h3>
              <p className="text-blue-800 text-sm">
                Ongoing monitoring of employer reputation and feedback
              </p>
            </div>
          </div>
        </div>

        {/* Report Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Report a Safety Concern
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Report Details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Issue *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select issue type</option>
                    <option value="scam">Job Scam</option>
                    <option value="fake-company">Fake Company</option>
                    <option value="phishing">Phishing Attempt</option>
                    <option value="harassment">Harassment</option>
                    <option value="other">Other Safety Concern</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job ID (if applicable)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter job posting ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description of Issue *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe the safety concern in detail"
                  />
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Information</h3>
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments (screenshots, emails, etc.)
                  </label>
                  <input
                    type="file"
                    multiple
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Submit Safety Report
            </button>
            <p className="text-gray-600 text-sm mt-4">
              We take all safety reports seriously and will investigate within 24 hours.
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Emergency Contacts
            </h2>
            <p className="text-gray-300 mb-6">
              If you're in immediate danger or have experienced a serious security incident, 
              contact these emergency resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">🚨 Local Emergency</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Call your local emergency services
                </p>
                <div className="text-2xl font-bold text-white">
                  112 / 911
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">🏛️ Cyber Crime</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Report cyber crimes and online fraud
                </p>
                <div className="text-lg font-bold text-white">
                  NR3C / Local Cyber Cell
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
