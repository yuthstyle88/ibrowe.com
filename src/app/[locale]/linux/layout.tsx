import { Metadata } from 'next';
import { generateMultilingualMetadata } from '@/utils/metadata';
import { metadataConfig } from '@/config/metadata';
import PageLayout from '@/components/layouts/PageLayout';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return generateMultilingualMetadata(
    { params: resolvedParams },
    metadataConfig.linux
  );
}

export default async function LinuxLayout({
    children,
    params
}: Props) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return (
        <PageLayout locale={locale} messages={messages}>
            {children}
        </PageLayout>
    );
} 