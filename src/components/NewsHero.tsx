'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NewsHero() {
    const t = useTranslations('News.hero');

    return (
        <div className="section-content" style={{
            backgroundColor: '#535353',
            backgroundImage: "url('/images/bg_shade.svg')",
            backgroundPosition: '0 0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="container pt-12 mx-auto px-4 space-y-8 text-white">
                <div className="title-wrap-left">
                    <div className="hero-content flex flex-col md:flex-row items-center gap-8">
                        <div className="hero-block-2 flex-1">
                            <div className="content-block-hero">
                                <h1 className="text-4xl md:text-5xl mb-6">
                                    <strong>{t('title')}</strong>
                                </h1>
                                <p className="text-md mb-8">
                                    <strong>
                                        {t('description')}
                                        <br />
                                        {t('highlights.title')}
                                        <br />
                                        {t('highlights.anonymous')}
                                        <br />
                                        {t('highlights.topics')}
                                        <br />
                                        {t('highlights.privacy')}
                                        <br />
                                        {t('highlights.availability')}
                                        <br />
                                        {t('highlights.tagline')}
                                    </strong>
                                </p>
                                <div className="button-wrap-hero flex flex-wrap gap-4">
                                    <Link
                                        href="https://apps.apple.com/us/app/ibrowe/id6741485553"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('download.ios')}
                                    </Link>
                                    <Link
                                        href="https://ibrowe.com/ibrowe_dmg/iBroweBrowser-135.1.0.2.dmg"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('download.macos')}
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.ibrowe108.browser"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('download.android')}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('download.windows')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image-wrap-2 flex-1">
                            <Image
                                src="/images/design-3d-icon-ibrowe-news-digitals-news.png"
                                alt="iBrowe News"
                                width={1024}
                                height={1024}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 