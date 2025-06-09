"use client";

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DownloadButton from './DownloadButton'
import PlatformLinks from './PlatformLinks';

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="relative pt-20 bg-[#d3d3d3] overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left py-16 lg:py-24">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-display text-darkBlue mb-6 leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
              </h1>
              <p className="text-md text-darkBlue mb-8">
                <span dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
              </p>
              <PlatformLinks />
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 relative mt-[-2rem] lg:mt-[-4rem]">
            <div className="relative w-full h-[500px] lg:h-[700px] xl:h-[800px]">
              <Image
                src="/images/3d-design--ibrowe--the-browser-that-cares-about-yo.png"
                alt={t('imageAlt')}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="bg-gray-50 py-12 mt-8">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 'Symbols'].map((num) => (
              <div key={num} className="relative w-32 h-12">
                <Image
                  src={`/images/${num}.svg`}
                  alt={t('partnerLogoAlt', { num })}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 