'use client';

import React from 'react';
import AdvancedPrivacyHero from '@/components/advanced-privacy/AdvancedPrivacyHero';
import AdvancedPrivacyFeatures from '@/components/advanced-privacy/AdvancedPrivacyFeatures';
import AdvancedPrivacyFaq from '@/components/advanced-privacy/AdvancedPrivacyFaq';

export default function AdvancedPrivacyPage() {
  return (
    <main className="min-h-screen">
      <AdvancedPrivacyHero />
      <AdvancedPrivacyFeatures />
      <AdvancedPrivacyFaq />
    </main>
  );
} 