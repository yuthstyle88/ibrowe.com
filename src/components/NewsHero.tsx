'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButton from './DownloadButton';

export default function NewsHero() {
    const t = useTranslations('News.hero');

    return (
        <div className="section-content pt-20" style={{
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
                                <div className="flex justify-center lg:justify-start">
                                    <DownloadButton />
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