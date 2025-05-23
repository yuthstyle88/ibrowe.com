"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLocalizedPath } from '@/utils/path';

export default function EdgeComparison() {
  const t = useTranslations('EdgeComparison');
  const getLocalizedPath = useLocalizedPath();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>
            <div className="flex justify-center">
              <Link
                href={getLocalizedPath('/download')}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('downloadButton')}
              </Link>
            </div>
            <div className="mt-12 relative aspect-[16/9] max-w-3xl mx-auto">
              <Image
                src="/images/3d-icon-design-ibrowe-browser--logo-head-dog-vs-mi.png"
                alt="iBrowe vs Edge"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('privacyTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('privacyDescription')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* iBrowe Features */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <Image
                    src="/images/product_logo_256.png"
                    alt="iBrowe"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">iBrowe</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.thirdPartyAds')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.crossSiteTracking')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.thirdPartyCookies')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.fingerprinting')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.cookieBanners')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.globalPrivacy')}</span>
                  </div>
                </div>
              </div>

              {/* Edge Features */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <Image
                    src="/images/microsoft.png"
                    alt="Microsoft Edge"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">Microsoft Edge</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.thirdPartyAds')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.crossSiteTracking')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.thirdPartyCookies')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.fingerprinting')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.cookieBanners')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">{t('features.edge.globalPrivacy')}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8">
              {t('privacyConclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('featuresTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('featuresDescription')}
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('featuresComparison')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">iBrowe</h4>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.adBlocker')}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{t('features.ibrowe.youtubeAdBlocker')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 