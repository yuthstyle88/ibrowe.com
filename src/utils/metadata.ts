import { Metadata } from 'next';

type Props = {
  params: { locale: string }
}

type MetadataConfig = {
  titles: {
    [key: string]: string;
  };
  descriptions: {
    [key: string]: string;
  };
}

export async function generateMultilingualMetadata(
  { params }: Props,
  config: MetadataConfig
): Promise<Metadata> {
  const locale = params.locale;
  return {
    title: config.titles[locale] || config.titles.en,
    description: config.descriptions[locale] || config.descriptions.en,
  };
} 