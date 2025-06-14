'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MarketingFeatures() {
  const t = useTranslations('Marketing');
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: t('features.tabs.newAudiences.title'),
      description: t('features.tabs.newAudiences.description'),
      image: '/images/a-photo-featuring-a-group-of-people-engaged-in-var.jpg'
    },
    {
      title: t('features.tabs.lowCompetition.title'),
      description: t('features.tabs.lowCompetition.description'),
      image: '/images/unique-ad-formats--unused-ads.jpg'
    },
    {
      title: t('features.tabs.fastGrowing.title'),
      description: t('features.tabs.fastGrowing.description'),
      image: '/images/built-on-the-world-s-fastest-growing-browsers-and-.jpg'
    },
    {
      title: t('features.tabs.brandSafe.title'),
      description: t('features.tabs.brandSafe.description'),
      image: '/images/a-digital-advertisement-for-a-premium-ad-placement.jpg'
    }
  ];

  return (
    <section className="py-16 bg-[#535353]">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('features.title')}</h2>
          <p className="text-white">{t('features.description')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-3 text-left transition-colors rounded-lg ${
                activeTab === index ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <h3 className="text-xl font-bold text-white whitespace-nowrap">{tab.title}</h3>
            </button>
          ))}
        </div>

        <div className="bg-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {tabs[activeTab].title}
          </h3>
          <div className="relative w-full h-[400px]">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 