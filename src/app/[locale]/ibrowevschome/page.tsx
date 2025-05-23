"use client";

import ComparisonLayout from '@/components/ComparisonLayout'
import { useTranslations } from 'next-intl'

export default function ChromeComparison() {
  const t = useTranslations('ChromeComparison')

  const comparisonPoints = [
    {
      title: t('features.privacy.title'),
      ibrowePoint: t('features.privacy.ibrowe'),
      competitorPoint: t('features.privacy.chrome'),
    },
    {
      title: t('features.speed.title'),
      ibrowePoint: t('features.speed.ibrowe'),
      competitorPoint: t('features.speed.chrome'),
    },
    {
      title: t('features.resources.title'),
      ibrowePoint: t('features.resources.ibrowe'),
      competitorPoint: t('features.resources.chrome'),
    },
    {
      title: t('features.security.title'),
      ibrowePoint: t('features.security.ibrowe'),
      competitorPoint: t('features.security.chrome'),
    },
  ]

  return (
    <ComparisonLayout
      title={t('title')}
      description={t('subtitle')}
      competitor="Chrome"
      competitorLogo="/images/chrome-logo.png"
      comparisonPoints={comparisonPoints}
    />
  )
} 