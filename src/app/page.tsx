import React from 'react'
import Hero from '@/components/Hero'
import ComparisonSection from '@/components/ComparisonSection'
import NewsSection from '@/components/NewsSection'
import FeaturesSection from '@/components/FeaturesSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ComparisonSection />
      <NewsSection />
      <FeaturesSection />
    </main>
  )
} 