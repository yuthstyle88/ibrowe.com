'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButton from '@/components/DownloadButton';

export default function MarketingHero() {
  const t = useTranslations('Marketing');

  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-24"
      style={{
        backgroundColor: '#535353',
        backgroundImage: "url('/images/bg_shade.svg')",
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-white whitespace-pre-line">
              {t('hero.description')}
            </p>
            <div className="mt-8">
              <DownloadButton />
            </div>
          </div>
          <div className="lg:w-1/2 min-h-[180px] md:min-h-[320px] flex items-center">
            <Image
              src="/images/3d-icon-ads-on-ibrowe-browsers-and-search-engines.png"
              alt={t('hero.imageAlt')}
              width={512}
              height={512}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 