// components/ComparisonPage.tsx

import HeroCompareSection, {
  HeroCompareSectionData,
} from "@/components/HeroCompareSection";
import Image from "next/image";

type ComparisonValue = boolean | "partial";

interface ComparisonPoint {
  title: string;
  ibrowe: ComparisonValue;
  competitor: ComparisonValue;
}

interface ComparisonPageProps {
  heroData: HeroCompareSectionData;
  sections: {
    title: string;
    description: string;
    summary: string;
    comparisonPoints: ComparisonPoint[];
    footerNote: string;
  }[];
  ibroweLogo: string;
  competitorLogo: string;
  competitorName: string;
  faqComponent?: React.ReactNode;
}

export default function ComparisonPage({
  heroData,
  sections,
  competitorName,
  faqComponent,
  ibroweLogo,
  competitorLogo,
}: ComparisonPageProps) {
  const getCheckImage = (value: ComparisonValue) => {
    if (value === true) return "/images/check-ok.png";
    if (value === "partial") return "/images/check-no-2.png";
    return "/images/check-no.png";
  };

  return (
    <div className="min-h-screen">
      <HeroCompareSection data={heroData} />
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="bg-[#535353] border-b-[1px] border-[#e4ebf3] py-[10px] px-[30px] relative"
        >
          <div className="text-center w-full max-w-[940px] mx-auto">
            <h1 className="title-h1">{section.title}</h1>
            <p className="text-white text-left pt-[27px] text-base font-medium mb-[10px]">
              <strong>{section.description}</strong>
            </p>
            <div className="text-white text-left pb-9 text-[22px] font-semibold leading-[24px]">
              {section.summary}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 auto-cols-fr grid-rows-[auto] place-items-start justify-center">
              {/* iBrowe Column */}
              <div className="relative w-full flex flex-col items-center justify-center px-6 py-8 bg-white rounded-2xl backdrop-blur-sm shadow-[0_4px_130px_#96a3b51f] translate-x-0 translate-y-0">
                <Image
                  src={ibroweLogo}
                  alt="iBrowe Logo"
                  width={500}
                  height={500}
                  className="object-cover w-[20%] max-w-[80%] h-1/5 mb-0"
                />
                <h2 className="pt-[10px] text-base font-medium leading-[32px] block">
                  iBrowe
                </h2>
                <div className="bg-[#76879d1a] self-stretch h-[1px] mt-auto mb-4" />
                <ul className="text-left self-stretch mb-auto font-medium leading-[14px] list-none p-0 m-0">
                  {section.comparisonPoints.map((point, index) => (
                    <li
                      key={index}
                      className="mt-4 text-sm leading-6 flex items-start gap-2"
                    >
                      <Image
                        src={getCheckImage(point.ibrowe)}
                        alt="check"
                        width={20}
                        height={20}
                        className="mt-1"
                      />
                      <span>{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitor Column */}
              <div className="relative w-full flex flex-col items-center justify-center px-6 py-8 bg-white rounded-2xl backdrop-blur-sm shadow-[0_4px_130px_#96a3b51f] translate-x-0 translate-y-0">
                <Image
                  src={competitorLogo}
                  alt="iBrowe Logo"
                  width={500}
                  height={500}
                  className="object-cover w-[20%] max-w-[80%] h-1/5 mb-0"
                />
                <h2 className="pt-[10px] text-base font-medium leading-[32px] block">
                  {competitorName}
                </h2>
                <div className="bg-[#76879d1a] self-stretch h-[1px] mt-auto mb-4" />
                <ul className="text-left self-stretch mb-auto font-medium leading-[14px] list-none">
                  {section.comparisonPoints.map((point, index) => (
                    <li
                      key={index}
                      className="mt-4 text-sm leading-6 flex items-start gap-2"
                    >
                      <Image
                        src={getCheckImage(point.competitor)}
                        alt="check"
                        width={20}
                        height={20}
                        className="mt-1"
                      />
                      <span>{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-left text-white pt-[27px] text-base font-medium mb-[10px]">
                {section.footerNote}
              </p>
            </div>
          </div>
        </div>
      ))}
      {faqComponent}
    </div>
  );
}
