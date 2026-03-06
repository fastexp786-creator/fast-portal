import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy | Fast Job Career - Data Protection & Privacy",
  description: "Learn how Fast Job Career protects your personal data and privacy. Read our comprehensive privacy policy covering data collection, usage, and protection.",
  keywords: "privacy policy, data protection, personal information, Fast Job Career privacy, user data",
  authors: [{ name: "Fast Job Career" }],
  creator: "Fast Job Career",
  publisher: "Fast Job Career",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy | Fast Job Career - Data Protection & Privacy",
    description: "Learn how Fast Job Career protects your personal data and privacy. Read our comprehensive privacy policy covering data collection, usage, and protection.",
    type: "website",
    siteName: "Fast Job Career",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Fast Job Career - Data Protection & Privacy",
    description: "Learn how Fast Job Career protects your personal data and privacy. Read our comprehensive privacy policy covering data collection, usage, and protection.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Privacy & Data Protection
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            How Fast Job Career collects, uses, and protects your personal information.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-sm text-gray-300">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">1. Introduction</h2>
              <p>
                Fast Job Career ("we," "us," or "our") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage with our job portal services.
              </p>
              <p>
                By using Fast Job Career, you understand and agree to the collection, use, and sharing of your information as described in this Privacy Policy. This policy applies to all users of our Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">2. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Service, including:
              </p>
              
              <h3 className="mt-4 mb-2 text-lg font-medium text-white">Personal Information</h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Name, email address, phone number, and contact details</li>
                <li>Date of birth, gender, and nationality</li>
                <li>Professional information including resume, work experience, education</li>
                <li>Skills, qualifications, and career preferences</li>
                <li>Location information for job matching purposes</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-medium text-white">Usage Information</h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Pages visited and time spent on our Service</li>
                <li>Search queries and job applications submitted</li>
                <li>Interaction with employers and other users</li>
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-medium text-white">Cookies and Tracking Data</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">3. How We Use Your Information</h2>
              <p>
                Fast Job Career uses the collected information for various purposes:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To process job applications and facilitate connections with employers</li>
                <li>To improve, personalize, and expand our Service</li>
                <li>To understand and analyze how you use our Service</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you, including customer support</li>
                <li>To provide you with news, special offers, and general information</li>
                <li>To monitor usage of the Service and detect and prevent technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              
              <h3 className="mt-4 mb-2 text-lg font-medium text-white">With Employers</h3>
              <p>
                When you apply for a job, we share your relevant profile information with potential employers to facilitate the recruitment process. You control what information is visible to employers through your privacy settings.
              </p>

              <h3 className="mt-4 mb-2 text-lg font-medium text-white">Service Providers</h3>
              <p>
                We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3 className="mt-4 mb-2 text-lg font-medium text-white">Legal Requirements</h3>
              <p>
                We may disclose your personal information if required by law or in good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, or protect the personal safety of users or the public.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers and database protection</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Access controls and authentication systems</li>
              </ul>
              <p>
                However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">6. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                When you delete your account, we will delete or anonymize your personal information within a reasonable period, except where we are required by law to retain certain information for legitimate business purposes or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing of your information</li>
                <li>Data portability to another service</li>
                <li>Object to processing of your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">8. Children's Privacy</h2>
              <p>
                Our Service is not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
              <p>
                If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">9. International Data Transfers</h2>
              <p>
                Your personal information may be transferred to, and maintained on, computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
              <p>
                If you are located outside Pakistan and choose to provide information to us, please note that we transfer the data, including Personal Data, to Pakistan and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
            </section>

            {/* Additional content for 300+ words */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">10. Marketing Communications</h2>
              <p>
                With your consent, we may send you marketing communications about our products, services, and promotions that may be of interest to you. You can opt out of receiving marketing communications from us by following the unsubscribe link or instructions provided in any email we send.
              </p>
              <p>
                Please note that even if you opt out of receiving marketing communications, we may still send you transactional emails related to your account, such as order confirmations, security alerts, and important updates about our Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">11. Third-Party Websites</h2>
              <p>
                Our Service may contain links to third-party websites that are not operated or controlled by Fast Job Career. We are not responsible for the privacy practices of these third-party websites. We encourage you to be aware when you leave our Service and to read the privacy statements of each website that collects personal information.
              </p>
              <p>
                These third-party websites may include job boards, employer websites, social media platforms, and other services integrated with our platform. Your use of these third-party services is governed by their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">12. Compliance with Laws</h2>
              <p>
                We will comply with all applicable data protection laws and regulations, including but not limited to the Prevention of Electronic Crimes Act (PECA) of Pakistan and other relevant legislation.
              </p>
              <p>
                We regularly review our privacy practices to ensure compliance with evolving legal requirements and industry standards. Our privacy program is designed to meet or exceed applicable legal obligations and best practices for data protection.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">13. Privacy Policy Updates</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the bottom of this policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our Service after any modifications to the Privacy Policy constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">14. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@fastjobcareer.com</p>
                <p><strong>Phone:</strong> +92 310 0570707</p>
                <p><strong>Address:</strong> G-9 Markaz, Islamabad, Pakistan</p>
                <p><strong>Data Protection Officer:</strong> dpo@fastjobcareer.com</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">15. Specific Rights for Pakistani Users</h2>
              <p>
                As a user from Pakistan, you have additional rights under PECA 2016 and related regulations. These include the right to:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Be informed about data collection and processing</li>
                <li>Access and obtain copies of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact our Data Protection Officer at the email address provided above. We will respond to your request within 30 days, as required by law.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-800 p-6">
          <p className="text-center text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
