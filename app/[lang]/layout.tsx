import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import RtlProvider from '@/components/RtlProvider';

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Validate that the incoming `lang` parameter is valid
  if (!locales.includes(lang as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <RtlProvider locale={lang}>{children}</RtlProvider>
    </NextIntlClientProvider>
  );
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
