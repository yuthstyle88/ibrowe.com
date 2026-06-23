import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import '../globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Pre-render one static branch per locale (required for `output: 'export'`).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  const { locale } = await params;
  // Enable static rendering for this locale (otherwise next-intl reads
  // headers() at request time, which is incompatible with `output: 'export'`).
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.json`)).default;
  
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
