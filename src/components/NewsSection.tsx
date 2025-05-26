"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NewsSection() {
  const t = useTranslations('NewsSection')

  const newsItems = [
    {
      image: '/images/iBrowe-news-1.webp',
      title: t('news.items.0.title'),
      content: t('news.items.0.content'),
    },
    {
      image: '/images/iBrowe-news-2.webp',
      title: t('news.items.1.title'),
      content: t('news.items.1.content'),
    },
    {
      image: '/images/iBrowe-news-3.webp',
      title: t('news.items.2.title'),
      content: t('news.items.2.content'),
    },
    {
      image: '/images/office-girl.webp',
      title: t('news.items.3.title'),
      content: t('news.items.3.content'),
    },
  ]

  return (
    <section style={{
      backgroundColor: '#535353',
      backgroundImage: "url('/images/bg_shade.svg')",
      backgroundPosition: '0 0',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className="py-24" id="news">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-dark-grey-80-80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              style={{ opacity: 1 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col h-[280px] bg-opacity-80 rounded-xl backdrop-blur-md">
                <h2 className="text-2xl font-bold text-white mb-4 min-h-[4rem]">
                  {item.title}
                </h2>
                <p className="text-white mb-6 line-clamp-4">
                  {item.content}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-button hover:shadow-hover mt-auto w-fit"
                >
                  {t('readMore')}
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 