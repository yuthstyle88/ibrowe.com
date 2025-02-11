import Footer from "@/components/Footer";
import Header from "@/components/Header";
import leoai from "@/assets/images/product-brave-leo.svg";
import Image from "next/image";
export default function LeoAiPage() {
  return (
    <div className="bg-white">
      <Header />
      <header className="grid grid-cols-[minmax(0,600px),1fr]">
        <h1 className="mt-40 z-10 mb-3 text-[3.375rem] font-medium leading-[3.125rem] tracking-[-0.0675rem] font-[FlechaM] sm:text-[5rem] sm:leading-[4.6875rem] sm:tracking-[-0.1rem] lg:mb-5 lg:[grid-area:1/1/2/2]">
          iBrowe Leo AI{" "}
        </h1>
        <p className="lg:mb-6 text-h4 sm:mb-10 lg:[grid-area:2/1/3/2] lg:pr-5">
          The smart AI assistant built right into your browser. Ask questions,
          summarize pages, create new content, and more. Privately.
        </p>
        {/* image here */}
        <div className="mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-xl  border-[2px] border-[rgba(var(--tw-color-text-primary),1)]  bg-[rgba(var(--tw-color-container-background),1)]   p-[calc(2rem+2px)] text-[rgba(var(--tw-color-text-primary),1)]    shadow-[7px_5px_0px_rgba(var(--tw-color-text-primary),1)]  sm:h-[128px] sm:w-[128px] sm:p-[calc(2rem+2px+7px)]    lg:mb-0 lg:justify-self-end lg:grid-area-[1/2/3/3]">
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-icons-active p-[25%]">
            <Image
              src={leoai}
              alt="logo"
              className="inline-block w-[var(--icon-size,24px)] h-[var(--icon-size,24px)] bg-[var(--icon-color,currentColor)] flex-shrink-0 mask-[var(--icon-url)] mask-repeat-no-repeat mask-position-center mask-size-100% bg-white [--icon-size:100%] [--icon-url:url('/leo-icons/product-brave-leo.svg')]"
            />
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
