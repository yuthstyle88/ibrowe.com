'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export default function SupportPage() {
    const t = useTranslations('Support');
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: t('faq.translation.question'),
            answer: t('faq.translation.answer')
        },
        {
            question: t('faq.tor.question'),
            answer: t('faq.tor.answer')
        },
        {
            question: t('faq.sync.question'),
            answer: t('faq.sync.answer')
        },
        {
            question: t('faq.security.question'),
            answer: t('faq.security.answer')
        },
        {
            question: t('faq.ads.question'),
            answer: t('faq.ads.answer')
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16"
                style={{
                    backgroundColor: '#535353',
                    backgroundImage: "url('/images/bg_shade.svg')",
                    backgroundPosition: '0 0',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="container mx-auto px-5">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl font-bold text-white mb-6">
                                {t('hero.title')}
                            </h1>
                            <p className="text-lg text-white whitespace-pre-line">
                                {t('hero.description')}
                            </p>
                            <div className="mt-8">
                                <DownloadButton />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <Image
                                src="/images/3d-icon-design-ibrowe-team-support-for-you.png"
                                alt={t('hero.imageAlt')}
                                width={512}
                                height={512}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Categories */}
            <section className="py-16 bg-[#535353]">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center text-white mb-4">{t('categories.title')}</h2>
                    <p className="text-center text-white mb-12">{t('categories.subtitle')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Desktop Browser */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-browsers-for-computers.png"
                                alt={t('categories.desktop.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.desktop.title')}
                            </Link>
                        </div>

                        {/* Shields */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-browsers-protective-island.png"
                                alt={t('categories.shields.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="/shields" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.shields.title')}
                            </Link>
                        </div>

                        {/* Rewards */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-reward-2.png"
                                alt={t('categories.rewards.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="/ibrowe-rewards" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.rewards.title')}
                            </Link>
                        </div>

                        {/* Sync */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-sync.png"
                                alt={t('categories.sync.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.sync.title')}
                            </Link>
                        </div>

                        {/* Mobile */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-mobile.png"
                                alt={t('categories.mobile.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.mobile.title')}
                            </Link>
                        </div>

                        {/* Wallet */}
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <Image
                                src="/images/3d-icon-design-ibrowe-wallet.png"
                                alt={t('categories.wallet.title')}
                                width={200}
                                height={200}
                                className="mx-auto mb-4"
                            />
                            <Link href="/ibrowe-wallet" className="text-white hover:text-blue-400 transition-colors">
                                {t('categories.wallet.title')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-[#535353]">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">{t('faq.title')}</h2>
                    
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/10 rounded-xl overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left focus:outline-none"
                                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                                        <div className="flex items-center">
                                            <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${activeFAQ === index ? 'rotate-45' : ''}`}>
                                                <div className="w-4 h-0.5 bg-white"></div>
                                                <div className={`w-0.5 h-4 bg-white absolute transition-opacity duration-300 ${activeFAQ === index ? 'opacity-0' : 'opacity-100'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <div 
                                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                                        activeFAQ === index ? 'max-h-96 py-4' : 'max-h-0'
                                    }`}
                                >
                                    <p className="text-white whitespace-pre-line">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
