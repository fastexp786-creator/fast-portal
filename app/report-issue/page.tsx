import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Report Issue",
  "Report safety concerns, fraudulent activities, or technical issues on Fast Portal. Our team will investigate and respond promptly.",
  "report-issue"
);

export default function ReportIssuePage() {
  return (
    <StandardPageLayout
      title="Report Issue"
      description="Report safety concerns, fraudulent activities, or technical issues on Fast Portal. Our team will investigate and respond promptly."
      activeSlug="report-issue"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Report Center
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Report an Issue
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Help us keep Fast Portal safe and secure. Report any issues, concerns, or suspicious activities. Your reports help us maintain a trustworthy platform for all users.
          </p>
        </div>

        {/* Report Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Fraud & Scams</h3>
            <p className="text-standard mb-4">
              Report fraudulent job postings, fake employers, or suspicious recruitment activities.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• Fake job postings</li>
              <li>• Phishing attempts</li>
              <li>• Payment scams</li>
              <li>• Identity theft</li>
            </ul>
            <button className="btn-standard w-full">Report Fraud</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Safety Concerns</h3>
            <p className="text-standard mb-4">
              Report any safety issues or concerns related to job interviews or workplace conditions.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• Unsafe interview locations</li>
              <li>• Harassment incidents</li>
              <li>• Discrimination</li>
              <li>• Workplace safety</li>
            </ul>
            <button className="btn-standard w-full">Report Safety Issue</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Technical Issues</h3>
            <p className="text-standard mb-4">
              Report bugs, glitches, or technical problems affecting your experience on the platform.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• Platform bugs</li>
              <li>• Login issues</li>
              <li>• Payment problems</li>
              <li>• Feature malfunctions</li>
            </ul>
            <button className="btn-standard w-full">Report Bug</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Policy Violations</h3>
            <p className="text-standard mb-4">
              Report violations of our community guidelines, terms of service, or acceptable use policies.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• Inappropriate content</li>
              <li>• Spam activities</li>
              <li>• Fake profiles</li>
              <li>• Terms violations</li>
            </ul>
            <button className="btn-standard w-full">Report Violation</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Data Privacy</h3>
            <p className="text-standard mb-4">
              Report concerns about data protection, privacy breaches, or unauthorized data access.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• Data breaches</li>
              <li>• Privacy violations</li>
              <li>• Unauthorized access</li>
              <li>• Data misuse</li>
            </ul>
            <button className="btn-standard w-full">Report Privacy Issue</button>
          </div>

          <div className="card-standard p-6">
            <h3 className="heading-standard text-lg mb-4">Other Issues</h3>
            <p className="text-standard mb-4">
              Report any other concerns or issues that don't fit into the above categories.
            </p>
            <ul className="space-y-2 text-standard text-sm mb-4">
              <li>• General concerns</li>
              <li>• Suggestions</li>
              <li>• Feedback</li>
              <li>• Other problems</li>
            </ul>
            <button className="btn-standard w-full">Report Other Issue</button>
          </div>
        </div>

        {/* Report Form */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Detailed Report Form</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input type="text" className="input-standard w-full" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input type="email" className="input-standard w-full" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" className="input-standard w-full" placeholder="+92 300 1234567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Report Category *</label>
                <select className="input-standard w-full">
                  <option>Select a category</option>
                  <option>Fraud & Scams</option>
                  <option>Safety Concerns</option>
                  <option>Technical Issues</option>
                  <option>Policy Violations</option>
                  <option>Data Privacy</option>
                  <option>Other Issues</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input type="text" className="input-standard w-full" placeholder="Brief description of the issue" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Detailed Description *</label>
                <textarea className="input-standard w-full" rows={6} placeholder="Please provide as much detail as possible about the issue, including dates, names, locations, and any relevant information that would help us investigate."></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Attachments (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-standard text-sm mb-2">
                    Upload screenshots, documents, or other evidence (Max 5MB per file)
                  </p>
                  <button type="button" className="btn-standard">Choose Files</button>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input type="checkbox" id="urgent" className="mr-2" />
                  <label htmlFor="urgent" className="text-standard text-sm">
                    Mark as urgent (requires immediate attention)
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input type="checkbox" id="anonymous" className="mr-2" />
                  <label htmlFor="anonymous" className="text-standard text-sm">
                    Report anonymously (your identity will be protected)
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              <button type="submit" className="btn-standard">Submit Report</button>
              <button type="button" className="btn-standard bg-gray-500 hover:bg-gray-600">Cancel</button>
            </div>
          </form>
        </div>

        {/* What Happens Next */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">What Happens Next?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Review Process</h3>
              <p className="text-standard text-sm">
                Our team reviews your report within 24 hours and assesses the severity and urgency.
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Investigation</h3>
              <p className="text-standard text-sm">
                We conduct a thorough investigation and take appropriate action based on findings.
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Follow-up</h3>
              <p className="text-standard text-sm">
                You'll receive updates on the investigation status and resolution of your report.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Emergency Contact</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              For urgent safety concerns or immediate threats, please contact our emergency team immediately.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Emergency Hotline</h3>
                <p className="text-standard text-sm mb-4">
                  Available 24/7 for urgent safety concerns and emergency situations.
                </p>
                <p className="text-standard">
                  <strong>Phone:</strong> +92 310 0570707<br />
                  <strong>Response Time:</strong> Within 1 hour
                </p>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Emergency Email</h3>
                <p className="text-standard text-sm mb-4">
                  For urgent issues requiring immediate attention and documentation.
                </p>
                <p className="text-standard">
                  <strong>Email:</strong> emergency@fastportal.com<br />
                  <strong>Response Time:</strong> Within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl mb-6">Additional Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="/safety" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Safety Guidelines</h4>
              <p className="text-standard text-sm">Learn how to stay safe while using our platform</p>
            </a>
            <a href="/faq" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Frequently Asked Questions</h4>
              <p className="text-standard text-sm">Find answers to common questions and concerns</p>
            </a>
            <a href="/help-center" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h4 className="heading-standard text-base mb-2">Help Center</h4>
              <p className="text-standard text-sm">Get comprehensive support and assistance</p>
            </a>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
