'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function RewardsFeatures() {
  const t = useTranslations('Rewards');

  const features = [
    {
      title: t('features.howItWorks.title'),
      description: t('features.howItWorks.description'),
      image: '/images/design-3d-icon-how-do-ibrowe-rewards-work-.png',
      imageAlt: 'How iBrowe Rewards Work',
      imageFirst: true
    },
    {
      title: t('features.privacy.title'),
      description: t('features.privacy.description'),
      image: '/images/design-3d-icondefault-privacy--extra-rewards--by-d.png',
      imageAlt: 'Privacy First',
      imageFirst: false
    },
    {
      title: t('features.ads.title'),
      description: t('features.ads.description'),
      image: '/images/design-3d-icon-what-do-ibrowe-ads-look-like--you-c.png',
      imageAlt: 'iBrowe Ads',
      imageFirst: true
    },
    {
      title: t('features.iat.title'),
      description: t('features.iat.description'),
      image: '/images/design-3d-icon-what-can-you-do-with-iat--almost-an.png',
      imageAlt: 'What Can You Do with IAT',
      imageFirst: false
    },
    {
      title: t('features.support.title'),
      description: t('features.support.description'),
      image: '/images/design-3d-icon-how-can-i-get-involved-with-website.png',
      imageAlt: 'Support Websites and Creators',
      imageFirst: true
    }
  ];

  return (
    <section className="py-16">
      {features.map((feature, index) => (
        <div key={index} className="mb-16">
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${feature.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 