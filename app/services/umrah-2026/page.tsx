import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Umrah 2026 | Premium Umrah Packages",
  "Book premium Umrah packages for 2026. All-inclusive packages with 5-star hotels, flights, visas, and guided tours near Haram in Makkah and Madinah.",
  "services/umrah-2026"
);

export default function Umrah2026Page() {
  return (
    <StandardPageLayout
      title="Umrah 2026"
      description="Book premium Umrah packages for 2026. All-inclusive packages with 5-star hotels, flights, visas, and guided tours near Haram in Makkah and Madinah."
      activeSlug="services/umrah-2026"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Spiritual Journey
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Umrah 2026
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Embark on a blessed spiritual journey with our premium Umrah packages. Experience comfort, convenience, and peace of mind with our all-inclusive services.
          </p>
        </div>

        {/* Package Search */}
        <div className="mb-12 card-standard p-8">
          <h2 className="heading-standard text-xl text-center mb-6">Find Your Umrah Package</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Travel Month</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>January 2026</option>
                <option>February 2026</option>
                <option>March 2026</option>
                <option>April 2026</option>
                <option>May 2026</option>
                <option>June 2026</option>
                <option>Ramadan 2026</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Package Type</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Economy</option>
                <option>Standard</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Duration</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>
                <option>21 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Guests</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>Family (4+)</option>
                <option>Group (10+)</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
            Find Packages
          </button>
        </div>

        {/* Featured Packages */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Featured Umrah Packages 2026</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-6xl">🕋</span>
              </div>
              <div className="p-6">
                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">Popular</span>
                <h3 className="heading-standard text-lg mb-2">Makkah Premium</h3>
                <p className="text-standard text-sm mb-4">7 Days | 5-Star Hotel</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ 200m from Haram</li>
                  <li>✓ Direct flights</li>
                  <li>✓ Visa included</li>
                  <li>✓ Daily transport</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$1,850</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center">
                <span className="text-6xl">🕌</span>
              </div>
              <div className="p-6">
                <span className="bg-amber-500 text-gray-900 text-xs px-2 py-1 rounded mb-2 inline-block">Luxury</span>
                <h3 className="heading-standard text-lg mb-2">Complete Journey</h3>
                <p className="text-standard text-sm mb-4">14 Days | Makkah & Madinah</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ 7 Days in Makkah</li>
                  <li>✓ 7 Days in Madinah</li>
                  <li>✓ Luxury 5-star hotels</li>
                  <li>✓ Guided ziyarat tours</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$2,950</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-emerald-600 flex items-center justify-center">
                <span className="text-6xl">⭐</span>
              </div>
              <div className="p-6">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">VIP</span>
                <h3 className="heading-standard text-lg mb-2">VIP Ramadan</h3>
                <p className="text-standard text-sm mb-4">21 Days | Ramadan 2026</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ Haram view rooms</li>
                  <li>✓ Iftar & Suhoor included</li>
                  <li>✓ Private transport</li>
                  <li>✓ Personal guide</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$4,500</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">What's Included in Our Umrah Packages</h2>
          <div className="space-y-4 text-standard">
            <p>
              Fast Job Career&apos;s Umrah 2026 packages are designed to provide a seamless and spiritually enriching experience for pilgrims. We understand that performing Umrah is a deeply significant journey, and we take care of every detail so you can focus entirely on your worship and spiritual reflection. Our comprehensive packages include everything you need for a comfortable and blessed pilgrimage.
            </p>
            <p>
              All our packages include return flights from major international airports to Jeddah or Madinah. We partner with leading airlines to ensure comfortable journeys with convenient departure times. Our team monitors flight schedules and provides timely updates, ensuring smooth connections and minimal transit times. For premium packages, business class upgrades are available for enhanced comfort during your journey.
            </p>
            <p>
              Accommodation is carefully selected to provide proximity to the holy sites while maintaining the highest standards of comfort and service. In Makkah, our hotels are within walking distance of Masjid al-Haram, with options ranging from 3-star to 5-star luxury properties. In Madinah, we select hotels near Masjid an-Nabawi to maximize your time in prayer and reflection. All hotels offer international cuisine, room service, and modern amenities to ensure a comfortable stay.
            </p>
            <p>
              The Umrah visa processing is handled entirely by our dedicated team. We guide you through the application process, handle all documentation requirements, and ensure timely visa approval. Our experienced staff stays updated with the latest Saudi visa regulations and requirements, ensuring a hassle-free process for pilgrims of all nationalities.
            </p>
            <p>
              Ground transportation is an essential component of our packages. We provide airport transfers, daily shuttle services to the holy sites, and transport for ziyarat (visits to historical Islamic sites). Our modern, air-conditioned vehicles are driven by professional, courteous drivers who understand the needs of pilgrims. For VIP packages, private vehicles with personal drivers are available for maximum convenience.
            </p>
            <p>
              Our religious guides (mutawwifs) are experienced scholars who provide guidance on performing Umrah rituals correctly according to Sunnah. They offer orientation sessions, accompany groups during Tawaf and Sa&apos;i, and are available throughout your journey to answer questions and provide spiritual support. Their knowledge and experience ensure that your Umrah is performed correctly and with full understanding of its significance.
            </p>
            <p>
              Additional services available include travel insurance, mobile SIM cards with data plans, laundry services, and 24/7 emergency support. We also arrange pre-Umrah seminars to prepare pilgrims for their journey, covering rituals, etiquette, and practical tips for a comfortable experience.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Our Services</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">✈️</span>
              <h3 className="heading-standard text-base mb-2">Direct Flights</h3>
              <p className="text-standard text-sm">Major airlines</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🏨</span>
              <h3 className="heading-standard text-base mb-2">Premium Hotels</h3>
              <p className="text-standard text-sm">Near Haram</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🚌</span>
              <h3 className="heading-standard text-base mb-2">Transport</h3>
              <p className="text-standard text-sm">All transfers included</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">📝</span>
              <h3 className="heading-standard text-base mb-2">Visa Service</h3>
              <p className="text-standard text-sm">Complete assistance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Begin Your Spiritual Journey</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Contact our Umrah specialists to plan your blessed journey. We provide personalized guidance and support throughout your pilgrimage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-standard">
              Speak to an Umrah Specialist
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
