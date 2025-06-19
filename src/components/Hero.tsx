"use client";

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import PlatformLinks from './PlatformLinks';

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="relative pt-20 md:pt-20 bg-[#d3d3d3] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left content */}
          <div className="flex-1 w-full text-center lg:text-left py-8 md:py-16 lg:py-24 flex items-center justify-center">
            <div className="max-w-2xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-darkBlue mb-4 md:mb-6 leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-darkBlue mb-6 md:mb-8">
                <span dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
              </p>
              <PlatformLinks />
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 w-full flex items-center justify-center mb-8 lg:mb-0">
            <div className="relative w-full h-56 sm:h-72 md:h-[400px] lg:h-[500px] xl:h-[700px] max-w-xl mx-auto">
              <Image
                src="/images/3d-design--ibrowe--the-browser-that-cares-about-yo.png"
                alt={t('imageAlt')}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="bg-gray-50 py-8 md:py-12 mt-6 md:mt-8">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 'Symbols'].map((num) => (
              <div key={num} className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-12">
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