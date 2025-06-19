'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PlatformLinks from '../PlatformLinks';

export default function ShieldsHero() {
  const t = useTranslations('Shields');

  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-28 min-h-[400px]" style={{
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
              <PlatformLinks />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center w-full min-h-[180px] md:min-h-[320px]">
            <Image
              src="/images/design-3d-icon--ibrowe-shields---smart-shields---t.png"
              alt={t('hero.imageAlt')}
              width={512}
              height={512}
              className="w-auto h-40 sm:h-56 md:h-72 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 