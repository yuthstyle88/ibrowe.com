"use client";

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import PlatformLinks from './PlatformLinks';

export default function BlockAdsHero() {
  const t = useTranslations('BlockAds.hero')
  return (
    <div className="header pt-24 md:pt-28 min-h-[400px] bg-[#d3d3d3] text-[#1a3066]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="hero-block md:w-1/2">
            <div className="content-block-hero">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="text-lg mb-8">
                <strong>
                  {t('description')}
                </strong>
              </p>
              <PlatformLinks />
            </div>
          </div>
          <div className="hero-image-wrap md:w-1/2 mt-8 md:mt-0 flex justify-center items-center w-full min-h-[180px] md:min-h-[320px]">
            <Image
              src="/images/icon-blockads-1.png"
              alt="iBrowe Block Ads"
              width={1024}
              height={1024}
              className="w-auto h-40 sm:h-56 md:h-72 lg:h-96"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 