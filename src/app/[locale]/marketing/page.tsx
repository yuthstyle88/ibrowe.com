'use client';

import React from 'react';
import MarketingHero from '@/components/marketing/MarketingHero';
import MarketingFeatures from '@/components/marketing/MarketingFeatures';
import MarketingBrands from '@/components/marketing/MarketingBrands';
import MarketingSubscribe from '@/components/marketing/MarketingSubscribe';

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <MarketingHero />
      <MarketingFeatures />
      <MarketingBrands />
      <MarketingSubscribe />
    </main>
  );
} 