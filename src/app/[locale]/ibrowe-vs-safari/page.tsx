import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";

export default function SafariComparison() {
  const heroData: HeroCompareSectionData = {
    heading: "iBrowe vs Safari",
    imageSrc: "/images/3d-icon-design-ibrowe-search-vs-safari.png",
    paragraphs: [
      "Safari is the second most-used browser in the world  largely thanks to being the default on Apple devices. It’s generally considered more private than Chrome and is well-optimized for iOS and macOS.But even with Apple’s best efforts, Safari still doesn’t match the speed and privacy of a browser purpose-built for both: iBrowe.iBrowe is faster and more private even on macOS and iOS. And unlike Safari, it works seamlessly across all devices and operating systems.",
      "‍So which browser is right for you?",
    ],
  };

  const sections = [
    {
      title: "Is iBrowe more private than Safari?",
      description:
        "Apple is one of the most valuable companies in the world but unlike other Big Tech giants like Google or Facebook, Apple doesn’t rely heavily on advertising revenue. Its business is driven by hardware and software, not your personal data. That gives Apple more incentive to protect you and less to track you. That said, Safari still doesn’t go as far as it could when it comes to privacy and online protection. ‍iBrowe goes further.",
      summary:
        "It blocks nearly every attempt to track you by default.",
      footerNote:
        "As it stands, Safari still allows ads and trackers to appear on the websites you visit. It also permits certain forms of digital fingerprinting and those annoying cookie consent pop-ups? Safari shows them too. iBrowe blocks all of that by default. With Safari, cross-site tracking still happens. Your browsing and search history can be logged and tied back to you often without your awareness or consent. iBrowe is private by design. No hidden settings. No surprises. Just privacy built in.",
      comparisonPoints: [
        {
          title: "Block ads from third parties",
          ibrowe: true,
          competitor: false,
        },
        { title: "Block cross-site trackers", ibrowe: true, competitor: false },
        {
          title: "Block cookies from third parties",
          ibrowe: true,
          competitor: true,
        },
        {
          title: "Prevent digital fingerprinting",
          ibrowe: true,
          competitor: false,
        },
        {
          title: "Block cookie consent banners",
          ibrowe: true,
          competitor: false,
        },
        {
          title: "Enable global privacy controls",
          ibrowe: true,
          competitor: false,
        },
        {
          title: "Auto-upgrade to HTTPS",
          ibrowe: true,
          competitor: "partial" as const,
        },
        { title: "Isolate network states", ibrowe: true, competitor: false },
        { title: "Filter search parameters", ibrowe: true, competitor: false },
        { title: "Block bounce tracking", ibrowe: true, competitor:"partial" as const, },
      ],
    },
    {
      title: "Does iBrowe have more features than Safari?",
      description:
        "iBrowe is built on the open-source Chromium engine the same one that powers Chrome, Edge, Opera, and Vivaldi. Safari, on the other hand, uses Apple’s own open-source WebKit engine.Both browsers offer essential features like bookmarks and tabs. But when it comes to extensions, Safari relies on the Apple App Store, with a limited selection. iBrowe supports a much broader range via the Chrome Web Store. And thanks to iBrowe’s built-in features, you might not even need extensions at all.",
      summary: "See how they stack up when it comes to search quality and transparency :",
      footerNote:
        "Some smaller features like translation and tab groups are available in both browsers. But to match iBrowe’s full functionality, Safari requires multiple extensions. Unfortunately, that can introduce security risks and slow down your browsing experience. When it comes to overall capability, iBrowe outperforms Safari by a wide margin.",
      comparisonPoints: [
        { title: "Built-in ad blocker", ibrowe: true, competitor: false },
        { title: "YouTube ad blocker", ibrowe: true, competitor: false },
        { title: "AI Assistant", ibrowe: true, competitor: false },
        { title: "Vertical tabs", ibrowe: true, competitor: false },
        { title: "Tab groups", ibrowe: true, competitor: true },
        { title: "Offline media playlists", ibrowe: true, competitor: false },
        { title: "News and RSS reader", ibrowe: true, competitor: true },
        { title: "Reading mode", ibrowe: true, competitor: true },
        { title: "Night mode", ibrowe: true, competitor: true },
        { title: "Translation", ibrowe: true, competitor: true },
        { title: "Cross-device profile sync", ibrowe: true, competitor: true },
        { title: "Private search by default", ibrowe: true, competitor: false },
        { title: "Built-in VPN", ibrowe: true, competitor: "partial" as const, },
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
