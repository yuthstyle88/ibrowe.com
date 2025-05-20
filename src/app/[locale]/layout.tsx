import { Metadata } from 'next'
import { generateBaseMetadata } from '@/lib/metadata'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales} from '@/i18n/routing';
import '../globals.css';


type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params
  return generateBaseMetadata({ locale })
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  // โหลด messages สำหรับการแปลภาษา
  type Messages = {
    [key: string]: string | Record<string, any>
  }

  let messages: Messages

  const loadMessages = async (locale: string): Promise<Messages> => {
    try {
      return (await import(`@/messages/${locale}.json`)).default
    } catch (error) {
      console.warn(`Could not load messages for locale: ${locale}, falling back to Thai`)
      return (await import('@/messages/th.json')).default
    }
  }

  messages = await loadMessages(locale)


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
