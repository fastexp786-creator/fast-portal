import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FAQ | Fast Job Career - Frequently Asked Questions",
  description: "Find answers to common questions about Fast Job Career's job portal services. Get help with job searching, employer services, account management, and more.",
  keywords: "FAQ, frequently asked questions, Fast Job Career help, job portal questions, support",
  authors: [{ name: "Fast Job Career" }],
  creator: "Fast Job Career",
  publisher: "Fast Job Career",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    url: `${SITE_URL}/faq`,
    title: "FAQ | Fast Job Career - Frequently Asked Questions",
    description: "Find answers to common questions about Fast Job Career's job portal services. Get help with job searching, employer services, account management, and more.",
    type: "website",
    siteName: "Fast Job Career",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Fast Job Career - Frequently Asked Questions",
    description: "Find answers to common questions about Fast Job Career's job portal services. Get help with job searching, employer services, account management, and more.",
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

export default function FAQPage() {
  const faqCategories = [
    {
      title: "For Job Seekers",
      questions: [
        {
          q: "How do I create a profile on Fast Job Career?",
          a: "Creating a profile is simple and free. Click on the 'Sign Up' button, fill in your personal information, upload your resume, and complete your profile with your skills, experience, and preferences. A complete profile increases your chances of being noticed by employers."
        },
        {
          q: "Is Fast Job Career free for job seekers?",
          a: "Yes, Fast Job Career is completely free for job seekers. You can create a profile, search for jobs, apply to positions, and use our career resources at no cost. We also offer premium features like resume highlighting and priority application status for a small fee, but these are optional."
        },
        {
          q: "How do I apply for jobs?",
          a: "Once you find a job that interests you, click the 'Apply Now' button. You can either use your Fast Job Career profile to apply instantly or customize your application for each position. Make sure your profile is complete and up-to-date before applying."
        },
        {
          q: "How can I track my applications?",
          a: "Go to your dashboard and click on 'My Applications'. Here you'll see all the jobs you've applied for, along with their current status (submitted, under review, shortlisted, etc.). You'll also receive email notifications when there are updates to your applications."
        },
        {
          q: "What should I include in my resume?",
          a: "Your resume should include your contact information, work experience, education, skills, and any relevant certifications. Use a clean, professional format and tailor your resume to highlight experiences relevant to the jobs you're applying for."
        }
      ]
    },
    {
      title: "For Employers",
      questions: [
        {
          q: "How do I post a job on Fast Job Career?",
          a: "Employers can post jobs by creating an employer account, logging in, and clicking on 'Post a Job'. Fill in the job details including title, description, requirements, and application deadline. You can choose from different posting packages based on your needs."
        },
        {
          q: "What are the pricing plans for employers?",
          a: "We offer flexible pricing plans including single job posts, monthly subscriptions, and annual packages. Pricing varies based on features like job visibility, candidate database access, and branding options. Contact our sales team for customized enterprise solutions."
        },
        {
          q: "How do I search for candidates?",
          a: "With an employer account, you can access our candidate database using advanced filters like location, skills, experience level, and industry. You can also save searches and set up alerts for new candidates matching your criteria."
        },
        {
          q: "Can I manage applications through the platform?",
          a: "Yes, our platform includes a complete applicant tracking system. You can review applications, schedule interviews, communicate with candidates, and manage the entire hiring process from your employer dashboard."
        },
        {
          q: "How do I verify candidate information?",
          a: "While we verify employer accounts, candidate verification is the responsibility of employers. We recommend conducting thorough background checks, verifying references, and using our integrated verification services for an additional fee."
        }
      ]
    },
    {
      title: "Account & Technical",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. Make sure to check your spam folder if you don't receive the email."
        },
        {
          q: "Can I have multiple accounts?",
          a: "We recommend having only one account per person. If you need to switch between job seeker and employer roles, you can do so from your account settings without creating a separate account. Multiple accounts may violate our terms of service."
        },
        {
          q: "Is my information secure?",
          a: "Yes, we take data security seriously. We use industry-standard encryption, secure servers, and regular security audits to protect your information. Our privacy policy outlines how we collect, use, and protect your data."
        },
        {
          q: "How do I delete my account?",
          a: "Go to your account settings and click on 'Delete Account'. Please note that this action is permanent and cannot be undone. We'll retain certain information as required by law, but most of your data will be permanently deleted."
        },
        {
          q: "Why can't I log in to my account?",
          a: "Check that you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' feature. If you're still having trouble, contact our support team at support@fastjobcareer.com."
        }
      ]
    },
    {
      title: "Travel & Visa Services",
      questions: [
        {
          q: "What travel services do you offer?",
          a: "We offer comprehensive travel services including flight booking, accommodation assistance, visa processing support, and travel insurance. Our team can help you plan your entire relocation process when you secure an international job."
        },
        {
          q: "How do I apply for a work visa?",
          a: "Once you secure a job offer, our visa team will guide you through the work visa application process. We help with document preparation, application submission, and follow-up with immigration authorities. Visa processing times vary by country."
        },
        {
          q: "Do you help with document verification?",
          a: "Yes, we offer document verification services for educational certificates, work experience letters, and other required documents. This helps ensure your application meets the requirements of employers and immigration authorities."
        },
        {
          q: "What countries do you support for international placements?",
          a: "We support placements in Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), European countries, the UK, Canada, and several other destinations. Our network continues to expand based on market demand."
        },
        {
          q: "Are there additional fees for travel and visa services?",
          a: "Yes, travel and visa services are separate from our job placement services and have their own fee structure. We provide transparent pricing based on the services you require and the destination country."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Help & Support
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Find answers to common questions about Fast Job Career's services.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="rounded-lg bg-gray-800 p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.q}</h3>
                    <p className="text-sm text-gray-300">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional FAQ Content for 300+ words */}
        <div className="mt-12 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Additional Information</h2>
          <div className="space-y-6 text-sm text-gray-300">
            <section>
              <h3 className="mb-3 text-lg font-semibold text-white">Getting Started Guide</h3>
              <p>
                New to Fast Job Career? Our getting started guide walks you through the entire process from creating your profile to landing your dream job. The guide includes step-by-step instructions, video tutorials, and best practices for maximizing your job search success.
              </p>
              <p>
                We recommend starting with a complete profile setup, including a professional photo, detailed work history, and relevant skills. This increases your visibility to employers by up to 80%. Take advantage of our resume builder tool to create a professional resume that stands out.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-semibold text-white">Success Tips</h3>
              <p>
                Our research shows that candidates who apply within 24 hours of a job posting have a 60% higher chance of getting an interview. Set up job alerts to receive notifications for positions matching your criteria.
              </p>
              <p>
                Customize your application for each position rather than using a generic approach. Research the company and mention specific aspects that align with your experience. Follow up on your applications after 5-7 business days if you haven't heard back.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-semibold text-white">Mobile App Features</h3>
              <p>
                Download our mobile app for iOS and Android to search and apply for jobs on the go. The app includes all desktop features plus push notifications for new job matches and application updates. You can also use the app to attend video interviews and communicate with employers.
              </p>
              <p>
                The mobile app syncs seamlessly with your web account, so you can start an application on your phone and continue it on your desktop. Offline mode allows you to browse jobs even without an internet connection.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-semibold text-white">Community Support</h3>
              <p>
                Join our community forum to connect with other job seekers and employers. Share experiences, ask questions, and get advice from industry professionals. Our community moderators are active daily to ensure helpful discussions and prevent spam.
              </p>
              <p>
                We also host regular webinars and virtual job fairs where you can interact directly with recruiters and learn about job market trends. Check our events calendar for upcoming sessions and register early as spots fill up quickly.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-semibold text-white">Feedback and Suggestions</h3>
              <p>
                Your feedback helps us improve Fast Job Career. Use the feedback form in your account settings to suggest new features, report bugs, or share your experience with our platform. We review all feedback and implement the most requested features.
              </p>
              <p>
                Join our beta testing program to try new features before they're released to the public. Beta testers receive exclusive access to new tools and can shape the future of our platform through their input.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Still Need Help?</h2>
          <div className="text-center text-sm text-gray-300">
            <p className="mb-4">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> support@fastjobcareer.com</p>
              <p><strong>Phone:</strong> +92 310 0570707</p>
              <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (PKT)</p>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
