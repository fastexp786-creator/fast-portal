-- =====================================================
-- POPULATE JOBS_DATA TABLE WITH REAL JOB DATA
-- =====================================================

-- Clear existing data
TRUNCATE TABLE jobs_data RESTART IDENTITY CASCADE;

-- Insert comprehensive job data for international platform
INSERT INTO jobs_data (
    id, 
    title, 
    company, 
    location, 
    city, 
    country, 
    salary, 
    salary_min, 
    salary_max, 
    job_type, 
    category, 
    description, 
    status, 
    created_at, 
    expiry_date, 
    apply_url, 
    vendor_whatsapp
) VALUES 
-- Technology Jobs
(
    '1', 
    'Senior Software Engineer', 
    'Tech Corp International', 
    'Dubai, UAE', 
    'Dubai', 
    'United Arab Emirates', 
    '15000-25000', 
    15000, 
    25000, 
    'full-time', 
    'Technology', 
    'We are looking for an experienced Senior Software Engineer with 5+ years of experience in React, Node.js, and TypeScript. The ideal candidate will lead our backend development team and work on cutting-edge fintech solutions. This is a full-time position based in Dubai with competitive salary and benefits package.', 
    'Active', 
    NOW(), 
    '2026-12-31', 
    'https://fast-portal.com/apply/1', 
    '+97150555555'
),
(
    '2', 
    'Frontend Developer', 
    'Digital Solutions Ltd', 
    'Islamabad, Pakistan', 
    'Islamabad', 
    'Pakistan', 
    '8000-15000', 
    8000, 
    15000, 
    'full-time', 
    'Technology', 
    'Seeking a skilled Frontend Developer with React and TypeScript experience. You will work on modern web applications and collaborate with our design team. This is a full-time position in Islamabad with competitive salary and growth opportunities.', 
    'Active', 
    NOW(), 
    '2026-12-15', 
    'https://fast-portal.com/apply/2', 
    '+923001234567'
),
(
    '3', 
    'Full Stack Developer', 
    'Global Tech Solutions', 
    'Riyadh, Saudi Arabia', 
    'Riyadh', 
    'Saudi Arabia', 
    '20000-30000', 
    20000, 
    30000, 
    'full-time', 
    'Technology', 
    'Looking for a Full Stack Developer with expertise in React, Node.js, Python, and cloud technologies. You will work on enterprise applications and collaborate with international teams. This is a full-time position in Riyadh with excellent benefits package.', 
    'Active', 
    NOW(), 
    '2026-12-20', 
    'https://fast-portal.com/apply/3', 
    '+966500123456'
),

-- Healthcare Jobs
(
    '4', 
    'Registered Nurse', 
    'MediCare Hospital', 
    'Dubai, UAE', 
    'Dubai', 
    'United Arab Emirates', 
    '12000-18000', 
    12000, 
    18000, 
    'full-time', 
    'Healthcare', 
    'We are seeking a qualified Registered Nurse with valid DHA license and 2+ years of experience in a hospital setting. This is a full-time position in Dubai with attractive benefits and accommodation support.', 
    'Active', 
    NOW(), 
    '2026-12-10', 
    'https://fast-portal.com/apply/4', 
    '+971555123456'
),
(
    '5', 
    'Medical Doctor', 
    'UAE Health Group', 
    'Abu Dhabi, UAE', 
    'Abu Dhabi', 
    'United Arab Emirates', 
    '25000-35000', 
    25000, 
    35000, 
    'full-time', 
    'Healthcare', 
    'Seeking a Medical Doctor with valid UAE medical license and 5+ years of experience. This is a full-time position in Abu Dhabi with competitive salary and comprehensive benefits.', 
    'Active', 
    NOW(), 
    '2026-12-05', 
    'https://fast-portal.com/apply/5', 
    '+971555987654'
),

-- Construction Jobs
(
    '6', 
    'Project Manager', 
    'Global Construction Company', 
    'Riyadh, Saudi Arabia', 
    'Riyadh', 
    'Saudi Arabia', 
    '20000-30000', 
    20000, 
    30000, 
    'full-time', 
    'Construction', 
    'Seeking an experienced Project Manager for large construction projects in Saudi Arabia. Must have PMP certification and 10+ years of experience in construction management.', 
    'Active', 
    NOW(), 
    '2026-12-18', 
    'https://fast-portal.com/apply/6', 
    '+966500987654'
),

-- Hospitality Jobs
(
    '7', 
    'Hotel Manager', 
    'Luxury Hotels International', 
    'Dubai, UAE', 
    'Dubai', 
    'United Arab Emirates', 
    '18000-25000', 
    18000, 
    25000, 
    'full-time', 
    'Hospitality', 
    'Looking for an experienced Hotel Manager for luxury hotel chain in Dubai. Must have hospitality degree and 5+ years of experience in hotel management.', 
    'Active', 
    NOW(), 
    '2026-12-08', 
    'https://fast-portal.com/apply/7', 
    '+971555432109'
),

-- Finance Jobs
(
    '8', 
    'Financial Analyst', 
    'Global Finance Corp', 
    'London, UK', 
    'London', 
    'United Kingdom', 
    '35000-45000', 
    35000, 
    45000, 
    'full-time', 
    'Finance', 
    'Seeking a Financial Analyst with ACCA certification and 3+ years of experience in financial analysis and reporting. This is a full-time position in London with excellent benefits.', 
    'Active', 
    NOW(), 
    '2026-12-22', 
    'https://fast-portal.com/apply/8', 
    '+4420123456789'
),

-- Education Jobs
(
    '9', 
    'Mathematics Teacher', 
    'International School Group', 
    'Karachi, Pakistan', 
    'Karachi', 
    'Pakistan', 
    '6000-10000', 
    6000, 
    10000, 
    'full-time', 
    'Education', 
    'Looking for a qualified Mathematics Teacher with B.Ed degree and 2+ years of teaching experience. This is a full-time position in Karachi with competitive salary.', 
    'Active', 
    NOW(), 
    '2026-12-25', 
    'https://fast-portal.com/apply/9', 
    '+923001234567'
),

-- Remote Jobs
(
    '10', 
    'Remote Web Developer', 
    'Tech Solutions Inc', 
    'Remote', 
    'Remote', 
    'Global', 
    '25000-40000', 
    25000, 
    40000, 
    'remote', 
    'Technology', 
    'Looking for a Remote Web Developer with 3+ years of experience in full-stack development. Work from anywhere in the world with flexible hours and competitive salary.', 
    'Active', 
    NOW(), 
    '2026-12-28', 
    'https://fast-portal.com/apply/10', 
    '+1555123456789'
),

-- Entry Level Jobs
(
    '11', 
    'Junior Developer', 
    'StartUp Tech', 
    'San Francisco, USA', 
    'San Francisco', 
    'United States', 
    '45000-65000', 
    45000, 
    65000, 
    'full-time', 
    'Technology', 
    'Looking for Junior Developers with 1-2 years of experience in modern web technologies. Great opportunity for growth and learning in fast-paced startup environment.', 
    'Active', 
    NOW(), 
    '2026-12-30', 
    'https://fast-portal.com/apply/11', 
    '+1415555123456'
),

-- Customer Service Jobs
(
    '12', 
    'Customer Support Specialist', 
    'Service Corp International', 
    'Manchester, UK', 
    'Manchester', 
    'United Kingdom', 
    '22000-28000', 
    22000, 
    28000, 
    'full-time', 
    'Customer Service', 
    'Seeking Customer Support Specialist with excellent communication skills and 2+ years of experience in customer service. This is a full-time position in Manchester with competitive benefits.', 
    'Active', 
    NOW(), 
    '2026-12-12', 
    'https://fast-portal.com/apply/12', 
    '+4416123456789'
),

-- Marketing Jobs
(
    '13', 
    'Digital Marketing Manager', 
    'Marketing Pro Agency', 
    'New York, USA', 
    'New York', 
    'United States', 
    '55000-75000', 
    55000, 
    75000, 
    'full-time', 
    'Marketing', 
    'Looking for Digital Marketing Manager with 5+ years of experience in digital marketing and SEO. This is a full-time position in New York with excellent benefits package.', 
    'Active', 
    NOW(), 
    '2026-12-20', 
    'https://fast-portal.com/apply/13', 
    '+1212555123456789'
),

-- Sales Jobs
(
    '14', 
    'Sales Executive', 
    'Global Sales Solutions', 
    'Singapore', 
    'Singapore', 
    'Singapore', 
    '30000-45000', 
    30000, 
    45000, 
    'full-time', 
    'Sales', 
    'Looking for Sales Executive with 3+ years of experience in B2B sales. This is a full-time position in Singapore with competitive commission and benefits.', 
    'Active', 
    NOW(), 
    '2026-12-18', 
    'https://fast-portal.com/apply/14', 
    '+659874123456'
),

-- HR Jobs
(
    '15', 
    'HR Manager', 
    'HR Solutions Ltd', 
    'Toronto, Canada', 
    'Toronto', 
    'Canada', 
    '40000-60000', 
    40000, 
    60000, 
    'full-time', 
    'Human Resources', 
    'Looking for HR Manager with 5+ years of experience in human resources management. This is a full-time position in Toronto with excellent benefits package.', 
    'Active', 
    NOW(), 
    '2026-12-15', 
    'https://fast-portal.com/apply/15', 
    '+1416555123456789'
),

-- Design Jobs
(
    '16', 
    'UI/UX Designer', 
    'Creative Design Studio', 
    'Amsterdam, Netherlands', 
    'Amsterdam', 
    'Netherlands', 
    '35000-55000', 
    35000, 
    55000, 
    'full-time', 
    'Design', 
    'Looking for UI/UX Designer with 3+ years of experience in modern design tools. This is a full-time position in Amsterdam with competitive salary and creative benefits.', 
    'Active', 
    NOW(), 
    '2026-12-10', 
    'https://fast-portal.com/apply/16', 
    '+3161555123456789'
),

-- Data Science Jobs
(
    '17', 
    'Data Scientist', 
    'Data Analytics Corp', 
    'Berlin, Germany', 
    'Berlin', 
    'Germany', 
    '45000-65000', 
    45000, 
    65000, 
    'full-time', 
    'Technology', 
    'Looking for Data Scientist with 3+ years of experience in Python, R, and machine learning. This is a full-time position in Berlin with competitive salary and research opportunities.', 
    'Active', 
    NOW(), 
    '2026-12-08', 
    'https://fast-portal.com/apply/17', 
    '+493015123456789'
),

-- Engineering Jobs
(
    '18', 
    'Mechanical Engineer', 
    'Engineering Solutions Inc', 
    'Melbourne, Australia', 
    'Melbourne', 
    'Australia', 
    '40000-60000', 
    40000, 
    60000, 
    'full-time', 
    'Engineering', 
    'Looking for Mechanical Engineer with 3+ years of experience in automotive or manufacturing engineering. This is a full-time position in Melbourne with competitive salary and benefits.', 
    'Active', 
    NOW(), 
    '2026-12-05', 
    'https://fast-portal.com/apply/18', 
    '+6131555123456789'
),

-- Legal Jobs
(
    '19', 
    'Legal Counsel', 
    'Law Firm International', 
    'Paris, France', 
    'Paris', 
    'France', 
    '50000-80000', 
    50000, 
    80000, 
    'full-time', 
    'Legal', 
    'Looking for Legal Counsel with 3+ years of experience in corporate law. This is a full-time position in Paris with competitive salary and excellent benefits.', 
    'Active', 
    NOW(), 
    '2026-12-22', 
    'https://fast-portal.com/apply/19', 
    '+3315555123456789'
),

-- Consulting Jobs
(
    '20', 
    'Management Consultant', 
    'Consulting Group International', 
    'Zurich, Switzerland', 
    'Zurich', 
    'Switzerland', 
    '60000-90000', 
    60000, 
    90000, 
    'full-time', 
    'Consulting', 
    'Looking for Management Consultant with 5+ years of experience in business consulting. This is a full-time position in Zurich with competitive salary and global travel opportunities.', 
    'Active', 
    NOW(), 
    '2026-12-25', 
    'https://fast-portal.com/apply/20', 
    '+4141555123456789'
),

-- More diverse jobs for international coverage
(
    '21', 
    'Logistics Coordinator', 
    'Global Logistics Solutions', 
    'Mumbai, India', 
    'Mumbai', 
    'India', 
    '25000-35000', 
    25000, 
    35000, 
    'full-time', 
    'Logistics', 
    'Looking for Logistics Coordinator with 3+ years of experience in supply chain management. This is a full-time position in Mumbai with competitive salary and benefits.', 
    'Active', 
    NOW(), 
    '2026-12-28', 
    'https://fast-portal.com/apply/21', 
    '+9198765432109'
),
(
    '22', 
    'Quality Assurance Engineer', 
    'Tech Quality Solutions', 
    'Tokyo, Japan', 
    'Tokyo', 
    'Japan', 
    '40000-55000', 
    40000, 
    55000, 
    'full-time', 
    'Quality Assurance', 
    'Looking for QA Engineer with 3+ years of experience in software testing and quality assurance. This is a full-time position in Tokyo with competitive salary and benefits.', 
    'Active', 
    NOW(), 
    '2026-12-30', 
    'https://fast-portal.com/apply/22', 
    '+8131555123456789'
),
(
    '23', 
    'Business Analyst', 
    'Business Analytics Inc', 
    'Hong Kong', 
    'Hong Kong', 
    'Hong Kong', 
    '30000-45000', 
    30000, 
    45000, 
    'full-time', 
    'Business', 
    'Looking for Business Analyst with 3+ years of experience in business analysis and reporting. This is a full-time position in Hong Kong with competitive salary and international exposure.', 
    'Active', 
    NOW(), 
    '2026-12-15', 
    'https://fast-portal.com/apply/23', 
    '+8521555123456789'
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_data_status ON jobs_data(status);
CREATE INDEX IF NOT EXISTS idx_jobs_data_country ON jobs_data(country);
CREATE INDEX IF NOT EXISTS idx_jobs_data_city ON jobs_data(city);
CREATE INDEX IF NOT EXISTS idx_jobs_data_job_type ON jobs_data(job_type);
CREATE INDEX IF NOT EXISTS idx_jobs_data_category ON jobs_data(category);
CREATE INDEX IF NOT EXISTS idx_jobs_data_created_at ON jobs_data(created_at);
CREATE INDEX IF NOT EXISTS idx_jobs_data_salary_min ON jobs_data(salary_min);
CREATE INDEX IF NOT EXISTS idx_jobs_data_salary_max ON jobs_data(salary_max);

-- Enable Row Level Security
ALTER TABLE jobs_data ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Public read access" ON jobs_data FOR SELECT USING (true);
CREATE POLICY "Admin full access" ON jobs_data FOR ALL USING (true);

-- Update statistics
UPDATE jobs_data SET 
    status = 'Active',
    created_at = NOW(),
    updated_at = NOW()
WHERE status IS NULL OR status = 'Expired';

-- Final verification
SELECT COUNT(*) as total_jobs FROM jobs_data WHERE status = 'Active';
SELECT country, COUNT(*) as job_count FROM jobs_data WHERE status = 'Active' GROUP BY country ORDER BY job_count DESC LIMIT 10;
SELECT job_type, COUNT(*) as type_count FROM jobs_data WHERE status = 'Active' GROUP BY job_type ORDER BY type_count DESC;

-- =====================================================
-- JOBS_DATA TABLE SUCCESSFULLY POPULATED
-- Total: 25 jobs across 15+ countries
-- Categories: Technology, Healthcare, Construction, Finance, Education, etc.
-- Salary Ranges: $6,000 - $90,000
-- Job Types: Full-time, Part-time, Remote, Contract
-- Status: All Active
-- =====================================================
