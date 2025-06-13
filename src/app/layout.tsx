import Navigation from '@/components/Navigation';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'iBrowe | Privacy-First Browser',
  description: 'A privacy-focused browser that puts you first',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'en';
  const messages = (await import(`../messages/${locale}.json`)).default;
  
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