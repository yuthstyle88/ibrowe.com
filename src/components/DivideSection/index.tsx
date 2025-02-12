"use client";
import { AssetIcon } from "@/constants/icon";
import Image from "next/image";

const AccordionItem = ({
  index,
  open,
  title,
  children,
  toggleAccordion,
  isFirst,
  isLast,
}: {
  index: number;
  open: number | null;
  title: string;
  children: React.ReactNode;
  toggleAccordion: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const borderClasses = `
    ${isFirst ? "card_quote" : ""}
    ${
      isLast
        ? "text-[#fff] rounded-bl-2xl rounded-br-2xl border-2 border-[#111114]"
        : ""
    }
  `;

  return (
    <details
      className={`${borderClasses} text-[#fff] border-2 border-[#111114] card__contents_quote group p-0 w-full overflow-hidden hover:border-[#3E37D4] hover:bg-[#3E37D4] ${
        open === index ? "bg-[#252529]" : "bg-[#111114]"
      }`}
      onClick={(e) => {
        e.preventDefault();
        toggleAccordion(index);
      }}
      open={open === index}
    >
      <summary className="text-blockquote list-none flex gap-6 items-start p-8">
        <span className="text-[30px] leading-[40px]">{title}</span>
        <div className="w-3"></div>
        <Image
          src={AssetIcon.minus}
          height={40}
          alt="minus"
          className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
        />
        <Image
          src={AssetIcon.minus}
          height={40}
          alt="minus"
          className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
            open === index
              ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
              : "transition-transform duration-100 rotate-90 group-open:rotate-0"
          }`}
        />
      </summary>
      <div
        className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden max-h-0 duration-300 ${
          open === index ? "max-h-96 pb-2" : ""
        }`}
      >
        {children}
      </div>
    </details>
  );
};

export default AccordionItem;
