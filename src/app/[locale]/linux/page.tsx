'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import LinuxHero from '@/components/linux/LinuxHero';
import LinuxInstallation from '@/components/linux/LinuxInstallation';

export default function LinuxPage() {
  const t = useTranslations('linux');

  return (
    <main className="min-h-screen">
      <LinuxHero />
      <LinuxInstallation />
    </main>
  );
} 