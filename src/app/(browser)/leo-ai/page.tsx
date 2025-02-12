"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import leoai from "@/assets/images/product-brave-leo.svg";
import Image from "next/image";
import test from "@/assets/images/test.svg";
import sequence1 from "@/assets/images/sequence-1.svg";
import newspaper from "@/assets/images/newspaper.svg";
import prompt from "@/assets/images/prompt.svg";
import demo from "@/assets/images/demo.webp";
import mobiledemo from "@/assets/images/mobile-demo.webp";
import { Download } from "lucide-react";
import FaqItem from "@/components/FaqItem";
import { useState } from "react";

const faqData = [
  {
    question: "What can Brave Leo do?",
    answer: (
      <>
        <p>
          Ask Leo to summarize a webpage, doc, or PDF. Or ask almost any
          question in general, and get answers, summaries, clarifications,
          related information, and other viewpoints. Brave Leo can also create
          content like articles, essays, and emails. It can translate between
          different languages, and even offer coding help by offering suggested
          and sample code for software applications and database queries. On
          iOS, you can also ask Leo questions without typing on your phone via
          voice-to-text.
        </p>
      </>
    ),
  },
  {
    question: "What platforms is Leo available on? Can I try Leo on mobile?",
    answer: (
      <>
        <p>
          Brave Leo is currently available in the Brave browser for desktop
          (macOS, Windows, and Linux) and mobile (Android and iOS).
        </p>
      </>
    ),
  },
  {
    question: "What LLMs does Leo have access to?",
    answer: (
      <>
        <p>
          Both the free and Premium versions of Brave Leo offer access to the
          latest models from Mixtral, Anthropic’s Claude, and Meta’s Llama. Open
          Brave Leo to see exactly which model versions are available today.
        </p>
      </>
    ),
  },
  {
    question:
      "What data does the Brave browser send to the servers that power Leo?",
    answer: (
      <>
        <p>
          With respect to the servers that power Brave Leo, your browser will
          share your latest prompt, the context of your current conversation,
          and—when the use case requires it—the necessary context from the page
          you’re viewing. If you’re using Leo with a Brave-hosted model, once a
          chat is closed, all records of that chat are erased. We do not collect
          identifiers that can be linked to you (such as IP Address), and no
          personal data is retained by Brave-hosted AI models. Note that Brave
          Leo offers several models to choose from. If you select a model from
          Anthropic and submit Leo queries, that data will be processed by
          Anthropic for a period of 30 days, then deleted.
        </p>
      </>
    ),
  },
  {
    question:
      "Does Brave Leo have a daily limit on the number of prompts I can send?",
    answer: (
      <>
        <p>
          Brave Leo may be more or less accessible depending on traffic levels
          and usage. You can subscribe to Brave Leo Premium to get higher usage
          limits.
        </p>
      </>
    ),
  },
  {
    question: "Do I need to sign up for a Brave account to use Brave Leo?",
    answer: (
      <>
        <p>
          No account or signup is required to access the free Brave Leo
          experience. Leo Premium subscribers will have to create a Premium
          account, but this is only to verify premium access. There is no Leo
          account per se, and the premium experience remains private. Your
          premium account is completely unlinkable to any usage of Leo itself.
        </p>
      </>
    ),
  },
  {
    question: "Will you use my conversations for model training?",
    answer: (
      <>
        <p>
          No. Your conversations are not persisted and they are discarded
          immediately after a response has been generated.
        </p>
      </>
    ),
  },
  {
    question:
      "What are Brave-hosted models, and where can I see the history of my chat with Brave Leo?",
    answer: (
      <>
        <p>
          Brave-hosted models refer to Large Language Models (LLMs) hosted
          exclusively on Brave’s servers. If you’re using Leo with Brave-hosted
          models, there is no way to review past conversations or delete that
          data—it isn’t stored in the first place. Brave-hosted model prompts
          and responses are immediately discarded remotely, and discarded
          locally when a chat is closed. Note that Brave-hosted models are the
          default experience in Leo. However, Leo also offers users the ability
          to choose other, non-Brave hosted models, including ones from
          Anthropic. For users who choose an Anthropic model, Brave has no
          access to these conversations after a response is made to the client,
          but Anthropic will retain these conversations for a period of 30 days.
          In a future release, we hope to offer an option to return to previous
          conversations with on-device persistence.
        </p>
      </>
    ),
  },
  {
    question: "Can I trust Leo’s replies?",
    answer: (
      <>
        <p>
          As with any AI, Leo’s responses may contain misleading information
          and/or factual inaccuracies. Additionally, bias and/or harmful content
          present in the data during training may on some occasions be reflected
          in the model’s outputs. We recommend double-checking any Leo responses
          for accuracy. Please also provide feedback to us if you see anything
          concerning. To do so, click the menu next to Leo’s response and select
          the best option.
        </p>
      </>
    ),
  },
  {
    question: "Does Leo hallucinate?",
    answer: (
      <>
        <p>
          Yes, it does. Hallucinations are an intrinsic challenge in how LLMs
          work. Sometimes regenerating the answer may help. Always double-check
          Leo’s responses (for example, try the same query on Brave Search)
          before quoting them.
        </p>
      </>
    ),
  },
];

export default function LeoAiPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
            <div className="p-[calc(2rem+2px)] shadow-[7px_5px_0px_rgba(var(--tw-color-text-primary),1)] border-2 border-[rgba(var(--tw-color-text-primary),1)] rounded-xl bg-white text-[rgba(var(--tw-color-text-primary),1)] mb-5 flex h-[80px] w-[80px] items-center justify-center [--card-contents-border-width:2px] [--card-padding:14px] [grid-area:1/1/1/1] sm:h-[128px] sm:w-[128px] sm:[--card-padding:21px] lg:mb-0 lg:justify-self-end lg:[grid-area:1/2/3/3]">
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
            <div className="relative p-8 rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_black]">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 p-1"></div>

              <div className="flex justify-between items-start">
                <Image
                  className="col-start-1 col-end-2 h-[50%] lg:h-[50%]"
                  src={sequence1}
                  alt="left icons"
                />
                <Image
                  className="col-start-2 col-end-4 justify-self-end h-[50%]"
                  src={newspaper}
                  alt="info"
                />
              </div>

              <h2
                style={{
                  fontSize: "70px",
                  fontWeight: "500",
                  lineHeight: "70px",
                  fontFamily: "FlechaM",
                  letterSpacing: "-0.02rem",
                  color: "rgb(27, 27, 31)",
                }}
                className="col-span-2 lg:-mt-6"
              >
                Make every page interactive
              </h2>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "-0.02rem",
                  color: "rgb(27, 27, 31)",
                }}
                className="col-span-2"
              >
                Chat with Leo about any topic. Ask Leo to summarize webpages,
                generate content, translate, analyze text, and more.{" "}
                <em className="italic font-semibold">Without</em> leaving the
                page.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_black]">
              {/* <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 p-[2px]">
                <div className="h-full w-full rounded-xl bg-white"></div>
              </div> */}
              <div className="flex justify-between items-start">
                <Image
                  className="col-start-1 col-end-2 h-[50%] lg:h-[50%]"
                  src={sequence1}
                  alt="left icons"
                />
                <Image
                  className="col-start-2 col-end-4 justify-self-end h-[50%]"
                  src={prompt}
                  alt="info"
                />
              </div>

              <h2
                style={{
                  fontSize: "70px",
                  fontWeight: "500",
                  lineHeight: "70px",
                  fontFamily: "FlechaM",
                  letterSpacing: "-0.02rem",
                  color: "rgb(27, 27, 31)",
                }}
                className="col-span-2 lg:-mt-6"
              >
                Private, anonymous, and secure
              </h2>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "-0.02rem",
                  color: "rgb(27, 27, 31)",
                }}
                className="col-span-2"
              >
                Leo’s Brave-hosted models don’t retain or share chats, or use
                them for additional model training. No account or login is
                required. Just open and chat. Privately.
              </p>
            </div>
          </section>
          <section className="relative before:w-full sm:mt-14 lg:mt-20 w-full text-primary">
            <div className="relative">
              <div className="relative z-10 p-8 rounded-2xl border-2 border-black bg-white">
                <div className="w-full aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    className="w-full h-full rounded-lg shadow-md"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* <div
                className="absolute top-20 w-screen h-[200px] overflow-hidden overflow-y-clip overflow-x-clip"
                style={{
                  backgroundImage:
                    "linear-gradient(321.5deg, #fa7250 3%, #ff1893 40%, #a78aff 99%)",
                }}
              /> */}
            </div>
          </section>
          <section className="mt-30 sm:mt-14 lg:mt-20 z-0 relative lg:mb-[3.4rem]">
            <h2
              className="px-12 lg:pl-0 lg:pr-5"
              style={{
                fontFamily: "FlechaM",
                fontSize: "70px",
                fontWeight: 500,
                lineHeight: "70px",
                color: "rgb(27, 27, 31)",
              }}
            >
              Get insights from docs
            </h2>
            <p
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "-0.02rem",
                color: "rgb(27, 27, 31)",
              }}
              className="mb-10 mt-5 max-w-[850px] text-h4 px-12 lg:px-0"
            >
              Leo can even analyze PDFs, Google Docs & Google Sheets, and more,
              getting you the info you need. Faster.
            </p>
            <div className="z-10 p-8 rounded-2xl border-2 border-black bg-white">
              <div className="w-full">
                <Image src={demo} alt="demo" />
              </div>
            </div>
            <div className="gradient-shadow shadow-[6px_6px_0px_0px_black] rounded-2xl w-[25%] border-2 border-black absolute z-[11] bottom-0 hidden lg:block ml-10 -mb-[3.4rem]">
              <div className=" max-w-maxcontent">
                <Image src={mobiledemo} alt="mobile demo" />
              </div>
            </div>
          </section>
          <section className="mt-10 grid gap-10 sm:mt-14 lg:mt-20 lg:grid-cols-2">
            <div className="relative p-8 rounded-2xl border border-black bg-white shadow-lg max-w-[650px] mx-auto">
              {/* Title */}
              <h2
                className="px-12 lg:pl-0 lg:pr-5"
                style={{
                  fontFamily: "FlechaM",
                  fontSize: "70px",
                  fontWeight: 500,
                  lineHeight: "70px",
                  color: "rgb(27, 27, 31)",
                }}
              >
                Ready to try Leo?
              </h2>

              {/* Button */}
              <button className="flex items-center gap-2 px-5 py-5 my-5 text-white font-medium text-lg rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-md hover:opacity-90 transition">
                Get Brave
                <Download size={18} />
              </button>

              {/* Description */}
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "-0.02rem",
                  color: "rgb(27, 27, 31)",
                }}
                className="mb-10 mt-5 max-w-[850px] text-h4 px-12 lg:px-0"
              >
                Just start typing in the Brave address bar on your computer and
                choose
                <span className="text-pink-500"> Ask Leo</span> from the
                suggestions. Or access from the Brave sidebar: on desktop, open
                the sidebar and click <span className="text-gray-700">✩</span>;
                on mobile, tap <span className="text-gray-700">“⋮”</span>{" "}
                (Android) or
                <span className="text-gray-700"> “…”</span> (iOS) and choose Leo
                to get started.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl border border-black bg-black shadow-lg max-w-[650px] mx-auto">
              {/* Title */}
              <h2
                className="px-12 lg:pl-0 lg:pr-5"
                style={{
                  fontFamily: "FlechaM",
                  fontSize: "70px",
                  fontWeight: 500,
                  lineHeight: "70px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Go Premium
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "-0.02rem",
                  color: "rgb(255, 255, 255)",
                }}
                className="mb-10 mt-5 max-w-[850px] text-h4 px-12 lg:px-0"
              >
                Brave Leo is free for all users. Want access to more models and
                even faster responses?
              </p>
            </div>
          </section>
          <section className="my-10 lg:my-20">
            <h2 className="pb-6 text-3xl font-bold sm:text-4xl">FAQs</h2>
            <div>
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  index={index}
                  totalItems={faqData.length}
                  question={item.question}
                  isActive={activeIndex === index}
                  onClick={() => handleToggle(index)}
                >
                  {item.answer}
                </FaqItem>
              ))}
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}
