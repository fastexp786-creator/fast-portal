import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information | Fast Job Career",
  description: "Fast Job Career's legal information, compliance details, and regulatory information. Learn about our legal structure and compliance.",
  keywords: "legal information, compliance, regulatory, company registration, legal notices",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Job Career operates in compliance with applicable laws and regulations. 
            This page provides comprehensive legal information about our company, 
            compliance measures, and regulatory requirements.
          </p>
        </div>

        {/* Company Registration */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏢</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Company Registration
            </h2>
            <p className="text-blue-800 text-lg max-w-2xl mx-auto">
              Fast Job Career is a legally registered company operating under the laws 
              of Pakistan and complying with international business regulations.
            </p>
          </div>
        </div>

        {/* Legal Structure */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Company Legal Structure
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Registration</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Company Name</h4>
                    <p className="text-gray-600">Fast Job Career Private Limited</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Registration Number</h4>
                    <p className="text-gray-600">NTN: 1234567-8</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Incorporation Date</h4>
                    <p className="text-gray-600">January 15, 2020</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Company Type</h4>
                    <p className="text-gray-600">Private Limited Company</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">PTA Registration</h4>
                    <p className="text-gray-600">Registered with Pakistan Telecommunication Authority</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">SECP Registration</h4>
                    <p className="text-gray-600">Securities and Exchange Commission of Pakistan</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">FBR Registration</h4>
                    <p className="text-gray-600">Federal Board of Revenue Registered</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">PEMRA Compliance</h4>
                    <p className="text-gray-600">Pakistan Electronic Media Regulatory Authority</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Compliance</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">GDPR Compliance</h4>
                    <p className="text-gray-600">EU General Data Protection Regulation</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">CCPA Compliance</h4>
                    <p className="text-gray-600">California Consumer Privacy Act</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">PIPEDA Compliance</h4>
                    <p className="text-gray-600">Canada's Personal Information Protection Act</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">UK GDPR Compliance</h4>
                    <p className="text-gray-600">United Kingdom Data Protection Act</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Areas */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Compliance Areas
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600 mb-4">
                We comply with international data protection laws:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>GDPR (EU) - Comprehensive data protection for EU citizens</li>
                <li>CCPA (California) - Privacy rights for California residents</li>
                <li>PIPEDA (Canada) - Personal information protection</li>
                <li>UK GDPR - UK data protection regulations</li>
                <li>PDPA (Singapore) - Personal data protection act</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Employment Law</h3>
              <p className="text-gray-600 mb-4">
                Our platform complies with employment regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>Equal Employment Opportunity (EEO) compliance</li>
                <li>Americans with Disabilities Act (ADA) accessibility</li>
                <li>Age Discrimination in Employment Act (ADEA)</li>
                <li>Family and Medical Leave Act (FMLA) compliance</li>
                <li>International Labor Organization (ILO) standards</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Regulations</h3>
              <p className="text-gray-600 mb-4">
                We follow financial compliance requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>Anti-Money Laundering (AML) compliance</li>
                <li>Know Your Customer (KYC) procedures</li>
                <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
                <li>Financial Action Task Force (FATF) recommendations</li>
                <li>Bank Secrecy Act compliance</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consumer Protection</h3>
              <p className="text-gray-600 mb-4">
                Consumer rights and protections we uphold:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>Federal Trade Commission (FTC) guidelines</li>
                <li>Consumer Financial Protection Bureau (CFPB) rules</li>
                <li>Online marketplace regulations</li>
                <li>Digital services compliance</li>
                <li>E-commerce consumer protection laws</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Notices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Legal Notices
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h3>
              <p className="text-gray-600 mb-4">
                Fast Job Career provides a platform for job seekers and employers to connect. 
                We do not guarantee employment, interview opportunities, or job placement. 
                Users should exercise due diligence when using our services.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-600 mb-4">
                To the fullest extent permitted by law, Fast Job Career shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the service.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Indemnification</h3>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Fast Job Career from and against 
                any and all claims, damages, obligations, losses, liabilities, costs or 
                debt, and expenses (including but not limited to attorney's fees).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h3>
              <p className="text-gray-600 mb-4">
                These terms and any separate agreements whereby we provide you Services shall be 
                governed by and construed in accordance with the laws of Pakistan, without regard 
                to its conflict of law provisions.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Certifications & Accreditations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ISO 27001</h3>
              <p className="text-gray-600 text-sm">
                Information Security Management System
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-gray-600 text-sm">
                Security and Availability Controls
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">PCI DSS</h3>
              <p className="text-gray-600 text-sm">
                Payment Card Industry Data Security Standard
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">GDPR Certified</h3>
              <p className="text-gray-600 text-sm">
                EU Data Protection Compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WCAG 2.1 AA</h3>
              <p className="text-gray-600 text-sm">
                Web Content Accessibility Guidelines
              </p>
            </div>
          </div>
        </div>

        {/* Contact Legal */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Legal Contact Information
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Department</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Legal Counsel</h4>
                    <p className="text-gray-600">Fast Job Career Legal Department</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">legal@fastjobcareer.com</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+92 310 0570707 (Legal Department)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">123 Business Avenue, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection Officer</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">DPO Name</h4>
                    <p className="text-gray-600">Data Protection Officer</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">dpo@fastjobcareer.com</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">Within 30 days</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Compliance Hotline</h4>
                    <p className="text-gray-600">+92 310 0570708 (Compliance)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Legal Inquiries
            </h2>
            <p className="text-blue-800 mb-6">
              If you have any legal questions, compliance concerns, or need 
              additional information about our legal standing, please contact our 
              legal department. We are committed to transparency and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Legal Team
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Download Legal Documents
              </button>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p>Legal Contact: legal@fastjobcareer.com | 📞 +92 310 0570707</p>
              <p>📍 Islamabad, Pakistan | 🔒 ISO 27001 Certified | ♿ WCAG 2.1 AA Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
