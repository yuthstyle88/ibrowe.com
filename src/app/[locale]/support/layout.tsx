import { Metadata } from 'next';
import { generateMultilingualMetadata } from '@/utils/metadata';
import { metadataConfig } from '@/config/metadata';
import PageLayout from '@/components/layouts/PageLayout';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateMultilingualMetadata({ params }, metadataConfig.support);
}

export default async function SupportLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return (
        <PageLayout locale={locale} messages={messages}>
            {children}
        </PageLayout>
    );
}
