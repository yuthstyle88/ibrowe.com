'use client';

import React from 'react';
import ShieldsHero from '@/components/shields/ShieldsHero';
import ShieldsFeatures from '@/components/shields/ShieldsFeatures';
import ShieldsFaq from '@/components/shields/ShieldsFaq';

export default function ShieldsPage() {

  return (
    <main className="min-h-screen">
      <ShieldsHero />
      <ShieldsFeatures />
      <ShieldsFaq />
    </main>
  );
} 