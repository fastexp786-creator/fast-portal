import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Supported languages
const locales = ['en', 'ur', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  const loc = (locale || 'en') as string;
  if (!locales.includes(loc as any)) notFound();
  const messages = (await import(`./messages/${loc}.json`)).default;
  return { locale: loc, messages };
});

// Export the supported locales
export { locales };
