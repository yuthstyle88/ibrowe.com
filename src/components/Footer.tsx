"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">iBrowe</h3>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
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