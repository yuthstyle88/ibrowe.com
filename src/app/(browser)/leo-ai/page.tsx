import Footer from "@/components/Footer";
import Header from "@/components/Header";
import leoai from "@/assets/images/product-brave-leo.svg";
import Image from "next/image";
import test from "@/assets/images/test.svg";
import sequence1 from "@/assets/images/sequence-1.svg";
import newspaper from "@/assets/images/newspaper.svg";

export default function LeoAiPage() {
  return (
    <div className="bg-[rgba(240,240,244,1)] min-h-[200vh] text-[#1b1b1f]">
      <Header />
      <div className="grid-cols-layout grid w-full place-self-start gap-x-8 pt-[140px]">
        <div className="relative overflow-x-clip z-0"></div>
        <section className="z-10">
          <header className="w-5/6 mx-auto grid lg:grid-cols-[minmax(0,600px),1fr]">
            <h1 className="font-flecha z-10 mb-3 text-[3.375rem] font-medium leading-[3.125rem] tracking-[-0.0675rem] sm:text-[5rem] sm:leading-[4.6875rem] sm:tracking-[-0.1rem] lg:mb-5 lg:[grid-area:1/1/2/2]">
              The iBrowe voice
            </h1>
            <p className="lg:mb-6 sm:mb-10 lg:[grid-area:2/1/3/2] lg:pr-5 text-[30px] font-semibold leading-[40px] text-[rgb(27,27,31)] font-poppins">
              The smart AI assistant built right into your browser. Ask
              questions, summarize pages, create new content, and more.
              Privately.
            </p>
            {/* image here */}
            <div className="p-[calc(2rem+2px)] shadow-[7px_5px_0px_rgba(var(--tw-color-text-primary),1)] border-2 border-[rgba(var(--tw-color-text-primary),1)] rounded-xl bg-[rgba(var(--tw-color-container-background),1)] text-[rgba(var(--tw-color-text-primary),1)] mb-5 flex h-[80px] w-[80px] items-center justify-center [--card-contents-border-width:2px] [--card-padding:14px] [grid-area:1/1/1/1] sm:h-[128px] sm:w-[128px] sm:[--card-padding:21px] lg:mb-0 lg:justify-self-end lg:[grid-area:1/2/3/3]">
              <div className="w-full relative flex h-full  items-center justify-center rounded-full flex-1 bg-gradient-to-r from-[#fa7250] via-[#ff1893] to-[#a78aff] bg-[linear-gradient(321.5013256215316deg,#fa7250 3%,#ff1893 40%,#a78aff 99%) p-[25%]">
                <Image
                  src={leoai}
                  alt="logo"
                  className="inline-block  w-[var(--icon-size,24px)] h-[var(--icon-size,24px)] bg-[var(--icon-color,currentColor)] flex-shrink-0 mask-[var(--icon-url)] mask-repeat-no-repeat mask-position-center mask-size-100% [--icon-size:100%]"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mx-auto max-w-[987px]">
                <Image src={test} alt="test" />
              </div>
            </div>
          </header>
          <section className="xs:-mt-8 z-0 mt-10 grid gap-10 sm:-mt-10 lg:grid-cols-2">
            <div
              style={{
                color: "rgba(var(--tw-color-text-primary), 1)",
                padding: "calc(2rem + var(--card-contents-border-width))",
                borderRadius: "1rem",
                border: "2px solid rgba(var(--tw-color-text-primary), 1)",
                background: "rgba(var(--tw-color-container-background), 1)",
                boxShadow: "7px 5px 0px rgba(var(--tw-color-text-primary), 1)",
              }}
              className="radient-shadow relative grid h-full grid-cols-2 grid-rows-[var(--illustration-height)_auto_1fr] gap-4 [--illustration-height:100px] sm:[--illustration-height:150px] md:gap-6 lg:[--illustration-height:200px]"
            >
              <Image
                className="col-start-1 col-end-2 h-[40px] lg:h-[62px]"
                src={sequence1}
                alt="left icons"
              />
              <Image
                className="col-start-2 col-end-4 justify-self-end h-full"
                src={newspaper}
                alt="info"
              />
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  fontFamily: "FlechaM",
                  letterSpacing: "-0.05rem",
                }}
                className="col-span-2 lg:-mt-6"
              >
                Make every page interactive
              </h2>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  fontFamily: "FlechaM",
                  letterSpacing: "-0.05rem",
                }}
                className="col-span-2"
              >
                Chat with Leo about any topic. Ask Leo to summarize webpages,
                generate content, translate, analyze text, and more.
                <em>Without</em> leaving the page.
              </p>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}
