"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PLATFORM_LINKS } from '@/components/PlatformLinks';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

export default function Download() {
    const t = useTranslations('Download');
    const [isMacDropdownOpen, setIsMacDropdownOpen] = useState(false);

    return (
        <main className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-36 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {/* Windows */}
                    <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group">
                        <Image
                            src="/images/windows.png"
                            alt={t('windows.alt')}
                            width={72}
                            height={72}
                            className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('windows.title')}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{t('windows.description')}</p>
                        <Link
                            href={PLATFORM_LINKS.windows}
                            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label={t('windows.downloadButton')}
                        >
                            {t('windows.downloadButton')}
                        </Link>
                    </div>

                    {/* macOS */}
                    <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group">
                        <Image
                            src="/images/mac-os-logo.png"
                            alt={t('macos.alt')}
                            width={72}
                            height={72}
                            className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('macos.title')}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{t('macos.description')}</p>
                        <div className="relative w-full">
                            <button
                                onClick={() => setIsMacDropdownOpen(!isMacDropdownOpen)}
                                className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg w-full justify-center focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                aria-label={t('macos.downloadButton') + ' options'}
                                aria-expanded={isMacDropdownOpen}
                            >
                                {t('macos.downloadButton')}
                                <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${isMacDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isMacDropdownOpen && (
                                <div className="absolute left-0 right-0 mt-2 w-full bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-100/50 z-20 overflow-hidden">
                                    <Link
                                        href={PLATFORM_LINKS.macos}
                                        className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
                                        onClick={() => setIsMacDropdownOpen(false)}
                                        aria-label={t('macos.downloadButton') + ' (Apple Silicon)'}
                                    >
                                        Apple Silicon
                                    </Link>
                                    {PLATFORM_LINKS.macosIntel && (
                                        <Link
                                            href={PLATFORM_LINKS.macosIntel}
                                            className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
                                            onClick={() => setIsMacDropdownOpen(false)}
                                            aria-label={t('macos.downloadButton') + ' (Intel)'}
                                        >
                                            Intel
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Linux */}
                    <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group">
                        <Image
                            src="/images/linux.png"
                            alt={t('linux.alt')}
                            width={72}
                            height={72}
                            className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('linux.title')}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{t('linux.description')}</p>
                        <Link
                            href={PLATFORM_LINKS.linux}
                            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label={t('linux.downloadButton')}
                        >
                            {t('linux.downloadButton')}
                        </Link>
                    </div>

                    {/* Mobile */}
                    <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group">
                        <Image
                            src="/images/iphone-web.png"
                            alt={t('mobile.alt')}
                            width={72}
                            height={72}
                            className="mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('mobile.title')}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{t('mobile.description')}</p>
                        <div className="space-y-3">
                            <Link
                                href={PLATFORM_LINKS.appStore}
                                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg w-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label={t('mobile.appStore')}
                            >
                                {t('mobile.appStore')}
                            </Link>
                            <Link
                                href={PLATFORM_LINKS.playStore}
                                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg w-full focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                aria-label={t('mobile.playStore')}
                            >
                                {t('mobile.playStore')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}