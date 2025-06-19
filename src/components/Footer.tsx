"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const router = useRouter();
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');
    // Construct new path with selected locale
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <footer className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Large Column */}
          <div className="lg:col-span-2 lg:pr-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/images/Asset-47.png"
              alt="iBrowe Logo"
              width={130}
              height={130}
              className="mb-6 w-24 h-auto md:w-32"
            />
            <p className="text-[#4e5d78] text-base font-bold mb-6 max-w-xs">
              {t('tagline')}
            </p>
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <Link href="mailto:support@ibrowe.com" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                <Image
                  src="https://uploads-ssl.webflow.com/5d01778cda7c6cc8a63e0b64/5d1324fd4b05c818c6fbecc1_mail.svg"
                  alt="Email"
                  width={19}
                  height={19}
                  className="mr-3"
                />
                <span>{t('email')}</span>
              </Link>
              <Link href="#" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                <Image
                  src="https://uploads-ssl.webflow.com/5d01778cda7c6cc8a63e0b64/5d1324fd4b05c84f5afbecc0_communication%20(1).svg"
                  alt="Livechat"
                  width={19}
                  height={19}
                  className="mr-3"
                />
                <span>{t('livechat')}</span>
              </Link>
            </div>
          </div>

          {/* Right Columns Container */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="text-black text-base font-bold mb-6">{t('sections.about')}</h3>
              <div className="space-y-3">
                <Link href={`/${currentLocale}`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.company')}</Link>
                <Link href={`/${currentLocale}/features`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.feature')}</Link>
                <Link href={`/${currentLocale}/news`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.news')}</Link>
                <Link href={`/${currentLocale}/ibrowe-rewards`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.rewards')}</Link>
                <Link href={`/${currentLocale}/ibrowe-wallet`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.wallet')}</Link>
                <Link href={`/${currentLocale}/shields`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.shields')}</Link>
                <Link href={`/${currentLocale}/block-ads`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.blockAds')}</Link>
              </div>
            </div>

            {/* Download Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="text-black text-base font-bold mb-6">{t('sections.download')}</h3>
              <div className="space-y-3">
                <Link href="https://ibrowe.com/ibrowe_dmg/iBroweBrowser-135.1.0.2.dmg" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/mac-os-logo.png"
                    alt="MacOS"
                    width={20}
                    height={20}
                    className="mr-3 w-5 h-5"
                  />
                  <strong>{t('download.macos')}</strong>
                </Link>
                <Link href="#" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/windows.png"
                    alt="Windows"
                    width={20}
                    height={20}
                    className="mr-3 w-5 h-5"
                  />
                  <strong>{t('download.windows')}</strong>
                </Link>
                <Link href="https://apps.apple.com/us/app/ibrowe/id6741485553" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/app-store.png"
                    alt="iOS"
                    width={20}
                    height={20}
                    className="mr-3 w-5 h-5"
                  />
                  <strong>{t('download.ios')}</strong>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.ibrowe108.browser" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/apps-android.png"
                    alt="Android"
                    width={20}
                    height={20}
                    className="mr-3 w-5 h-5"
                  />
                  <strong>{t('download.android')}</strong>
                </Link>
                <Link href="/linux" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/linux.png"
                    alt="Linux"
                    width={20}
                    height={20}
                    className="mr-3 w-5 h-5"
                  />
                  <strong>{t('download.linux')}</strong>
                </Link>
              </div>
            </div>

            {/* News Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className="text-black text-base font-bold mb-6">{t('sections.news')}</h3>
              <div className="space-y-3">
                <Link href={`/${currentLocale}/ibrowe-privacy`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.privacyPolicy')}</Link>
                <Link href={`/${currentLocale}/terms-of-use`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.termsOfUse')}</Link>
                <Link href={`/${currentLocale}/advanced-privacy`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.advancedPrivacy')}</Link>
              </div>
            </div>

            {/* Social Links Column */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-black text-base font-bold mb-6">{t('sections.contact')}</h3>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <Link href="https://community.ibrowe.com" rel="noopener noreferrer" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/iBrowe-community.png" alt="community" width={40} height={40} className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Language Selector */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-[#4e5d78] text-sm text-center md:text-left">{t('copyright')}</p>
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Language Selector */}
            <select
              value={currentLocale}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white text-[#4e5d78] border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-primary text-sm w-32"
            >
              <option value="en">English</option>
              <option value="th">ภาษาไทย</option>
              <option value="vi">Tiếng Việt</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
} 