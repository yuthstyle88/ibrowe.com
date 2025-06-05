import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Hero from '@/components/Hero'
import ComparisonSection from '@/components/ComparisonSection'
import NewsSection from '@/components/NewsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeatureSection from '@/components/FeatureSection'
import FaqSection from '@/components/FaqSection'
import AboutSection from '@/components/AboutSection'

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <ComparisonSection />
      <NewsSection />
      <FeaturesSection />
      <FeatureSection />
      <FaqSection />
      <AboutSection />
    </main>
  )
} 