'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function NewsFeatures() {
  const t = useTranslations('News.features');

  return (
    <section className="pricing-comparison-2 py-16 bg-[#535353]">
      <div className="container mx-auto px-4 space-y-16 text-white">
        {/* Personal News Feature */}
        <div className="column-wrap-advanced-privacy flex flex-col md:flex-row items-center gap-8">
          <div className="image-block-copy flex-1">
            <Image
              src="/images/design-3d-iconpersonalized-news--on-your-terms--fr.png"
              alt="Personal News"
              width={1536}
              height={1536}
              className="w-full h-auto"
            />
          </div>
          <div className="content-block-left-2 flex-1">
            <div className="content-wrap">
              <p className="title-copy-3 text-xl font-bold mb-4">
                <strong>{t('personal.title')}</strong>
              </p>
              <h2 className="heading-primary-5 text-3xl md:text-4xl font-bold mb-6">
                {t('personal.heading')}
              </h2>
              <p className="paragraph-12 text-lg">
                <strong>
                  {t('personal.description')}
                  <br />
                  {t('personal.keyFeatures.title')}
                  <br />
                  {t('personal.keyFeatures.personalized.title')}
                  <br />
                  {t('personal.keyFeatures.personalized.description')}
                  <br />
                  {t('personal.keyFeatures.privacy.title')}
                  <br />
                  {t('personal.keyFeatures.privacy.description.0')}
                  <br />
                  {t('personal.keyFeatures.privacy.description.1')}
                  <br />
                  {t('personal.keyFeatures.sources.title')}
                  <br />
                  {t('personal.keyFeatures.sources.description')}
                  <br />
                  {t('personal.keyFeatures.rss.title')}
                  <br />
                  {t('personal.keyFeatures.rss.description')}
                  <br />
                  {t('personal.keyFeatures.discover.title')}
                  <br />
                  {t('personal.keyFeatures.discover.description')}
                  <br />
                  {t('personal.keyFeatures.conclusion')}
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Zero Tracking Feature */}
        <div className="column-wrap-advanced-privacy flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="image-block-2 flex-1">
            <Image
              src="/images/design-3d-icon---no-tracking-ever--ibrowe-news-doe.png"
              alt="Zero Tracking"
              width={1536}
              height={1536}
              className="w-full h-auto"
            />
          </div>
          <div className="content-block-left-2 flex-1">
            <div className="content-wrap">
              <p className="title-copy-3 text-xl font-bold mb-4">
                <strong>{t('tracking.title')}</strong>
              </p>
              <h2 className="heading-primary-5 text-3xl md:text-4xl font-bold mb-6">
                {t('tracking.heading')}
              </h2>
              <p className="paragraph-12 text-lg">
                <strong>
                  {t('tracking.description')}
                  <br />
                  {t('tracking.content.title')}
                  <br />
                  {t('tracking.content.sources')}
                  <br />
                  {t('tracking.content.history')}
                  <br />
                  {t('tracking.content.noData.0')}
                  <br />
                  {t('tracking.content.noData.1')}
                  <br />
                  {t('tracking.content.noData.2')}
                  <br />
                  {t('tracking.content.conclusion')}
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* All News in Browser Feature */}
        <div className="column-wrap-advanced-privacy flex flex-col md:flex-row items-center gap-8">
          <div className="image-block-copy flex-1">
            <Image
              src="/images/design-3d-icon---no-tracking-ever-ibrowe-news-does.png"
              alt="All News in Browser"
              width={1536}
              height={1536}
              className="w-full h-auto"
            />
          </div>
          <div className="content-block-left-2 flex-1">
            <div className="content-wrap">
              <p className="title-copy-3 text-xl font-bold mb-4">{t('browser.title')}</p>
              <h2 className="heading-primary-5 text-3xl md:text-4xl font-bold mb-6">
                {t('browser.heading')}
              </h2>
              <p className="paragraph-12 text-lg">
                <strong>
                  {t('browser.description')}
                  <br />
                  {t('browser.features.title')}
                  <br />
                  {t('browser.features.filter')}
                  <br />
                  {t('browser.features.rss')}
                  <br />
                  {t('browser.features.highlights')}
                  <br />
                  {t('browser.features.privacy')}
                  <br />
                  {t('browser.features.conclusion')}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 