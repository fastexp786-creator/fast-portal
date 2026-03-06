import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Fast Job Career",
  description: "Fast Job Career's cookies policy. Learn how we use cookies, tracking technologies, and your choices for managing cookies.",
  keywords: "cookies policy, tracking technologies, cookie preferences, GDPR compliance, online privacy",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookies Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Job Career uses cookies and similar technologies to enhance your experience 
            on our platform. This policy explains what cookies are, how we use them, 
            and your choices regarding their use.
          </p>
        </div>

        {/* Cookie Banner Preview */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍪</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">We Use Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    To improve your experience and provide personalized services
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Accept All
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Customize
                </button>
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Reject All
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              This is a preview of our actual cookie banner. You can change your preferences at any time.
            </p>
          </div>
        </div>

        {/* What Are Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Are Cookies?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Definition</h3>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device (computer, 
                smartphone, tablet) when you visit a website. They contain information 
                about your visit and can be read by the website that created them.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How Cookies Work</h3>
              <p className="text-gray-600 mb-4">
                When you visit Fast Job Career, we send cookies to your device. These cookies 
                help us recognize your device on subsequent visits and remember information 
                about your preferences and activities.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cookie Example</h3>
              <div className="bg-gray-800 text-gray-300 p-4 rounded font-mono text-sm">
                <div className="mb-2">Cookie: session_id</div>
                <div className="mb-2">Value: abc123xyz789</div>
                <div className="mb-2">Domain: .fastjobcareer.com</div>
                <div className="mb-2">Path: /</div>
                <div className="mb-2">Expires: Session end</div>
                <div>Secure: HttpOnly; SameSite=Strict</div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Cookies We Use */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Cookies We Use
          </h2>
          <div className="space-y-8">
            {/* Essential Cookies */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for our website to function properly. They enable 
                basic features like page navigation, access to secure areas, and authentication.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">Examples:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Authentication:</strong> Keeps you logged in during your session</li>
                  <li><strong>Security:</strong> Helps prevent fraud and protects your account</li>
                  <li><strong>Load Balancing:</strong> Distributes traffic across servers</li>
                  <li><strong>Shopping Cart:</strong> Remembers items in your application cart</li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  Cannot be disabled
                </span>
              </div>
            </div>

            {/* Performance Cookies */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies collect information about how visitors use our website, such as 
                which pages are visited most often, and if users get error messages. 
                This helps us improve performance of our website.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-3">Examples:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Analytics:</strong> Tracks page views and user behavior</li>
                  <li><strong>Error Tracking:</strong> Monitors website errors and crashes</li>
                  <li><strong>Performance Metrics:</strong> Measures load times and response rates</li>
                  <li><strong>A/B Testing:</strong> Helps test different website versions</li>
                </ul>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Functional Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies allow our website to remember choices you make (such as your 
                user name, language, or region you are in) and provide enhanced, 
                more personal features.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-3">Examples:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Preferences:</strong> Remembers your settings and choices</li>
                  <li><strong>Language:</strong> Saves your preferred language</li>
                  <li><strong>Location:</strong> Remembers your country/city preference</li>
                  <li><strong>Customization:</strong> Saves layout and display preferences</li>
                </ul>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are used to deliver advertisements that are relevant to you 
                and your interests. They track your activity across different websites to 
                build a profile of your interests.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-orange-900 mb-3">Examples:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Advertising:</strong> Shows relevant ads based on your interests</li>
                  <li><strong>Retargeting:</strong> Shows ads for sites you have visited</li>
                  <li><strong>Social Media:</strong> Connects with social media platforms</li>
                  <li><strong>Affiliate Tracking:</strong> Tracks purchases through affiliate links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Third-Party Cookies
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">External Services</h3>
              <p className="text-gray-600 mb-4">
                We use third-party services that may set their own cookies when you interact 
                with their features on our website:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Analytics Services</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                    <li>Google Analytics</li>
                    <li>Hotjar (User Behavior)</li>
                    <li>Mixpanel (Product Analytics)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Advertising Services</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                    <li>Google AdSense</li>
                    <li>Facebook Pixel</li>
                    <li>LinkedIn Insight Tag</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Integration</h3>
              <p className="text-gray-600 mb-4">
                Social media platforms may set cookies when you use their features:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Facebook:</strong> Login, sharing, and social plugins</li>
                  <li><strong>LinkedIn:</strong> Profile import and job applications</li>
                  <li><strong>Google:</strong> Account creation and authentication</li>
                  <li><strong>Twitter:</strong> Content sharing and social features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Your Preferences */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Managing Your Cookie Preferences
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Choices</h3>
              <p className="text-gray-600 mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li><strong>Browser Settings:</strong> Configure your browser to accept or reject cookies</li>
                <li><strong>Cookie Banner:</strong> Use our cookie consent banner to set preferences</li>
                <li><strong>Cookie Preferences:</strong> Access our detailed cookie settings page</li>
                <li><strong>Opt-out Links:</strong> Use provided links to opt out of specific cookies</li>
                <li><strong>Do Not Track:</strong> Enable DNT in your browser settings</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Settings Panel</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive cookie management tool:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Essential Cookies</span>
                    <span className="bg-gray-300 text-gray-500 px-3 py-1 rounded text-sm">Required</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Performance Cookies</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Functional Cookies</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Marketing Cookies</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only" />
                      <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute left-1 top-1 bg-gray-400 w-4 h-4 rounded-full transition"></div>
                    </label>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-6">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cookie Lifespan
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Session Cookies</h3>
              <p className="text-gray-600 mb-4">
                Temporary cookies that are deleted when you close your browser.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Authentication tokens</li>
                  <li>Shopping cart contents</li>
                  <li>Security session identifiers</li>
                  <li>Temporary user preferences</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Persistent Cookies</h3>
              <p className="text-gray-600 mb-4">
                Cookies that remain on your device for a specified period or until deleted.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>User preferences and settings</li>
                  <li>Login status and authentication</li>
                  <li>Tracking information for analytics</li>
                  <li>Advertising identifiers and preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Rights Regarding Cookies
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GDPR Rights</h3>
              <p className="text-gray-600 mb-4">
                Under GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li><strong>Right to Information:</strong> Know what data we collect and why</li>
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Portability:</strong> Transfer data to another service provider</li>
                <li><strong>Right to Object:</strong> Restrict processing of your data</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CCPA Rights</h3>
              <p className="text-gray-600 mb-4">
                Under CCPA, California residents have additional rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li><strong>Right to Know:</strong> Information about data collection and use</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                <li><strong>Right to Opt-Out:</strong> Prevent sale of personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service and pricing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-blue-800 mb-6">
              If you have questions about our use of cookies or need assistance 
              managing your preferences, please contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Manage Cookie Preferences
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Privacy Team
              </button>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p>Email: privacy@fastjobcareer.com</p>
              <p>Cookie Policy Last Updated: March 15, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
