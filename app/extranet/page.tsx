import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extranet Login | Fast Job Career",
  description: "Secure extranet login portal for Fast Job Career partners and employers. Access your dashboard, manage job postings, and track applications.",
  keywords: "extranet login, partner portal, employer dashboard, secure login",
};

export default function ExtranetLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner Extranet Login
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to the Fast Job Career Partner Portal. Access your secure dashboard to manage job postings, 
            track applications, and connect with qualified candidates from around the world.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="partner@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Sign In to Extranet
                </button>
              </form>
            </div>

            {/* Information Panel */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portal Features</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Job Management</h3>
                    <p className="text-gray-600 text-sm">
                      Post, edit, and manage job listings across multiple countries and categories
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Candidate Tracking</h3>
                    <p className="text-gray-600 text-sm">
                      Review applications, schedule interviews, and manage candidate pipeline
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics Dashboard</h3>
                    <p className="text-gray-600 text-sm">
                      Track performance metrics, view statistics, and optimize recruitment strategy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Communication</h3>
                    <p className="text-gray-600 text-sm">
                      Chat with candidates, send updates, and manage communications efficiently
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Phone Support</h3>
              <p className="text-blue-800 text-sm mb-2">
                +92 310 0570707
              </p>
              <p className="text-blue-700 text-sm">
                Mon-Fri: 9AM-6PM PKT
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Live Chat</h3>
              <p className="text-blue-800 text-sm mb-2">
                Available 24/7
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Email Support</h3>
              <p className="text-blue-800 text-sm mb-2">
                partners@fastjobcareer.com
              </p>
              <p className="text-blue-700 text-sm">
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <div className="bg-gray-100 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-green-600">🔒</span>
              This is a secure portal. Your connection is encrypted and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
