<<<<<<< HEAD
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
=======
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Fast Job Career",
  description: "Frequently asked questions about Fast Job Career. Find answers to common questions about job searching, applications, and employer services.",
  keywords: "FAQ, frequently asked questions, job search help, career guidance",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Fast Job Career. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQ..."
                className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400 text-xl">🔍</span>
              </div>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* For Job Seekers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">For Job Seekers</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I create a profile?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Creating a profile is easy! Click "Sign Up" on the homepage, fill in your 
                  personal information, work experience, and skills. Upload your resume and add a 
                  professional photo to increase your visibility to employers.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Is Fast Job Career free to use?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Yes! Basic job searching and profile creation are completely free. Premium features 
                  like highlighted profiles and advanced analytics are available for paid subscriptions.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I apply for jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Find a job you're interested in and click "Apply Now". You can apply with your 
                  Fast Job Career profile or upload your resume directly. Fill in any additional 
                  required information and submit your application.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How can I improve my chances of getting hired?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Complete your profile with detailed work experience, add relevant skills, 
                  upload a professional resume, and apply to jobs that match your qualifications. 
                  Consider getting a premium subscription for increased visibility.
                </div>
              </details>
            </div>
          </div>

          {/* For Employers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">For Employers</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I post a job?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Sign up for an employer account, go to your dashboard, and click "Post Job". 
                  Fill in the job details, requirements, and compensation information. 
                  Review and publish your posting to start receiving applications.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  What are the pricing plans?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  We offer flexible pricing: Basic ($99/month), Professional ($299/month), 
                  and Enterprise (custom). Each plan includes different features and job posting limits. 
                  Contact sales for enterprise pricing.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I manage applications?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Access your employer dashboard to view all applications. You can filter, sort, 
                  and review candidate profiles. Use our built-in messaging system to communicate 
                  with applicants and schedule interviews.
                </div>
              </details>
            </div>
          </div>

          {/* Account & Technical */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account & Technical</h2>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I reset my password?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Click "Forgot Password" on the login page. Enter your registered email address. 
                  Check your email for a password reset link and follow the instructions to create 
                  a new password.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Is my data secure?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Absolutely! We use industry-standard encryption, secure servers, and regular 
                  security audits. Your personal information is protected and never shared without consent.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I delete my account?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Go to Settings &gt; Account &gt; Delete Account. Follow the confirmation process. 
                  Note that this action is permanent and cannot be undone. Download your data 
                  before deleting if needed.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* International Jobs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">International Jobs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  Do I need a visa for international jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Visa requirements vary by country and job type. Research the specific requirements 
                  for your target country. Many employers provide visa sponsorship for qualified 
                  candidates. Check job descriptions for visa information.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How do I apply for jobs in different countries?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Use our country-specific job boards or filter by location. Ensure your resume 
                  is tailored for international applications. Highlight language skills and 
                  international experience if applicable.
                </div>
              </details>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  What documents do I need?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Common requirements include: updated resume, passport, educational certificates, 
                  work experience letters, and sometimes police clearance. Specific requirements 
                  vary by country and industry.
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  How does currency work for international jobs?
                  <span className="text-gray-400">&gt;</span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm">
                  Salaries are typically shown in local currency. Use our currency converter 
                  to understand equivalent amounts. Consider exchange rates and cost of living 
                  when evaluating international offers.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-blue-800 mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📧 Email Support
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                💬 Live Chat
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📞 Call Support
              </button>
            </div>
            <p className="text-blue-700 text-sm mt-4">
              Response time: Within 24 hours for emails, instant for live chat
            </p>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
  );
}
