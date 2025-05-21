"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'th', label: 'ไทย' },
];

export default function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const restPath = pathname.split('/').slice(2).join('/') || '';

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}${restPath ? '/' + restPath : ''}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">iBrowe</h3>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
            <div className="mt-4">
              <label htmlFor="language-select" className="block text-sm font-medium text-gray-400 mb-2">
                {t('language')}
              </label>
              <select
                id="language-select"
                value={currentLocale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('links.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  {t('links.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-gray-400 hover:text-white">
                  {t('links.leadership')}
                </Link>
              </li>
              <li>
                <Link href="/feature" className="text-gray-400 hover:text-white">
                  {t('links.feature')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  {t('links.news')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('download')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/macos" className="text-gray-400 hover:text-white">
                  {t('links.macos')}
                </Link>
              </li>
              <li>
                <Link href="/windows" className="text-gray-400 hover:text-white">
                  {t('links.windows')}
                </Link>
              </li>
              <li>
                <Link href="/ios" className="text-gray-400 hover:text-white">
                  {t('links.ios')}
                </Link>
              </li>
              <li>
                <Link href="/android" className="text-gray-400 hover:text-white">
                  {t('links.android')}
                </Link>
              </li>
              <li>
                <Link href="/linux" className="text-gray-400 hover:text-white">
                  {t('links.linux')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 