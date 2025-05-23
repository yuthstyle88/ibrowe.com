"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function FeatureSection() {
  const t = useTranslations('FeatureSection');

  const features = [
    {
      title: t('features.0.title'),
      category: t('features.0.category'),
      description: t('features.0.description'),
      image: '/images/safety-p-500.jpeg',
      imageClass: 'bg-blue-100',
    },
    {
      title: t('features.1.title'),
      category: t('features.1.category'),
      description: t('features.1.description'),
      image: '/images/fast-p-500.jpeg',
      imageClass: 'bg-yellow-100',
    },
    {
      title: t('features.2.title'),
      category: t('features.2.category'),
      description: t('features.2.description'),
      image: '/images/smart-p-500.jpeg',
      imageClass: 'bg-green-100',
    },
    {
      title: t('features.3.title'),
      category: t('features.3.category'),
      description: t('features.3.description'),
      image: '/images/easy-to-use-p-500.jpeg',
      imageClass: 'bg-purple-100',
    },
    {
      title: t('features.4.title'),
      category: t('features.4.category'),
      description: t('features.4.description'),
      image: '/images/incoming-mode-p-500.jpeg',
      imageClass: 'bg-gray-200',
    },
    {
      title: t('features.5.title'),
      category: t('features.5.category'),
      description: t('features.5.description'),
      image: '/images/eye-catching-dynamic-dazzling-ethereal-image-of-a--p-500.jpg',
      imageClass: 'bg-pink-100',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold text-blue-600 uppercase mb-1">{feature.category}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{feature.description}</p>
                <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mt-auto w-fit">
                  {t('learnMore')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 