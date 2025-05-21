'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import { useLocale } from 'next-intl'

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
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

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-8">เริ่มใช้ iBrowe วันนี้</h2>
            <Link
              href={getLocalizedPath('/download')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              ดาวน์โหลด iBrowe
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 