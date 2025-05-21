import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function FirefoxComparisonPage() {
  const t = useTranslations('FirefoxComparison');
  const locale = useLocale();

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

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
            <Link
              href={getLocalizedPath('/download')}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('downloadButton')}
            </Link>
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
                <h4 className="text-xl font-semibold text-gray-900 mb-4">iBrowe</h4>
                <ul className="space-y-4">
                  {Object.entries(t.raw('features.ibrowe')).map(([key, value]) => (
                    <li key={key} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Firefox Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Firefox</h4>
                <ul className="space-y-4">
                  {Object.entries(t.raw('features.firefox')).map(([key, value]) => (
                    <li key={key} className="flex items-start">
                      <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-600">{String(value)}</span>
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