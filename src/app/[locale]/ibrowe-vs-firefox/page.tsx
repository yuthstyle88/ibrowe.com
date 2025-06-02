import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";

export default function FirefoxComparisonPage() {
  const heroData: HeroCompareSectionData = {
    heading: "iBrowe vs Firefox",
    imageSrc: "/images/3d-icon-design-ibrowe-vs-firefox.png",
    paragraphs: [
      "Why is iBrowe the right browser for you?",
      "Let’s take a look at what sets us apart.",
      "When it comes to a faster, safer, and smoother browsing",
      "experience, iBrowe isn’t just an option, it’s the answer.",
      "We’ll show you exactly how iBrowe goes beyond the",
      "average browser, and why today is the perfect time to",
      "make the switch.",
    ],
  };

  const sections = [
    {
      title: "Is iBrowe more private than Firefox?",
      description:
        "Firefox was one of the first browsers to champion privacy pioneering features like tracker and cookie blocking by default. But over time, Firefox slowed its pace of innovation, and other options have moved ahead. While Firefox still offers stronger privacy than Chrome or Edge, iBrowe takes it even further. It provides a more comprehensive level of protection by default, blocking more trackers and minimizing your digital footprint. Some ad tech can still reach you on Firefox and in some cases, your data may still be used to serve targeted ads.With iBrowe, your privacy isn’t just a feature. It’s the foundation.",
      summary:
        "In contrast, iBrowe blocks tracking almost everywhere :",
      footerNote:
        "In short, Firefox is a better choice than Big Tech browsers like Chrome or Edge. It blocks some cookies, some trackers, and some types of fingerprinting but only to a limited extent. The worst tracking techniques can still slip through. With iBrowe, privacy is built in by default.",
      comparisonPoints: [
      { title: "Block ads from third parties", ibrowe: true, competitor: false },
      { title: "Block cross-site trackers", ibrowe: true, competitor: true },
      { title: "Block cookies from third parties", ibrowe: true, competitor: true },
      { title: "Prevent digital fingerprinting", ibrowe: true, competitor: false },
      { title: "Block cookie consent banners", ibrowe: true, competitor: false },
      { title: "Enable advanced privacy controls", ibrowe: true, competitor: false },
      { title: "Auto-upgrade to HTTPS", ibrowe: true, competitor: "partial" as const },
      { title: "Isolate network states", ibrowe: true, competitor: true },
      { title: "Filter search parameters", ibrowe: true, competitor: false },
      { title: "Block bounce tracking", ibrowe: true, competitor: "partial" as const },
    ],
    },
    {
      title: "Does iBrowe offer more features than Firefox?",
      description:
        "iBrowe and Firefox are built on different browser engines the core technology that powers how each browser works. iBrowe uses Chromium, the popular open-source engine behind Chrome, Edge, Opera, and Vivaldi. This means iBrowe feels familiar and easy to use, with minimal learning curve. Firefox, on the other hand, uses its own Quantum/Gecko engine, offering a unique experience that may feel different if you're used to Chromium browsers. When switching browsers, you want a smooth transition and broad compatibility with apps and extensions. That's where Chromium-based browsers like iBrowe shine.",
      summary:
        "Beyond these shared foundations, iBrowe offers a wide range of specially tailored features you won't find in Firefox.",
      footerNote:
        "t’s clear: iBrowe outshines Firefox when it comes to convenient, built-in features. To get similar functionality in Firefox, you would need to install multiple extensions each one potentially slowing down performance and increasing security risks. There’s no doubt: iBrowe wins when it comes to functionality.",
      comparisonPoints: [
      { title: "Built-in ad blocker", ibrowe: true, competitor: false },
      { title: "YouTube ad blocker", ibrowe: true, competitor: false },
      { title: "AI Assistant", ibrowe: true, competitor: false },
      { title: "Vertical tabs", ibrowe: true, competitor: false },
      { title: "Tab groups", ibrowe: true, competitor: false },
      { title: "Offline media playlists", ibrowe: true, competitor: false },
      { title: "News and RSS reader", ibrowe: true, competitor: "partial" as const },
      { title: "Reading mode", ibrowe: true, competitor: true },
      { title: "Night mode", ibrowe: true, competitor: true },
      { title: "Translation", ibrowe: true, competitor: "partial" as const },
      { title: "Cross-device profile sync", ibrowe: true, competitor: true },
      { title: "Private search by default", ibrowe: true, competitor: false },
      { title: "Built-in VPN", ibrowe: true, competitor: "partial" as const },
      { title: "Private video calling", ibrowe: true, competitor: false },
      { title: "Tor browsing support", ibrowe: true, competitor: false },
      { title: "WebTorrent integration", ibrowe: true, competitor: false },
      { title: "Web3", ibrowe: true, competitor: false },
      { title: "Secure built-in crypto wallet", ibrowe: true, competitor: false },
      { title: "Crypto rewards program", ibrowe: true, competitor: false },
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
