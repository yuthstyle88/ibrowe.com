"use client";

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { useTranslations } from 'next-intl'
import PlatformLinks, { PLATFORM_LINKS } from '@/components/PlatformLinks'

export default function Download() {
  const t = useTranslations('Download')

  return (
    <main>
      <div className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Windows */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/windows.png"
                alt={t('windows.alt')}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{t('windows.title')}</h3>
              <p className="text-gray-600 mb-4">{t('windows.description')}</p>
              <a href={PLATFORM_LINKS.windows} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {t('windows.downloadButton')}
              </a>
            </div>

            {/* macOS */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/mac-os-logo.png"
                alt={t('macos.alt')}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{t('macos.title')}</h3>
              <p className="text-gray-600 mb-4">{t('macos.description')}</p>
              <a href={PLATFORM_LINKS.macos} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {t('macos.downloadButton')}
              </a>
            </div>

            {/* Linux */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/linux.png"
                alt={t('linux.alt')}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{t('linux.title')}</h3>
              <p className="text-gray-600 mb-4">{t('linux.description')}</p>
              <a href={PLATFORM_LINKS.linux} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {t('linux.downloadButton')}
              </a>
            </div>

            {/* Mobile */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/images/iphone-web.png"
                alt={t('mobile.alt')}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{t('mobile.title')}</h3>
              <p className="text-gray-600 mb-4">{t('mobile.description')}</p>
              <div className="space-y-2">
                <a href={PLATFORM_LINKS.appStore} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
                  {t('mobile.appStore')}
                </a>
                <a href={PLATFORM_LINKS.playStore} className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
                  {t('mobile.playStore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 