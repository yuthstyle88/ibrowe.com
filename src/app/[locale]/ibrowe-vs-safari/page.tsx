'use client';

import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";
import { useTranslations } from "next-intl";

export default function SafariComparison() {
  const t = useTranslations("SafariComparison");

  const heroData: HeroCompareSectionData = {
    heading: t("title"),
    imageSrc: "/images/3d-icon-design-ibrowe-search-vs-safari.png",
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
          competitor: false,
        },
        { 
          title: t("features.ibrowe.crossSiteTracking"), 
          ibrowe: true, 
          competitor: false 
        },
        {
          title: t("features.ibrowe.thirdPartyCookies"),
          ibrowe: true,
          competitor: true,
        },
        {
          title: t("features.ibrowe.fingerprinting"),
          ibrowe: true,
          competitor: false,
        },
        {
          title: t("features.ibrowe.cookieBanners"),
          ibrowe: true,
          competitor: false,
        },
        {
          title: t("features.ibrowe.globalPrivacy"),
          ibrowe: true,
          competitor: false,
        },
        {
          title: t("features.ibrowe.httpsUpgrade"),
          ibrowe: true,
          competitor: "partial" as const,
        },
        { 
          title: t("features.ibrowe.networkState"), 
          ibrowe: true, 
          competitor: false 
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
      footerNote: t("footerNoteComparison"),
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
        { title: "AI Assistant", ibrowe: true, competitor: false },
        { title: "Vertical tabs", ibrowe: true, competitor: false },
        { title: "Tab groups", ibrowe: true, competitor: true },
        { title: "Offline media playlists", ibrowe: true, competitor: false },
        { 
          title: "News and RSS reader", 
          ibrowe: true, 
          competitor: true 
        },
        { title: "Reading mode", ibrowe: true, competitor: true },
        { title: "Night mode", ibrowe: true, competitor: true },
        { title: "Translation", ibrowe: true, competitor: true },
        { title: "Cross-device profile sync", ibrowe: true, competitor: true },
        { title: "Private search by default", ibrowe: true, competitor: false },
        { 
          title: "Built-in VPN", 
          ibrowe: true, 
          competitor: "partial" as const 
        },
        { title: "Private video calling", ibrowe: true, competitor: false },
        { title: "Tor browsing support", ibrowe: true, competitor: false },
        { title: "WebTorrent integration", ibrowe: true, competitor: false },
        { title: "Web3", ibrowe: true, competitor: false },
        {
          title: "Secure built-in crypto wallet",
          ibrowe: true,
          competitor: false,
        },
        { title: "Crypto rewards program", ibrowe: true, competitor: false },
      ],
    },
  ];

  return (
    <ComparisonPage
      heroData={heroData}
      sections={sections}
      competitorName="Safari"
      ibroweLogo="/images/Asset-37.png"
      competitorLogo="/images/safari.png"
      faqComponent={<IbroweVsChromeFaq />}
    />
  );
}
