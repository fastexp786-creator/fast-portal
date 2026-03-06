import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/about", text: "About Us", description: "Learn about Fast Portal's mission and values" },
        { href: "/find-jobs", text: "Jobs", description: "Browse thousands of job opportunities worldwide" },
        { href: "/companies", text: "Companies", description: "Connect with top employers globally" },
        { href: "/sectors", text: "Sectors", description: "Explore jobs by industry sectors" },
        { href: "/blog", text: "Blogs", description: "Career advice and industry insights" }
      ]
    },
    {
      title: "Discover",
      links: [
        { href: "/genius-program", text: "Genius Program", description: "Premium career development program" },
        { href: "/deals", text: "Deals", description: "Exclusive offers for job seekers" },
        { href: "/business", text: "Business", description: "B2B recruitment solutions" },
        { href: "/awards", text: "Awards", description: "Recognition and achievements" },
        { href: "/car-rental", text: "Car Rental", description: "Transportation solutions" },
        { href: "/flights", text: "Flights", description: "Travel booking services" },
        { href: "/restaurants", text: "Restaurants", description: "Dining recommendations" }
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/help-center", text: "Help Center", description: "Get answers to common questions" },
        { href: "/faq", text: "FAQs", description: "Frequently asked questions" },
        { href: "/contact", text: "Contact Us", description: "Reach out to our support team" },
        { href: "/safety", text: "Safety", description: "Safety guidelines and protocols" },
        { href: "/report-issue", text: "Report Issue", description: "Report problems or concerns" }
      ]
    },
    {
      title: "Terms & Privacy",
      links: [
        { href: "/terms", text: "Terms of Service", description: "Terms and conditions of use" },
        { href: "/privacy", text: "Privacy Notice", description: "How we protect your data" },
        { href: "/accessibility", text: "Accessibility", description: "Accessibility information" },
        { href: "/modern-slavery", text: "Modern Slavery", description: "Modern slavery statement" },
        { href: "/human-rights", text: "Human Rights", description: "Human rights policy" }
      ]
    },
    {
      title: "About",
      links: [
        { href: "/how-we-work", text: "How We Work", description: "Our process and methodology" },
        { href: "/partner-help", text: "Partner Help", description: "Support for our partners" },
        { href: "/list-property", text: "List Property", description: "List your properties" },
        { href: "/become-affiliate", text: "Become Affiliate", description: "Join our affiliate program" },
        { href: "/guidelines", text: "Guidelines", description: "Community guidelines" }
      ]
    }
  ];

  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "American Express", icon: "💳" },
    { name: "EasyPaisa", icon: "📱" },
    { name: "JazzCash", icon: "📱" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/FastJobCareer/", icon: "📘" },
    { name: "Twitter", href: "https://x.com/fastjobcareer", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Platform Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Platform</h3>
            <ul className="space-y-2">
              {footerSections[0].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Discover</h3>
            <ul className="space-y-2">
              {footerSections[1].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Support</h3>
            <ul className="space-y-2">
              {footerSections[2].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Privacy Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Terms & Privacy</h3>
            <ul className="space-y-2">
              {footerSections[3].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">About</h3>
            <ul className="space-y-2">
              {footerSections[4].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Get the App</h3>
            
            {/* App Download Buttons */}
            <div className="mb-6">
              <div className="space-y-2">
                <a
                  href="#"
                  className="block w-full px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-center text-sm transition-colors duration-200"
                >
                  📱 App Store
                </a>
                <a
                  href="#"
                  className="block w-full px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-center text-sm transition-colors duration-200"
                >
                  📱 Google Play
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <label className="block text-sm font-medium mb-2">Follow Us</label>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center text-sm transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2 text-blue-400">Payment Methods</h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="px-3 py-1 bg-gray-800 rounded text-xs flex items-center space-x-1"
                  >
                    <span>{method.icon}</span>
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-green-400">🔒</span>
                <span className="text-xs text-gray-400">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">✓</span>
                <span className="text-xs text-gray-400">Verified by Fast Portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <span>📞</span>
                  <span>+92 310 0570707</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>✉️</span>
                  <span>info@fastjobcareer.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📍</span>
                  <span>G-9 Markaz, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:border-blue-400">
                <option>🇺🇸 English</option>
                <option>🇵🇰 اردو</option>
                <option>🇸🇦 العربية</option>
              </select>
              <select className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:border-blue-400">
                <option>USD</option>
                <option>PKR</option>
                <option>SAR</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2026 Fast Portal. All Rights Reserved.</div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors duration-200"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive - Accordion Style */}
      <div className="md:hidden">
        {footerSections.map((section) => (
          <div key={section.title} className="border-t border-gray-800">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-800"
            >
              <span className="text-blue-400 font-semibold">{section.title}</span>
              <span>{expandedSections.includes(section.title) ? '−' : '+'}</span>
            </button>
            {expandedSections.includes(section.title) && (
              <div className="px-4 pb-3">
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
