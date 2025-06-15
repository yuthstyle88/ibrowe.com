import { Metadata } from 'next';
import { generateMultilingualMetadata } from '@/utils/metadata';
import { metadataConfig } from '@/config/metadata';
import PageLayout from '@/components/layouts/PageLayout';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

type Props = {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({ params: { locale } }, metadataConfig.support);
}

export default async function SupportLayout({
    children,
    params
}: LayoutProps) {
    const { locale } = await params;
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return (
        <PageLayout locale={locale} messages={messages}>
            {children}
        </PageLayout>
    );
}
