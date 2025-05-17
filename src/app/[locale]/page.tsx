import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero'
import ComparisonSection from '@/components/ComparisonSection'
import NewsSection from '@/components/NewsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeatureSection from '@/components/FeatureSection'
import FaqSection from '@/components/FaqSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold text-center my-8">{t('title')}</h1>
      <Hero />
      <ComparisonSection />
      <NewsSection />
      <FeaturesSection />
      <FeatureSection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </main>
  )
} 