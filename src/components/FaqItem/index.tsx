// components/FaqItem.tsx
import { ReactNode } from "react";

interface FaqItemProps {
  question: string;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  index: number;
  totalItems: number;
}

const FaqItem = ({
  question,
  children,
  isActive,
  onClick,
  index,
  totalItems,
}: FaqItemProps) => {
  const isFirst = index === 0;
  const isLast = index === totalItems - 1;

  return (
    <details
      className={`card_faq card__contents_faq group overflow-hidden border border-gray-200 bg-white shadow-sm ${
        isFirst ? "rounded-tl-[16px] rounded-tr-[16px]" : ""
      } ${isLast ? "rounded-bl-[16px] rounded-br-[16px] border-b-2" : ""} ${
        !isLast ? "border-b-0" : ""
      }`}
      open={isActive}
    >
      <summary
        className=" font-bold font-poppins flex cursor-pointer list-none items-start justify-between"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <h3 className="text-blockquote">{question}</h3>
        <svg
          className={`ml-4 h-8 w-8 flex-shrink-0 transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className={`text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#1b1b1f] pt-2 max-w-[76ch] max-h-0 duration-500 
        ${isActive ? "max-h-[480px] pb-2" : ""}`}>
        {children}
      </div>
    </details>
  );
};

export default FaqItem;
