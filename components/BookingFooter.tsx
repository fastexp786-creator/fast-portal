import Link from "next/link";
import { useState, useEffect } from "react";

interface PaymentMethod {
  name: string;
  icon: string;
}

interface FooterSection {
  id: string;
  title: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

interface FooterData {
  company: {
    name: string;
    description: string;
    offices: Array<{
      country: string;
      city: string;
      flag: string;
    }>;
    support: {
      phone: string;
      email: string;
      hours: string;
      online: string;
    };
  };
  sections: FooterSection[];
  paymentMethods: PaymentMethod[];
  apps: {
    playStore: string;
    appStore: string;
  };
}

export default function BookingFooter() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [country, setCountry] = useState('Pakistan');
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('PKR');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Static footer data (Supabase se replace ho ga)
  const staticFooterData = {
    company: {
      name: "Fast Job Career",
      description: "International Job Portal",
      offices: [
        { country: "Pakistan", city: "Islamabad", flag: "🇵🇰" },
        { country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦" },
        { country: "UAE", city: "Dubai", flag: "🇦🇪" },
        { country: "UK", city: "London", flag: "🇬🇧" }
      ],
      support: {
        phone: "+92 310 0570707",
        email: "info@fastjobcareer.com",
        hours: "Mon-Fri 9AM-6PM (PKT)",
        online: "24/7 Online Support"
      }
    },
    sections: [
      {
        id: "company",
        title: "Company",
        links: [
          { title: "About Us", url: "/about" },
          { title: "Careers", url: "/careers" },
          { title: "Press", url: "/press" },
          { title: "Investor Relations", url: "/investors" },
          { title: "Blog", url: "/blog" },
          { title: "Sustainability", url: "/sustainability" }
        ]
      },
      {
        id: "explore",
        title: "Explore",
        links: [
          { title: "Jobs by Country", url: "/jobs/countries" },
          { title: "Jobs by City", url: "/jobs/cities" },
          { title: "Jobs by Airport", url: "/jobs/airports" },
          { title: "Jobs by Industry", url: "/jobs/industries" },
          { title: "Popular Jobs", url: "/jobs/popular" },
          { title: "Remote Jobs", url: "/jobs/remote" }
        ]
      },
      {
        id: "partners",
        title: "Partners",
        links: [
          { title: "Extranet Login", url: "/extranet" },
          { title: "Partner Hub", url: "/partners" },
          { title: "Advertise", url: "/advertise" },
          { title: "Affiliate Program", url: "/affiliate" },
          { title: "API Access", url: "/api" },
          { title: "Become a Partner", url: "/become-partner" }
        ]
      },
      {
        id: "support",
        title: "Support",
        links: [
          { title: "Help Center", url: "/help" },
          { title: "Contact Us", url: "/contact" },
          { title: "Safety Resource Center", url: "/safety" },
          { title: "Report Issue", url: "/report" },
          { title: "FAQ", url: "/faq" },
          { title: "Live Chat", url: "/chat" }
        ]
      },
      {
        id: "terms",
        title: "Terms",
        links: [
          { title: "Privacy", url: "/privacy" },
          { title: "Terms", url: "/terms" },
          { title: "Cookies", url: "/cookies" },
          { title: "Sitemap", url: "/sitemap" },
          { title: "Accessibility", url: "/accessibility" },
          { title: "Legal", url: "/legal" }
        ]
      },
      {
        id: "apps",
        title: "Apps & Social",
        links: [
          { title: "Mobile Apps", url: "/apps" },
          { title: "Facebook", url: "https://facebook.com/FastJobCareer" },
          { title: "Twitter", url: "https://twitter.com/fastjobcareer" },
          { title: "LinkedIn", url: "https://linkedin.com/company/fastjobcareer" },
          { title: "TikTok", url: "https://tiktok.com/@fastjobcareer" },
          { title: "Instagram", url: "https://instagram.com/fastjobcareer" }
        ]
      }
    ],
    paymentMethods: [
      { name: "Visa", icon: "💳" },
      { name: "Mastercard", icon: "💳" },
      { name: "PayPal", icon: "💳" },
      { name: "Bank Transfer", icon: "🏦" },
      { name: "EasyPaisa", icon: "💰" },
      { name: "JazzCash", icon: "💰" }
    ],
    apps: {
      playStore: "https://play.google.com/store/apps/details?id=com.fastjobcareer",
      appStore: "https://apps.apple.com/app/fast-job-career/id123456789"
    }
  };

  useEffect(() => {
    setFooterData(staticFooterData);
    // TODO: Supabase se data load karna
    // const { data } = await supabase.from('footer_config').select('*');
    // setFooterData(data);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  if (!footerData) {
    return (
      <div className="min-h-24 bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading footer...</div>
      </div>
    );
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Bar with Selectors */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-4">
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="Pakistan">🇵🇰 Pakistan</option>
                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                <option value="UAE">🇦🇪 UAE</option>
                <option value="UK">🇬🇧 UK</option>
                <option value="USA">🇺🇸 USA</option>
              </select>
              
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="English">🌐 English</option>
                <option value="Urdu">🇵🇰 اردو</option>
                <option value="Arabic">🇸🇦 العربية</option>
                <option value="Hindi">🇮🇳 हिंदी</option>
              </select>
              
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="PKR">💵 PKR</option>
                <option value="USD">💵 USD</option>
                <option value="SAR">💵 SAR</option>
                <option value="AED">💵 AED</option>
                <option value="GBP">💵 GBP</option>
              </select>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="text-green-400">🔒</span>
                <span>SSL Secured</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span>4.8 Rating</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerData?.sections.map((section: FooterSection) => (
            <div key={section.id} className="footer-section">
              {/* Desktop View */}
              <div className="hidden lg:block">
                <h3 className="font-bold text-lg mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link: { title: string; url: string }, index: number) => (
                    <li key={index}>
                      <Link 
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile View - Accordion */}
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between font-bold text-lg mb-4 text-white py-2"
                >
                  {section.title}
                  <span className="text-gray-400">
                    {expandedSections[section.id] ? '−' : '+'}
                  </span>
                </button>
                {expandedSections[section.id] && (
                  <ul className="space-y-2 mb-4">
                    {section.links.map((link: { title: string; url: string }, index: number) => (
                      <li key={index}>
                        <Link 
                          href={link.url}
                          className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Payment Methods:</span>
              <div className="flex gap-2">
                {footerData?.paymentMethods.map((method: PaymentMethod, index: number) => (
                  <button
                    key={index}
                    onClick={() => window.open(`/payment-methods?method=${method.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all hover:scale-110 border border-gray-700"
                    title={method.name}
                  >
                    <span className="text-2xl">{method.icon}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={footerData.apps.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
              >
                <span>📱</span>
                Play Store
              </a>
              <a 
                href={footerData.apps.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
              >
                <span>🍎</span>
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* Offices and Contact */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-white">📍 Offices</h4>
              <div className="space-y-2">
                {footerData?.company.offices.map((office: { country: string; city: string; flag: string }, index: number) => (
                  <div key={index} className="text-gray-300">
                    <span className="mr-2">{office.flag}</span>
                    <span>{office.city}, {office.country}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">📞 Support</h4>
              <div className="space-y-2 text-gray-300">
                <div>📧 {footerData.company.support.email}</div>
                <div>📱 {footerData.company.support.phone}</div>
                <div>🕐 {footerData.company.support.hours}</div>
                <div>🌍 {footerData.company.support.online}</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">📧 Newsletter</h4>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">🔗 Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © 2026 {footerData?.company.name}. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Powered by Fast Portal Technology</span>
              <span>•</span>
              <span>Version 2.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all z-50 lg:hidden"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
