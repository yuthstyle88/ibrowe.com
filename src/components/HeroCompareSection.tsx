"use client";

import Image from "next/image";
import Link from "next/link";
import PlatformLinks from "./PlatformLinks";

export interface HeroCompareSectionData {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
}

export default function HeroCompareSection({
  data,
}: {
  data: HeroCompareSectionData;
}) {
  return (
    <div
      style={{
        backgroundImage: `url("/images/bg_shade.svg")`,
      }}
      className="mt-[78px] bg-[#535353] bg-[position:0_0] bg-no-repeat bg-cover justify-center items-start px-[5%] py-7 flex"
    >
      <div className="mb-auto w-full max-w-[1240px] mx-auto">
        <div className="mb-auto w-full max-w-[1240px] mx-auto">
          <div className="text-left flex flex-col justify-center items-start mb-[35px] px-[10px]">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center w-full md:w-1/2 min-h-[350px]">
                <div className="max-w-[450px] md:max-w-[590px] relative">
                  <h1 className="text-white tracking-[-0.5px] mt-0 mb-[15px] text-[55px] leading-[1] font-bold ">
                    {data.heading}
                  </h1>
                  <p className="text-white max-w-[490px] text-[17px] leading-[1.4] mb-[10px]">
                    <strong>
                      {data.paragraphs.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </strong>
                  </p>
                  <PlatformLinks />
                </div>
              </div>
              <div className="flex-1 justify-center items-center w-full min-h-[350px] p-0 relative">
                <Image
                  src={data.imageSrc}
                  alt="iBrowe vs Chrome"
                  width={800}
                  height={400}
                  className="max-w-1/2 md:max-w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
