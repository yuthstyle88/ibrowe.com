'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DownloadButton from '@/components/DownloadButton';
import PlatformLinks from '@/components/PlatformLinks';

export default function BlockAds() {
  const t = useTranslations('BlockAds');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 pt-40"
        style={{
          backgroundColor: '#d3d3d3',
          backgroundImage: "url('/images/bg_shade.svg')",
          backgroundPosition: '0 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#1a3066] mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-[#1a3066] whitespace-pre-line">
                {t('hero.description')}
              </p>
              <div className="mt-8">
                <PlatformLinks />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/icon-blockads-1.png"
                alt={t('hero.imageAlt')}
                width={512}
                height={512}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        backgroundImage: `url("/images/bg_shade.svg")`,
      }} className="py-20 bg-[#535353] bg-[position:0_0] bg-no-repeat bg-cover ">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-3xl text-white mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-lg whitespace-pre-line leading-relaxed">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* General Ad Blocking */}
            <div className="group bg-yellow-50-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src="/images/assets_block_ads_01.webp"
                  alt={t('features.items.general.title')}
                  width={1536}
                  height={1536}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content-wrap flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-600 transition-colors duration-300">
                  {t('features.items.general.title')}
                </h3>
                <p className="text-base text-white mb-8 whitespace-pre-line leading-relaxed">
                  {t('features.items.general.description')}
                </p>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-300 mt-auto">
                <DownloadButton />
              </div>
            </div>

            {/* YouTube Ad Blocking */}
            <div className="group bg-blue-50-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src="/images/assets_block_ads_youtube_03.webp"
                  alt={t('features.items.youtube.title')}
                  width={1536}
                  height={1536}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content-wrap flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-600 transition-colors duration-300">
                  {t('features.items.youtube.title')}
                </h3>
                <p className="text-base text-white mb-8 whitespace-pre-line leading-relaxed">
                  {t('features.items.youtube.description')}
                </p>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-300 mt-auto">
                <DownloadButton />
              </div>
            </div>

            {/* TikTok Ad Blocking */}
            <div className="group bg-purple-50-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src="/images/assets_block_ads_tiktok_01.webp"
                  alt={t('features.items.tiktok.title')}
                  width={1536}
                  height={1536}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content-wrap flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-600 transition-colors duration-300">
                  {t('features.items.tiktok.title')}
                </h3>
                <p className="text-base text-white mb-8 whitespace-pre-line leading-relaxed">
                  {t('features.items.tiktok.description')}
                </p>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-300 mt-auto">
                <DownloadButton />
              </div>
            </div>

            {/* Web Ad Blocking */}
            <div className="group bg-grey-50-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src="/images/assets_block_ads_web_01.webp"
                  alt={t('features.items.web.title')}
                  width={1536}
                  height={1536}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content-wrap flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-600 transition-colors duration-300">
                  {t('features.items.web.title')}
                </h3>
                <p className="text-base text-white mb-8 whitespace-pre-line leading-relaxed">
                  {t('features.items.web.description')}
                </p>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-300 mt-auto">
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe to Use Section */}
      <section className="py-16 bg-[#535353]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src="/images/browser-that-saves-your-time.png"
                alt={t('safeToUse.imageAlt')}
                width={1434}
                height={1434}
                className="w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <p className="text-xl text-white">{t.raw('safeToUse.subtitle')}</p>
                <h2 className="text-3xl font-bold text-white">{t('safeToUse.title')}</h2>
                <div
                  className="text-lg text-white whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: t.raw('safeToUse.description') }}
                />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 