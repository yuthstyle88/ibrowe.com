'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButton from '@/components/DownloadButton';
import PlatformLinks from '../PlatformLinks';

export default function AdvancedPrivacyHero() {
    const t = useTranslations('AdvancedPrivacy');

    return (
        <div className="relative bg-[#535353] overflow-hidden pt-24 md:pt-28 min-h-[400px]">
            <div className="container mx-auto px-5 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                {t('hero.title')}
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-8 whitespace-pre-line">
                                {t('hero.description')}
                            </p>
                            <PlatformLinks />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center w-full min-h-[180px] md:min-h-[320px]">
                        <Image
                            src="/images/design-3d-icon-advanced-privacy-tranparent.png"
                            alt={t('hero.imageAlt')}
                            width={512}
                            height={512}
                            className="w-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 