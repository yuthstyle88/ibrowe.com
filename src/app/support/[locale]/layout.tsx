import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../../../globals.css';

export default async function SupportLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = (await import(`@/messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <title>Support - iBrowe</title>
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
