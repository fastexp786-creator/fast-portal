import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Visit Visa & Tours | Visa Assistance & Travel Packages",
  "Professional visa assistance and curated tour packages worldwide. Visit visas for UAE, Saudi Arabia, Schengen, UK, USA, and more with guided tours.",
  "services/visit-visa-tours"
);

export default function VisitVisaToursPage() {
  return (
    <StandardPageLayout
      title="Visit Visa & Tours"
      description="Professional visa assistance and curated tour packages worldwide. Visit visas for UAE, Saudi Arabia, Schengen, UK, USA, and more with guided tours."
      activeSlug="services/visit-visa-tours"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Travel Made Easy
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Visit Visa & Tours
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Hassle-free visa processing and expertly curated tour packages. Let us handle the paperwork while you plan your adventure.
          </p>
        </div>

        {/* Visa Search */}
        <div className="mb-12 card-standard p-8">
          <h2 className="heading-standard text-xl text-center mb-6">Check Visa Requirements</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Nationality</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Pakistan</option>
                <option>India</option>
                <option>Bangladesh</option>
                <option>Philippines</option>
                <option>Egypt</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Destination</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>UAE - Dubai</option>
                <option>Saudi Arabia</option>
                <option>Schengen Area</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Turkey</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Purpose</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Tourism</option>
                <option>Business</option>
                <option>Family Visit</option>
                <option>Medical</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
            Check Requirements
          </button>
        </div>

        {/* Visa Services */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Visa Services</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🇦🇪</span>
              <h3 className="heading-standard text-lg mb-2">UAE Visa</h3>
              <p className="text-standard text-sm mb-4">Dubai & Abu Dhabi</p>
              <span className="text-amber-400 font-bold">From $150</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🇸🇦</span>
              <h3 className="heading-standard text-lg mb-2">Saudi Visa</h3>
              <p className="text-standard text-sm mb-4">Tourist & Business</p>
              <span className="text-amber-400 font-bold">From $200</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🇪🇺</span>
              <h3 className="heading-standard text-lg mb-2">Schengen Visa</h3>
              <p className="text-standard text-sm mb-4">Europe 26 countries</p>
              <span className="text-amber-400 font-bold">From $120</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🇬🇧</span>
              <h3 className="heading-standard text-lg mb-2">UK Visa</h3>
              <p className="text-standard text-sm mb-4">Tourist & Business</p>
              <span className="text-amber-400 font-bold">From $180</span>
            </div>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Popular Tour Packages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center">
                <span className="text-6xl">🏜️</span>
              </div>
              <div className="p-6">
                <span className="bg-amber-500 text-gray-900 text-xs px-2 py-1 rounded mb-2 inline-block">Best Seller</span>
                <h3 className="heading-standard text-lg mb-2">Dubai Adventure</h3>
                <p className="text-standard text-sm mb-4">5 Days | 4-Star Hotel</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ Desert safari included</li>
                  <li>✓ Burj Khalifa visit</li>
                  <li>✓ Dhow cruise dinner</li>
                  <li>✓ Airport transfers</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$999</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-6xl">🕋</span>
              </div>
              <div className="p-6">
                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">Spiritual</span>
                <h3 className="heading-standard text-lg mb-2">Saudi Heritage Tour</h3>
                <p className="text-standard text-sm mb-4">7 Days | Riyadh & Jeddah</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ Historic Diriyah</li>
                  <li>✓ Al-Ula archaeological sites</li>
                  <li>✓ Red Sea coastal tour</li>
                  <li>✓ Expert local guide</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$1,299</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-6xl">🏛️</span>
              </div>
              <div className="p-6">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">Europe</span>
                <h3 className="heading-standard text-lg mb-2">Europe Highlights</h3>
                <p className="text-standard text-sm mb-4">10 Days | 5 Countries</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ Paris, Rome, Amsterdam</li>
                  <li>✓ Swiss Alps excursion</li>
                  <li>✓ High-speed train travel</li>
                  <li>✓ 4-star accommodations</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$2,499</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">Why Choose Our Visa & Tour Services?</h2>
          <div className="space-y-4 text-standard">
            <p>
              Fast Job Career&apos;s Visit Visa & Tours service is your comprehensive solution for international travel needs. We combine professional visa assistance with expertly designed tour packages to provide a seamless travel experience from start to finish. Our team of experienced visa consultants and travel specialists work together to ensure your journey is hassle-free, enjoyable, and memorable.
            </p>
            <p>
              Our visa services cover all major destinations including UAE, Saudi Arabia, Schengen countries, United Kingdom, United States, Canada, Turkey, and many more. We handle the entire application process from document preparation and verification to appointment scheduling and application submission. Our consultants stay updated with the latest visa requirements and immigration policies, ensuring accurate and timely submissions.
            </p>
            <p>
              What sets us apart is our high success rate. Our thorough document review process minimizes errors that could lead to visa rejections. We provide detailed checklists tailored to each visa type, assist with filling complex application forms, prepare supporting letters, and conduct mock interviews for countries that require them. Our experience allows us to anticipate potential issues and address them proactively.
            </p>
            <p>
              For corporate clients, we offer specialized business visa services with expedited processing options. We understand the urgency of business travel and work diligently to secure visas within tight timelines. Our corporate packages include multiple-entry visas, visa tracking systems, and dedicated account managers for ongoing visa requirements.
            </p>
            <p>
              Our tour packages are designed with authenticity and comfort in mind. Unlike mass-market tours, our packages focus on immersive experiences that allow you to truly understand and appreciate each destination. We partner with local experts who provide insider knowledge, take you beyond tourist traps to hidden gems, and ensure meaningful cultural exchanges.
            </p>
            <p>
              We offer flexible tour options ranging from fully guided group tours to private customized itineraries. Our group tours maintain small sizes (maximum 15 travelers) to ensure personalized attention and flexibility. Private tours are completely customized to your interests, pace, and preferences, with private vehicles and dedicated guides.
            </p>
            <p>
              All our tour packages include accommodations in carefully selected hotels that balance comfort, location, and character. We include daily breakfasts, some dinners, and opportunities to experience local cuisine. Transportation is comfortable and reliable, whether it&apos;s private vehicles, high-speed trains, or domestic flights. Entrance fees to major attractions, guided tours, and 24/7 support are standard inclusions.
            </p>
            <p>
              For travelers combining work and leisure, we offer bleisure (business + leisure) packages that extend your business trips with vacation components. We handle the logistics of combining visa types, scheduling leisure activities around business commitments, and ensuring smooth transitions between work and relaxation modes.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Our Process</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">1</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Consultation</h3>
              <p className="text-standard text-sm">Discuss your travel plans</p>
            </div>
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">2</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Documentation</h3>
              <p className="text-standard text-sm">We handle all paperwork</p>
            </div>
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">3</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Processing</h3>
              <p className="text-standard text-sm">Visa application submitted</p>
            </div>
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 font-bold">4</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Travel</h3>
              <p className="text-standard text-sm">Enjoy your journey</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Start Your Journey</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Contact our visa and travel specialists to plan your next adventure. We make international travel simple and enjoyable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-standard">
              Get Free Consultation
            </a>
            <a href="/live-chat" className="btn-standard">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
