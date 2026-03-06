import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Car Rental Services",
  "Find affordable car rental services for job interviews and business travel. Fast Job Career partners with trusted car rental companies for your transportation needs.",
  "car-rental"
);

export default function CarRentalPage() {
  return (
    <StandardPageLayout
      title="Car Rental Services"
      description="Find affordable car rental services for job interviews and business travel. Fast Job Career partners with trusted car rental companies for your transportation needs."
      activeSlug="car-rental"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Transportation Services
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Car Rental Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Reliable and affordable car rental services for job interviews, business meetings, and professional travel. Fast Job Career partners with trusted rental companies to ensure your transportation needs are met.
          </p>
        </div>

        {/* Service Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">Why Use Our Car Rental Service?</h2>
            <p className="text-standard mb-6">
              Getting to job interviews and business meetings shouldn't be a hassle. Our car rental service provides convenient, affordable, and reliable transportation solutions tailored for professionals and job seekers.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Convenient Access</h3>
                <p className="text-standard text-sm">
                  Easy booking process with pickup locations near major business districts and airports
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Affordable Rates</h3>
                <p className="text-standard text-sm">
                  Special discounts for Fast Job Career members with flexible pricing options
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Quality Service</h3>
                <p className="text-standard text-sm">
                  Well-maintained vehicles with comprehensive insurance coverage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Car Categories */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">Vehicle Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Economy Cars</h3>
              <p className="text-standard mb-4">
                Perfect for solo job seekers and budget-conscious professionals.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Toyota Corolla, Honda City</li>
                <li>• Fuel efficient (25-30 km/l)</li>
                <li>• Air conditioning</li>
                <li>• Music system</li>
                <li>• Daily rate: $25-35</li>
              </ul>
              <button className="btn-standard w-full">Book Economy</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Sedan Cars</h3>
              <p className="text-standard mb-4">
                Comfortable vehicles ideal for business meetings and interviews.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Toyota Camry, Honda Accord</li>
                <li>• Premium comfort features</li>
                <li>• GPS navigation</li>
                <li>• Bluetooth connectivity</li>
                <li>• Daily rate: $45-55</li>
              </ul>
              <button className="btn-standard w-full">Book Sedan</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">SUV Cars</h3>
              <p className="text-standard mb-4">
                Spacious vehicles perfect for group travel and cargo needs.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Toyota RAV4, Honda CR-V</li>
                <li>• 7-seater options available</li>
                <li>• Large cargo space</li>
                <li>• Advanced safety features</li>
                <li>• Daily rate: $65-85</li>
              </ul>
              <button className="btn-standard w-full">Book SUV</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Luxury Cars</h3>
              <p className="text-standard mb-4">
                Premium vehicles for executive interviews and important meetings.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• BMW, Mercedes, Audi</li>
                <li>• Leather interiors</li>
                <li>• Premium sound systems</li>
                <li>• Chauffeur service available</li>
                <li>• Daily rate: $150-250</li>
              </ul>
              <button className="btn-standard w-full">Book Luxury</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Van Rentals</h3>
              <p className="text-standard mb-4">
                Large capacity vehicles for team transportation and equipment.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Toyota Hiace, Nissan Urvan</li>
                <li>• 12-15 seater capacity</li>
                <li>• Air conditioning</li>
                <li>• Professional driver option</li>
                <li>• Daily rate: $80-120</li>
              </ul>
              <button className="btn-standard w-full">Book Van</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Electric Cars</h3>
              <p className="text-standard mb-4">
                Eco-friendly electric vehicles for environmentally conscious professionals.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Tesla Model 3, Nissan Leaf</li>
                <li>• Zero emissions</li>
                <li>• Long range (200-300 km)</li>
                <li>• Fast charging stations</li>
                <li>• Daily rate: $55-75</li>
              </ul>
              <button className="btn-standard w-full">Book Electric</button>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🎉 Special Offers for Job Seekers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded">
                  INTERVIEW SPECIAL
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Interview Day Package</h3>
              <p className="text-standard mb-4">
                Special package for job seekers attending interviews.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$50</span>
                <span className="text-2xl font-bold text-black ml-2">$35</span>
                <span className="text-green-500 font-semibold ml-2">30% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• 4-hour rental period</li>
                <li>• Economy or sedan car</li>
                <li>• Interview location pickup</li>
                <li>• Professional appearance</li>
              </ul>
              <button className="btn-standard w-full">Book Interview Package</button>
            </div>

            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  MEMBER EXCLUSIVE
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Weekly Business Rate</h3>
              <p className="text-standard mb-4">
                Discounted weekly rates for regular business travel.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$350</span>
                <span className="text-2xl font-bold text-black ml-2">$245</span>
                <span className="text-green-500 font-semibold ml-2">30% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• 7-day unlimited mileage</li>
                <li>• Any car category</li>
                <li>• Free delivery/pickup</li>
                <li>• 24/7 roadside assistance</li>
              </ul>
              <button className="btn-standard w-full">Book Weekly Rate</button>
            </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">Easy Booking Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Select Vehicle</h3>
              <p className="text-standard text-sm">
                Choose your preferred car category and rental duration
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Provide Details</h3>
              <p className="text-standard text-sm">
                Enter pickup location, date, and contact information
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Confirm Booking</h3>
              <p className="text-standard text-sm">
                Review details and confirm with secure payment
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Receive Car</h3>
              <p className="text-standard text-sm">
                Get your car at the pickup location on time
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">📍 Service Coverage</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Major Cities</h3>
              <p className="text-standard text-sm">
                Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Multan
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Airports</h3>
              <p className="text-standard text-sm">
                Islamabad Airport, Lahore Airport, Karachi Airport, Peshawar Airport
              </p>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Business Districts</h3>
              <p className="text-standard text-sm">
                Blue Area Islamabad, G-11 Markaz, Mall Road Lahore, DHA Karachi
              </p>
            </div>
          </div>
        </div>

        {/* Partner Companies */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🤝 Our Rental Partners</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Hertz Pakistan</h3>
              <p className="text-standard text-sm">Premium rental services</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Avis Pakistan</h3>
              <p className="text-standard text-sm">Global network coverage</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Budget Rent-a-Car</h3>
              <p className="text-standard text-sm">Affordable options</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Local Partners</h3>
              <p className="text-standard text-sm">Regional coverage</p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Need Help with Car Rental?</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              Our customer service team is available 24/7 to assist with your car rental needs.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Customer Support</h3>
                <p className="text-standard text-sm mb-4">
                  Get help with booking, vehicle selection, and special requests.
                </p>
                <p className="text-standard">
                  <strong>Phone:</strong> +92 310 0570707<br />
                  <strong>Email:</strong> cars@fastjobcareer.com
                </p>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Emergency Support</h3>
                <p className="text-standard text-sm mb-4">
                  24/7 roadside assistance and emergency vehicle replacement.
                </p>
                <p className="text-standard">
                  <strong>Hotline:</strong> +92 300 1234567<br />
                  <strong>Response:</strong> Within 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
