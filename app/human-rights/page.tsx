import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Human Rights",
  "Fast Portal's commitment to human rights, equality, and inclusive workplace practices. Learn about our policies on non-discrimination, fair labor practices, and social responsibility.",
  "human-rights"
);

export default function HumanRightsPage() {
  return (
    <StandardPageLayout 
      title="Human Rights" 
      description="Fast Portal's commitment to human rights, equality, and inclusive workplace practices"
      activeSlug="human-rights"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Human Rights Policy and Commitment
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Fast Portal is fundamentally committed to upholding and promoting human rights in all aspects of our operations, partnerships, and platform activities. Our human rights policy reflects our dedication to creating a workplace and digital environment that respects the dignity, equality, and fundamental freedoms of all individuals. We recognize that as a global platform connecting millions of job seekers and employers, we have a responsibility to champion human rights principles and contribute to positive social change.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Our Human Rights Framework
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal's human rights framework is built upon internationally recognized standards including the Universal Declaration of Human Rights, the International Labour Organization's Declaration on Fundamental Principles and Rights at Work, and the United Nations Guiding Principles on Business and Human Rights. These foundational documents guide our policies, practices, and decision-making processes across all business operations and stakeholder interactions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We conduct regular human rights impact assessments to identify, prevent, and mitigate potential negative impacts of our business activities. Our approach encompasses not only our direct operations but also extends to our supply chain, partner relationships, and the broader ecosystem in which we operate. This comprehensive framework ensures that human rights considerations are integrated into every aspect of our business strategy and daily operations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Non-Discrimination and Equal Opportunity
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal maintains a zero-tolerance policy toward discrimination in any form. We are committed to providing equal opportunities to all individuals regardless of race, ethnicity, color, religion, gender, sexual orientation, age, disability, marital status, national origin, or any other characteristic protected by applicable law. Our platform actively works to eliminate bias in recruitment processes and promote diverse, inclusive workplaces through our technology and policies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement advanced algorithms and regular audits to identify and eliminate discriminatory patterns in job postings, candidate screening, and hiring decisions. Our AI-powered tools are designed to focus on skills, qualifications, and experience rather than demographic characteristics. We provide training and resources to employers on inclusive hiring practices and regularly monitor compliance with our non-discrimination policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Labor Rights and Fair Working Conditions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal champions the fundamental rights of workers including freedom of association, collective bargaining, elimination of forced labor, abolition of child labor, and elimination of discrimination in employment. We work diligently to ensure that all job opportunities listed on our platform comply with international labor standards and local labor laws. Our verification processes include screening for potential labor rights violations and cooperating with authorities to address any identified issues.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We actively promote fair wages, safe working conditions, and reasonable working hours through our platform features and employer guidelines. Our system flags potentially exploitative job postings and provides resources for workers to understand their rights. We maintain partnerships with labor rights organizations and regularly update our policies to reflect evolving international labor standards and best practices.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Privacy and Data Protection Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The right to privacy is fundamental to human dignity, and Fast Portal is committed to protecting the privacy and personal data of all our users. We implement robust data protection measures in compliance with international standards including GDPR, CCPA, and other relevant regulations. Our privacy policies are transparent, user-friendly, and designed to give individuals meaningful control over their personal information.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We conduct regular privacy impact assessments and maintain comprehensive security protocols to protect against unauthorized access, use, or disclosure of personal data. Users have clear rights to access, correct, delete, and port their personal information. We minimize data collection to what is necessary for our services and maintain strict data retention policies that balance operational needs with privacy rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Freedom of Expression and Platform Safety
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                While Fast Portal is primarily a professional platform, we recognize and respect the importance of freedom of expression within appropriate boundaries. We maintain clear community guidelines that balance free expression with the need to maintain a safe, professional, and respectful environment. Our content moderation policies are designed to prevent harassment, hate speech, and other forms of harmful expression while allowing legitimate professional discourse.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We provide transparent processes for content review and appeal, ensuring that decisions about content removal are fair, consistent, and based on clearly defined policies. Our platform includes tools for users to report inappropriate content and behavior, and we maintain dedicated teams to investigate and address such reports promptly and effectively.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Accessibility and Disability Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal is committed to digital accessibility and ensuring that our platform is usable by people with disabilities. We comply with Web Content Accessibility Guidelines (WCAG) and continuously work to improve the accessibility of our website, mobile applications, and services. Our commitment extends to promoting employment opportunities for people with disabilities and supporting inclusive workplace practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We provide accessibility features such as screen reader compatibility, keyboard navigation, high contrast modes, and resizable text. Our customer support team is trained to assist users with disabilities, and we regularly conduct accessibility audits and user testing with people who have diverse accessibility needs. We also work with employers to promote disability inclusion in hiring and workplace practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Gender Equality and Women's Empowerment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal actively promotes gender equality and women's empowerment in the workplace. We are committed to eliminating gender-based discrimination, promoting equal pay for equal work, and increasing women's representation in leadership positions. Our platform includes features to help identify and address gender bias in recruitment and promotion processes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We support initiatives such as mentorship programs for women in technology, flexible work arrangements to support work-life balance, and policies against harassment and discrimination. We regularly publish gender diversity metrics and set targets for improving women's representation across all levels of our organization and among our partner companies.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Environmental Rights and Sustainability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Recognizing that a healthy environment is fundamental to human rights, Fast Portal is committed to environmental sustainability and reducing our ecological footprint. We implement environmentally responsible practices in our operations, promote remote work to reduce commuting emissions, and support green job opportunities. Our platform features sustainability-focused employers and green career opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We measure and report our carbon emissions, implement energy-efficient technologies, and support renewable energy initiatives. Our supply chain policies include environmental criteria, and we work with partners who share our commitment to environmental responsibility. We also provide resources and training to help companies transition to more sustainable business practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Supply Chain and Partner Responsibility
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal extends our human rights commitment to our supply chain and business partners. We conduct due diligence on suppliers and partners to ensure they share our commitment to human rights and ethical business practices. Our supplier code of conduct includes specific requirements regarding labor rights, environmental protection, and anti-corruption measures.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We regularly audit our supply chain and work with partners to improve their human rights performance. We prioritize partnerships with organizations that demonstrate strong human rights records and are committed to continuous improvement. Our procurement processes include human rights criteria, and we maintain transparent reporting on our supply chain impacts.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Grievance Mechanisms and Remediation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal maintains robust grievance mechanisms to address human rights concerns raised by employees, users, or external stakeholders. Our reporting channels are accessible, confidential, and designed to provide effective remedies for legitimate grievances. We ensure that complainants are protected from retaliation and that investigations are conducted fairly and promptly.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We maintain multiple reporting channels including online forms, email hotlines, and dedicated phone lines. Our grievance process includes acknowledgment of receipt, investigation within specified timeframes, communication of findings, and implementation of appropriate remedies. We regularly review and improve our grievance mechanisms based on user feedback and best practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Monitoring, Reporting, and Transparency
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal is committed to transparency in our human rights performance and regularly publishes detailed reports on our human rights impacts, initiatives, and challenges. We participate in external assessments and certifications to validate our human rights practices and identify areas for improvement. Our reporting follows international standards and includes both quantitative metrics and qualitative analysis.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We engage with stakeholders including human rights experts, civil society organizations, and affected communities to gain diverse perspectives on our human rights performance. Our Board of Directors regularly reviews human rights issues and ensures that adequate resources are allocated to human rights initiatives and compliance activities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Continuous Improvement and Future Commitments
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Human rights protection is an ongoing journey that requires continuous learning, adaptation, and improvement. Fast Portal regularly reviews and updates our human rights policies to reflect evolving international standards, emerging challenges, and stakeholder expectations. We invest in research and innovation to develop new approaches to human rights protection in the digital age.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We are committed to being a leader in human rights protection within the technology and recruitment sectors. Our future initiatives include expanding our human rights training programs, strengthening our impact assessment methodologies, and developing new tools to promote inclusive and equitable employment practices. Through these efforts, we aim to create a platform that not only connects people with opportunities but also advances human dignity, equality, and justice for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
