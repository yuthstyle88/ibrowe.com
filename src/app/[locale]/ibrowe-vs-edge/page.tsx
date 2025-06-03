import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";

export default function EdgeComparison() {
  const heroData: HeroCompareSectionData = {
    heading: "iBrowe vs Edge",
    imageSrc: "/images/3d-icon-design-ibrowe-browser--logo-head-dog-vs-mi.png",
    paragraphs: [
      "Microsoft Edge is the successor to Internet Explorer and is now the third most-used browser in the world  and the second on desktop. But much of that usage comes from it being the default browser on Windows devices.",
      "‍Very few people actively choose Edge on their own. To be fair, Edge includes some nice features and is well-optimized for the Windows operating system.",
      "‍But when it comes to privacy, performance, and essential features, it still falls short.",
      "‍‍Let’s see how it compares.",
    ],
  };

  const sections = [
    {
      title: "Is iBrowe more private than Edge?",
      description:
        "Microsoft is a classic example of Big Tech and one of the most valuable companies in the world. ‍While much of its revenue comes from selling PCs and software like Windows, advertising is also a massive business and most of those ads appear in Edge and Bing. Edge tracks your activity across the web, collecting as much data as possible. Microsoft monetizes that data turning your browsing into highly targeted ads. For Microsoft, Edge is about advertising and profit.iBrowe takes a different path.",
      summary: "It blocks nearly all attempts to track you by default.",
      footerNote:
        "Put simply, Edge was built for tracking. It allows creepy ads, trackers, cookies, and more to follow you across the web recording everything you do and linking it back to you, often without your knowledge or consent. ‍iBrowe is private by default. No tracking. No profiling. No surprises.",
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
          competitor: false,
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
        { title: "Auto-upgrade to HTTPS", ibrowe: true, competitor: true },
        {
          title: "Isolate network states",
          ibrowe: true,
          competitor: "partial" as const,
        },
        { title: "Filter search parameters", ibrowe: true, competitor: false },
        { title: "Block bounce tracking", ibrowe: true, competitor: false },
      ],
    },
    {
      title: "Does iBrowe have more features than Edge?",
      description:
        "Both iBrowe and Edge are built on the open-source Chromium engine, the same core used by Chrome, Opera, and Vivaldi. So yes, you can expect a familiar look and feel. But beyond those similarities, iBrowe includes thoughtful enhancements and privacy-focused features that Edge simply can’t match.",
      summary:
        "See how they stack up when it comes to search quality and transparency :",
      footerNote:
        "When it comes to useful, built-in features iBrowe stands out. To get similar functionality in Edge, you’d need to install multiple extensions. Each one adds complexity, potential security risks, and can slow down your browser. With iBrowe, everything just works securely, efficiently, and right out of the box.",
      comparisonPoints: [
        { title: "Built-in ad blocker", ibrowe: true, competitor: false },
        { title: "YouTube ad blocker", ibrowe: true, competitor: false },
        { title: "AI Assistant", ibrowe: true, competitor: true },
        { title: "Vertical tabs", ibrowe: true, competitor: true },
        { title: "Tab groups", ibrowe: true, competitor: true },
        { title: "Offline media playlists", ibrowe: true, competitor: false },
        {
          title: "News and RSS reader",
          ibrowe: true,
          competitor: "partial" as const,
        },
        { title: "Reading mode", ibrowe: true, competitor: true },
        { title: "Night mode", ibrowe: true, competitor: true },
        { title: "Translation", ibrowe: true, competitor: true },
        { title: "Cross-device profile sync", ibrowe: true, competitor: true },
        { title: "Private search by default", ibrowe: true, competitor: false },
        { title: "Built-in VPN", ibrowe: true, competitor: false },
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
      competitorName="Microsoft Edge"
      ibroweLogo="/images/Asset-37.png"
      competitorLogo="/images/microsoft.png"
      faqComponent={<IbroweVsChromeFaq />}
    />
  );
}
