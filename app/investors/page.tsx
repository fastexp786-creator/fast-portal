import StandardPageLayout from "@/components/StandardPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Fast Job Career",
  description: "Learn about Fast Job Career's business growth, financial performance, and investment opportunities. Partner with us in revolutionizing international recruitment.",
};

export default function InvestorsPage() {
  return (
    <StandardPageLayout
      title="Investor Relations"
      subtitle="Join Us in Transforming Global Recruitment"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Investor Relations", href: "/investors" },
      ]}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">About Fast Job Career</h2>
          <p className="text-standard mb-4">
            Fast Job Career is a leading technology company revolutionizing the international 
            recruitment industry. Founded in 2020, we have grown to become one of the most 
            trusted platforms connecting job seekers with overseas employers, serving over 
            2 million registered users and partnering with 5,000+ employers across 50 countries.
          </p>
          <p className="text-standard">
            Our mission is to democratize access to global employment opportunities by 
            leveraging cutting-edge technology, AI-powered matching algorithms, and a 
            deep understanding of the recruitment landscape. As the demand for international 
            talent continues to grow, Fast Job Career is positioned at the forefront of 
            this expanding market.
          </p>
        </section>

        {/* Investment Highlights */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Investment Highlights</h2>
          <p className="text-standard mb-4">
            Fast Job Career presents a compelling investment opportunity in the rapidly 
            growing HR technology sector. Our strong market position, innovative technology 
            platform, and experienced leadership team create significant value for investors.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-blue-900 mb-3">Market Opportunity</h3>
              <p className="text-sm text-blue-800">
                The global online recruitment market is projected to reach $50 billion 
                by 2027, growing at 15% CAGR. International job placement represents the 
                fastest-growing segment, driven by labor shortages in developed economies 
                and increasing mobility of skilled workers.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-green-900 mb-3">Strong Growth Metrics</h3>
              <p className="text-sm text-green-800">
                We&apos;ve achieved 150% year-over-year revenue growth and 80% user growth. 
                Our platform processes over 1 million job applications monthly with an 
                industry-leading 35% placement success rate.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-purple-900 mb-3">Technology Leadership</h3>
              <p className="text-sm text-purple-800">
                Our proprietary AI matching engine and blockchain-verified credentials 
                system provide significant competitive advantages and high barriers to 
                entry for potential competitors.
              </p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-amber-900 mb-3">Diverse Revenue Streams</h3>
              <p className="text-sm text-amber-800">
                Our business model includes job posting fees, subscription services, 
                recruitment commissions, visa processing services, and corporate 
                training programs, creating multiple revenue channels.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Performance */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Financial Performance</h2>
          <p className="text-standard mb-4">
            Fast Job Career has demonstrated consistent financial growth since our inception, 
            with improving unit economics and expanding margins. Our disciplined approach to 
            scaling has positioned us for sustainable long-term profitability.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-right">2022</th>
                  <th className="p-3 text-right">2023</th>
                  <th className="p-3 text-right">2024 (Est)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Revenue</td>
                  <td className="p-3 text-right">$2.5M</td>
                  <td className="p-3 text-right">$6.2M</td>
                  <td className="p-3 text-right">$15M</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Registered Users</td>
                  <td className="p-3 text-right">800K</td>
                  <td className="p-3 text-right">1.5M</td>
                  <td className="p-3 text-right">2.5M</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Employer Partners</td>
                  <td className="p-3 text-right">1,200</td>
                  <td className="p-3 text-right">2,800</td>
                  <td className="p-3 text-right">5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Successful Placements</td>
                  <td className="p-3 text-right">15,000</td>
                  <td className="p-3 text-right">35,000</td>
                  <td className="p-3 text-right">80,000</td>
                </tr>
                <tr>
                  <td className="p-3">Gross Margin</td>
                  <td className="p-3 text-right">62%</td>
                  <td className="p-3 text-right">68%</td>
                  <td className="p-3 text-right">72%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Leadership Team</h2>
          <p className="text-standard mb-4">
            Our experienced management team brings decades of combined expertise in 
            technology, recruitment, and international business operations. Led by 
            industry veterans, we&apos;re building a world-class organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="font-semibold">CEO Name</h3>
              <p className="text-sm text-gray-600">Chief Executive Officer</p>
              <p className="text-xs text-gray-500 mt-2">Former VP at LinkedIn, 15+ years in HR Tech</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="font-semibold">CTO Name</h3>
              <p className="text-sm text-gray-600">Chief Technology Officer</p>
              <p className="text-xs text-gray-500 mt-2">Ex-Google, AI & Machine Learning Expert</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="font-semibold">CFO Name</h3>
              <p className="text-sm text-gray-600">Chief Financial Officer</p>
              <p className="text-xs text-gray-500 mt-2">Former Goldman Sachs, MBA from Harvard</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="card-standard p-6">
          <h2 className="heading-standard mb-4">Investor Contact</h2>
          <p className="text-standard mb-4">
            For investor inquiries, financial reports, or to schedule a meeting with our 
            leadership team, please contact our Investor Relations department.
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Investor Relations Team</p>
            <p className="text-standard">Email: investors@fastjobcareer.com</p>
            <p className="text-standard">Phone: +92 310 0570707 ext. 100</p>
            <p className="text-standard">Address: G-9 Markaz, Islamabad, Pakistan</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="heading-standard mb-4">Interested in Investing?</h2>
          <p className="text-standard mb-6">
            Download our investor deck and financial reports to learn more about 
            this exciting opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Download Investor Deck
            </a>
            <a
              href="/contact"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Schedule a Meeting
            </a>
          </div>
        </section>
      </div>
    </StandardPageLayout>
  );
}
