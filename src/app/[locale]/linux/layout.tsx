import { Metadata } from 'next';
import { generateMultilingualMetadata } from '@/utils/metadata';
import { metadataConfig } from '@/config/metadata';
import PageLayout from '@/components/layouts/PageLayout';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateMultilingualMetadata(
    { params },
    metadataConfig.linux
  );
}

export default async function LinuxLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const locale = params.locale;
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return (
        <PageLayout locale={locale} messages={messages}>
            {children}
        </PageLayout>
    );
} 