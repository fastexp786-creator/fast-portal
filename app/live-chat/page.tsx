import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Chat Support | Fast Job Career",
  description: "Get instant help from Fast Job Career support team through live chat. Real-time assistance for job seekers and employers.",
  keywords: "live chat, instant support, customer service, real-time help, chat support",
};

export default function LiveChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Live Chat Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant help from our support team. Connect with our agents in real-time 
            for quick answers to your questions and issues.
          </p>
        </div>

        {/* Chat Status */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
              <span className="text-green-900 font-bold text-lg">Support Agents Online</span>
            </div>
            <p className="text-green-800">
              Average wait time: Less than 2 minutes
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Chat with Support Agent</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Agent: Sarah</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-6">
                <div className="space-y-4">
                  {/* Agent Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">SA</span>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 max-w-md">
                      <p className="text-blue-900 text-sm">
                        Hello! Welcome to Fast Job Career Live Chat. I'm Sarah, your support agent. 
                        How can I help you today?
                      </p>
                      <span className="text-xs text-blue-700 mt-1">10:30 AM</span>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                      <p className="text-gray-900 text-sm">
                        Hi Sarah! I'm having trouble with my job application. 
                        It keeps showing an error when I try to submit.
                      </p>
                      <span className="text-xs text-gray-500 mt-1">10:32 AM</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">YOU</span>
                    </div>
                  </div>

                  {/* Agent Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">SA</span>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 max-w-md">
                      <p className="text-blue-900 text-sm">
                        I understand you're having trouble with your job application. Let me help you 
                        troubleshoot this issue. Can you tell me what error message you're seeing?
                      </p>
                      <span className="text-xs text-blue-700 mt-1">10:33 AM</span>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">SA</span>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <span className="text-blue-900 text-sm">Sarah is typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-end gap-3">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                    <span className="text-xl">↑</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <button className="text-gray-600 hover:text-gray-700 text-sm">
                    📎 Attach File
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 text-sm">
                    😊 Add Emoji
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 text-sm">
                    📷 Screenshot
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div>
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                  📋 View FAQ
                </button>
                <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                  📧 Troubleshooting Guide
                </button>
                <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                  📞 Request Phone Call
                </button>
                <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                  📧 Schedule Callback
                </button>
              </div>
            </div>

            {/* Chat Options */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Chat Options</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sound Notifications</span>
                  <button className="bg-blue-600 relative rounded-full w-12 h-6 transition-colors">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Email Transcript</span>
                  <button className="bg-blue-600 relative rounded-full w-12 h-6 transition-colors">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Chat History</span>
                  <button className="bg-gray-300 relative rounded-full w-12 h-6 transition-colors">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Support Categories</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  💼 Job Applications
                </div>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  👤 Account Issues
                </div>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  💳 Billing & Payments
                </div>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  🔧 Technical Support
                </div>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  🌍 International Jobs
                </div>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                  📱 Mobile App Help
                </div>
              </div>
            </div>

            {/* Available Agents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Available Agents</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                    SA
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Sarah</div>
                    <div className="text-xs text-green-600">General Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Michael</div>
                    <div className="text-xs text-green-600">Technical Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs">
                    AL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Ahmed</div>
                    <div className="text-xs text-yellow-600">Billing Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Jennifer</div>
                    <div className="text-xs text-gray-600">Away - Back at 2PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Guidelines */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Chat Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">📝 Be Clear and Specific</h3>
              <p className="text-blue-800 text-sm">
                Provide detailed information about your issue. Include error messages, 
                steps you took, and what you expected to happen.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">⏱️ Response Time</h3>
              <p className="text-blue-800 text-sm">
                Our agents typically respond within 2 minutes during business hours. 
                For urgent issues, don't hesitate to follow up.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">🔒 Privacy & Security</h3>
              <p className="text-blue-800 text-sm">
                Never share passwords, financial information, or personal documents 
                in chat. Our agents will never ask for these details.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">💾 Save Your Transcript</h3>
              <p className="text-blue-800 text-sm">
                Request a transcript of your chat for future reference. 
                Transcripts are automatically saved to your account.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-300 mb-6">
              If live chat is busy or you prefer other contact methods:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📧 Email Support
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📞 Phone Support
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📋 Help Center
              </button>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              Available: Mon-Fri 9AM-6PM PKT | Emergency: 24/7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
