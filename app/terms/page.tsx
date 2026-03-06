import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Terms of Service",
  "Read Fast Portal's Terms of Service and Conditions. Understand your rights and responsibilities when using our job portal platform.",
  "terms"
);

export default function TermsPage() {
  return (
    <StandardPageLayout
      title="Terms of Service"
      description="Read Fast Portal's Terms of Service and Conditions. Understand your rights and responsibilities when using our job portal platform."
      activeSlug="terms"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Legal Information
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Please read these terms carefully before using Fast Portal's services.
          </p>
        </div>

        <div className="card-standard">
          <div className="space-y-8 text-sm text-standard">
            <section>
              <h2 className="heading-standard text-xl mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Fast Portal's website, mobile application, and services (collectively, "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Service. These Terms apply to all visitors, users, and others who access or use Service.
              </p>
              <p>
                Fast Portal reserves the right to update, change, or replace any part of these Terms by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or Service following the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">2. Description of Service</h2>
              <p>
                Fast Portal is a comprehensive job portal platform that connects job seekers with employers globally. Our Service includes features such as job listings, resume building tools, application tracking, career resources, travel and visa assistance, and other related services. We act as an intermediary platform facilitating connections between job seekers and employers.
              </p>
              <p>
                Our platform is designed to streamline the recruitment process by providing tools and resources for both job seekers and employers. However, we do not guarantee employment or the suitability of any job listing, candidate, or employer. Users are responsible for conducting their own due diligence before entering into any employment relationship.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">3. User Accounts and Registration</h2>
              <p>
                To access certain features of our Service, you must register for an account. When you register, you agree to provide accurate, current, and complete information as prompted by our registration form. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p>
                You agree to notify us immediately of any unauthorized use of your account. Fast Portal reserves the right to suspend or terminate your account if we suspect any unauthorized use or violation of these Terms. You must be at least 18 years old to create an account and use our Service.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">4. User Responsibilities</h2>
              <p>
                As a user of Fast Portal, you agree to use our Service responsibly and in accordance with all applicable laws and regulations. You are responsible for all content you post, upload, or otherwise make available through our Service. You agree not to use our Service to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-standard">
                <li>Post false, misleading, or fraudulent information</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Upload malicious code, viruses, or harmful software</li>
                <li>Spam or harass other users</li>
                <li>Discriminate based on race, religion, gender, or other protected characteristics</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">5. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
              <p>
                We will notify you in the event of a data breach and will take reasonable steps to mitigate the effects of the breach.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">6. Intellectual Property Rights</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Fast Portal and its licensors. The Service is protected by copyright, trademark, and other laws of both Pakistan and foreign countries.
              </p>
              <p>
                You may not modify, reproduce, distribute, create derivative works, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as permitted by these Terms or with our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">7. Fees and Payment</h2>
              <p>
                Certain features of our Service may be subject to fees. All fees are clearly displayed before you commit to any payment. We accept various payment methods as listed on our platform. All payments are processed securely through our payment partners.
              </p>
              <p>
                Fees paid are non-refundable unless otherwise specified. We reserve the right to change our fees at any time. Any changes will be effective immediately upon posting on our platform. Your continued use of paid features after such changes constitutes acceptance of the new fees.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">8. Termination</h2>
              <p>
                Fast Portal may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall Fast Portal, our directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
              <p>
                Our total liability to you for all claims arising from or relating to the Service shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of Pakistan, without regard to conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Islamabad, Pakistan.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the effective date of changes. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> legal@fastportal.com</p>
                <p><strong>Phone:</strong> +92 310 0570707</p>
                <p><strong>Address:</strong> G-9 Markaz, Islamabad, Pakistan</p>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">13. Service Availability</h2>
              <p>
                Fast Portal strives to maintain high availability of our Service, but we cannot guarantee uninterrupted access. We may perform maintenance, updates, or upgrades that may temporarily disrupt service availability. We are not liable for any losses or damages resulting from service interruptions.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">14. Third-Party Services</h2>
              <p>
                Our Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. Your use of third-party services is governed by their respective terms of service and privacy policies.
              </p>
              <p>
                We may also integrate with third-party services such as payment processors, background check providers, and travel booking services. These third parties have their own privacy policies and terms of service. We encourage you to review these policies carefully.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">15. Disclaimer of Warranties</h2>
              <p>
                Our Service is provided on an "AS IS" and "AS AVAILABLE" basis. Fast Portal makes no representations or warranties of any kind, express or implied, as to the operation of our Service or the information, content, materials, or products included on our Service.
              </p>
              <p>
                You expressly agree that your use of our Service is at your sole risk. To the fullest extent permissible by applicable law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">16. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Fast Portal and our officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees).
              </p>
              <p>
                This includes claims arising from your use of the Service, your violation of these Terms, or your violation of any rights of another. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.
              </p>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">17. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise remain in full force and effect and enforceable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">18. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fast Portal concerning the Service. These Terms supersede all prior agreements between you and Fast Portal regarding the Service.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 card-standard">
          <p className="text-center text-sm text-standard">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </StandardPageLayout>
  );
}
