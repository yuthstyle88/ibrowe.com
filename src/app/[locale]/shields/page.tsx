'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ShieldsHero from '@/components/shields/ShieldsHero';
import ShieldsFeatures from '@/components/shields/ShieldsFeatures';
import ShieldsFaq from '@/components/shields/ShieldsFaq';

export default function ShieldsPage() {
  const t = useTranslations('Shields');

  return (
    <main className="min-h-screen">
      <ShieldsHero />
      <ShieldsFeatures />
      <ShieldsFaq />
    </main>
  );
} 