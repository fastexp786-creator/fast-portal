import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fast Job Career",
  description: "Fast Job Career's comprehensive privacy policy. Learn how we collect, use, and protect your personal information and data.",
  keywords: "privacy policy, data protection, personal information, GDPR compliance, user privacy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Fast Job Career, we are committed to protecting your privacy and personal data. 
            This policy explains how we collect, use, and safeguard your information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <div className="text-center">
            <p className="text-blue-900 font-semibold">
              Last Updated: March 15, 2026
            </p>
            <p className="text-blue-800 text-sm mt-2">
              This policy may be updated periodically. We encourage you to review it regularly.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <a href="#information-collection" className="text-blue-600 hover:text-blue-700 font-medium block">
                1. Information We Collect
              </a>
              <a href="#information-usage" className="text-blue-600 hover:text-blue-700 font-medium block">
                2. How We Use Your Information
              </a>
              <a href="#information-sharing" className="text-blue-600 hover:text-blue-700 font-medium block">
                3. Information Sharing
              </a>
              <a href="#data-security" className="text-blue-600 hover:text-blue-700 font-medium block">
                4. Data Security
              </a>
            </div>
            <div className="space-y-3">
              <a href="#cookies" className="text-blue-600 hover:text-blue-700 font-medium block">
                5. Cookies and Tracking
              </a>
              <a href="#user-rights" className="text-blue-600 hover:text-blue-700 font-medium block">
                6. Your Rights
              </a>
              <a href="#international" className="text-blue-600 hover:text-blue-700 font-medium block">
                7. International Data Transfers
              </a>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium block">
                8. Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section id="information-collection" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  When you create an account or use our services, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Name, email address, phone number</li>
                  <li>Date of birth, gender, nationality</li>
                  <li>Professional information (resume, work experience, skills)</li>
                  <li>Education and certification details</li>
                  <li>Location information (country, city, timezone)</li>
                  <li>Profile photos and video introductions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Usage Data</h3>
                <p className="text-gray-600 mb-4">
                  We automatically collect information about how you use our platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>IP address and device information</li>
                  <li>Browser type, operating system, and screen resolution</li>
                  <li>Pages visited, time spent, and click patterns</li>
                  <li>Search queries and job applications submitted</li>
                  <li>Communication with employers and other users</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Information</h3>
                <p className="text-gray-600 mb-4">
                  We may collect information from third-party sources:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Professional social networks (LinkedIn, etc.)</li>
                  <li>Background check services (with consent)</li>
                  <li>Identity verification services</li>
                  <li>Reference checks (with permission)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="information-usage" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              2. How We Use Your Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Provision</h3>
                <p className="text-gray-600 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Create and manage your account</li>
                  <li>Match you with relevant job opportunities</li>
                  <li>Facilitate communication with employers</li>
                  <li>Provide personalized job recommendations</li>
                  <li>Send application status updates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Improvement</h3>
                <p className="text-gray-600 mb-4">
                  We analyze usage data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Improve our services and user experience</li>
                  <li>Develop new features and functionality</li>
                  <li>Optimize job matching algorithms</li>
                  <li>Prevent fraud and maintain security</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Communication</h3>
                <p className="text-gray-600 mb-4">
                  We use your contact information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Send important account notifications</li>
                  <li>Provide job application updates</li>
                  <li>Share relevant career opportunities</li>
                  <li>Send newsletters and marketing communications (with consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="information-sharing" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              3. Information Sharing
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">With Employers</h3>
                <p className="text-gray-600 mb-4">
                  We share your information with employers when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>You apply for a job position</li>
                  <li>You express interest in a company</li>
                  <li>You accept interview invitations</li>
                  <li>You enable employer visibility in your profile</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We only share information relevant to your job application and career interests.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Providers</h3>
                <p className="text-gray-600 mb-4">
                  We may share information with trusted third-party service providers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Background check companies</li>
                  <li>Identity verification services</li>
                  <li>Payment processors</li>
                  <li>Cloud hosting providers</li>
                  <li>Analytics and research partners</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Requirements</h3>
                <p className="text-gray-600 mb-4">
                  We may disclose your information when required by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and property</li>
                  <li>To prevent fraud or protect user safety</li>
                  <li>In connection with business transfers or acquisitions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="data-security" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              4. Data Security
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Measures</h3>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee background checks and security training</li>
                  <li>Access controls and authentication systems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We retain your information only as long as necessary:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>To provide our services to you</li>
                  <li>To comply with legal requirements</li>
                  <li>To resolve disputes and troubleshoot problems</li>
                  <li>To detect and prevent fraud</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Account deletion requests are processed within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="cookies" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Cookies</h3>
                <p className="text-gray-600 mb-4">
                  We use different types of cookies for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Performance Cookies:</strong> Collect usage data to improve our services</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used for advertising and personalization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Management</h3>
                <p className="text-gray-600 mb-4">
                  You can control cookies through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Browser settings to block or delete cookies</li>
                  <li>Our cookie preference center</li>
                  <li>Opt-out links in marketing communications</li>
                  <li>Do Not Track browser settings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="user-rights" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              6. Your Rights
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access and Correction</h3>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Update your profile and preferences</li>
                  <li>Download your data in portable format</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Portability</h3>
                <p className="text-gray-600 mb-4">
                  You can request:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>A copy of your data in structured format</li>
                  <li>Transfer of your data to other services</li>
                  <li>API access for your account data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Deletion</h3>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Delete your account and personal data</li>
                  <li>Request removal from search results</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Deletion requests are processed within 30 days of verification.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="international" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              7. International Data Transfers
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Operations</h3>
                <p className="text-gray-600 mb-4">
                  Fast Job Career operates globally and may transfer your data across borders:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Between our international offices</li>
                  <li>To service providers in different countries</li>
                  <li>To employers and job seekers worldwide</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection Standards</h3>
                <p className="text-gray-600 mb-4">
                  We ensure international data transfers comply with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>GDPR (EU General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                  <li>PIPEDA (Canada's Personal Information Protection Act)</li>
                  <li>Other applicable local privacy laws</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="contact" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              8. Contact Us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Questions</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about this privacy policy or our data practices:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold mb-2">Email: privacy@fastjobcareer.com</p>
                  <p className="text-gray-900 font-semibold mb-2">Phone: +92 310 0570707</p>
                  <p className="text-gray-900 font-semibold">Response Time: Within 24 hours</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection Officer</h3>
                <p className="text-gray-600 mb-4">
                  Our Data Protection Officer oversees compliance with privacy laws:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold mb-2">DPO Email: dpo@fastjobcareer.com</p>
                  <p className="text-gray-900 font-semibold mb-2">Address: Islamabad, Pakistan</p>
                  <p className="text-gray-900 font-semibold">Registration: PTA/PPA Registered</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-blue-800 mb-6">
              We're committed to transparency and protecting your privacy. 
              If you have any questions or concerns about how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Privacy Team
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Download Policy PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
