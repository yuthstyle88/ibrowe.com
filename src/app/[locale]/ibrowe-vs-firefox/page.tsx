'use client';

import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";
import { useTranslations } from "next-intl";

export default function FirefoxComparisonPage() {
  const t = useTranslations("FirefoxComparison");

  const heroData: HeroCompareSectionData = {
    heading: t("title"),
    imageSrc: "/images/3d-icon-design-ibrowe-vs-firefox.png",
    paragraphs: [
      t("subtitle"),
    ],
  };

  const sections = [
    {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
      summary: t("privacyConclusion"),
      footerNote: t("privacyConclusion"),
      comparisonPoints: [
        { 
          title: t("features.ibrowe.thirdPartyAds"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.crossSiteTracking"), 
          ibrowe: true, 
          competitor: true 
        },
        { 
          title: t("features.ibrowe.thirdPartyCookies"), 
          ibrowe: true, 
          competitor: true 
        },
        { 
          title: t("features.ibrowe.fingerprinting"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.cookieBanners"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.globalPrivacy"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.httpsUpgrade"), 
          ibrowe: true, 
          competitor: "partial" as const 
        },
        { 
          title: t("features.ibrowe.networkState"), 
          ibrowe: true, 
          competitor: true 
        },
        { 
          title: t("features.ibrowe.searchParams"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.bounceTracking"), 
          ibrowe: true, 
          competitor: "partial" as const 
        },
      ],
    },
    {
      title: t("featuresTitle"),
      description: t("featuresDescription"),
      summary: t("featuresComparison"),
      footerNote: t("featuresComparison"),
      comparisonPoints: [
        { 
          title: t("features.ibrowe.adBlocker"), 
          ibrowe: true, 
          competitor: false 
        },
        { 
          title: t("features.ibrowe.youtubeAdBlocker"), 
          ibrowe: true, 
          competitor: false 
        },
        { title: t("comparisonPoints.aiAssistant"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.verticalTabs"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.tabGroups"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.offlineMediaPlaylists"), ibrowe: true, competitor: false },
        { 
          title: t("comparisonPoints.newsAndRssReader"), 
          ibrowe: true, 
          competitor: "partial" as const 
        },
        { title: t("comparisonPoints.readingMode"), ibrowe: true, competitor: true },
        { title: t("comparisonPoints.nightMode"), ibrowe: true, competitor: true },
        { 
          title: t("comparisonPoints.translation"), 
          ibrowe: true, 
          competitor: "partial" as const 
        },
        { title: t("comparisonPoints.crossDeviceProfileSync"), ibrowe: true, competitor: true },
        { title: t("comparisonPoints.privateSearchByDefault"), ibrowe: true, competitor: false },
        { 
          title: t("comparisonPoints.builtInVpn"), 
          ibrowe: true, 
          competitor: "partial" as const 
        },
        { title: t("comparisonPoints.privateVideoCalling"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.torBrowsingSupport"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.webTorrentIntegration"), ibrowe: true, competitor: false },
        { title: t("comparisonPoints.web3"), ibrowe: true, competitor: false },
        {
          title: t("comparisonPoints.secureBuiltInCryptoWallet"),
          ibrowe: true,
          competitor: false,
        },
        { title: t("comparisonPoints.cryptoRewardsProgram"), ibrowe: true, competitor: false },
      ],
    },
  ];

  return (
    <ComparisonPage
      heroData={heroData}
      sections={sections}
      competitorName="Firefox"
      ibroweLogo="/images/Asset-37.png"
      competitorLogo="/images/firefox.png"
      faqComponent={<IbroweVsChromeFaq />}
    />
  );
}
