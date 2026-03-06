import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fast Job Career",
  description: "Fast Job Career's terms of service and user agreement. Read our terms for using our job platform and services.",
  keywords: "terms of service, user agreement, platform terms, legal terms, service conditions",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Fast Job Career. These terms of service govern your use of 
            our platform and services. By using our services, you agree to these terms.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <div className="text-center">
            <p className="text-blue-900 font-semibold">
              Last Updated: March 15, 2026
            </p>
            <p className="text-blue-800 text-sm mt-2">
              These terms may be updated periodically. Continued use constitutes acceptance of any changes.
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
              <a href="#acceptance" className="text-blue-600 hover:text-blue-700 font-medium block">
                1. Acceptance of Terms
              </a>
              <a href="#account-creation" className="text-blue-600 hover:text-blue-700 font-medium block">
                2. Account Creation and Security
              </a>
              <a href="#user-conduct" className="text-blue-600 hover:text-blue-700 font-medium block">
                3. User Conduct and Responsibilities
              </a>
              <a href="#job-postings" className="text-blue-600 hover:text-blue-700 font-medium block">
                4. Job Postings and Applications
              </a>
              <a href="#employer-responsibilities" className="text-blue-600 hover:text-blue-700 font-medium block">
                5. Employer Responsibilities
              </a>
            </div>
            <div className="space-y-3">
              <a href="#intellectual-property" className="text-blue-600 hover:text-blue-700 font-medium block">
                6. Intellectual Property
              </a>
              <a href="#fees" className="text-blue-600 hover:text-blue-700 font-medium block">
                7. Fees and Payments
              </a>
              <a href="#termination" className="text-blue-600 hover:text-blue-700 font-medium block">
                8. Account Termination
              </a>
              <a href="#disclaimers" className="text-blue-600 hover:text-blue-700 font-medium block">
                9. Disclaimers and Limitations
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section id="acceptance" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                By accessing or using Fast Job Career, you agree to be bound by these 
                Terms of Service and our Privacy Policy. If you do not agree to these terms, 
                you may not use our services.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Your Agreement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>You are at least 18 years old or have parental consent</li>
                  <li>You have the legal capacity to enter into these terms</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>You will provide accurate and complete information</li>
                  <li>You will maintain the security of your account credentials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="account-creation" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              2. Account Creation and Security
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Requirements</h3>
                <p className="text-gray-600 mb-4">
                  To create an account, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Use a valid email address and create a secure password</li>
                  <li>Agree to receive communications from Fast Job Career</li>
                  <li>Not use another person's account without permission</li>
                  <li>Update your information when it changes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Security</h3>
                <p className="text-gray-600 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>Notifying us immediately of unauthorized access</li>
                  <li>Ensuring your device security when accessing our services</li>
                  <li>Logging out of shared or public devices</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Types</h3>
                <p className="text-gray-600 mb-4">
                  We offer different account types:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Job Seeker Account:</strong> For individuals seeking employment</li>
                  <li><strong>Employer Account:</strong> For companies posting jobs and hiring</li>
                  <li><strong>Partner Account:</strong> For recruitment agencies and partners</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="user-conduct" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              3. User Conduct and Responsibilities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prohibited Activities</h3>
                <p className="text-gray-600 mb-4">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Providing false, misleading, or inaccurate information</li>
                  <li>Impersonating any person or entity</li>
                  <li>Harassing, abusing, or harming other users</li>
                  <li>Posting fraudulent or scam job listings</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Using automated tools to access our platform</li>
                  <li>Interfering with or disrupting our services</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Standards</h3>
                <p className="text-gray-600 mb-4">
                  All content you provide must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Be accurate, truthful, and non-deceptive</li>
                  <li>Not infringe on any third-party rights</li>
                  <li>Not contain viruses, malware, or harmful code</li>
                  <li>Not be obscene, offensive, or inappropriate</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Guidelines</h3>
                <p className="text-gray-600 mb-4">
                  When communicating with other users, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Be professional and respectful at all times</li>
                  <li>Not engage in harassment or discrimination</li>
                  <li>Not share personal information without consent</li>
                  <li>Not use our platform for spam or unsolicited communications</li>
                  <li>Respond to legitimate inquiries in a timely manner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="job-postings" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              4. Job Postings and Applications
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Posting Requirements</h3>
                <p className="text-gray-600 mb-4">
                  Employers must ensure job postings:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Are accurate, complete, and not misleading</li>
                  <li>Comply with all applicable labor laws</li>
                  <li>Do not discriminate based on protected characteristics</li>
                  <li>Include clear job descriptions and requirements</li>
                  <li>Provide accurate compensation information</li>
                  <li>Are removed when filled or no longer available</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Application Process</h3>
                <p className="text-gray-600 mb-4">
                  Regarding job applications:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Applications are made through our platform only</li>
                  <li>We do not guarantee employment or interview opportunities</li>
                  <li>Employers may contact applicants directly</li>
                  <li>We are not responsible for hiring decisions</li>
                  <li>Applicants should verify employer legitimacy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Application Fees</h3>
                <p className="text-gray-600 mb-4">
                  Important information about fees:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Job seekers can apply for jobs free of charge</li>
                  <li>Employers pay fees for premium job posting features</li>
                  <li>We never charge job seekers for applying to jobs</li>
                  <li>Any payment requests outside our platform are suspicious</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="employer-responsibilities" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5. Employer Responsibilities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Management</h3>
                <p className="text-gray-600 mb-4">
                  Employers are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Maintaining accurate company information</li>
                  <li>Responding to applicant inquiries promptly</li>
                  <li>Updating job postings when positions are filled</li>
                  <li>Managing user permissions and access levels</li>
                  <li>Protecting account credentials and sensitive data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hiring Practices</h3>
                <p className="text-gray-600 mb-4">
                  Employers must adhere to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Fair and non-discriminatory hiring practices</li>
                  <li>Compliance with local labor laws and regulations</li>
                  <li>Transparent communication about job requirements</li>
                  <li>Timely response to qualified applicants</li>
                  <li>Professional conduct throughout the hiring process</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  Regarding applicant data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Use applicant data only for legitimate hiring purposes</li>
                  <li>Protect applicant privacy and confidentiality</li>
                  <li>Comply with data protection regulations</li>
                  <li>Delete applicant data when no longer needed</li>
                  <li>Not share data without applicant consent</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="intellectual-property" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              6. Intellectual Property
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Content</h3>
                <p className="text-gray-600 mb-4">
                  Fast Job Career owns and retains all rights to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Platform design, functionality, and features</li>
                  <li>Algorithms, matching systems, and proprietary technology</li>
                  <li>Brand names, logos, and trademarks</li>
                  <li>User-generated content posted on our platform</li>
                  <li>Analytics and aggregated usage data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">User Content</h3>
                <p className="text-gray-600 mb-4">
                  Regarding your content:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>You retain ownership of your original content</li>
                  <li>You grant us license to use your content for our services</li>
                  <li>You represent you have rights to all content you provide</li>
                  <li>You grant us right to modify, distribute, and display your content</li>
                  <li>You may remove your content at any time</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Content</h3>
                <p className="text-gray-600 mb-4">
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Use copyrighted material without permission</li>
                  <li>Infringe on trademarks, patents, or other intellectual property</li>
                  <li>Post content that violates third-party rights</li>
                  <li>Reverse engineer or attempt to extract our source code</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="fees" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              7. Fees and Payments
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Fees</h3>
                <p className="text-gray-600 mb-4">
                  Our fee structure includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li><strong>Free Services:</strong> Basic job searching and profile creation</li>
                  <li><strong>Premium Features:</strong> Enhanced visibility, advanced matching</li>
                  <li><strong>Employer Plans:</strong> Job posting credits, applicant tracking</li>
                  <li><strong>Partner Programs:</strong> Commission-based recruitment services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Terms</h3>
                <p className="text-gray-600 mb-4">
                  Regarding payments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>All fees are non-refundable unless specified</li>
                  <li>Prices may change with 30 days notice</li>
                  <li>Payments are processed through secure third-party providers</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Billing Disputes</h3>
                <p className="text-gray-600 mb-4">
                  If you dispute a charge:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Contact us within 30 days of the charge</li>
                  <li>Provide detailed information about the disputed charge</li>
                  <li>We will investigate and respond within 15 business days</li>
                  <li>Disputes may be subject to third-party payment processor policies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="termination" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              8. Account Termination
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">User Termination</h3>
                <p className="text-gray-600 mb-4">
                  You may terminate your account at any time:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>By contacting our support team</li>
                  <li>Through your account settings</li>
                  <li>Termination takes effect immediately</li>
                  <li>You will lose access to premium features immediately</li>
                  <li>Your data will be deleted within 30 days</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Termination</h3>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Violation of these terms of service</li>
                  <li>Suspicious or fraudulent activity</li>
                  <li>Extended inactivity (no login for 12 months)</li>
                  <li>Non-payment of fees</li>
                  <li>Legal or regulatory requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Termination</h3>
                <p className="text-gray-600 mb-4">
                  Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Your right to access the service terminates immediately</li>
                  <li>We may retain certain data as required by law</li>
                  <li>Outstanding fees become immediately due</li>
                  <li>These terms survive termination where applicable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="disclaimers" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              9. Disclaimers and Limitations
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Availability</h3>
                <p className="text-gray-600 mb-4">
                  We provide services "as is" and make no warranties about:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Uninterrupted or error-free operation</li>
                  <li>Accuracy or reliability of information</li>
                  <li>Compatibility with your devices or software</li>
                  <li>Availability of specific job opportunities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600 mb-4">
                  To the fullest extent permitted by law, Fast Job Career shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Lost profits or business opportunities</li>
                  <li>Data loss or corruption</li>
                  <li>Third-party actions or content</li>
                  <li>Damages exceeding the amount you paid for services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Indemnification</h3>
                <p className="text-gray-600 mb-4">
                  You agree to indemnify and hold harmless Fast Job Career from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                  <li>Any claims arising from your violation of these terms</li>
                  <li>Your use of our services</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you provide to our platform</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-blue-800 mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any point, please don't hesitate to contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Legal Team
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Download Terms PDF
              </button>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p>Legal Contact: legal@fastjobcareer.com</p>
              <p>Corporate Address: Islamabad, Pakistan</p>
              <p>Registration: PTA/PPA Registered Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
