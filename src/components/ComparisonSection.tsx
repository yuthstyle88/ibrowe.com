"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocalizedPath } from '@/utils/path'

export default function ComparisonSection() {
  const t = useTranslations('ComparisonSection')
  const getLocalizedPath = useLocalizedPath()

  const comparisons = [
    {
      image: '/images/banner-ibrowe-chome.jpeg',
      title: t('comparisons.chrome.title'),
      description: t('comparisons.chrome.description'),
      href: '/ibrowevschome',
      cardClass: 'bg-yellow-50-80',
    },
    {
      image: '/images/banner-ibrowe-firefox.jpeg',
      title: t('comparisons.firefox.title'),
      description: t('comparisons.firefox.description'),
      href: '/ibrowe-vs-firefox',
      cardClass: 'bg-purple-50-80',
    },
    {
      image: '/images/banner-ibrowe-google.jpeg',
      title: t('comparisons.google.title'),
      description: t('comparisons.google.description'),
      href: '/ibrowe-search-vs-google',
      cardClass: 'bg-blue-50-80',
    },
    {
      image: '/images/banner-ibrowe-ddg.jpeg',
      title: t('comparisons.duckduckgo.title'),
      description: t('comparisons.duckduckgo.description'),
      href: '/ibrowe-search-vs-duckduckgo',
      cardClass: 'bg-grey-50-80',
    },
    {
      image: '/images/ibrowe-safari-2.jpg',
      title: t('comparisons.safari.title'),
      description: t('comparisons.safari.description'),
      href: '/ibrowe-vs-safari',
      cardClass: 'bg-grey-50-80',
    },
    {
      image: '/images/design-ads-for-ibrowe-vs-edge-3.jpg',
      title: t('comparisons.edge.title'),
      description: t('comparisons.edge.description'),
      href: '/ibrowe-vs-edge',
      cardClass: 'bg-yellow-50-80',
    },
  ];  
  

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: '#535353',
        backgroundImage: "url('/images/bg_shade.svg')",
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-white mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <div
              key={comparison.title}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${comparison.cardClass}`}
            >
              <div className="relative mt-4 mx-4 h-56">
                <Image
                  src={comparison.image}
                  alt={comparison.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px]">
                <h3 className="text-xl font-bold text-white mb-3">{comparison.title}</h3>
                <p className="text-white">{comparison.description}</p>
                <Link
                  href={getLocalizedPath(comparison.href)}
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-button hover:shadow-hover mt-auto w-fit"
                >
                  {t('viewComparison')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 