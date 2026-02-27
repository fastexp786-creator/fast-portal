export const JOB_COUNTRY_SLUGS = [
  "usa-jobs",
  "uk-jobs",
  "saudi-arabia-jobs",
  "uae-jobs",
  "qatar-jobs",
  "kuwait-jobs",
  "oman-jobs",
  "bahrain-jobs",
  "india-jobs",
  "pakistan-jobs",
  "malaysia-jobs",
] as const;

export type JobCountrySlug = (typeof JOB_COUNTRY_SLUGS)[number];

/** Careerjet data-location values for each country slug */
export const CAREERJET_LOCATION: Record<JobCountrySlug, string> = {
  "usa-jobs": "USA",
  "uk-jobs": "United Kingdom",
  "saudi-arabia-jobs": "Saudi Arabia",
  "uae-jobs": "UAE",
  "qatar-jobs": "Qatar",
  "kuwait-jobs": "Kuwait",
  "oman-jobs": "Oman",
  "bahrain-jobs": "Bahrain",
  "india-jobs": "India",
  "pakistan-jobs": "Pakistan",
  "malaysia-jobs": "Malaysia",
};

/** Display names for each country */
export const JOB_COUNTRY_CONFIG: Record<
  JobCountrySlug,
  { label: string; description: string; careerjetUrl: string }
> = {
  "usa-jobs": {
    label: "USA",
    description: "Government & Industry Careers in the United States",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=usa&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "uk-jobs": {
    label: "UK",
    description: "Skilled worker visa pathways, Poland, Malta, Germany",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=united-kingdom&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "saudi-arabia-jobs": {
    label: "Saudi Arabia",
    description: "Government and private sector jobs in Saudi Arabia",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=saudi+arabia&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "uae-jobs": {
    label: "UAE",
    description: "Jobs in United Arab Emirates - Dubai, Abu Dhabi, Sharjah",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=uae&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "qatar-jobs": {
    label: "Qatar",
    description: "Employment opportunities in Qatar - Doha and other cities",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=qatar&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "kuwait-jobs": {
    label: "Kuwait",
    description: "Job vacancies in Kuwait - Government and private sector",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=kuwait&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "oman-jobs": {
    label: "Oman",
    description: "Career opportunities in Oman - Muscat and other regions",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=oman&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "bahrain-jobs": {
    label: "Bahrain",
    description: "Job openings in Bahrain - Manama and other areas",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=bahrain&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "india-jobs": {
    label: "India",
    description: "Public & Private Sector Roles across India",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=india&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "pakistan-jobs": {
    label: "Pakistan",
    description: "Government & Private sector openings",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=pakistan&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
  "malaysia-jobs": {
    label: "Malaysia",
    description: "Official & Corporate Vacancies",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=malaysia&affid=fbbe708f2b5ae7937ff87679cc524306",
  },
};
