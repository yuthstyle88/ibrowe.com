import Navigation from '@/components/Navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
