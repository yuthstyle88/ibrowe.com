"use client";
import Header from "@/components/Header";
import Image from "next/image";
import logo_text from "../assets/images/brave-logo-text-only.svg";
import download from "../assets/icon/download.svg";
import search_linear from "../assets/icon/search-radient.svg";
import wave from "../assets/icon/line-waves.svg";
import leo from "../assets/images/leo-illustration.svg";
import vpn from "../assets/images/vpn-illustration.svg";
import app from "../assets/images/app-illustration.svg";
import minus from "../assets/icon/minus.svg";
import edge from "../assets/icon/edge-color.svg";
import chrome from "../assets/icon/chromerelease-color.svg";
import safari from "../assets/icon/safari-color.svg";
import firefox from "../assets/icon/firefox-color.svg";
import ibrowe from "../assets/icon/social-brave-release-favicon-fullheight-color.svg";
import google from "../assets/icon/google-color.svg";
import arrowLeft from "../assets/icon/arrow-left.svg";
import arrowRight from "../assets/icon/arrow-right.svg";
import { useState, useRef, useEffect } from "react";

const compare = [
  {
    name: "Brave vs Chrome",
    icon1: ibrowe,
    icon2: chrome,
  },
  {
    name: "Brave vs Edge",
    icon1: ibrowe,
    icon2: edge,
  },
  {
    name: "Brave vs Safari",
    icon1: ibrowe,
    icon2: safari,
  },
  {
    name: "Brave vs Firefox",
    icon1: ibrowe,
    icon2: firefox,
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpen((prev) => (prev === index ? prev : index));
  };

  const handleCarouselScroll = (direction: "forward" | "backward") => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = 333;
    container.scrollBy({
      left: direction === "forward" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkDesktop = () => {
      const mediaQuery = window.matchMedia("(min-width: 1280px)");
      setIsDesktop(mediaQuery.matches);

      if (mediaQuery.matches && carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
    };
    const debouncedResizeHandler = debounce(checkDesktop, 100);
    checkDesktop();
    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, []);

  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  return (
    <main className="bg-[rgba(240,240,244,1)] min-h-[200vh] text-[#1b1b1f]">
      <div className="relative overflow-x-clip z-0">
        <Image
          src={logo_text}
          alt="ibrowe logo"
          className="absolute top-48 md:top-[22rem] lg:top-64 left-1/2 w-[105%] max-w-[1800px] -translate-x-1/2 opacity-5"
        />
      </div>
      <Header />
      <div className="grid-cols-layout grid w-full place-self-start gap-x-8 pt-[140px]">
        <div className="relative overflow-x-clip z-0"></div>
        <section className="z-10 font-flecha">
          <header className="grid xl:max-w-full 2xl:max-w-[850px] mt-4 md:-mt-2 2xl:mt-0 z-10">
            <h1 className="text-[7.5rem] text-[#1b1b1f] font-semibold leading-[6.4375rem] tracking-[-0.15rem] mb-6 2xl:mb-12">
              The browser that puts you first
            </h1>
            <p className="font-poppins lg:mb-6 font-semibold text-[30px] text-[#1b1b1f] md:text-h5 2xl:text-h4 mb-4 lg:pr-12 2xl:max-w-[820px]">
              Block ads. Save data. And get way faster webpages. Just by
              switching your browser.
            </p>
            <button className="flex flex-row items-center gap-2 bg-[#FF3A00] font-poppins text-white py-4 pl-6 pr-4 rounded-2xl text-[18px] leading-6 font-[600] hover:bg-[#CA2F0B] min-h-[60px] w-fit duration-300">
              <p>Get iBrowe</p>
              <Image src={download} height={24} alt="download" />
            </button>
          </header>
          <section className="flex flex-wrap gap-10 min-[1280px]:flex-nowrap justify-between w-full z-10 mt-10 sm:mt-[3.5rem] md:mt-10 2xl:mt-20">
            <div className="card card__contents bg-[#fff] ">
              <h4 className="text-[rgba(27,27,31,1)] text-[30px] font-poppins font-semibold leading-[45px] sm:text-h4">
                Private search
              </h4>
              <form className="my-4 block ml-8 w-full min-[885px]:ml-0 relative">
                <input
                  type="text"
                  name="q"
                  placeholder="Search the web privately..."
                  className="w-full py-3 px-6 text-[#000] outline-none text-[16px] font-poppins leading-normal border-[1px] shadow-inputShadow rounded-xl border-[#eceef2]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Image src={search_linear} height={24} alt="search_linear" />
                </button>
              </form>
              <p className="mb-32 text-[1.25rem] font-normal leading-[1.875rem] font-poppins">
                Better results, AI answers, and zero profiling with{" "}
                <a
                  href="https://search.brave.com"
                  target="_blank"
                  className="text-[#b3186c] underline"
                >
                  Brave Search
                </a>
                .
              </p>
              <Image
                src={wave}
                height={24}
                alt="wave"
                className="absolute bottom-0 left-0 w-full max-h-[140px]"
              />
            </div>
            <div className="card card__contents bg-[#EAF1FF]">
              <h4 className="card-h4">Built-in AI assistant</h4>
              <p className="mb-32 text-[1.25rem] font-normal leading-[1.875rem] font-poppins">
                Get answers, generate content, & more. Right in the browser.
              </p>
              <Image
                src={leo}
                alt="wave"
                className="absolute right-0 bottom-0 z-0 max-w-full h-auto"
              />
              <div className="leoButton absolute bottom-7 max-w-max mt-5 min-[1280px]:mt-auto z-10">
                Leo AI
              </div>
            </div>
            <div className="card card__contents bg-[#FFE1D4] ">
              <h4 className="pb-2 text-[rgba(27,27,31,1)] text-[30px] font-poppins font-semibold leading-[45px] sm:text-h4">
                Powerful VPN
              </h4>
              <p className="mb-32 text-[1.25rem] font-normal leading-[1.875rem] font-poppins">
                Protect every app, on your entire device.
              </p>
              <Image
                src={vpn}
                alt="wave"
                className="absolute right-0 xl:-right-6 2xl:right-0 bottom-0 -z-0"
              />
              <div className="leoButton absolute bottom-7 max-w-max mt-5 min-[1280px]:mt-auto z-10">
                Firewall + VPN
              </div>
            </div>
          </section>
          <section className="mt-10 sm:mt-[3.5rem] lg:mt-20">
            <h2 className="text-[2.5rem] font-medium leading-[2.8125rem] tracking-[-.05rem] text-display-mobile-h1 md:text-[4.375rem] md:font-medium md:leading-[1] font-[FlechaM] md:tracking-[-.0875rem] pb-2 sm:pb-4">
              What does a user-first Web look like?
            </h2>
            <p className="text-mobile-h4 font-semibold font-poppins sm:text-mobile-h3 lg:text-desktop-h4  max-w-[820px] pr-4 lg:pr-0 mb-6 lg:mb-10">
              Better privacy. Faster webpages. Easier navigation. And
              experiences that put people over tech company profit.
            </p>
            <div className="flex gap-[42px]">
              <div className="min-[1280px]:w-5/12">
                <details
                  className={`card_quote card__contents_quote group p-0 w-full overflow-hidden ${
                    open === 1 ? "bg-[#252529]" : "bg-[#111114]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(1);
                  }}
                  open={open === 1}
                >
                  <summary
                    className="text-blockquote list-none flex gap-2 items-start p-8"
                    data-accordion-heading=""
                  >
                    <span className="text-[30px] leading-[40px]">
                      The Web, <em>without</em> the annoyances
                    </span>
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
                    />
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
                        open === 1
                          ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
                          : "transition-transform duration-100 rotate-90 group-open:rotate-0"
                      } `}
                    />
                  </summary>
                  <div
                    className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden transition-max-height duration-300 ${
                      open === 1 ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <p className="pb-4">
                      Brave blocks third-party ads on every website. That’s
                      video ads, search ads, social media ads, and more.
                    </p>
                    <p className="pb-4">
                      And those annoying “Accept cookies?” pop-ups? Yeah, we
                      block those too.
                    </p>
                  </div>
                </details>
                <details
                  className={`text-[#fff] border-2 border-[#111114] card__contents_quote group p-0 w-full overflow-hidden ${
                    open === 2 ? "bg-[#252529]" : "bg-[#111114]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(2);
                  }}
                  open={open === 2}
                >
                  <summary className="text-blockquote list-none flex gap-2 items-start p-8">
                    <span className="text-[30px] leading-[40px]">
                      Save data, save battery, save time
                    </span>
                    <div className="w-3"></div>
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
                    />
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
                        open === 2
                          ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
                          : "transition-transform duration-100 rotate-90 group-open:rotate-0"
                      } `}
                    />
                  </summary>
                  <div
                    className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden transition-max-height duration-300 ${
                      open === 2 ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <p className="pb-4">
                      Without that unwanted junk, you save Wi-Fi bandwidth and
                      mobile data, battery life and CPU. And websites load 3x-6x
                      faster. Less waiting = more time back in your day.
                    </p>
                  </div>
                </details>
                <details
                  className={`text-[#fff] border-2 border-[#111114] card__contents_quote group p-0 w-full overflow-hidden ${
                    open === 3 ? "bg-[#252529]" : "bg-[#111114]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(3);
                  }}
                  open={open === 3}
                >
                  <summary className="text-blockquote list-none flex gap-2 items-start p-8">
                    <span className="text-[30px] leading-[40px]">
                      Unparalleled privacy
                    </span>
                    <div className="w-3"></div>
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
                    />
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
                        open === 3
                          ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
                          : "transition-transform duration-100 rotate-90 group-open:rotate-0"
                      } `}
                    />
                  </summary>
                  <div
                    className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden transition-max-height duration-300 ${
                      open === 3 ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <p className="pb-4">
                      Shields against tracking and fingerprinting. A premium VPN
                      that can encrypt every connection no matter where you are.
                      On-by-default{" "}
                      <a
                        className="text-[#c1c4ff] underline"
                        href="/web-standards-at-brave/4-global-privacy-control/"
                      >
                        Global Privacy Control
                      </a>{" "}
                      to stop websites from selling and sharing your data.
                    </p>
                    <p className="pb-4">
                      All this (and more) in one ridiculously easy package.
                    </p>
                  </div>
                </details>
                <details
                  className={`text-[#fff] border-2 border-[#111114] card__contents_quote group p-0 w-full overflow-hidden ${
                    open === 4 ? "bg-[#252529]" : "bg-[#111114]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(4);
                  }}
                  open={open === 4}
                >
                  <summary className="text-blockquote list-none flex gap-2 items-start p-8">
                    <span className="text-[30px] leading-[40px]">
                      Built-in security, on by default
                    </span>
                    <div className="w-3"></div>
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
                    />
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
                        open === 4
                          ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
                          : "transition-transform duration-100 rotate-90 group-open:rotate-0"
                      } `}
                    />
                  </summary>
                  <div
                    className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden transition-max-height duration-300 ${
                      open === 4 ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <p className="pb-4">
                      Brave works right out of the box. No dials to turn, no
                      extensions, no PhD required.
                    </p>
                  </div>
                </details>

                <details
                  className={`text-[#fff] rounded-bl-2xl rounded-br-2xl border-2 border-[#111114] card__contents_quote group p-0 w-full overflow-hidden ${
                    open === 5 ? "bg-[#252529]" : "bg-[#111114]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(5);
                  }}
                  open={open === 5}
                >
                  <summary className="text-blockquote list-none flex gap-2 items-start p-8">
                    <span className="text-[30px] leading-[40px]">
                      Switching is easy
                    </span>
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className="absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white"
                    />
                    <Image
                      src={minus}
                      height={40}
                      alt="minus"
                      className={`absolute top-12 right-6 [--icon-size:40px] h-[40px] w-[40px] text-white ${
                        open === 5
                          ? "transition-transform duration-100 rotate-90 group-open:rotate-0"
                          : "transition-transform duration-100 rotate-90 group-open:rotate-0"
                      } `}
                    />
                  </summary>
                  <div
                    className={`-mt-2 mr-4 lg:mr-12 text-[1.25rem] font-normal leading-[1.875rem] font-poppins text-[#e3e3e8] px-8 overflow-hidden transition-max-height duration-300 ${
                      open === 5 ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <p className="pb-4">
                      A faster, more private, less annoying Web is only 60
                      seconds away.
                    </p>
                    <p className="pb-4">
                      Just download Brave, import favorites from your old
                      browser, and… You’re done!
                    </p>
                  </div>
                </details>
              </div>
              <div className="hidden min-[1280px]:grid w-7/12 card_quote card__contents_quote_right p-0 overflow-hidden grid-cols-1 grid-rows-1 animation-container h-fit"></div>
            </div>
          </section>
          <section className="mt-10 sm:mt-[3.5rem] lg:mt-20">
            <h2 className="text-display-mobile-h1 font-medium md:text-display-desktop-h3 pb-2 sm:pb-4">
              A Web with fewer ads
            </h2>
            <p className="text-mobile-h4 sm:text-mobile-h3 font-semibold font-poppins lg:text-desktop-h4 max-w-[820px]">
              Check out some popular sites in Brave vs. other browsers. See the
              difference?
            </p>
            <p className="font-semibold font-poppins text-[1.25rem] leading-[1.8750rem] py-4 lg:py-6 mb-2">
              Grab the slider to see the difference between Brave and other
              browsers
            </p>
            <div className="flex gap-2 mb-8 flex-wrap">
              {compare.map((item, index) => (
                <button
                  key={index}
                  className="leoButtonCompare w-fit px-5 py-2.5 flex flex-row items-center gap-1 flex-nowrap"
                >
                  <Image
                    src={item.icon1}
                    height={24}
                    alt="ibrowe"
                    className="icon color [--icon-size:24px] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                  />
                  <span className="text-[12px] block md:hidden">vs</span>
                  <span className="text-[12px] hidden md:block">
                    {item.name}
                  </span>
                  <Image
                    src={item.icon2}
                    height={24}
                    alt="chrome"
                    className="icon color [--icon-size:24px] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                  />
                  <div className="icon color [--icon-size:24px] [--icon-url:url('/leo-icons/chromerelease-color.svg')]"></div>
                </button>
              ))}
            </div>
            <div className="flex flex-col lg:gap-1">
              <div>hêlo</div>
            </div>
          </section>
          <section className="mt-10 sm:mt-[3.5rem] lg:mt-20">
            <h2 className="text-display-mobile-h1 md:text-display-desktop-h3 pb-2 sm:pb-4 max-w-[1020px]">
              Winning on privacy, performance, and features
            </h2>
            <p className="text-mobile-h4 font-semibold font-poppins sm:text-mobile-h3 lg:text-desktop-h4 max-w-[820px] mb-8">
              See how Brave stacks up against other browsers with theses
              in-depth{" "}
              <a className="text-[#b3186c] underline" href="/compare/">
                comparisons
              </a>
              .
            </p>
          </section>
          <section className="col-span-full place-self-auto overflow-hidden">
            <div
              className="layout overflow-x-auto scrollbar-hidden"
              is="card-carousel"
              ref={carouselRef}
            >
              <div className="grid grid-flow-col gap-6 w-max pr-[2rem]">
                <div className="w-[302px] p-6 sm:p-8 rounded-[1rem] bg-[image:var(--gradient-peachy)] bg-[length:852px_544px] bg-[position:60%_70%] flex flex-wrap">
                  <div>
                    <div className="flex gap-[0.65rem] lg:gap-3">
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={ibrowe}
                          height={30}
                          alt="ibrowe"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={chrome}
                          height={30}
                          alt="chrome"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                    </div>

                    <h4 className="text-h3 font-poppins font-semibold sm:text-desktop-h4 pt-3 pb-2">
                      Brave vs Chrome
                    </h4>
                    <p className="text-[1.25rem] leading-[1.875rem] font-poppins">
                      When it comes to privacy and performance, Chrome lags far
                      behind Brave.
                    </p>
                  </div>
                  <a
                    href="/compare/chrome-vs-brave/"
                    className="leoButtonCompareLarge mt-4 place-self-end"
                  >
                    See how Chrome compares
                  </a>
                </div>

                <div
                  className="w-[302px] p-6 sm:p-8 rounded-[1rem] bg-[image:var(--gradient-peachy)] bg-[length:1400px_1593px] bg-[position:50%_100%] flex flex-wrap"
                  data-card-carousel-item=""
                >
                  <div>
                    <div className="flex gap-[0.65rem] lg:gap-3">
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={ibrowe}
                          height={30}
                          alt="ibrowe"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={firefox}
                          height={30}
                          alt="firefox"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                    </div>

                    <h4 className="text-h3 font-poppins font-semibold sm:text-desktop-h4 pt-3 pb-2">
                      Brave vs Firefox
                    </h4>
                    <p className="text-[1.25rem] leading-[1.875rem] font-poppins">
                      Once widely used, Firefox has slipped to the middle of the
                      pack as a Big Tech alternative.
                    </p>
                  </div>
                  <a
                    href="/compare/firefox-vs-brave/"
                    className="leoButtonCompareLarge isMedium isFilled mt-4 place-self-end"
                  >
                    See how Firefox compares
                  </a>
                </div>

                <div
                  className="w-[302px] p-6 sm:p-8 rounded-[1rem] bg-[image:var(--gradient-peachy)] bg-[length:735px_645px] bg-[position:60%_20%] flex flex-wrap"
                  data-card-carousel-item=""
                >
                  <div>
                    <div className="flex gap-[0.65rem] lg:gap-3">
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={ibrowe}
                          height={30}
                          alt="ibrowe"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={google}
                          height={30}
                          alt="google"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                    </div>

                    <h4 className="text-h3 font-poppins font-semibold sm:text-desktop-h4 pt-3 pb-2">
                      Brave Search vs Google
                    </h4>
                    <p className="text-[1.25rem] leading-[1.875rem] font-poppins">
                      The world's popular search sucks up user data, and
                      prioritizes ads over answers.
                    </p>
                  </div>
                  <a
                    href="/compare/google-vs-brave-search/"
                    className="leoButtonCompareLarge isMedium isFilled mt-4 place-self-end"
                  >
                    See how Google compares
                  </a>
                </div>

                <div
                  className="w-[302px] p-6 sm:p-8 rounded-[1rem] bg-[image:var(--gradient-peachy)] bg-[length:1366px_1199px] bg-[position:40%_70%] flex flex-wrap"
                  data-card-carousel-item=""
                >
                  <div>
                    <div className="flex gap-[0.65rem] lg:gap-3">
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={ibrowe}
                          height={30}
                          alt="ibrowe"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                      <div className="bg-white rounded-[20%] w-[40px] flex items-center justify-center aspect-square drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
                        <Image
                          src={safari}
                          height={30}
                          alt="safari"
                          className="color icon [--icon-size:75%] [--icon-url:url('/leo-icons/social-brave-release-favicon-fullheight-color.svg')]"
                        />
                      </div>
                    </div>

                    <h4 className="text-h3 font-poppins font-semibold sm:text-desktop-h4 pt-3 pb-2">
                      Brave Search vs DuckDuckGo
                    </h4>
                    <p className="text-[1.25rem] leading-[1.875rem] font-poppins">
                      An "alternative" search engine that's actually powered by
                      Microsoft Bing.
                    </p>
                  </div>
                  <a
                    href="/compare/duckduckgo-vs-brave-search/"
                    className="leoButtonCompareLarge isMedium isFilled mt-4 place-self-end"
                  >
                    See how DDG compares
                  </a>
                </div>
              </div>
            </div>

            <div className="layout 3xl:hidden mt-10">
              <div className="controls-container flex justify-between items-center pt-4">
                <button
                  className=""
                  onClick={() => handleCarouselScroll("backward")}
                >
                  <Image src={arrowLeft} height={27} alt="ibrowe" />
                </button>
                <button
                  className=""
                  onClick={() => handleCarouselScroll("forward")}
                >
                  <Image src={arrowRight} height={27} alt="ibrowe" />
                </button>
              </div>
            </div>
          </section>
          {/* section ngoai */}
        </section>
      </div>
      <section
        className="px-[30px] 2xl:px-[120px] 4xl:px-[300px] text-[#e3e3e8] font-flecha font-medium bg-black mt-10 sm:mt-[3.5rem] lg:mt-20 overflow-x-clip pt-10 sm:pt-12 lg:pt-0"
      >
        <div className="flex flex-col min-[1280px]:flex-row">
          <div className="min-[1280px]:flex-1 self-center">
            <h2 className="text-display-mobile-h1 md:text-display-desktop-h3 pb-2 sm:pb-4">
              The browser that saves your time, not your personal info
            </h2>
            <p className="text-mobile-h4 font-poppins font-semibold md:text-mobile-h3 lg:text-desktop-h4 max-w-[820px] pt-2 pb-4 md:pb-8 lg:py-6">
              Download Brave for Android, iOS, Linux, macOS, or Windows
            </p>
            <button className="flex flex-row items-center gap-2 bg-[#FF3A00] font-poppins text-white py-4 pl-6 pr-4 rounded-2xl text-[18px] leading-6 font-[600] hover:bg-[#CA2F0B] min-h-[60px] w-fit duration-300">
              <p>Get iBrowe</p>
              <Image src={download} height={24} alt="download" />
            </button>
          </div>
          <Image
            src={app}
            alt="app"
            className="-mb-24 -mt-4 ml-24 sm:-mb-[7.5rem] md:-mb-36 md:-mt-[5rem] lg:-mb-[13rem] lg:-mt-12 min-[1280px]:-mr-64 min-[1280px]:flex-1 min-[1280px]:mb-0 min-[1280px]:mt-10"
          />
        </div>
      </section>
    </main>
  );
}
