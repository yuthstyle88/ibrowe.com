'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import WalletComparison from '@/components/WalletComparison';
import DownloadButton from '@/components/DownloadButton';

export default function WalletPage() {
    const t = useTranslations('wallet');

    return (
        <main className="min-h-screen bg-[#d3d3d3]">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1a3066]">{t('title')}</h1>
                            <p className="text-xl text-[#546681]">{t('subtitle')}</p>
                            <p className="text-gray-600">{t('activate')}</p>
                            <div className="flex justify-center lg:justify-start">
                                <DownloadButton text={t('download')} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/images/3d-icon-design-wallet.png"
                                alt="iBrowe Wallet"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 md:px-8" style={{
                backgroundColor: '#535353',
                backgroundImage: "url('/images/bg_shade.svg')",
                backgroundPosition: '0 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{t('simplify.title')}</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('simplify.description')}</p>
                        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] mt-8">
                            <Image
                                src="/images/design-ads-for-cut-down-on-crypto-clutter-manage-t-2.jpg"
                                alt={t('simplify.title')}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 1434px) 100vw, 1434px"
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{t('explore.title')}</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('explore.description')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#1a1a1a] p-8 rounded-lg flex flex-col bg-yellow-50-80">
                            <div className="relative w-full aspect-[16/9] mb-4">
                                <Image
                                    src="/images/design-ads-for-a-new-crypto-wallet-model.jpg"
                                    alt={t('features.newWallet.title')}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 1434px) 100vw, 1434px"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white min-h-20">{t('features.newWallet.title')}</h3>
                            <p className="text-white mb-6">{t('features.newWallet.description')}</p>
                            <div className="mt-auto flex justify-center">
                                <DownloadButton text={t('download')} />
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] p-8 rounded-lg flex flex-col bg-grey-50-80">
                            <div className="relative w-full aspect-[16/9] mb-4">
                                <Image
                                    src="/images/design-ads-for-get-more-from-your-wallet-2.jpg"
                                    alt={t('features.allInOne.title')}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 1434px) 100vw, 1434px"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white min-h-20">{t('features.allInOne.title')}</h3>
                            <p className="text-white mb-6">{t('features.allInOne.description')}</p>
                            <div className="mt-auto flex justify-center">
                                <DownloadButton text={t('download')} />
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] p-8 rounded-lg flex flex-col bg-blue-50-80">
                            <div className="relative w-full aspect-[16/9] mb-4">
                                <Image
                                    src="/images/design-ads-for-get-more-from-your-wallet-3.jpg"
                                    alt={t('features.easySetup.title')}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 1434px) 100vw, 1434px"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white min-h-20">{t('features.easySetup.title')}</h3>
                            <p className="text-white mb-6">{t('features.easySetup.description')}</p>
                            <div className="mt-auto flex justify-center">
                                <DownloadButton text={t('download')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-[#535353] px-4 md:px-8">
                <div className="max-w-7xl p-12 mx-auto space-y-12" style={{
                    backgroundColor: '#535353',
                    backgroundImage: "url('/images/bg_shade.svg')",
                    backgroundPosition: '0 0',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{t('comparison.title')}</h2>
                    </div>
                    <WalletComparison />
                </div>
            </section>
        </main>
    );
} 