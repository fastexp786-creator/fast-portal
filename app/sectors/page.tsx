import { Metadata } from "next";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Sectors",
  "Explore job opportunities across various industry sectors on Fast Portal. Find careers in technology, healthcare, finance, education, manufacturing, and more.",
  "sectors"
);

export default function SectorsPage() {
  return (
    <StandardPageLayout 
      title="Sectors" 
      description="Explore job opportunities across various industry sectors and find your ideal career path"
      activeSlug="sectors"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Career Opportunities by Sector
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Fast Portal connects talented professionals with exciting career opportunities across diverse industry sectors. Our comprehensive platform spans traditional and emerging industries, offering job seekers the chance to explore various career paths and find positions that align with their skills, interests, and professional goals. Whether you're entering the workforce, seeking a career change, or looking for advancement opportunities, understanding different sectors can help you make informed career decisions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Technology and IT Sector
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The technology sector remains one of the fastest-growing and most dynamic industries globally. Fast Portal features extensive opportunities in software development, cybersecurity, artificial intelligence, cloud computing, data science, and IT infrastructure. Positions range from entry-level support roles to senior architecture and leadership positions. The tech sector offers competitive salaries, remote work opportunities, and continuous learning prospects as technologies evolve rapidly.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Key roles in this sector include software engineers, full-stack developers, DevOps engineers, cybersecurity analysts, data scientists, machine learning engineers, and IT project managers. Companies range from innovative startups to multinational technology corporations, each offering unique work environments and growth opportunities. The sector particularly values continuous learning, problem-solving skills, and adaptability to new technologies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Healthcare and Life Sciences
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The healthcare sector offers rewarding career opportunities for professionals dedicated to improving health and saving lives. Fast Portal connects healthcare providers with qualified candidates across various specializations including nursing, medical administration, pharmaceutical research, biotechnology, and healthcare technology. This sector provides stable employment with opportunities for specialization and advancement in both clinical and non-clinical roles.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Opportunities exist in hospitals, research institutions, pharmaceutical companies, medical device manufacturers, and healthcare technology startups. The sector increasingly values digital health expertise, telemedicine skills, and data analytics capabilities alongside traditional medical qualifications. Healthcare careers offer the satisfaction of making meaningful impacts on people's lives while enjoying professional stability and growth.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Finance and Banking
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The financial services sector encompasses banking, investment management, insurance, fintech, and financial consulting. Fast Portal features opportunities ranging from traditional banking roles to innovative fintech positions that leverage technology to transform financial services. This sector offers competitive compensation, clear career progression paths, and opportunities for professional certification and advancement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Key positions include financial analysts, investment bankers, risk managers, compliance officers, fintech developers, and financial advisors. The sector increasingly seeks professionals with both financial expertise and technology skills, particularly in areas like blockchain, digital payments, and automated trading systems. Careers in finance offer intellectual challenges, global opportunities, and the potential for significant financial rewards.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Education and Training
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The education sector provides opportunities for passionate educators and administrators to shape future generations. Fast Portal connects educational institutions with qualified teachers, curriculum developers, education technology specialists, and administrative professionals. This sector offers meaningful work with the satisfaction of contributing to society through education and skill development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Opportunities exist in traditional schools, universities, online learning platforms, corporate training departments, and educational technology companies. The sector increasingly values digital literacy, online teaching skills, and expertise in educational technology alongside traditional teaching qualifications. Education careers offer work-life balance, intellectual stimulation, and the opportunity to make lasting impacts on students' lives.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Manufacturing and Engineering
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The manufacturing and engineering sector drives innovation and production across various industries including automotive, aerospace, consumer goods, and industrial equipment. Fast Portal features opportunities for engineers, production managers, quality control specialists, and supply chain professionals. This sector offers hands-on work with tangible results and opportunities to contribute to technological advancement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Key roles include mechanical engineers, electrical engineers, production supervisors, quality assurance managers, and supply chain analysts. The sector increasingly values automation skills, sustainable manufacturing knowledge, and Industry 4.0 expertise alongside traditional engineering capabilities. Manufacturing careers offer stability, competitive compensation, and the satisfaction of creating products that improve people's lives.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Retail and Consumer Goods
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The retail sector encompasses traditional stores, e-commerce platforms, consumer goods manufacturing, and retail technology. Fast Portal connects retailers with professionals in sales, marketing, supply chain, merchandising, and retail management. This dynamic sector offers fast-paced environments with opportunities for creativity and direct customer interaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Opportunities range from entry-level sales positions to senior management roles in large retail chains and innovative e-commerce companies. The sector increasingly values digital marketing skills, data analytics capabilities, and omnichannel retail expertise alongside traditional retail knowledge. Retail careers offer diverse work environments, performance-based rewards, and opportunities for rapid advancement.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Media and Communications
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The media and communications sector includes journalism, public relations, advertising, digital marketing, content creation, and entertainment. Fast Portal features opportunities for creative professionals to shape public discourse, build brands, and create compelling content. This sector offers dynamic work environments with opportunities for creativity and innovation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Key positions include content writers, digital marketers, social media managers, public relations specialists, and multimedia producers. The sector increasingly values video production skills, data analytics, and emerging platform expertise alongside traditional communication abilities. Media careers offer creative fulfillment, diverse project work, and the opportunity to influence public opinion and culture.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Transportation and Logistics
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The transportation and logistics sector ensures the efficient movement of goods and people globally. Fast Portal connects companies with logistics coordinators, supply chain managers, transportation planners, and operations specialists. This essential sector offers stable employment with opportunities for specialization in various modes of transportation and logistics technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Opportunities exist in shipping companies, airlines, trucking firms, railroads, and logistics technology companies. The sector increasingly values data analytics skills, automation expertise, and sustainable logistics knowledge alongside traditional transportation knowledge. Logistics careers offer global opportunities, problem-solving challenges, and essential contributions to economic activity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Real Estate and Construction
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The real estate and construction sector builds and manages the physical infrastructure where people live, work, and play. Fast Portal features opportunities for real estate agents, property managers, construction managers, architects, and urban planners. This sector offers tangible results with the satisfaction of creating spaces that communities need and value.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Key roles include real estate brokers, property developers, construction project managers, architects, and facilities managers. The sector increasingly values sustainable building knowledge, smart home technology expertise, and project management software skills alongside traditional construction knowledge. Real estate careers offer entrepreneurial opportunities, flexible work arrangements, and potential for significant financial rewards.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Energy and Utilities
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The energy and utilities sector powers modern society through electricity generation, renewable energy, oil and gas, water management, and waste management. Fast Portal connects energy companies with engineers, technicians, project managers, and environmental specialists. This critical sector offers stable employment with opportunities to contribute to sustainable development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Opportunities exist in traditional energy companies, renewable energy firms, utility providers, and environmental consulting companies. The sector increasingly values renewable energy expertise, energy efficiency knowledge, and environmental compliance skills alongside traditional engineering capabilities. Energy careers offer meaningful work addressing global challenges and opportunities for innovation in sustainable technologies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Government and Public Sector
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The public sector offers diverse opportunities to serve communities through government administration, public safety, education, healthcare, and social services. Fast Portal features positions in federal, state, and local government agencies, as well as non-profit organizations. This sector provides job security, comprehensive benefits, and the satisfaction of contributing to public welfare.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Government careers range from administrative positions to specialized roles in law enforcement, healthcare administration, and urban planning. The sector increasingly values digital transformation skills, data analysis capabilities, and project management expertise alongside traditional public service knowledge. Public sector careers offer stability, meaningful work, and opportunities to make lasting positive impacts on communities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Finding Your Right Sector
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Choosing the right sector depends on your skills, interests, values, and career goals. Fast Portal provides tools and resources to help you explore different industries, understand job requirements, and identify opportunities that match your profile. Consider factors like work-life balance, growth potential, salary expectations, and personal fulfillment when evaluating different sectors.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Many professionals successfully transition between sectors throughout their careers, bringing valuable transferable skills to new industries. Continuous learning and adaptability are essential in today's rapidly evolving job market. Fast Portal supports your career journey by providing access to opportunities across all major sectors, helping you find the perfect match for your professional aspirations and personal goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
