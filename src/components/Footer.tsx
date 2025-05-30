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
    <footer className="bg-white py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Large Column */}
          <div className="lg:col-span-2 lg:pr-16">
            <Image
              src="/images/Asset-47.png"
              alt="iBrowe Logo"
              width={130}
              height={130}
              className="mb-6"
            />
            <p className="text-[#4e5d78] text-base font-bold mb-6">
              {t('tagline')}
            </p>
            <div className="space-y-4">
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
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* About Column */}
            <div>
              <h3 className="text-black text-base font-bold mb-6">{t('sections.about')}</h3>
              <div className="space-y-3">
                <Link href={`/${currentLocale}`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.company')}</Link>
                <Link href={`/${currentLocale}/features`}className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.feature')}</Link>
                <Link href={`/${currentLocale}/news`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.news')}</Link>
                <Link href={`/${currentLocale}/wallet`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.wallet')}</Link>
                <Link href={`/${currentLocale}/block-ad`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.blockAds')}</Link>
                <Link href={`/${currentLocale}/ibrowe-privacy`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.privacyPolicy')}</Link>
                <Link href={`/${currentLocale}/terms-of-use`} className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.termsOfUse')}</Link>
              </div>
            </div>

            {/* Download Column */}
            <div>
              <h3 className="text-black text-base font-bold mb-6">{t('sections.download')}</h3>
              <div className="space-y-3">
                <Link href="https://laptop-updates.brave.com/latest/osx" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/mac-os-logo.png"
                    alt="MacOS"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <strong>{t('download.macos')}</strong>
                </Link>
                <Link href="https://laptop-updates.brave.com/latest/winx64" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/windows.png"
                    alt="Windows"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <strong>{t('download.windows')}</strong>
                </Link>
                <Link href="https://laptop-updates.brave.com/download/ios/BRV002" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/app-store.png"
                    alt="iOS"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <strong>{t('download.ios')}</strong>
                </Link>
                <Link href="https://laptop-updates.brave.com/download/android/BRV002" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/apps-android.png"
                    alt="Android"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <strong>{t('download.android')}</strong>
                </Link>
                <Link href="/linux" className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                  <Image
                    src="/images/linux.png"
                    alt="Linux"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <strong>{t('download.linux')}</strong>
                </Link>
              </div>
            </div>

            {/* News Column */}
            <div>
              <h3 className="text-black text-base font-bold mb-6">{t('sections.news')}</h3>
              <div className="space-y-3">
                <Link href="#faq" className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.faq')}</Link>
                <Link href="#about-us" className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.aboutUs')}</Link>
                <Link href="#" className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.pressRelease')}</Link>
              </div>
            </div>

            {/* Social Links Column */}
            <div>
              <h3 className="text-black text-base font-bold mb-6">{t('sections.contact')}</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/twitter-bw.png" alt="Twitter" width={30} height={30} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/facebook-bw.png" alt="Facebook" width={30} height={30} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/instagram-bw.png" alt="Instagram" width={30} height={30} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/youtube-bw.png" alt="YouTube" width={30} height={30} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/tiktok-bw.png" alt="TikTok" width={30} height={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Language Selector */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#4e5d78] text-sm">{t('copyright')}</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* Language Selector */}
            <select
              value={currentLocale}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white text-[#4e5d78] border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-primary text-sm"
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