import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report an Issue | Fast Job Career",
  description: "Report technical issues, bugs, or problems with Fast Job Career platform. Help us improve our service by reporting issues.",
  keywords: "report issue, bug report, technical support, platform issues, feedback",
};

export default function ReportIssuePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Report an Issue
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve Fast Job Career by reporting technical issues, bugs, or platform problems. 
            Your feedback helps us provide a better experience for all users.
          </p>
        </div>

        {/* Issue Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🐛</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bug Report</h3>
            <p className="text-gray-600 text-sm">
              Report technical bugs, errors, or system malfunctions
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Issue</h3>
            <p className="text-gray-600 text-sm">
              Slow loading, crashes, or performance problems
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">UI/UX Problem</h3>
            <p className="text-gray-600 text-sm">
              Design issues, navigation problems, or user experience
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Request</h3>
            <p className="text-gray-600 text-sm">
              Suggest new features or improvements
            </p>
          </div>
        </div>

        {/* Report Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Issue Details
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Type *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select issue type</option>
                  <option value="bug">Bug Report</option>
                  <option value="performance">Performance Issue</option>
                  <option value="ui-ux">UI/UX Problem</option>
                  <option value="feature">Feature Request</option>
                  <option value="security">Security Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority Level
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="low">Low - Minor inconvenience</option>
                  <option value="medium">Medium - Affects usability</option>
                  <option value="high">High - Blocks functionality</option>
                  <option value="critical">Critical - System unusable</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue Title *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief summary of the issue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe the issue in detail. Include what happened, what you expected to happen, and any error messages you saw."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL/Page Where Issue Occurred
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://fastjobcareer.com/page-url"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Browser/Device Information
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Chrome 120, Windows 11, iPhone 14, etc."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Steps to Reproduce
              </label>
              <div className="bg-gray-50 rounded-lg p-4">
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Go to...</li>
                  <li>Click on...</li>
                  <li>Enter...</li>
                  <li>Expected result...</li>
                  <li>Actual result...</li>
                </ol>
              </div>
              <textarea
                rows={4}
                className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the exact steps to reproduce the issue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Screenshots, Videos, Logs)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="text-gray-600 mb-2">
                  <span className="text-3xl">📎</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Drag and drop files here or click to browse
                </p>
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Choose Files
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Maximum file size: 10MB. Supported formats: JPG, PNG, GIF, MP4, PDF, TXT
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                Account ID (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Fast Job Career account ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+92 300 1234567"
              />
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Submit Issue Report
          </button>
          <p className="text-gray-600 text-sm mt-4">
            We'll review your report and respond within 24-48 hours. For urgent issues, 
            please contact our live support team.
          </p>
        </div>

        {/* Common Issues */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Common Issues & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                🔐 Login Problems
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Forgot Password</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Use the "Forgot Password" link on the login page to reset your password.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Reset Password →
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Account Locked</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Accounts lock after multiple failed attempts. Wait 30 minutes or contact support.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Contact Support →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                📱 Mobile App Issues
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">App Crashing</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Try clearing cache, restarting your device, or reinstalling the app.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    View Troubleshooting →
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sync Issues</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Check your internet connection and ensure you're logged into the correct account.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Sync Help →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                💼 Job Application Issues
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Application Not Submitting</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Check file size limits, required fields, and internet connection.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Application Guide →
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Not Receiving Responses</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Check spam folder, verify email address, and confirm application was submitted.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Email Settings →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                💳 Payment Issues
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Payment Failed</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Check card details, billing address, and available balance.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Payment Help →
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Refund Request</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Refunds are processed within 5-7 business days. Contact billing support.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Refund Policy →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
