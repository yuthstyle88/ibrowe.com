'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface FeatureSection {
  image: string;
  title: string;
  description: string;
  content: string;
}

export default function AdvancedPrivacyFeatures() {
  const t = useTranslations('AdvancedPrivacy');

  const features: FeatureSection[] = [
    {
      image: '/images/design-3d-icon--by-default--ibrowe-has-the-stronge.png',
      title: t('features.privacyByDefault.title'),
      description: t('features.privacyByDefault.description'),
      content: t.raw('features.privacyByDefault.content'),
    },
    {
      image: '/images/design-3d-icon--ibrowe-shields-the-first-layer-ibr.png',
      title: t('features.shields.title'),
      description: t('features.shields.description'),
      content: t.raw('features.shields.content'),
    },
    {
      image: '/images/design-3d-icon-advanced-protections-the-second-lay-1.png',
      title: t('features.advancedProtections.title'),
      description: t('features.advancedProtections.description'),
      content: t.raw('features.advancedProtections.content'),
    },
    {
      image: '/images/design-3d-icon-policies---practices-the-third-laye-1.png',
      title: t('features.policies.title'),
      description: t('features.policies.description'),
      content: t.raw('features.policies.content'),
    },
  ];

  return (
    <div className="bg-white">
      {features.map((feature, index) => (
        <div key={index} className="py-16 border-b border-gray-200">
          <div className="container mx-auto px-5">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="max-w-2xl">
                  <p className="text-sm font-medium text-gray-500 mb-2">{t('features.safeToUse')}</p>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{feature.description}</p>
                  <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: feature.content }} />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full aspect-[1024/1024]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 