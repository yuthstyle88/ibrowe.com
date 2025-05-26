"use client";

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DownloadButton from './DownloadButton'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="relative pt-20 bg-slateGrey overflow-hidden">
      <div className="container mx-auto px-5 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-darkBlue mb-6 leading-tight">
                {t('title')}
              </h1>
              <p className="text-lg md:text-xl text-darkBlue mb-8">
                {t('description')}
              </p>
              <div className="flex justify-center lg:justify-start">
                <DownloadButton text={t('downloadButton')} />
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[1434/900]">
              <Image
                src="/images/ibrowe-head-1.png"
                alt={t('imageAlt')}
                fill
                className="object-contain"
                sizes="(max-width: 1434px) 100vw, 1434px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
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