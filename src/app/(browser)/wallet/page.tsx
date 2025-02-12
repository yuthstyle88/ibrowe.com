"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { AssetIcon } from "@/constants/icon";
import { AssetImage } from "@/constants/image";
import Image from "next/image";
import { useState } from "react";

import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Wallet() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) 
          : [...prevIndexes, index] 
    );
  };

  const description_wallet = [
    {
      title: "A new crypto wallet model",
      description:
        "Most wallet apps use a watered-down Web browser for Web3 connectivity. Brave works differently, without compromises—building a world-class crypto wallet directly into its full-fledged privacy browser.",
    },
    {
      title: "Get more from your wallet",
      description:
        "Buy crypto right in your wallet with a credit card, bank transfer, and more. Track market performance of top coins with price feeds and market rankings powered by CoinGecko. Or view your NFTs in a multi-chain gallery view.",
    },
    {
      title: "Easy setup for any device",
      description:
        "Brave Wallet is available on every major device, and creating or importing accounts is easy. Whether it’s your first wallet or your fifth, you can start using Brave Wallet in just a few short steps.",
    },
  ];

  const faqs = [
    {
      question: "What is Brave Wallet?",
      answer: (
        <>
          Brave Wallet is a secure, self-custody crypto wallet built directly
          into the Brave browser. Brave Wallet can be used to safely store your
          assets, and to connect to Web3. We’re constantly improving
          compatibility to meet the needs of users, so follow our{" "}
          <a
            href="https://support.brave.com/hc/en-us/articles/14380262951053-What-features-are-available-in-Brave-Wallet-"
            target="_blank"
            className="text-[#4c54d2] underline"
          >
            Wallet support docs
          </a>{" "}
          for the most up to date list of features.
        </>
      ),
    },
    {
      question: "Is Brave Wallet safe?",
      answer:
        "Brave Wallet is among the safest self-custody wallet options available. In addition to being audited by specialized security engineers, our code is open-source and transparent. Because Brave Wallet is built into the browser, it also inherits Brave’s strict privacy and security protections. And because it’s not a third-party extension, it’s also less susceptible to phishing, which is a leading cause of crypto & NFT theft.",
    },
    {
      question: "Is Brave Wallet free?",
      answer: (
        <>
          <p className="pb-[8.8px]">
            Brave, and Brave Wallet, are entirely free to use. However, most
            blockchain transactions require network fees (e.g. Ethereum gas
            fees). Fees vary on each network based on demand and other factors.
          </p>
          <p className="pb-[8.8px]">
            Certain types of transactions (like swaps and crypto purchases) may
            also include Brave fees. These fees will be displayed transparently,
            and are similar to—or the same as—other wallets.
          </p>
        </>
      ),
    },
    {
      question: "Is Brave Wallet the same as Brave Rewards?",
      answer:
        "No, they are two different features offered by Brave. Rewards is a program that lets you earn tokens (BAT) for seeing privacy-respecting ads in the browser, while Brave Wallet is a self-custody crypto wallet.",
    },
    {
      question: "How do I start using Brave Wallet?",
      answer: (
        <>
          On your desktop, open Brave and click the Wallet icon in the toolbar.
          If you don’t see the icon, navigate to “brave://settings/web3” and
          ensure{" "}
          <strong className="font-poppins">Show wallet icon in toolbar</strong>{" "}
          is toggled on. On mobile or tablet, open the browser menu and then tap
          the Wallet icon. Then, follow the instructions to create or import a
          wallet.
        </>
      ),
    },
  ];
  return (
    <div className="bg-white">
      <Header />
      <section className="hero relative gradient--purple-fuchsia overflow-hidden xl:px-0 pb-64 font-poppins ">
        <div className="container text-center z-10 relative">
          <h1 className="leading-tight mt-8 pt-0 mx-auto text-[3.25rem] font-poppins font-semibold pb-0">
            Brave Wallet
          </h1>
          <div className="sm:w-9/12 md:w-10/12 mx-auto leading-snug">
            <p className="text-[1.125rem] leading-8 px-0 xs:px-10 pb-[18px]">
              The secure, built-in crypto wallet that supercharges your browser
              for Web3.
            </p>
            <a
              className="bg-[rgba(255,255,255,.24)] block w-fit rounded-2xl mb-4 mx-auto py-5 sm:px-10 font-medium transition-opacity duration-500"
              href="https://laptop-updates.brave.com/download/BRV030?bitness=64"
            >
              <span className="text-[18px] leading-[22.5px] font-semibold font-poppins">
                Download Brave
              </span>
            </a>

            <span className="desktop-only">
              <p className="italic pb-4">
                Enable it in settings or click{" "}
                <Image
                  src={AssetIcon.wallet}
                  alt="Wallet"
                  width={26}
                  height={15}
                  className="inline-block px-1 filter brightness-0 invert"
                />{" "}
                in the toolbar to get started.
              </p>
            </span>
          </div>
        </div>
        <picture>
          <Image
            src={AssetImage.wallet_bg}
            alt="Wallet"
            className="absolute pt-5 max-w-[1270px] w-11/12 -translate-x-1/2 transform left-1/2"
          />
        </picture>
        <Image
          src={AssetIcon.wave_curve}
          alt="Wallet"
          className="absolute bottom-0 left-0 w-full origin-center transform scale-110"
        />
      </section>
      <div className="container 2xl:px-0 sm:px-10 py-10">
        <section className="grid md:grid-cols-2 md:gap-x-10 items-center my-10">
          <div className="flex flex-wrap md:order-last">
            <div className="w-full">
              <h2 className="text-[rgba(33,37,41)] text-[2.25rem] leading-[45px] md:leading-tight mb-5 font-bold pb-0">
                Protect your digital assets
              </h2>
              <p className="text-xl text-[rgba(33,37,41)] leading-8 font-poppins mt-0 md:mx-0">
                Get the security you trust from Brave without the hassle and
                risks of third-party extensions. Brave Wallet is built into the
                browser—it just needs to be switched on.
              </p>
            </div>
          </div>
          <div
            id="vid-646109222"
            className="video-embed relative overflow-hidden box rounded-none p-0"
          >
            <div className="h-0" style={{ paddingBottom: "56.2%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://player.vimeo.com/video/646109222?dnt=1&amp;portrait=0&amp;title=0&amp;byline=0"
                title="Brave - The Privacy Browser"
                allowFullScreen
                allow="autoplay"
              ></iframe>
              <noscript>
                <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center">
                  <p className="text-xl">
                    This is a Vimeo video. You'll need JavaScript enabled to
                    view this.
                  </p>
                </div>
              </noscript>

              <div className="video-overlay absolute left-0 top-0 h-full w-full bg-center bg-no-repeat bg-cover cursor-pointer">
                <a
                  className="group play-video text-white no-underline text-8xl flex justify-center items-center transition-colors ease-in-out duration-300 absolute w-full h-full hover:bg-black/50"
                  title="Play Brave - The Privacy Browser video"
                  aria-label="Play Brave - The Privacy Browser video"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    fill="none"
                    className="transition-filter duration-150 ease-linear group-hover:invert w-[20%] max-w-[128px]"
                  >
                    <rect
                      width="126"
                      height="126"
                      x="1"
                      y="1"
                      fill="#09090C"
                      stroke="#F5F5F7"
                      strokeWidth="2"
                      rx="15"
                    ></rect>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M64 99c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35Zm0-64.167c-16.083 0-29.167 13.084-29.167 29.167 0 16.082 13.084 29.167 29.167 29.167 16.082 0 29.167-13.085 29.167-29.167 0-16.083-13.085-29.167-29.167-29.167Zm-7.191 45.799 23.46-15.803a1 1 0 0 0 0-1.658l-23.46-15.803a1 1 0 0 0-1.559.83v31.604a1 1 0 0 0 1.559.83Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="section bg-[#E6E8F5]">
        <section className="container 2xl:px-0 sm:px-10 grid md:grid-cols-2 gap-5 md:gap-10 items-center">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h2 className="text-light-01 text-ds-h2 md:leading-tight mb-5 font-semibold tracking-tight font-poppins pb-0">
                Cut down on crypto clutter
              </h2>
              <p className="text-xl leading-8 font-poppins text-light-02 mt-0 md:mx-0">
                Manage tokens and NFTs without jumping between apps and
                extensions. Get all the features of leading browser wallets in
                one secure and convenient place.
              </p>
            </div>
          </div>
          <Image
            src={AssetImage.multi_chain}
            alt="multi_chain"
            className="w-full my-auto mx-auto"
          />
        </section>
      </div>
      <div className="container py-0 2xl:px-0 sm:px-10">
        <section className="grid md:grid-cols-2 my-16 gap-5">
          <div className="flex md:order-last flex-wrap items-center">
            <div className="pt-5 mx-auto md:m-0">
              <h2 className="text-light-01 text-ds-h2 md:leading-tight mb-5 font-semibold pb-0">
                Explore the world of Web3
              </h2>
              <p className="text-ds-lg leading-8 text-light-02 max-w-md mx-auto mt-0 sm:mx-0">
                Use Brave Wallet to connect to DApps and unlock all new
                experiences on the Web. Join a decentralized community. Buy and
                sell NFTs. Explore decentralized finance, social media, and
                gaming. And discover all that Web3 has to offer.
              </p>
            </div>
          </div>
          <figure className="max-w-sm w-full my-auto mx-auto max-w-maxcontent">
            <Image src={AssetImage.page} alt="multi_chain" className="w-full" />
          </figure>
        </section>
        <section className="my-16 gap-5 ">
          <ul className="list-none grid md:grid-cols-3 w-full p-0 gap-8 md:gap-4 lg:gap-8">
            {description_wallet.map((item, index) => (
              <li
                key={index}
                className="rounded-xl bg-[#E6E8F5] p-10 md:p-4 lg:p-6 text-[#3b3e4f] font-poppins"
              >
                <h3 className="font-semibold p-0 mb-3 text-ds-h4 font-poppins">
                  {item.title}
                </h3>
                <p className="text-ds-lg leading-8 pb-0">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="container text-center py-8 px-0 mb-16">
          <h2 className="pb-8 text-center font-semibold text-ds-h2 text-light-01 font-poppins">
            How does Brave Wallet compare?
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 0, height: 0, position: "absolute" }}
          >
            <symbol id="checked" viewBox="0 0 37 37" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4861 36.7838C28.5532 36.7838 36.7143 28.6395 36.7143 18.5931C36.7143 8.5466 28.5532 0.402344 18.4861 0.402344C8.41887 0.402344 0.257812 8.5466 0.257812 18.5931C0.257812 28.6395 8.41887 36.7838 18.4861 36.7838Z"
                fill="#353DAB"
              ></path>
              <path
                d="M11.8262 18.9428L16.0327 22.4411L25.1468 13.3457"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </symbol>

            <symbol id="unchecked" viewBox="0 0 35 35" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.731445 17.5931C0.731445 26.8667 8.26474 34.3845 17.5575 34.3845C26.8503 34.3845 34.3836 26.8667 34.3836 17.5931C34.3836 8.31941 26.8503 0.801636 17.5575 0.801636C8.26474 0.801636 0.731445 8.31941 0.731445 17.5931ZM31.5793 17.5931C31.5793 25.3211 25.3015 31.5859 17.5575 31.5859C9.81354 31.5859 3.53579 25.3211 3.53579 17.5931C3.53579 9.86502 9.81354 3.60021 17.5575 3.60021C25.3015 3.60021 31.5793 9.86502 31.5793 17.5931Z"
                fill="#AEB1C2"
              ></path>
            </symbol>
          </svg>

          <div className="chart">
            <div className="chart__row_event chart__header">
              <p className="chart__heading_title text-[#868e96] ">Features</p>
              <div className="chart__cell-group">
                <div className="chart__cell chart__browser-name chart__cell_span">
                  <Image
                    src={AssetIcon.ibrowe}
                    alt="ibrowe"
                    width={40}
                    height={40}
                  />
                  <span>Brave</span>
                </div>
                <div className="chart__cell chart__browser-name chart__cell_span">
                  <Image
                    src={AssetIcon.coinbase}
                    alt="coinbase"
                    width={40}
                    height={40}
                  />
                  <span>Coinbase</span>
                </div>
                <div className="chart__cell chart__browser-name chart__cell_span">
                  <Image
                    src={AssetIcon.metamask}
                    alt="metamask"
                    width={43}
                    height={40}
                  />
                  <span>Metamask</span>
                </div>
                <div className="chart__cell chart__browser-name chart__cell_span">
                  <Image
                    src={AssetIcon.opera}
                    alt="opera"
                    width={40}
                    height={40}
                  />
                  <span>Opera</span>
                </div>
                <div className="chart__cell chart__browser-name chart__cell_span">
                  <Image
                    src={AssetIcon.phantom}
                    alt="phantom"
                    width={40}
                    height={40}
                  />
                  <span>Phantom</span>
                </div>
              </div>
            </div>

            <div className="chart__row_odd">
              <p className="chart__heading">
                Browser native (no extension to download)
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_event">
              <p className="chart__heading">NFT support</p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_odd">
              <p className="chart__heading">
                Available on desktop &amp; mobile
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_event">
              <p className="chart__heading">Ledger &amp; Trezor support *</p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_odd">
              <p className="chart__heading">
                Buy, store, send, &amp; connect to DApps on Solana
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_event">
              <p className="chart__heading">
                Buy, store, send, &amp; connect to DApps on Ethereum &amp; EVM
                chains
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_odd">
              <p className="chart__heading">
                Buy, store, &amp; send FIL on the Filecoin chain *
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_event">
              <p className="chart__heading">
                Integrated DEX aggregator for token swaps on Solana
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_odd">
              <p className="chart__heading">
                Integrated DEX aggregator for token swaps on Ethereum &amp; EVM
                chains
              </p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_event">
              <p className="chart__heading">Open source</p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chart__row_odd">
              <p className="chart__heading">Crypto market data</p>
              <div className="chart__cell-group">
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#checked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
                <div className="chart__cell">
                  <svg className="chart__icon">
                    <use href="#unchecked"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-8 text-light-03 font-poppins leading-8 ">
            <em>* Desktop only, with mobile support coming soon.</em>
          </p>
        </section>
      </div>

      <div className="section bg-[#E6E8F5]">
        <section className="my-4 gap-5 container text-center">
          <h2 className="text-ds-2xl md:leading-tight mb-8 font-semibold font-poppins text-[#3a3e4f] pb-0">
            Try Brave Wallet now
          </h2>
          <a
            className="bg-[#4c54d2] block w-fit rounded-2xl mb-4 mx-auto py-5 sm:px-10 font-medium transition-opacity duration-500"
            href="https://laptop-updates.brave.com/download/BRV030?bitness=64"
          >
            <span className="text-[18px] leading-[22.5px] font-semibold font-poppins">
              Download Brave
            </span>
          </a>
          <span className="desktop-only">
            <p className="italic pb-4 text-[#3b3e4f] font-poppins">
              Enable it in settings or click{" "}
              <Image
                src={AssetIcon.wallet}
                alt="Wallet"
                width={26}
                height={15}
                className="inline-block px-1"
              />{" "}
              in the toolbar to get started.
            </p>
          </span>
        </section>
      </div>
      <section className="section relative overflow-hidden">
        <div className="container my-10 relative">
          <h2 className="text-ds-h1 text-center font-semibold text-[#3b3e4f]">
            FAQs about Brave Wallet
          </h2>
          <ul className="accordion--alt accordion-faq faq pt-16 lg:mx-24">
            {faqs.map((faq, index) => (
              <li key={index} className="faq__item accordion__item">
                <h3
                  onClick={() => toggleFAQ(index)}
                  className="faq__item-heading accordion__item-heading cursor-pointer"
                >
                  <button>{faq.question}</button>
                  <Image
                    src={AssetIcon.arrow_down}
                    alt="Wallet"
                    width={13}
                    height={13}
                    className={`float-right duration-300 ${
                      openIndexes.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </h3>
                <div
                  className={`faq__item-content accordion__item-content max-h-0 overflow-hidden ${
                    openIndexes.includes(index) ? "max-h-96 animate-dropDown " : ""
                  }`}
                >
                  {faq.answer}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
