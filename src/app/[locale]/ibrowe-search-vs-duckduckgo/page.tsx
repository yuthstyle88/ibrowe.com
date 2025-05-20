import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function DuckDuckGoComparison() {
  const t = useTranslations('DuckDuckGoComparison');

  return (
    <main className="min-h-screen">
      <div className="section-content">
        <div className="container space-below">
          <div className="title-wrap-left">
            <div className="hero-content">
              <div className="hero-block">
                <div className="content-block-hero">
                  <h1 className="head-ibrowe-vs-duckduckgo">{t('title')}</h1>
                  <p className="sub-ibrowe-vs-duckduckgo">{t('subtitle')}</p>
                  <div className="button-wrap-hero">
                    <Link href="/download" className="button w-button">
                      {t('downloadButton')}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hero-image-wrap">
                <Image
                  src="/images/3d-icon-design-ibrowe-browser--logo-head-dog-vs-duckduckgo.png"
                  alt="iBrowe vs DuckDuckGo"
                  width={1024}
                  height={1024}
                  className="hero-image-search"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pricing-comparison">
        <div className="container-16">
          <h1 className="heading-23">{t('privacyTitle')}</h1>
          <p className="paragraph-9">{t('privacyDescription')}</p>
          <div className="pricing-wrapper-edge">
            <div className="pricing-card">
              <Image
                src="/images/product_logo_256.png"
                alt="iBrowe"
                width={256}
                height={256}
                className="pricing-image"
              />
              <h2 className="pricing-title">iBrowe</h2>
              <div className="pricing-divider"></div>
              <ul className="safari3 w-list-unstyled">
                <li>
                  <div className="search1">
                    <strong>{t('features.ibrowe.thirdPartyAds')}</strong>
                  </div>
                </li>
                <li>
                  <div className="search2-copy">
                    <strong>{t('features.ibrowe.crossSiteTracking')}</strong>
                  </div>
                </li>
                <li>
                  <div className="search3-copy">
                    <strong>{t('features.ibrowe.thirdPartyCookies')}</strong>
                  </div>
                  <div className="search4-copy-copy">
                    <strong>{t('features.ibrowe.fingerprinting')}</strong>
                  </div>
                  <div className="search4-copy">
                    <strong>{t('features.ibrowe.cookieBanners')}</strong>
                  </div>
                  <div className="ibrowevssafari1">
                    <strong>{t('features.ibrowe.globalPrivacy')}</strong>
                  </div>
                  <div className="search4-copy-copy">
                    <strong>{t('features.ibrowe.httpsUpgrade')}</strong>
                  </div>
                  <div className="search4-copy-copy">
                    <strong>{t('features.ibrowe.networkState')}</strong>
                  </div>
                  <div className="search4-copy-copy">
                    <strong>{t('features.ibrowe.searchParams')}</strong>
                  </div>
                  <div className="search4-copy-copy">
                    <strong>{t('features.ibrowe.bounceTracking')}</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="safari">
              <Image
                src="/images/duckduckgo.png"
                alt="DuckDuckGo"
                width={512}
                height={512}
                className="pricing-image"
              />
              <h2 className="pricing-title">DuckDuckGo</h2>
              <div className="pricing-divider"></div>
              <ul className="safari3 w-list-unstyled">
                <li>
                  <div className="safari1">
                    <strong>{t('features.duckduckgo.thirdPartyAds')}</strong>
                  </div>
                  <div className="safari2">
                    <strong>{t('features.duckduckgo.crossSiteTracking')}</strong>
                  </div>
                </li>
                <li>
                  <div className="search3-edge">
                    <strong>{t('features.duckduckgo.thirdPartyCookies')}</strong>
                  </div>
                  <div className="safari4">
                    <strong>{t('features.duckduckgo.fingerprinting')}</strong>
                  </div>
                  <div className="search4-copy-copy-copy-copy">
                    <strong>{t('features.duckduckgo.globalPrivacy')}</strong>
                  </div>
                  <div className="safari6-1">
                    <strong>{t('features.duckduckgo.cookieBanners')}</strong>
                  </div>
                  <div className="edge6">
                    <strong>{t('features.duckduckgo.httpsUpgrade')}</strong>
                  </div>
                  <div className="edge8">
                    <strong>{t('features.duckduckgo.networkState')}</strong>
                  </div>
                  <div className="safari9">
                    <strong>{t('features.duckduckgo.searchParams')}</strong>
                  </div>
                  <div className="edge10">
                    <strong>{t('features.duckduckgo.bounceTracking')}</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="paragraph-9">{t('privacyConclusion')}</p>
        </div>
      </section>

      <section className="pricing-comparison">
        <div className="container-16">
          <h1 className="heading-23">{t('featuresTitle')}</h1>
          <p className="paragraph-9">{t('featuresDescription')}</p>
          <div className="text-block">{t('featuresComparison')}</div>
          <div className="pricing-wrapper">
            <div className="pricing-card">
              <div className="pricing-divider"></div>
              <div className="pricing-card">
                <Image
                  src="/images/product_logo_256.png"
                  alt="iBrowe"
                  width={256}
                  height={256}
                  className="pricing-image"
                />
                <h2 className="pricing-title">iBrowe</h2>
                <div className="pricing-divider"></div>
                <ul className="safari3 w-list-unstyled">
                  <li>
                    <div className="pricing-feature-1">
                      <strong>{t('features.ibrowe.adBlocker')}</strong>
                    </div>
                  </li>
                  <li>
                    <div className="pricing-feature-2">
                      <strong>{t('features.ibrowe.youtubeAdBlocker')}</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 