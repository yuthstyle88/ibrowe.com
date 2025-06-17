'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const navT = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/404.svg"
              alt="404 illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('description')}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {t('backHome')}
            </Link>
            <Link
              href={`/${locale}/support`}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {navT('support')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 