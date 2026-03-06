import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fast Job Career",
  description: "Contact Fast Job Career support team. Get help with job searching, employer services, and technical support.",
  keywords: "contact us, support, customer service, help center, technical support",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our support team. We're here to help you with 
            job searching, employer services, and any questions about Fast Job Career.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get instant help from our support team
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Average wait: 2 minutes</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Start Live Chat
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              Send us detailed questions and get email responses
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Track your ticket status</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Send Email
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              Speak directly with our support representatives
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Mon-Fri: 9AM-6PM PKT</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">●</span>
                <span>Emergency: 24/7 available</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select a topic</option>
                <option value="job-seeker">Job Seeker Support</option>
                <option value="employer">Employer Support</option>
                <option value="technical">Technical Issues</option>
                <option value="billing">Billing & Payments</option>
                <option value="account">Account Issues</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="partnership">Partnership Inquiries</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your question or issue in detail..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="low">Low - General inquiry</option>
                <option value="medium">Medium - Non-urgent issue</option>
                <option value="high">High - Urgent assistance needed</option>
                <option value="critical">Critical - System down or emergency</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select account type</option>
                  <option value="job-seeker">Job Seeker</option>
                  <option value="employer">Employer</option>
                  <option value="partner">Partner</option>
                  <option value="visitor">Just Visiting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order ID (if applicable)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your order or transaction ID"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="attachments"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="attachments" className="text-sm text-gray-700">
                I would like to attach files (screenshots, documents, etc.)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                Send me updates and tips about job searching and career development
              </label>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Send Message
              </button>
              <p className="text-gray-500 text-sm mt-3">
                We'll respond within 24 hours for most inquiries
              </p>
            </div>
          </form>
        </div>

        {/* Office Locations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Office Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📍</span>
                  <div>
                    <div className="font-semibold text-gray-900">Islamabad, Pakistan</div>
                    <div className="text-sm text-gray-600">123 Business Avenue, F-8 Markaz</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📞</span>
                  <div>
                    <div className="font-semibold text-gray-900">+92 310 0570707</div>
                    <div className="text-sm text-gray-600">Main Office Line</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🕐</span>
                  <div>
                    <div className="font-semibold text-gray-900">Mon-Fri: 9AM-6PM PKT</div>
                    <div className="text-sm text-gray-600">24/7 Emergency Support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Office</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">📍</span>
                  <div>
                    <div className="font-semibold text-gray-900">Dubai, UAE</div>
                    <div className="text-sm text-gray-600">Business Bay, Tower A, Floor 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">📞</span>
                  <div>
                    <div className="font-semibold text-gray-900">+971 4 123 4567</div>
                    <div className="text-sm text-gray-600">Middle East Office</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">🕐</span>
                  <div>
                    <div className="font-semibold text-gray-900">Sun-Thu: 9AM-6PM GST</div>
                    <div className="text-sm text-gray-600">Friday: 2PM-6PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Center</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">📍</span>
                  <div>
                    <div className="font-semibold text-gray-900">Lahore, Pakistan</div>
                    <div className="text-sm text-gray-600">Model Town Link Road, Block C</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">📞</span>
                  <div>
                    <div className="font-semibold text-gray-900">+92 42 123 4567</div>
                    <div className="text-sm text-gray-600">Customer Support Center</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">🕐</span>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Support Available</div>
                    <div className="text-sm text-gray-600">Multi-language support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Quick Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Common Questions</h3>
              <div className="space-y-4">
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    How do I reset my password?
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm">
                    Click "Forgot Password" on the login page and follow the instructions sent to your email.
                  </div>
                </details>
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    How can I contact employers?
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm">
                    Use our messaging system to contact employers directly through job listings.
                  </div>
                </details>
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    What are your support hours?
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm">
                    Live chat is 24/7, phone support is Mon-Fri 9AM-6PM PKT.
                  </div>
                </details>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Self-Service Options</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Help Center</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Browse our comprehensive help articles and guides
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Visit Help Center
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">FAQ Section</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Find answers to frequently asked questions
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Browse FAQ
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Video Tutorials</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Watch step-by-step video guides
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Watch Tutorials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Emergency Support
            </h2>
            <p className="text-red-800 mb-6">
              For urgent issues affecting your account or safety, contact our emergency line immediately.
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-red-900 mb-2">
                🚨 Emergency Hotline: +92 310 0570708
              </div>
              <p className="text-gray-600 text-sm">
                Available 24/7 for critical account security and safety issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
