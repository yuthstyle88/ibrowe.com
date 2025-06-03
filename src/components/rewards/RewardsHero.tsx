'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButton from '@/components/DownloadButton';

export default function RewardsHero() {
  const t = useTranslations('Rewards');

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white  pt-40"
      style={{
        backgroundColor: '#535353',
        backgroundImage: "url('/images/bg_shade.svg')",
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-base text-white mb-8 whitespace-pre-line">
              {t('hero.description')}
            </p>
            <div className="flex justify-center lg:justify-start">
              <DownloadButton />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/design-3d-icon--ibrowe-rewards---browse-and-get-re.png"
              alt="iBrowe Rewards"
              width={1024}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 