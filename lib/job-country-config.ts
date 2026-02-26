export const JOB_COUNTRY_SLUGS = [
  "usa-jobs",
  "uk-jobs",
  "gulf-jobs",
  "india-jobs",
  "pakistan-jobs",
  "malaysia-jobs",
] as const;

export type JobCountrySlug = (typeof JOB_COUNTRY_SLUGS)[number];

/** Careerjet data-location values for each country slug */
export const CAREERJET_LOCATION: Record<JobCountrySlug, string> = {
  "usa-jobs": "USA",
  "uk-jobs": "United Kingdom",
  "gulf-jobs": "UAE",
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
  "gulf-jobs": {
    label: "Gulf",
    description: "Dubai, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain",
    careerjetUrl: "https://www.careerjet.com/search/jobs?l=uae&affid=fbbe708f2b5ae7937ff87679cc524306",
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
