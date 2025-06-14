'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PlatformLinks from '../PlatformLinks';

export default function LinuxHero() {
    const t = useTranslations('linux.hero');

    return (
        <section className="section-content" style={{
            backgroundColor: '#535353',
            backgroundImage: "url('/images/bg_shade.svg')",
            backgroundPosition: '0 0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <div className="container space-below text-white">
                <div className="hero-content">
                    <div className="hero-block pt-28">
                        <div className="content-block-hero">
                            <h1 className="head-ibrowe-vs-duckduckgo">{t('title')}</h1>
                            <p className="linux-download">
                                <strong>
                                    {t('subtitle')}<br />
                                    {t('features.0')}<br />
                                    {t('features.1')}<br />
                                    {t('features.2')}<br />
                                    {t('features.3')}
                                </strong>
                            </p>
                            <div className="button-wrap-hero">
                                <PlatformLinks />
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-wrap">
                        <Image
                            src="/images/3d-icon-design-download-web-browser-linux.png"
                            alt={t('imageAlt')}
                            width={366}
                            height={366}
                            className="hero-image-search"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 