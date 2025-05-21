"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/3d-smartphone.png"
            alt="iBrowe Smartphone"
            className="w-full max-w-xs md:max-w-md rounded-xl shadow"
          />
        </div>
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">{t('subtitle')}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
} 