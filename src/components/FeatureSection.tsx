"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FeatureSection() {
  const t = useTranslations('FeatureSection');

  const features = [
    {
      title: t('features.0.title'),
      category: t('features.0.category'),
      description: t('features.0.description'),
      imageClass: 'bg-blue-100',
    },
    {
      title: t('features.1.title'),
      category: t('features.1.category'),
      description: t('features.1.description'),
      imageClass: 'bg-yellow-100',
    },
    {
      title: t('features.2.title'),
      category: t('features.2.category'),
      description: t('features.2.description'),
      imageClass: 'bg-green-100',
    },
    {
      title: t('features.3.title'),
      category: t('features.3.category'),
      description: t('features.3.description'),
      imageClass: 'bg-purple-100',
    },
    {
      title: t('features.4.title'),
      category: t('features.4.category'),
      description: t('features.4.description'),
      imageClass: 'bg-gray-200',
    },
    {
      title: t('features.5.title'),
      category: t('features.5.category'),
      description: t('features.5.description'),
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
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 text-xl font-bold ${feature.imageClass}`}>{/* Icon or image here if needed */}</div>
              <div className="text-xs font-semibold text-blue-600 uppercase mb-1">{feature.category}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{feature.description}</p>
              <a href="#" className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{t('learnMore')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 