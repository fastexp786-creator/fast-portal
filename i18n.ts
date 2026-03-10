import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Supported languages - only English for simplicity
const locales = ['en'];

export default getRequestConfig(async ({ locale }) => {
  const loc = (locale || 'en') as string;
  if (!locales.includes(loc as any)) notFound();
  
  // Simple messages to avoid complex i18n issues
  const messages = {
    header: {
      home: "Home",
      jobs: "Jobs", 
      travel: "Travel",
      resourceHub: "Resource Hub",
      categories: "Categories",
      sections: "Sections",
      partners: "Partners",
      about: "About",
      contact: "Contact",
      dashboard: "Dashboard",
      register: "Register"
    }
  };
  
  return { locale: loc, messages };
});

// Export the supported locales
export { locales };
