import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | iBrowe Browser',
    default: 'iBrowe Browser - Fast, Private & Secure',
  },
  description: 'A privacy-focused browser that puts you first',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 