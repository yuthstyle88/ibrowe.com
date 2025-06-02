"use client";

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const features = [
  {
    key: 'general',
    image: '/images/assets_block_ads_01.webp',
    className: 'bg-yellow-50',
  },
  {
    key: 'youtube',
    image: '/images/assets_block_ads_youtube_03.webp',
    className: 'bg-white',
  },
  {
    key: 'tiktok',
    image: '/images/assets_block_ads_tiktok_01.webp',
    className: 'bg-white',
  },
  {
    key: 'web',
    image: '/images/assets_block_ads_web_01.webp',
    className: 'bg-white',
  },
]

export default function BlockAdsFeatures() {
  const t = useTranslations('BlockAds.features')
  return (
    <div className="section-content py-16">
      <div className="container mx-auto px-4">
        <div className="title-wrap-left mb-12">
          <h3 className="text-3xl font-bold mb-4">{t('title')}</h3>
          <p className="text-lg">
            <strong>{t('description')}</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`service-card p-6 rounded-lg ${feature.className}`}>
              <Image
                src={feature.image}
                alt={t(`items.${feature.key}.title`)}
                width={1536}
                height={1536}
                className="w-full h-auto mb-6"
              />
              <div className="card-content-wrap">
                <h3 className="text-2xl font-bold mb-4">{t(`items.${feature.key}.title`)}</h3>
                <p className="text-base mb-6 whitespace-pre-line">{t(`items.${feature.key}.description`)}</p>
              </div>
              <Link
                href="/download"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t('downloadButton')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 