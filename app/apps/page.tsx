import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Mobile Apps",
  "Download Fast Job Career mobile apps for iOS and Android. Access job opportunities, manage applications, and connect with employers on the go.",
  "apps"
);

export default function AppsPage() {
  return (
    <StandardPageLayout
      title="Mobile Apps"
      description="Download Fast Job Career mobile apps for iOS and Android. Access job opportunities, manage applications, and connect with employers on the go."
      activeSlug="apps"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Download Now
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Fast Job Career Mobile Apps
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Take your job search anywhere with our powerful mobile applications. Available for iOS and Android devices.
          </p>
        </div>

        {/* App Download Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="card-standard p-8 text-center">
            <div className="w-20 h-20 bg-gray-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🍎</span>
            </div>
            <h2 className="heading-standard text-xl mb-4">iOS App</h2>
            <p className="text-standard mb-6">
              Download Fast Job Career for iPhone and iPad. Enjoy a seamless job search experience optimized for Apple devices with push notifications for new job alerts.
            </p>
            <a
              href="https://apps.apple.com/app/fast-job-career/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <span>📱</span>
              Download for iOS
            </a>
            <p className="text-xs text-gray-500 mt-4">Requires iOS 14.0 or later</p>
          </div>

          <div className="card-standard p-8 text-center">
            <div className="w-20 h-20 bg-gray-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <h2 className="heading-standard text-xl mb-4">Android App</h2>
            <p className="text-standard mb-6">
              Get Fast Job Career on your Android phone or tablet. Access all features including job applications, saved searches, and employer messaging on the go.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.fastjobcareer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <span>📱</span>
              Download for Android
            </a>
            <p className="text-xs text-gray-500 mt-4">Requires Android 8.0 or later</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">App Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">🔍</div>
              <h3 className="heading-standard text-lg mb-2">Smart Job Search</h3>
              <p className="text-standard text-sm">
                Advanced search filters for location, salary, industry, and job type. Save searches and get notified when matching jobs are posted.
              </p>
            </div>
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">📨</div>
              <h3 className="heading-standard text-lg mb-2">Easy Apply</h3>
              <p className="text-standard text-sm">
                One-tap job application with your saved profile. Upload documents and track application status in real-time.
              </p>
            </div>
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">🔔</div>
              <h3 className="heading-standard text-lg mb-2">Instant Alerts</h3>
              <p className="text-standard text-sm">
                Push notifications for new jobs, application updates, and employer messages. Never miss an opportunity.
              </p>
            </div>
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">💬</div>
              <h3 className="heading-standard text-lg mb-2">Direct Messaging</h3>
              <p className="text-standard text-sm">
                Chat directly with employers and recruiters. Schedule interviews and ask questions through the built-in messaging system.
              </p>
            </div>
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">📊</div>
              <h3 className="heading-standard text-lg mb-2">Career Insights</h3>
              <p className="text-standard text-sm">
                Access salary data, market trends, and career advice. Make informed decisions about your professional future.
              </p>
            </div>
            <div className="card-standard p-6">
              <div className="text-amber-400 text-3xl mb-4">🌐</div>
              <h3 className="heading-standard text-lg mb-2">Offline Access</h3>
              <p className="text-standard text-sm">
                Save jobs for offline viewing. Access your saved jobs, applications, and resume even without internet connection.
              </p>
            </div>
          </div>
        </div>

        {/* Why Use Our Apps */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">Why Use Fast Job Career Mobile Apps?</h2>
          <div className="space-y-4 text-standard">
            <p>
              In today&apos;s fast-paced world, job seekers need instant access to opportunities and the ability to respond quickly. Fast Job Career mobile applications are designed to keep you connected to the global job market 24/7, ensuring you never miss a career opportunity. Our apps combine powerful functionality with user-friendly design, making job searching efficient and enjoyable.
            </p>
            <p>
              The mobile experience offers several advantages over desktop browsing. First, you receive instant push notifications when new jobs matching your criteria are posted, giving you a competitive edge in applying early. Second, the one-tap application feature allows you to submit applications within seconds, even when you&apos;re on the move. Third, the integrated messaging system enables real-time communication with employers, facilitating faster interview scheduling and decision-making.
            </p>
            <p>
              Our apps are optimized for performance and data efficiency. Whether you&apos;re using Wi-Fi or mobile data, the apps load quickly and use minimal bandwidth. The offline mode allows you to browse saved jobs and prepare applications even without internet connectivity. This is particularly valuable for users in areas with intermittent internet access or those who want to maximize productivity during commutes.
            </p>
            <p>
              Security is paramount in our mobile applications. We implement industry-standard encryption for all data transfers, biometric authentication options (fingerprint and face recognition), and secure document storage. Your personal information and job applications are protected with the same enterprise-grade security used by major financial institutions.
            </p>
            <p>
              The apps support multiple languages including English, Urdu, Arabic, and Hindi, making Fast Job Career accessible to job seekers across different regions. The interface adapts to regional preferences while maintaining consistency and ease of use. Regular updates ensure compatibility with the latest device features and operating system versions.
            </p>
          </div>
        </div>

        {/* App Screenshots Preview */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">App Preview</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card-standard p-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 aspect-[9/16] flex items-center justify-center">
                <span className="text-4xl">🏠</span>
              </div>
              <p className="text-sm text-gray-400">Home Screen</p>
            </div>
            <div className="card-standard p-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 aspect-[9/16] flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-sm text-gray-400">Job Search</p>
            </div>
            <div className="card-standard p-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 aspect-[9/16] flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <p className="text-sm text-gray-400">Applications</p>
            </div>
            <div className="card-standard p-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 aspect-[9/16] flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <p className="text-sm text-gray-400">Profile</p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Need Help with the Apps?</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Our support team is available to help you with app installation, account setup, or any technical issues you may encounter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/help-center" className="btn-standard">
              Visit Help Center
            </a>
            <a href="/contact" className="btn-standard">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
