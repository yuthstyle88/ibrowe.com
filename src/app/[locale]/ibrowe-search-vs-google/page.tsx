"use client";

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function GoogleComparisonPage() {
  const t = useTranslations('GoogleComparison');
  const locale = useLocale();

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>
            <Link
              href={getLocalizedPath('/download')}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-12"
            >
              {t('downloadButton')}
            </Link>
            <div>
              <Image
                src="/images/3d-icon-design-ibrowe-search-vs-google-p-800.png"
                alt="iBrowe Search vs Google"
                width={800}
                height={400}
                className="w-full max-w-2xl mx-auto"
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
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700">
                {t('privacyConclusion')}
              </p>
            </div>
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('featuresComparison')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* iBrowe Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">iBrowe Search</h4>
                <ul className="space-y-4">
                  {Object.entries(t.raw('features.ibrowe')).map(([key, value]) => (
                    <li key={key} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{value as string}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Google</h4>
                <ul className="space-y-4">
                  {Object.entries(t.raw('features.google')).map(([key, value]) => (
                    <li key={key} className="flex items-start">
                      <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-600">{value as string}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 