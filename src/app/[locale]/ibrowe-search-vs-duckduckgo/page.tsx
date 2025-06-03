import ComparisonPage from "@/components/ComparisonLayout";
import { HeroCompareSectionData } from "@/components/HeroCompareSection";
import IbroweVsChromeFaq from "@/components/IbroweVsChromeFaq";

export default function DuckDuckGoComparison() {
  const heroData: HeroCompareSectionData = {
    heading: "iBrowe Search vs DuckDuckGo",
    imageSrc: "/images/3d-icon-design-ibrowe-search-vs-duckduckgo.png",
    paragraphs: [
      "DuckDuckGo is known as a privacy-focused alternative to Big Tech search engines.But what most users don’t realize is that DuckDuckGo doesn’t operate its own search index.",
      "Instead, most of DDG’s results come from Microsoft Bing, meaning any biases or censorship within Bing also appear in DuckDuckGo.It also means that DuckDuckGo’s decisions such as those related to ad revenue agreements with Microsoft can impact your search experience.",
      "While DuckDuckGo offers better privacy than Google or Bing, it still lacks true independence in several key areas. ‍How does DuckDuckGo compare to iBrowe Search?",
      "Let’s take a closer look.",
    ],
  };

  const sections = [
    {
      title: "Is iBrowe Search more private than DuckDuckGo?",
      description:
        "While DuckDuckGo appears independent, it’s actually powered by Big Tech specifically, Microsoft. Nearly all of DuckDuckGo’s search results come directly from Bing. DuckDuckGo acts as a proxy for your searches, helping to mask your identity, but at its core, it’s still delivering results from a Big Tech company. Even though DuckDuckGo markets itself as privacy-focused, its reliance on a platform known for extensive user tracking raises concerns. For example, ads in DuckDuckGo are served through Bing’s network. When you click on these ads, Microsoft’s ad servers can see your IP address even if they claim not to build a profile around it. By contrast, iBrowe Search is fully independent, does not rely on Big Tech infrastructure, and is committed to complete privacy by design no hidden intermediaries.",
      summary:
        "In contrast, iBrowe Search is powered by an independent index free from Big Tech control :",
      footerNote:
        "The key thing to understand is that DuckDuckGo relies on a Big Tech search index and then tries to strip away profiling and data collection afterward. iBrowe Search, on the other hand, is private by design. There’s no need to remove invasive tracking techniques because they were never there to begin with.",
       comparisonPoints: [
    {
      title: "Private and anonymous search",
      ibrowe: true,
      competitor: true,
    },
    {
      title: "No personal data collection",
      ibrowe: true,
      competitor: true,
    },
    {
      title: "No user profiling",
      ibrowe: true,
      competitor: true,
    },
    {
      title: "Supported by privacy-respecting ads",
      ibrowe: true,
      competitor: false,
    },
  ],
    },
    {
      title: "Are iBrowe Search results better than DuckDuckGo’s?",
      description:
        "While both iBrowe Search and DuckDuckGo protect your privacy each in very different ways there's a key difference when it comes to result quality : iBrowe Search is powered by an independent index. Built through the Web Discovery Project, iBrowe Search uses anonymous, real-user browsing data to prioritize pages that are actually useful not just technically crawlable. This helps deliver higher-quality results with far less spam and duplicate content. DuckDuckGo, by contrast, is simply a more private way to access Bing’s results. So if Bing isn’t known for quality in a certain area, DuckDuckGo won’t be either.",
      summary: "ลองดูการเปรียบเทียบตามคุณภาพผลลัพธ์และความโปร่งใส:",
      footerNote:
        "The key thing to understand is that DuckDuckGo uses a Big Tech search index and then tries to remove profiling and data collection afterward. ‍iBrowe Search takes a different approach: Privacy isn’t something we add later. It’s built in from the start.",
      comparisonPoints: [
    {
      title: "Powered by an independent search index",
      ibrowe: true,
      competitor: false,
    },
    {
      title:
        "Ranking and indexing driven by anonymous, opt-in data from real users",
      ibrowe: true,
      competitor: false,
    },
    {
      title:
        "Customizable, community-driven ranking options with Goggles",
      ibrowe: true,
      competitor: false,
    },
    {
      title: "No hidden personalization behind the results",
      ibrowe: true,
      competitor: false,
    },
  ],
    },
  ];

  return (
    <ComparisonPage
      heroData={heroData}
      sections={sections}
      competitorName="DuckDuckGo"
      ibroweLogo="/images/Asset-37.png"
      competitorLogo="/images/icons8-duckduckgo.svg"
      faqComponent={<IbroweVsChromeFaq />}
    />
  );
}
