import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "How We Work",
  "Learn how Fast Portal operates, our process, methodology, and commitment to connecting job seekers with employers globally.",
  "how-we-work"
);

export default function HowWeWorkPage() {
  return (
    <StandardPageLayout 
      title="How We Work" 
      description="Discover Fast Portal's operational framework and how we connect talent with opportunity"
      activeSlug="how-we-work"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How Fast Portal Works
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Fast Portal operates as a comprehensive digital platform that bridges the gap between talented job seekers and reputable employers worldwide. Our systematic approach ensures that both candidates and companies find their perfect matches through our advanced technology and human expertise combined.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Our Core Process
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our methodology is built on three fundamental pillars: Technology, Transparency, and Trust. When job seekers join Fast Portal, they create comprehensive profiles that showcase their skills, experience, and career aspirations. Our AI-powered matching system then analyzes these profiles against thousands of job postings from verified employers, ensuring optimal compatibility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                For Job Seekers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The journey begins with a simple registration process where candidates provide their professional information, upload resumes, and specify their job preferences. Our platform then guides them through a series of optional assessments that help identify their strengths and areas for improvement. This data enables our matching algorithm to suggest the most relevant opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Once registered, job seekers gain access to our extensive job database, where they can search by location, industry, salary range, and various other filters. They receive personalized job recommendations based on their profile and can apply directly through our platform with just one click. Our application tracking system keeps them informed about their application status at every step.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                For Employers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Employers benefit from our streamlined recruitment process that saves time and resources while improving hiring quality. After company verification, employers can post job openings, specifying detailed requirements, compensation packages, and company culture information. Our platform promotes these listings to suitable candidates automatically.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our employer dashboard provides comprehensive analytics on job postings, applicant demographics, and hiring metrics. Companies can screen candidates using our built-in tools, schedule interviews directly through the platform, and communicate with applicants seamlessly. We also offer premium services like background checks and skill assessments for enhanced hiring confidence.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Quality Assurance
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Every job posting on Fast Portal undergoes rigorous verification to ensure authenticity and legitimacy. Our team manually reviews company credentials and job descriptions to prevent fraudulent listings. Similarly, we implement AI-powered resume screening to identify and filter out fake profiles or spam applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We maintain strict privacy policies and data protection measures in compliance with international standards. User information is encrypted and never shared with third parties without explicit consent. Our platform also features a robust rating and review system that helps maintain accountability and transparency within our community.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Technology Integration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fast Portal leverages cutting-edge technology including machine learning algorithms, natural language processing, and predictive analytics to enhance the matching process. Our system continuously learns from user interactions, improving its recommendations over time. We also integrate with popular applicant tracking systems (ATS) and HR software for seamless workflow management.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Support and Success
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our commitment extends beyond just connecting candidates with jobs. We provide career counseling, resume writing services, interview preparation, and skill development resources. Our success team works closely with both job seekers and employers to ensure successful placements and long-term satisfaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Through continuous innovation and user feedback, Fast Portal remains at the forefront of the recruitment industry, constantly evolving to meet the changing needs of the global job market. Our success is measured by the thousands of successful career matches we facilitate every month, helping people achieve their professional dreams while helping companies build their dream teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
