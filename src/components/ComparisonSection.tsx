"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ComparisonSection() {
  const t = useTranslations('ComparisonSection')

  const comparisons = [
    {
      image: '/images/banner-ibrowe-chome.jpeg',
      title: t('comparisons.chrome.title'),
      description: t('comparisons.chrome.description'),
      href: '/ibrowevschome',
      cardClass: 'bg-yellow-50',
    },
    {
      image: '/images/banner-ibrowe-firefox.jpeg',
      title: t('comparisons.firefox.title'),
      description: t('comparisons.firefox.description'),
      href: '/ibrowe-vs-firefox',
      cardClass: 'bg-orange-50',
    },
    {
      image: '/images/banner-ibrowe-google.jpeg',
      title: t('comparisons.google.title'),
      description: t('comparisons.google.description'),
      href: '/ibrowe-search-vs-google',
      cardClass: 'bg-blue-50',
    },
    {
      image: '/images/banner-ibrowe-ddg.jpeg',
      title: t('comparisons.duckduckgo.title'),
      description: t('comparisons.duckduckgo.description'),
      href: '/ibrowe-search-vs-duckduckgo',
      cardClass: 'bg-green-50',
    },
    {
      image: '/images/ibrowe-safari-2.jpg',
      title: t('comparisons.safari.title'),
      description: t('comparisons.safari.description'),
      href: '/ibrowe-vs-safari',
      cardClass: 'bg-purple-50',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <div
              key={comparison.title}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${comparison.cardClass}`}
            >
              <div className="relative h-48">
                <Image
                  src={comparison.image}
                  alt={comparison.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{comparison.title}</h3>
                <p className="text-gray-600 mb-6">{comparison.description}</p>
                <Link
                  href={comparison.href}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-button hover:shadow-hover"
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