import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Flight Booking Services",
  "Book affordable flights for job interviews and business travel. Fast Job Career partners with airlines to provide discounted flight tickets for professionals.",
  "flights"
);

export default function FlightsPage() {
  return (
    <StandardPageLayout
      title="Flight Booking Services"
      description="Book affordable flights for job interviews and business travel. Fast Job Career partners with airlines to provide discounted flight tickets for professionals."
      activeSlug="flights"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Travel Services
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Flight Booking Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Convenient and affordable flight booking services for job interviews, business meetings, and professional travel. Fast Job Career partners with major airlines to offer exclusive discounts for our members.
          </p>
        </div>

        {/* Service Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">Why Book Flights Through Fast Job Career?</h2>
            <p className="text-standard mb-6">
              Traveling for job interviews and business meetings shouldn't break the bank. Our flight booking service provides competitive prices, flexible options, and special discounts for professionals and job seekers.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Exclusive Discounts</h3>
                <p className="text-standard text-sm">
                  Special member discounts up to 25% off regular airline prices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Flexible Booking</h3>
                <p className="text-standard text-sm">
                  Easy cancellation and rescheduling options for uncertain interview dates
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Trusted Partners</h3>
                <p className="text-standard text-sm">
                  Partnered with major airlines for reliable service and support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Categories */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">Flight Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Domestic Flights</h3>
              <p className="text-standard mb-4">
                Quick and convenient flights within Pakistan for interviews and meetings.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Islamabad - Karachi</li>
                <li>• Lahore - Islamabad</li>
                <li>• Peshawar - Karachi</li>
                <li>• All major cities covered</li>
                <li>• 1-2 hour flight time</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$45</span>
              </div>
              <button className="btn-standard w-full">Book Domestic</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Regional Flights</h3>
              <p className="text-standard mb-4">
                Flights to neighboring countries for regional job opportunities.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Pakistan - UAE</li>
                <li>• Pakistan - Saudi Arabia</li>
                <li>• Pakistan - Qatar</li>
                <li>• Pakistan - Oman</li>
                <li>• 2-4 hour flight time</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$180</span>
              </div>
              <button className="btn-standard w-full">Book Regional</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">International Flights</h3>
              <p className="text-standard mb-4">
                Long-haul flights to global destinations for international opportunities.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Pakistan - UK</li>
                <li>• Pakistan - USA</li>
                <li>• Pakistan - Canada</li>
                <li>• Pakistan - Australia</li>
                <li>• 8-15 hour flight time</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$650</span>
              </div>
              <button className="btn-standard w-full">Book International</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Business Class</h3>
              <p className="text-standard mb-4">
                Premium business class flights for executive interviews and meetings.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Priority boarding</li>
                <li>• Lounge access</li>
                <li>• Premium meals</li>
                <li>• Extra baggage allowance</li>
                <li>• Comfortable seating</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$350</span>
              </div>
              <button className="btn-standard w-full">Book Business</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Last Minute Flights</h3>
              <p className="text-standard mb-4">
                Emergency flights for urgent interviews and business requirements.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• 24-hour booking</li>
                <li>• Same-day travel</li>
                <li>• Express check-in</li>
                <li>• Priority service</li>
                <li>• Flexible options</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$120</span>
              </div>
              <button className="btn-standard w-full">Book Last Minute</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Group Travel</h3>
              <p className="text-standard mb-4">
                Special rates for group bookings and team travel requirements.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• 10+ passengers discount</li>
                <li>• Group coordination</li>
                <li>• Special check-in</li>
                <li>• Group seating</li>
                <li>• Dedicated support</li>
              </ul>
              <div className="mb-4">
                <span className="text-lg font-bold text-black">Starting from</span>
                <span className="text-2xl font-bold text-black ml-2">$80/person</span>
              </div>
              <button className="btn-standard w-full">Book Group</button>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🛫 Popular Interview Routes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Islamabad → Dubai</h3>
              <p className="text-standard text-sm mb-3">
                Most popular route for UAE job interviews with multiple daily flights.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">$220</span>
                <button className="btn-standard text-sm">Book Now</button>
              </div>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Lahore → Riyadh</h3>
              <p className="text-standard text-sm mb-3">
                Direct flights for Saudi Arabia job opportunities and interviews.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">$280</span>
                <button className="btn-standard text-sm">Book Now</button>
              </div>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Karachi → London</h3>
              <p className="text-standard text-sm mb-3">
                Weekly flights for UK job interviews and business meetings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">$680</span>
                <button className="btn-standard text-sm">Book Now</button>
              </div>
            </div>

            <div className="card-standard p-4">
              <h3 className="heading-standard text-base mb-2">Islamabad → Doha</h3>
              <p className="text-standard text-sm mb-3">
                Daily flights for Qatar job opportunities and business travel.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">$250</span>
                <button className="btn-standard text-sm">Book Now</button>
              </div>
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
              <h3 className="heading-standard text-lg mb-2">Interview Travel Package</h3>
              <p className="text-standard mb-4">
                Complete travel package for job interview attendees.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$150</span>
                <span className="text-2xl font-bold text-black ml-2">$100</span>
                <span className="text-green-500 font-semibold ml-2">33% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Round-trip domestic flight</li>
                <li>• Airport transfer</li>
                <li>• Flexible booking</li>
                <li>• Interview day support</li>
              </ul>
              <button className="btn-standard w-full">Book Interview Package</button>
            </div>

            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  MEMBER EXCLUSIVE
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Monthly Travel Pass</h3>
              <p className="text-standard mb-4">
                Unlimited domestic flights for frequent interview travelers.
              </p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">$500</span>
                <span className="text-2xl font-bold text-black ml-2">$350</span>
                <span className="text-green-500 font-semibold ml-2">30% OFF</span>
              </div>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Unlimited domestic flights</li>
                <li>• Priority booking</li>
                <li>• Free changes</li>
                <li>• Lounge access</li>
              </ul>
              <button className="btn-standard w-full">Get Monthly Pass</button>
            </div>
          </div>
        </div>

        {/* Airline Partners */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🤝 Our Airline Partners</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Pakistan International Airlines</h3>
              <p className="text-standard text-sm">National carrier with extensive domestic network</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Emirates</h3>
              <p className="text-standard text-sm">Premium international flights to UAE and beyond</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Saudi Arabian Airlines</h3>
              <p className="text-standard text-sm">Direct flights to Saudi Arabia and Gulf region</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Qatar Airways</h3>
              <p className="text-standard text-sm">Five-star airline with global network coverage</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Air Arabia</h3>
              <p className="text-standard text-sm">Budget-friendly regional flights</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Turkish Airlines</h3>
              <p className="text-standard text-sm">European and international connections</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Etihad Airways</h3>
              <p className="text-standard text-sm">Premium flights to Abu Dhabi and worldwide</p>
            </div>

            <div className="card-standard p-4 text-center">
              <h3 className="heading-standard text-base mb-2">Gulf Air</h3>
              <p className="text-standard text-sm">Regional connections through Bahrain</p>
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
              <h3 className="heading-standard text-base mb-2">Search Flights</h3>
              <p className="text-standard text-sm">
                Enter origin, destination, and travel dates
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Select Flight</h3>
              <p className="text-standard text-sm">
                Choose your preferred flight and class of travel
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Enter Details</h3>
              <p className="text-standard text-sm">
                Provide passenger information and special requests
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Confirm & Pay</h3>
              <p className="text-standard text-sm">
                Review booking and complete secure payment
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Flight Booking Support</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              Our travel experts are available 24/7 to assist with your flight booking needs and travel planning.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Booking Support</h3>
                <p className="text-standard text-sm mb-4">
                  Help with flight selection, booking issues, and special requests.
                </p>
                <p className="text-standard">
                  <strong>Phone:</strong> +92 310 0570707<br />
                  <strong>Email:</strong> flights@fastjobcareer.com
                </p>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Emergency Travel</h3>
                <p className="text-standard text-sm mb-4">
                  24/7 emergency flight booking for urgent interview requirements.
                </p>
                <p className="text-standard">
                  <strong>Hotline:</strong> +92 300 1234567<br />
                  <strong>Response:</strong> Within 1 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
