'use client';

import DownloadButton from '@/components/DownloadButton';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesPage() {
    const t = useTranslations('FeaturesPage');

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-blue-50 to-white p-20" style={{
                backgroundColor: '#535353',
                backgroundImage: "url('/images/bg_shade.svg')",
                backgroundPosition: '0 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1
                                className="text-4xl md:text-5xl font-bold mb-8 text-white"
                                dangerouslySetInnerHTML={{ __html: t.raw('hero.title') }}
                            />
                            <p className="text-base text-white mb-12 whitespace-pre-line">
                                {t('hero.description')}
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <DownloadButton />
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon-ibrowe---a-browser-that--protects--.png"
                                alt="iBrowe Browser"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section className="py-16 bg-[#535353]">
                <div className="container mx-auto px-4">
                    {/* Shields */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon--ibrowe-shields---smart-shields---t.png"
                                alt="iBrowe Shields"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('mainFeatures.shields.title')}</h3>
                            <p className="text-white whitespace-pre-line">{t('mainFeatures.shields.description')}</p>
                        </div>
                    </div>

                    {/* Rewards */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon--ibrowe-rewards.png"
                                alt="iBrowe Rewards"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('mainFeatures.rewards.title')}</h3>
                            <p className="text-white whitespace-pre-line">{t('mainFeatures.rewards.description')}</p>
                        </div>
                    </div>

                    {/* Wallet */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon--ibrowe-wallet---traparent.png"
                                alt="iBrowe Wallet"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('mainFeatures.wallet.title')}</h3>
                            <p className="text-white whitespace-pre-line">{t('mainFeatures.wallet.description')}</p>
                        </div>
                    </div>

                    {/* News */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon--ibrowe-news.png"
                                alt="iBrowe News"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('mainFeatures.news.title')}</h3>
                            <p className="text-white whitespace-pre-line">{t('mainFeatures.news.description')}</p>
                        </div>
                    </div>

                    {/* Playlist */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="flex-1">
                            <Image
                                src="/images/design-3d-icon--playlist.png"
                                alt="iBrowe Playlist"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('mainFeatures.playlist.title')}</h3>
                            <p className="text-white whitespace-pre-line">{t('mainFeatures.playlist.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Features */}
            <section className="py-16 bg-[#535353]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('moreFeatures.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Privacy */}
                        <div className="feature-card bg-yellow-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/tor.png"
                                    alt="Privacy"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.privacy.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.privacy.description')}</p>
                        </div>

                        {/* Customization */}
                        <div className="feature-card bg-purple-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Sidebar.png"
                                    alt="Customization"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.customization.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.customization.description')}</p>
                        </div>

                        {/* Accessibility */}
                        <div className="feature-card bg-blue-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Translate-image.png"
                                    alt="Accessibility"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.accessibility.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.accessibility.description')}</p>
                        </div>

                        {/* Fingerprint */}
                        <div className="feature-card bg-grey-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/fingerprint-image.png"
                                    alt="Fingerprint"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.fingerprint.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.fingerprint.description')}</p>
                        </div>

                        {/* Sync */}
                        <div className="feature-card bg-grey-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/sync-image.png"
                                    alt="Sync"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.sync.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.sync.description')}</p>
                        </div>

                        {/* Speedreader */}
                        <div className="feature-card bg-yellow-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Speedreade-image.png"
                                    alt="Speedreader"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.speedreader.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.speedreader.description')}</p>
                        </div>

                        {/* Cookie */}
                        <div className="feature-card bg-yellow-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Cookie-image.png"
                                    alt="Cookie"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.cookie.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.cookie.description')}</p>
                        </div>

                        {/* Vertical Tabs */}
                        <div className="feature-card bg-purple-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Vertical-tabs-image.png"
                                    alt="Vertical Tabs"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.verticalTabs.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.verticalTabs.description')}</p>
                        </div>

                        {/* Wayback */}
                        <div className="feature-card bg-blue-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Wayback-Machine-image.png"
                                    alt="Wayback"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.wayback.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.wayback.description')}</p>
                        </div>

                        {/* Mobile Privacy */}
                        <div className="feature-card bg-grey-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Mobile-Privacy-image.png"
                                    alt="Mobile Privacy"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.mobilePrivacy.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.mobilePrivacy.description')}</p>
                        </div>

                        {/* Extensions */}
                        <div className="feature-card bg-grey-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/Extensions-image.png"
                                    alt="Extensions"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.extensions.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.extensions.description')}</p>
                        </div>

                        {/* IPFS */}
                        <div className="feature-card bg-yellow-50-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/ipfs-image.png"
                                    alt="IPFS"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{t('moreFeatures.features.ipfs.title')}</h3>
                            <p className="text-white whitespace-pre-line leading-relaxed">{t('moreFeatures.features.ipfs.description')}</p>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-16 text-center">
                        <p className="text-lg text-white whitespace-pre-line">{t('moreFeatures.summary')}</p>
                    </div>
                </div>
            </section>
        </main>
    );
} 