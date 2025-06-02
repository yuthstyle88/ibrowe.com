import BlockAdsHero from '@/components/BlockAdsHero'
import BlockAdsFeatures from '@/components/BlockAdsFeatures'
import { useTranslations } from 'next-intl'

export default function BlockAds() {
  const t = useTranslations('BlockAds')
  return (
    <main className="min-h-screen">
      <BlockAdsHero />
      <BlockAdsFeatures />
    </main>
  )
} 