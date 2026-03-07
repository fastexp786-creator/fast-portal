import JobPosting from 'next/head';

interface JobPostingSchemaProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    country: string;
    category: string;
    Type?: string;
    description?: string;
    apply_url?: string;
    salary?: string;
    created_at?: string;
    Expiry_date?: string;
  };
}

export default function JobPostingSchema({ job }: JobPostingSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description || `Apply for ${job.title} position at ${job.company}`,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.id
    },
    "datePosted": job.created_at || new Date().toISOString(),
    "validThrough": job.Expiry_date || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    "employmentType": job.Type || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": typeof window !== 'undefined' ? window?.location?.origin : 'https://fastjobcareer.com'
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": job.country,
        "addressLocality": job.location
      }
    },
    "jobLocationType": "ON_SITE",
    "baseSalary": job.salary ? {
      "@type": "MonetaryAmount",
      "currency": "PKR",
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary.includes('-') ? job.salary.split('-')[1] : job.salary,
        "unitText": "MONTH"
      }
    } : {
      "@type": "MonetaryAmount",
      "currency": "PKR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": "50000",
        "maxValue": "200000",
        "unitText": "MONTH"
      }
    },
    "industry": job.category,
    "responsibilities": `Work as ${job.title} at ${job.company}`,
    "qualifications": `Experience required for ${job.title} position`,
    "educationRequirements": "Relevant educational background",
    "experienceRequirements": "Industry experience preferred",
    "skills": "Relevant skills and expertise",
    "workHours": "Full-time",
    "applicationContact": {
      "@type": "ContactPoint",
      "telephone": "+92-300-0000000",
      "contactType": "application"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
