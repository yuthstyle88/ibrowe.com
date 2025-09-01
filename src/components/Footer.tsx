"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {PLATFORM_LINKS} from '@/components/PlatformLinks'
import {FaChevronDown} from "react-icons/fa";

export default function Footer() {
    const t = useTranslations('Footer');
    const router = useRouter();
    const pathname = usePathname();
    const [isMacDropdownOpen, setIsMacDropdownOpen] = useState(false);

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
        <footer
            className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef6ff]">
            {/* Decorative blur orbs */}
            <div aria-hidden
                 className="pointer-events-none absolute -top-16 -right-24 h-56 w-56 rounded-full bg-[#22a1d3]/10 blur-3xl"/>
            <div aria-hidden
                 className="pointer-events-none absolute -bottom-20 -left-24 h-56 w-56 rounded-full bg-[#005bbb]/10 blur-3xl"/>

            <div className="relative container mx-auto px-4 sm:px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Large Column */}
                    <div
                        className="lg:col-span-2 lg:pr-16 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Image
                            src="/images/Asset-47.png"
                            alt="iBrowe Logo"
                            width={130}
                            height={130}
                            className="mb-6 w-24 h-auto md:w-32 drop-shadow-sm"
                        />
                        <p className="text-[#3c4a64] text-base md:text-lg font-semibold leading-relaxed mb-6 max-w-sm">
                            {t('tagline')}
                        </p>
                        <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                            <Link href="mailto:support@ibrowe.com"
                                  className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                                <Image
                                    src="https://uploads-ssl.webflow.com/5d01778cda7c6cc8a63e0b64/5d1324fd4b05c818c6fbecc1_mail.svg"
                                    alt="Email"
                                    width={19}
                                    height={19}
                                    className="mr-3"
                                />
                                <span>{t('email')}</span>
                            </Link>
                            <Link href="/support"
                                  className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
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
                            <h3 className="text-[#0f1f3a] text-sm tracking-wide font-bold uppercase mb-4">{t('sections.about')}</h3>
                            <div className="space-y-3">
                                <Link href={`/${currentLocale}`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.company')}</Link>
                                <Link href={`/${currentLocale}/features`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.feature')}</Link>
                                <Link href={`/${currentLocale}/news`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.news')}</Link>
                                <Link href={`/${currentLocale}/ibrowe-rewards`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.rewards')}</Link>
                                <Link href={`/${currentLocale}/ibrowe-wallet`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.wallet')}</Link>
                                <Link href={`/${currentLocale}/shields`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.shields')}</Link>
                                <Link href={`/${currentLocale}/block-ads`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.blockAds')}</Link>
                            </div>
                        </div>

                        {/* Download Column */}
                        <div className="mb-8 sm:mb-0">
                            <h3 className="text-[#0f1f3a] text-sm tracking-wide font-bold uppercase mb-4">{t('sections.download')}</h3>
                            <div className="space-y-3">
                                <Link href={PLATFORM_LINKS.windows}
                                      className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                                    <Image
                                        src="/images/windows.png"
                                        alt="Windows"
                                        width={20}
                                        height={20}
                                        className="mr-3 w-5 h-5"
                                    />
                                    <strong>{t('download.windows')}</strong>
                                </Link>
                                <Link href={PLATFORM_LINKS.appStore}
                                      className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                                    <Image
                                        src="/images/app-store.png"
                                        alt="iOS"
                                        width={20}
                                        height={20}
                                        className="mr-3 w-5 h-5"
                                    />
                                    <strong>{t('download.ios')}</strong>
                                </Link>
                                <Link href={PLATFORM_LINKS.playStore}
                                      className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                                    <Image
                                        src="/images/apps-android.png"
                                        alt="Android"
                                        width={20}
                                        height={20}
                                        className="mr-3 w-5 h-5"
                                    />
                                    <strong>{t('download.android')}</strong>
                                </Link>
                                <Link href={PLATFORM_LINKS.linux}
                                      className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm">
                                    <Image
                                        src="/images/linux.png"
                                        alt="Linux"
                                        width={20}
                                        height={20}
                                        className="mr-3 w-5 h-5"
                                    />
                                    <strong>{t('download.linux')}</strong>
                                </Link>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsMacDropdownOpen(!isMacDropdownOpen)}
                                        className="flex items-center text-[#4e5d78] hover:text-primary transition-colors text-sm"
                                        aria-label={t('download.macos') + ' options'}
                                        aria-expanded={isMacDropdownOpen}
                                    >
                                        <Image
                                            src="/images/mac-os-logo.png"
                                            alt="macOS"
                                            width={20}
                                            height={20}
                                            className="mr-3 w-5 h-5"
                                        />
                                        <strong>{t('download.macos')}</strong>
                                        <FaChevronDown className={`ml-2 text-sm transition-transform duration-200 ${isMacDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isMacDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-10">
                                            <Link
                                                href={PLATFORM_LINKS.macos}
                                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                                                onClick={() => setIsMacDropdownOpen(false)}
                                                aria-label={t('download.macos') + ' (Apple Silicon)'}
                                            >
                                                Apple Silicon
                                            </Link>
                                            <Link
                                                href={PLATFORM_LINKS.macosIntel || '#'}
                                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                                                onClick={() => setIsMacDropdownOpen(false)}
                                                aria-label={t('download.macos') + ' (Intel)'}
                                            >
                                                Intel
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* News Column */}
                        <div className="mb-8 sm:mb-0">
                            <h3 className="text-[#0f1f3a] text-sm tracking-wide font-bold uppercase mb-4">{t('sections.news')}</h3>
                            <div className="space-y-3">
                                <Link href={`/${currentLocale}/ibrowe-privacy`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.privacyPolicy')}</Link>
                                <Link href={`/${currentLocale}/terms-of-use`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.termsOfUse')}</Link>
                                <Link href={`/${currentLocale}/advanced-privacy`}
                                      className="block text-[#4e5d78] hover:text-primary transition-colors text-sm">{t('links.advancedPrivacy')}</Link>
                            </div>
                        </div>

                        {/* Social Links Column */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-[#0f1f3a] text-sm tracking-wide font-bold uppercase mb-4">{t('sections.contact')}</h3>
                            <div className="flex space-x-4 justify-center sm:justify-start">
                                <Link href="https://community.ibrowe.com" rel="noopener noreferrer" target="_blank"
                                      className="hover:opacity-80 transition-opacity">
                                    <Image src="/images/iBrowe-community.png" alt="community" width={40} height={40}
                                           className="w-10 h-10"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright and Language Selector */}
                <div
                    className="mt-12 md:mt-16 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <p className="text-[#4e5d78] text-sm text-center md:text-left">{t('copyright')}</p>
                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Language Selector */}
                        <select
                            value={currentLocale}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            className="bg-white/80 backdrop-blur-sm text-[#2b3a55] border border-gray-300/70 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#22a1d3]/40 focus:border-[#22a1d3]/60 text-sm w-36 shadow-sm transition-all"
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