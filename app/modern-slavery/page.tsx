import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Modern Slavery Statement",
  "Fast Portal's modern slavery statement outlines our commitment to preventing slavery and human trafficking in our operations and supply chains.",
  "modern-slavery"
);

export default function ModernSlaveryPage() {
  return (
    <StandardPageLayout
      title="Modern Slavery Statement"
      description="Fast Portal's modern slavery statement outlines our commitment to preventing slavery and human trafficking in our operations and supply chains."
      activeSlug="modern-slavery"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Modern Slavery Statement
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Modern Slavery Statement
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Fast Portal is committed to preventing slavery and human trafficking in our operations and supply chains. This statement outlines our policies, procedures, and commitment to ethical practices.
          </p>
        </div>

        <div className="card-standard">
          <div className="space-y-8 text-sm text-standard">
            <section>
              <h2 className="heading-standard text-xl mb-4">Our Commitment</h2>
              <p>
                Fast Portal is unequivocally opposed to slavery and human trafficking in all its forms. We are committed to preventing slavery and human trafficking in our operations and supply chains, and to ensuring that our business practices are ethical and transparent.
              </p>
              <p>
                This statement is made pursuant to the UK Modern Slavery Act 2015 and similar legislation in other jurisdictions. It outlines the steps we have taken to ensure that slavery and human trafficking are not taking place in our business or supply chains.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-2">Zero Tolerance Policy</h3>
                  <p className="mb-2">
                    Fast Portal maintains a zero-tolerance approach to slavery and human trafficking. We are committed to acting ethically and with integrity in all our business dealings and relationships.
                  </p>
                  <p>
                    We expect the same high standards from all our contractors, suppliers, and other business partners. Any breach of our anti-slavery policy will result in immediate termination of our relationship.
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-2">Legal Compliance</h3>
                  <p className="mb-2">
                    We comply with all applicable laws and regulations related to modern slavery, including the UK Modern Slavery Act 2015, California Transparency in Supply Chains Act, and other relevant legislation.
                  </p>
                  <p>
                    Our legal compliance team regularly reviews and updates our policies to ensure we remain compliant with evolving legal requirements and best practices in combatting modern slavery.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Our Business and Supply Chains</h2>
              <p>
                Fast Portal operates as a digital platform connecting job seekers with employers globally. Our business model and supply chains are structured to minimize risks of modern slavery.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="heading-standard text-base mb-2">Business Operations</h3>
                  <p className="mb-2">
                    Our primary operations involve digital platform management, customer support, marketing, and technology development. We maintain direct control over our core business operations.
                  </p>
                  <p>
                    We employ staff directly through formal employment contracts with fair wages, benefits, and working conditions that comply with local labor laws and exceed minimum requirements where possible.
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-2">Supply Chain Overview</h3>
                  <p className="mb-2">
                    Our supply chains include technology providers, cloud services, marketing agencies, payment processors, and professional services. We carefully select and monitor all our suppliers.
                  </p>
                  <p>
                    We prioritize suppliers who demonstrate commitment to ethical practices and have robust anti-slavery policies in place. Our supply chain is primarily digital, reducing physical labor risks.
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-2">Risk Assessment</h3>
                  <p className="mb-2">
                    We conduct regular risk assessments of our operations and supply chains to identify potential areas where modern slavery could occur. Our digital-first model inherently reduces many traditional risks.
                  </p>
                  <p>
                    Key risk areas include third-party services, international operations, and contractor relationships. We implement enhanced due diligence for higher-risk categories.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Policies and Procedures</h2>
              <p>
                Fast Portal has implemented comprehensive policies and procedures to prevent modern slavery in our operations and supply chains. These policies are regularly reviewed and updated.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Anti-Slavery Policy</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our comprehensive anti-slavery policy prohibits all forms of modern slavery and human trafficking within our organization and supply chains.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Clear prohibition of forced labor and human trafficking</li>
                    <li>• Requirements for fair wages and working conditions</li>
                    <li>• Freedom of movement and no document retention</li>
                    <li>• Right to collective bargaining and representation</li>
                    <li>• Safe and healthy working environments</li>
                  </ul>
                </div>

                <div className="card-standard p-6">
                  <h3 className="heading-standard text-base mb-3">Due Diligence Process</h3>
                  <p className="mb-3 text-standard text-sm">
                    We conduct thorough due diligence on all suppliers and business partners to ensure they comply with our anti-slavery standards.
                  </p>
                  <ul className="space-y-2 text-standard text-sm">
                    <li>• Supplier screening and background checks</li>
                    <li>• Regular audits and compliance assessments</li>
                    <li>• Contractual requirements for ethical practices</li>
                    <li>• Monitoring and reporting mechanisms</li>
                    <li>• Continuous improvement processes</li>
                  </ul>
                </div>

                <div className="card-standard p-6">
                  <h3 className="heading-standard text-base mb-3">Whistleblowing Policy</h3>
                  <p className="mb-3 text-standard text-sm">
                    We provide secure channels for employees and external stakeholders to report concerns about modern slavery or unethical practices.
                  </p>
                  <ul className="space-y-2 text-standard text-sm">
                    <li>• Anonymous reporting through multiple channels</li>
                    <li>• Protection against retaliation</li>
                    <li>• Prompt investigation of all reports</li>
                    <li>• Confidential handling of sensitive information</li>
                    <li>• Regular training on identifying and reporting concerns</li>
                  </ul>
                </div>

                <div className="card-standard p-6">
                  <h3 className="heading-standard text-base mb-3">Recruitment Practices</h3>
                  <p className="mb-3 text-standard text-sm">
                    Our recruitment processes are designed to prevent exploitation and ensure fair treatment of all candidates and employees.
                  </p>
                  <ul className="space-y-2 text-standard text-sm">
                    <li>• Direct recruitment without third-party intermediaries</li>
                    <li>• Verification of all recruitment agencies</li>
                    <li>• No recruitment fees charged to workers</li>
                    <li>• Transparent job descriptions and terms</li>
                    <li>• Equal opportunity and non-discrimination policies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Training and Awareness</h2>
              <p>
                Fast Portal provides comprehensive training to our staff and stakeholders to ensure awareness of modern slavery risks and our commitment to preventing them.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="heading-standard text-base mb-3">Employee Training</h3>
                  <p className="mb-2 text-standard text-sm">
                    All employees receive mandatory training on modern slavery awareness, identification, and reporting procedures.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Annual mandatory training for all staff</li>
                    <li>• Specialized training for procurement and HR teams</li>
                    <li>• Management training on policy implementation</li>
                    <li>• Regular updates on emerging risks and best practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Supplier Engagement</h3>
                  <p className="mb-2 text-standard text-sm">
                    We work with our suppliers to ensure they understand and implement effective anti-slavery measures in their own operations.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Supplier training sessions and workshops</li>
                    <li>• Distribution of best practice guidelines</li>
                    <li>• Regular communication on policy updates</li>
                    <li>• Support for supplier improvement initiatives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Public Awareness</h3>
                  <p className="mb-2 text-standard text-sm">
                    We actively participate in industry initiatives and public awareness campaigns to combat modern slavery globally.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Membership in anti-slavery organizations</li>
                    <li>• Participation in industry working groups</li>
                    <li>• Public reporting and transparency initiatives</li>
                    <li>• Support for anti-slavery charities and NGOs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Monitoring and Reporting</h2>
              <p>
                We have established robust monitoring and reporting mechanisms to ensure ongoing compliance with our anti-slavery commitments and to identify areas for improvement.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Performance Monitoring</h3>
                  <p className="mb-2 text-standard text-sm">
                    We continuously monitor our performance against anti-slavery indicators and track progress towards our commitments.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Key performance indicators for anti-slavery efforts</li>
                    <li>• Regular internal audits and assessments</li>
                    <li>• Supplier compliance scorecards and ratings</li>
                    <li>• Incident tracking and trend analysis</li>
                    <li>• Quarterly review meetings with senior management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Reporting Mechanisms</h3>
                  <p className="mb-2 text-standard text-sm">
                    We maintain multiple channels for reporting concerns about modern slavery or unethical practices.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Internal whistleblowing hotline and email</li>
                    <li>• External reporting through ethics channels</li>
                    <li>• Anonymous reporting options available</li>
                    <li>• Regular stakeholder feedback collection</li>
                    <li>• Third-party verification and certification</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Effectiveness Assessment</h2>
              <p>
                We regularly assess the effectiveness of our anti-slavery measures and make improvements where necessary. This assessment helps us identify gaps and strengthen our approach.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="heading-standard text-base mb-3">Key Indicators</h3>
                  <p className="mb-2 text-standard text-sm">
                    We track specific indicators to measure the effectiveness of our anti-slavery program and identify areas for improvement.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Number of slavery-related reports and investigations</li>
                    <li>• Supplier compliance rates and audit findings</li>
                    <li>• Employee training completion and effectiveness</li>
                    <li>• Stakeholder satisfaction and feedback scores</li>
                    <li>• Continuous improvement initiatives implemented</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Continuous Improvement</h3>
                  <p className="mb-2 text-standard text-sm">
                    Based on our assessments, we continuously improve our policies, procedures, and practices to enhance our anti-slavery efforts.
                  </p>
                  <ul className="space-y-1 text-standard text-sm">
                    <li>• Annual review and update of anti-slavery policies</li>
                    <li>• Implementation of best practice recommendations</li>
                    <li>• Investment in new technologies and tools</li>
                    <li>• Collaboration with industry partners and experts</li>
                    <li>• Regular benchmarking against industry standards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Board Approval</h2>
              <p>
                This Modern Slavery Statement has been approved by the Board of Directors of Fast Portal and demonstrates our commitment to preventing slavery and human trafficking in our operations and supply chains.
              </p>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Governance Oversight</h3>
                  <p className="mb-2 text-standard text-sm">
                    Our Board of Directors maintains overall responsibility for ensuring compliance with modern slavery legislation and ethical business practices.
                  </p>
                  <p>
                    The Board receives regular reports on our anti-slavery activities, risk assessments, and effectiveness measures. Senior management is accountable for implementing our anti-slavery policies.
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">Statement Period</h3>
                  <p className="mb-2 text-standard text-sm">
                    This statement covers the period from January 1, 2025 to December 31, 2025 and will be updated annually to reflect our ongoing commitment.
                  </p>
                  <p>
                    We will continue to review and strengthen our approach to combating modern slavery and will update this statement to reflect any significant changes or improvements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-standard text-xl mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Modern Slavery Statement or concerns about slavery and human trafficking in our operations or supply chains, please contact us.
              </p>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="heading-standard text-base mb-3">Reporting Concerns</h3>
                  <p className="mb-2 text-standard text-sm">
                    For reporting concerns about modern slavery or unethical practices, please contact our compliance team through secure channels.
                  </p>
                  <p>
                    <strong>Email:</strong> compliance@fastportal.com<br />
                    <strong>Phone:</strong> +92 310 0570707<br />
                    <strong>Confidential Hotline:</strong> Available 24/7 for urgent concerns
                  </p>
                </div>
                <div>
                  <h3 className="heading-standard text-base mb-3">General Inquiries</h3>
                  <p className="mb-2 text-standard text-sm">
                    For general questions about our anti-slavery policies and practices, please contact our main office.
                  </p>
                  <p>
                    <strong>Email:</strong> info@fastportal.com<br />
                    <strong>Phone:</strong> +92 310 0570707<br />
                    <strong>Address:</strong> G-9 Markaz, Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 card-standard">
          <p className="text-center text-sm text-standard">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </StandardPageLayout>
  );
}
