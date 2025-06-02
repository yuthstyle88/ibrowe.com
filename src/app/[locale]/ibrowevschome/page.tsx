import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";

export default function ChromeComparisonPage() {
  const heroData: HeroCompareSectionData = {
    heading: "iBrowe vs Chrome",
    imageSrc: "/images/3d-icon-design-ibrowe-vs-chrome.png",
    paragraphs: [
      "Discover why iBrowe is the only browser you’ll ever need.",
      "Fast, private, effortless. iBrowe was built for users who demand more.",
      "We believe browsing should be smooth, secure,",
      "and free from hidden agendas.",
      "iBrowe isn't just a browser, it’s your gateway to a faster, safer, and more independent internet experience.",
      "See the difference today. Experience browsing, redefined.",
    ],
  };

  const sections = [
    {
      title: "Does iBrowe offer better privacy than Chrome?",
      description:
        "Google is a leading example of “Big Tech” and one of the most valuable companies in the world. While many think of Google as a magical box, so influential it even inspired the verb “to google” at its core, Google is an advertising company. The bulk of Google’s multi-billion-dollar revenue comes from selling ads. To fuel this system, Chrome and Google Search are designed to collect as much information about you as possible. They then monetize this data by delivering highly targeted ads.The more they know about you, the more money they make.",
      summary:
        "In contrast, iBrowe shields you from tracking almost everywhere:",
      footerNote:
        "Chrome was built with tracking in mind. It allows intrusive ads, trackers, cookies, and more to follow you across the web recording everything you do and often linking it directly to you, without your knowledge or consent. iBrowe, on the other hand, puts your privacy first by default.",
      comparisonPoints: [
        {
          title: "Block ads from third parties",
          ibrowe: true,
          competitor: false,
        },
        { title: "Block cross-site trackers", ibrowe: true, competitor: true },
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
          title: "Enable advanced privacy controls",
          ibrowe: true,
          competitor: false,
        },
        {
          title: "Auto-upgrade to HTTPS",
          ibrowe: true,
          competitor: "partial" as const,
        },
        { title: "Isolate network states", ibrowe: true, competitor: true },
        { title: "Filter search parameters", ibrowe: true, competitor: false },
        {
          title: "Block bounce tracking",
          ibrowe: true,
          competitor: "partial" as const,
        },
      ],
    },
    {
      title: "Does iBrowe offer more features than Chrome?",
      description:
        "Both iBrowe and Chrome are built on Chromium, the open-source browser engine that also powers Edge, Opera, and Vivaldi. As a result, they share a similar look and feel, along with core features like bookmarks and tab management. Any extension that works with Chrome will work with iBrowe too, although iBrowe comes packed with so many built-in features that you might not need extensions at all.",
      summary:
        "Beyond these shared foundations, iBrowe offers a range of specially tailored features:",
      footerNote:
        "When it comes to convenience and useful features, iBrowe is far ahead. To achieve the same level of functionality in Chrome, you’d need to install multiple extensions each one potentially slowing down performance and increasing security risks. There's no question: iBrowe wins hands down when it comes to built-in functionality.",
      comparisonPoints: [
        { title: "Built-in ad blocker", ibrowe: true, competitor: false },
        { title: "YouTube ad blocker", ibrowe: true, competitor: true },
        { title: "AI Assistant", ibrowe: true, competitor: false },
        { title: "Vertical tabs", ibrowe: true, competitor: false },
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
      competitorName="Chrome"
      ibroweLogo="/images/Asset-37.png"
      competitorLogo="/images/chrome.png"
      faqComponent={<IbroweVsChromeFaq />}
    />
  );
}
