'use client'

import React from 'react'
import Image from 'next/image'
import Navigation from './Navigation'
import { useLocale } from 'next-intl'
import DownloadCTA from './DownloadCTA'
import DownloadButton from './DownloadButton'

interface ComparisonLayoutProps {
  title: string
  description: string
  competitor: string
  competitorLogo: string
  comparisonPoints: {
    title: string
    ibrowePoint: string
    competitorPoint: string
  }[]
}

export default function ComparisonLayout({
  title,
  description,
  competitor,
  competitorLogo,
  comparisonPoints,
}: ComparisonLayoutProps) {
  const locale = useLocale()

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <main>
      <Navigation />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 bg-staleGrey sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-darkBlue mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-darkBlue mb-8">
                  {description}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <DownloadButton />
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-[1434/900]">
                <Image
                  src="/images/3d-icon-design-ibrowe-vs-chrome.png"
                  alt={`iBrowe vs ${competitor}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1434px) 100vw, 1434px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <Image
                src="/images/brave-logo.svg"
                alt="iBrowe Logo"
                width={120}
                height={40}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold">iBrowe</h2>
            </div>
            <div className="text-center">
              <Image
                src={competitorLogo}
                alt={`${competitor} Logo`}
                width={120}
                height={40}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold">{competitor}</h2>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-center mb-8">{point.title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold mb-4">iBrowe</h4>
                    <p className="text-gray-600">{point.ibrowePoint}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold mb-4">{competitor}</h4>
                    <p className="text-gray-600">{point.competitorPoint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <DownloadCTA />
          </div>
        </div>
      </div>
    </main>
  )
} 