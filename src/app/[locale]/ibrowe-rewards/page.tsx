'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import RewardsHero from '@/components/rewards/RewardsHero';
import RewardsFeatures from '@/components/rewards/RewardsFeatures';
import RewardsFaq from '@/components/rewards/RewardsFaq';

export default function RewardsPage() {
  const t = useTranslations('Rewards');

  return (
    <main className="min-h-screen">
      <RewardsHero />
      <RewardsFeatures />
      <RewardsFaq />
    </main>
  );
} 