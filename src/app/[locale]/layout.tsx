import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales} from '@/i18n/routing';
import '../globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }
  const messages = require(`../../messages/${locale}.json`);
  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
