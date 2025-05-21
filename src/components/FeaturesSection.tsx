'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocalizedPath } from '@/utils/path'

export default function FeaturesSection() {
  const t = useTranslations('FeaturesSection')
  const getLocalizedPath = useLocalizedPath()
  const [activeTab, setActiveTab] = useState('tab1')

  const features = [
    {
      id: 'tab1',
      title: t('features.tab1.title'),
      heading: t('features.tab1.heading'),
      image: '/images/eye-catching-dynamic-dazzling-ethereal-image-of-a-.jpg',
    },
    {
      id: 'tab2',
      title: t('features.tab2.title'),
      heading: t('features.tab2.heading'),
      image: '/images/3d-icon-cyber-save-data--save-battery--save-time.jpg',
    },
    {
      id: 'tab3',
      title: t('features.tab3.title'),
      heading: t('features.tab3.heading'),
      image: '/images/cyber-security-logo-ibrowe.jpg',
    },
    {
      id: 'tab4',
      title: t('features.tab4.title'),
      heading: t('features.tab4.heading'),
      image: '/images/cybersecurity-shield--digital-protection--neon-lig.jpg',
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="feature">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-col space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-200 ${
                    activeTab === feature.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <p className="text-lg font-medium">{feature.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`transition-all duration-300 ${
                  activeTab === feature.id ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {feature.heading}
                  </h3>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 66vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/browser-that-saves-your-time.png"
              alt={t('browserImageAlt')}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-primary text-lg font-medium mb-4">{t('safeToUse')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('browserTitle')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('browserDescription')}
            </p>
            <Link
              href={getLocalizedPath('/download')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-button hover:shadow-hover"
            >
              {t('downloadButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 