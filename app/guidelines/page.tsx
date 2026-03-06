import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Guidelines",
  "Community guidelines and terms of use for Fast Portal. Learn about our policies, acceptable behavior, and standards for maintaining a safe and professional environment.",
  "guidelines"
);

export default function GuidelinesPage() {
  return (
    <StandardPageLayout 
      title="Guidelines" 
      description="Community guidelines and policies for maintaining a safe and professional environment on Fast Portal"
      activeSlug="guidelines"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fast Portal Community Guidelines
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to Fast Portal's comprehensive community guidelines, designed to ensure a safe, professional, and productive environment for all users. These guidelines establish the standards of conduct expected from job seekers, employers, partners, and all platform participants. By using Fast Portal, you agree to adhere to these principles that help maintain the integrity and effectiveness of our professional community.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Our Core Values and Principles
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal operates on the foundation of trust, respect, professionalism, and transparency. We believe that every interaction on our platform should reflect these core values. Our community is built on mutual respect between job seekers and employers, creating opportunities while maintaining ethical standards. We encourage open communication, honest representation, and fair treatment for all participants in the recruitment process.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Professionalism extends beyond job qualifications to include communication style, response times, and commitment to follow-through. We expect all users to represent themselves accurately, respond promptly to inquiries, and maintain professional courtesy throughout their interactions. Transparency in job descriptions, company information, and candidate qualifications helps build trust and facilitates successful matches.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                For Job Seekers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Job seekers play a crucial role in maintaining the quality of our platform. We require all candidates to provide accurate and complete information in their profiles, including education, work experience, and skills. Misrepresentation of qualifications, experience, or credentials is strictly prohibited and may result in immediate account suspension. Your resume and profile should reflect your true capabilities and achievements without exaggeration or false claims.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Professional communication is essential when interacting with potential employers. Respond to interview invitations and job offers in a timely manner, even if you're not interested. If you accept an interview or job offer, honor your commitment. Last-minute cancellations or ghosting employers damages your professional reputation and affects the entire community. Maintain appropriate boundaries in all communications and avoid sharing personal information until you've established a professional relationship.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                For Employers and Recruiters
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Employers must provide accurate, detailed, and honest job descriptions that clearly outline responsibilities, requirements, compensation, and working conditions. Misleading job postings that promise unrealistic salaries, benefits, or career progression are strictly prohibited. All job listings must represent genuine employment opportunities with legitimate companies. We require verification of company credentials before allowing job postings to ensure authenticity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Treat all applicants with respect and professionalism, regardless of whether they're selected for the position. Provide timely updates on application status and communicate decisions clearly and professionally. Avoid discriminatory language or practices in job descriptions and hiring processes. All hiring decisions should be based on merit, qualifications, and job-related criteria without regard to race, gender, age, religion, or other protected characteristics.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Prohibited Activities and Content
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To maintain a safe and professional environment, Fast Portal strictly prohibits certain activities and content types. Any form of fraudulent activity, including fake job postings, scam recruitment schemes, or identity theft, will result in immediate account termination and potential legal action. We have zero tolerance for harassment, discrimination, hate speech, or any form of abusive behavior toward other users.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Spam activities, including mass messaging, irrelevant job applications, or promotional content unrelated to legitimate job opportunities, are strictly prohibited. The platform should not be used for multi-level marketing schemes, pyramid schemes, or business opportunities that require upfront payments from job seekers. Selling personal data, sharing confidential information, or violating privacy rights is strictly forbidden and may result in legal consequences.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Intellectual Property and Copyright
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Respect for intellectual property rights is essential on Fast Portal. Users should not upload or share copyrighted material without proper authorization. Company logos, images, and content should only be used with permission from the rightful owners. Job descriptions and company information should be original content or properly attributed sources. Plagiarism in resumes, cover letters, or any professional documents is strictly prohibited.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Users retain ownership of their personal information and professional content, but grant Fast Portal the right to use this information for platform operations and improvement. We respect user privacy and implement robust security measures to protect personal data. However, users are responsible for maintaining the confidentiality of their account credentials and should not share login information with others.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Privacy and Data Protection
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Protecting user privacy is a fundamental principle of Fast Portal. All users must respect the privacy of others and not share personal information without explicit consent. Employers should only collect and use applicant information for legitimate recruitment purposes. Job seekers should be cautious about sharing sensitive personal information until they've verified the legitimacy of the employer and opportunity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We comply with international data protection regulations including GDPR and CCPA. Users have the right to access, modify, or delete their personal information. Our platform implements encryption, secure servers, and regular security audits to protect user data. Any suspected data breaches should be reported immediately to our security team for prompt investigation and response.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Dispute Resolution and Conflict Management
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conflicts and disputes may occasionally arise between users. Fast Portal provides a structured dispute resolution process to address these situations fairly and efficiently. Users should first attempt to resolve conflicts directly through professional communication. If direct resolution fails, our mediation team can facilitate discussions and help find mutually acceptable solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For serious violations of these guidelines, users can file formal complaints through our reporting system. All reports are investigated thoroughly and confidentially. Users found in violation may receive warnings, temporary suspensions, or permanent account termination depending on the severity and frequency of violations. We maintain an appeals process for users who believe disciplinary actions were unjustified.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Reporting Violations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Community participation in maintaining platform integrity is essential. Users are encouraged to report suspicious activities, inappropriate content, or guideline violations through our reporting tools. Reports can be submitted anonymously, and we take all reports seriously. Our moderation team reviews reports promptly and takes appropriate action to address violations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When filing a report, provide as much detail as possible including screenshots, conversation transcripts, and specific examples of violations. False or malicious reporting is also prohibited and may result in account suspension. We appreciate genuine reports that help us maintain a safe and professional environment for all users.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Consequences of Violations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal maintains a graduated enforcement approach to guideline violations. Minor infractions may result in warnings or temporary restrictions on certain features. Repeated violations or serious breaches may lead to account suspension or permanent termination. In cases of illegal activities, we cooperate fully with law enforcement authorities and may pursue legal action.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Users who violate these guidelines may also face consequences beyond platform penalties, including damage to professional reputation and potential legal liability. We maintain records of serious violations and may share this information with other professional networks or authorities when appropriate. Our goal is not punitive but rather to maintain a safe, professional environment for legitimate job seekers and employers.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Continuous Improvement and Updates
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These guidelines are living documents that evolve with our community and changing professional standards. We regularly review and update our guidelines based on user feedback, industry best practices, and emerging challenges. Users will be notified of significant changes through platform announcements and email communications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We encourage all users to familiarize themselves with these guidelines regularly and provide feedback for improvement. Your participation helps us create a better platform for everyone. Together, we can maintain Fast Portal as a trusted, professional, and effective resource for connecting talent with opportunity while upholding the highest standards of integrity and respect in the recruitment industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
