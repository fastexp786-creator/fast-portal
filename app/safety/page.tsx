import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Safety & Security",
  "Learn about Fast Portal's safety measures, security protocols, and guidelines to ensure a safe job search experience for all users.",
  "safety"
);

export default function SafetyPage() {
  return (
    <StandardPageLayout
      title="Safety & Security"
      description="Learn about Fast Portal's safety measures, security protocols, and guidelines to ensure a safe job search experience for all users."
      activeSlug="safety"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Safety First
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Safety & Security
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Your safety is our top priority. Learn about our comprehensive safety measures, security protocols, and guidelines designed to protect job seekers and employers.
          </p>
        </div>

        {/* Safety Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">Our Commitment to Safety</h2>
            <p className="text-standard mb-6">
              At Fast Portal, we are committed to creating a safe and trustworthy environment for all users. Our comprehensive safety framework includes advanced security measures, verification processes, and continuous monitoring to prevent fraud and protect user data.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-3">For Job Seekers</h3>
                <ul className="space-y-2 text-standard text-sm">
                  <li>• Verified employer profiles</li>
                  <li>• Secure application process</li>
                  <li>• Privacy protection</li>
                  <li>• Fraud detection systems</li>
                  <li>• 24/7 support assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-3">For Employers</h3>
                <ul className="space-y-2 text-standard text-sm">
                  <li>• Background verification</li>
                  <li>• Secure payment processing</li>
                  <li>• Data encryption</li>
                  <li>• Access control</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Identity Verification</h3>
            <p className="text-standard mb-4">
              Multi-layer identity verification process ensures that all users are genuine and authentic.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Government ID verification</li>
              <li>• Professional credential checks</li>
              <li>• Company registration validation</li>
              <li>• Contact information verification</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Data Encryption</h3>
            <p className="text-standard mb-4">
              End-to-end encryption protects your personal and professional information from unauthorized access.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• SSL/TLS encryption</li>
              <li>• Secure data storage</li>
              <li>• Regular security audits</li>
              <li>• GDPR compliance</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Fraud Detection</h3>
            <p className="text-standard mb-4">
              Advanced AI-powered fraud detection systems identify and prevent suspicious activities.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Real-time monitoring</li>
              <li>• Pattern recognition</li>
              <li>• Suspicious activity alerts</li>
              <li>• Automated blocking</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Secure Payments</h3>
            <p className="text-standard mb-4">
              PCI-compliant payment processing ensures safe and secure financial transactions.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• PCI DSS compliance</li>
              <li>• Secure payment gateways</li>
              <li>• Fraud prevention</li>
              <li>• Refund protection</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Privacy Protection</h3>
            <p className="text-standard mb-4">
              Comprehensive privacy policies protect your personal information and communication.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Data anonymization</li>
              <li>• User consent management</li>
              <li>• Data retention policies</li>
              <li>• Right to deletion</li>
            </ul>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">24/7 Monitoring</h3>
            <p className="text-standard mb-4">
              Round-the-clock security monitoring ensures immediate response to potential threats.
            </p>
            <ul className="space-y-2 text-standard text-sm">
              <li>• Real-time threat detection</li>
              <li>• Automated alerts</li>
              <li>• Rapid response team</li>
              <li>• Incident reporting</li>
            </ul>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Safety Guidelines</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-base mb-4">For Job Seekers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-sm mb-2">Before Applying</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Verify company legitimacy</li>
                    <li>• Research employer reputation</li>
                    <li>• Check contact information</li>
                    <li>• Review job posting details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="heading-standard text-sm mb-2">During Application</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Use our secure platform</li>
                    <li>• Never share financial details</li>
                    <li>• Keep personal information minimal</li>
                    <li>• Document all communications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="heading-standard text-sm mb-2">After Application</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Verify interview invitations</li>
                    <li>• Meet in public places</li>
                    <li>• Share location with trusted contacts</li>
                    <li>• Report suspicious activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-base mb-4">For Employers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-sm mb-2">Posting Jobs</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Provide accurate job descriptions</li>
                    <li>• Include company information</li>
                    <li>• Set realistic expectations</li>
                    <li>• Use professional language</li>
                  </ul>
                </div>
                <div>
                  <h4 className="heading-standard text-sm mb-2">Reviewing Applications</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Verify candidate credentials</li>
                    <li>• Conduct background checks</li>
                    <li>• Use our screening tools</li>
                    <li>• Maintain professional communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="heading-standard text-sm mb-2">Hiring Process</h4>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Follow fair hiring practices</li>
                    <li>• Provide clear job terms</li>
                    <li>• Use secure payment methods</li>
                    <li>• Document all agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Issues */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Report Safety Concerns</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              If you encounter any suspicious activity or have safety concerns, please report them immediately. Your report helps us maintain a safe environment for all users.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Report Fraud</h3>
                <p className="text-standard text-sm mb-4">
                  Report fraudulent job postings, fake employers, or suspicious activities.
                </p>
                <a href="/report-issue" className="btn-standard">
                  Report Issue
                </a>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Emergency Support</h3>
                <p className="text-standard text-sm mb-4">
                  For urgent safety concerns, contact our emergency support team immediately.
                </p>
                <a href="mailto:safety@fastportal.com" className="btn-standard">
                  Contact Safety Team
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="heading-standard text-base mb-2">24/7 Safety Hotline</h3>
              <p className="text-standard text-sm">
                <strong>Emergency Contact:</strong> +92 310 0570707 (24/7)<br />
                <strong>Email:</strong> safety@fastportal.com<br />
                <strong>Response Time:</strong> Within 2 hours for safety concerns
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Safety Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Safety Checklist</h4>
              <p className="text-standard text-sm">Comprehensive safety checklist for job seekers and employers</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Fraud Prevention Guide</h4>
              <p className="text-standard text-sm">Learn how to identify and prevent common job scams</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Privacy Policy</h4>
              <p className="text-standard text-sm">Detailed information about data protection and privacy</p>
            </a>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
