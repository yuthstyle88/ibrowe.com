'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ShieldsFeatures() {
  const t = useTranslations('Shields');

  return (
    <section className="py-16 bg-[#535353]">
      <div className="container mx-auto px-5">
        {/* Protection Against Online Tracking */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <Image
              src="/images/design-3d-icon-protection-against-online-tracking-.png"
              alt={t('features.tracking.imageAlt')}
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('features.tracking.title')}</h2>
            <p className="text-white whitespace-pre-line">{t('features.tracking.description')}</p>
          </div>
        </div>

        {/* Privacy Protection by Default */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className="flex-1">
            <Image
              src="/images/design-3d-icon--ibrowe-shields-the-first-layer-ibr.png"
              alt={t('features.privacy.imageAlt')}
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('features.privacy.title')}</h2>
            <p className="text-white whitespace-pre-line">{t('features.privacy.description')}</p>
          </div>
        </div>

        {/* Real-Time Protection */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <Image
              src="/images/design-3d-icon-see-shields-in-action-with-shields-.png"
              alt={t('features.realTime.imageAlt')}
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('features.realTime.title')}</h2>
            <p className="text-white whitespace-pre-line">{t('features.realTime.description')}</p>
          </div>
        </div>

        {/* Privacy Control */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <Image
              src="/images/design-3d-icon-privacy-you-can-control.png"
              alt={t('features.control.imageAlt')}
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('features.control.title')}</h2>
            <p className="text-white whitespace-pre-line">{t('features.control.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 