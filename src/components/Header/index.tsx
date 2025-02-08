"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/brave-logo-sans-text.svg";
import arrow_down from "../../assets/icon/arrow-alt-down.svg";
import download from "../../assets/icon/download.svg";
import search from "../../assets/icon/search.svg";
import download_link from "../../assets/icon/download-link.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 font-poppins flex items-center transition-all ease-out duration-300 ${
        isScrolled
          ? "bg-white shadow-header h-20 py-2"
          : "bg-transparent h-[120px] py-4"
      }`}
    >
      <nav className="max-w-7xl mx-6 md:mx-36 lg:mx-24 xl:mx-auto flex w-full items-center justify-between h-full">
        <div className="relative flex w-full items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 pr-4">
              <Image src={logo} height={40} alt="logo" />
            </Link>
            <ul className="lg:flex hidden flex-row relative">
              <li className="nav-links group">
                <p className="group-hover:text-[#909094] duration-100 select-none">
                  Browser
                </p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
                <div className="absolute hidden group-hover:block w-[240px] h-[24px] bg-transparent top-7 left-0"></div>
                <div className="absolute hidden group-hover:flex top-8 left-0 shadow-dropDown bg-white border-[1px] border-[#c7c7cc] rounded-[16px] mt-2 pt-4 pb-5 px-6 animate-fade-in">
                  <ul className="flex flex-row gap-10 p-0 list-none">
                    <li>
                      <div className="text-[8px] font-bold text-[#909094] pt-2 pb-1">
                        DOWNLOADS
                      </div>
                      <ul className="p-0 list-none">
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item flex flex-row items-center gap-1"
                          >
                            <div>Desktop</div>
                            <Image
                              src={download_link}
                              height={12}
                              alt="download_link"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/why-error"
                            className="dropdown-item flex flex-row items-center gap-1"
                          >
                            <p>Android</p>
                            <Image
                              src={download_link}
                              height={12}
                              alt="download_link"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/search-api"
                            className="dropdown-item flex flex-row items-center gap-1"
                          >
                            <p>iOS</p>
                            <Image
                              src={download_link}
                              height={12}
                              alt="download_link"
                            />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="text-[8px] font-bold text-[#909094] pt-2 pb-1">
                        FEATURES
                      </div>
                      <ul className="columns-2 p-0 list-none gap-x-0">
                        <li className="pt-[8px]">
                          <Link href="/error-search" className="dropdown-item">
                            <div>Shields</div>
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/why-error" className="dropdown-item">
                            VPN
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Leo AI
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Wallet
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Rewards
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Playlist
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            News
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Talk
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            Advanced privacy
                          </Link>
                        </li>
                        <li className="pt-[8px]">
                          <Link href="/search-api" className="dropdown-item">
                            All features
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-links group">
                <p className="hover:text-[#909094] duration-100 select-none">
                  Brave Search
                </p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
                <div className="absolute hidden group-hover:block w-[100px] h-[24px] bg-transparent top-7 left-[78px]"></div>
                <div className="absolute hidden group-hover:flex top-8 left-[78px] shadow-dropDown bg-white border-[1px] border-[#c7c7cc] rounded-[16px] mt-2 py-4 px-6 animate-fade-in">
                  <ul className="flex flex-col gap-[7px] p-0 list-none">
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        Try Brave Search
                      </Link>
                    </li>
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        About Brave Search
                      </Link>
                    </li>
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        Web Discovery Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-links group">
                <p className="hover:text-[#909094] duration-100 select-none">
                  Why brave
                </p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
                <div className="absolute hidden group-hover:block w-[240px] h-[24px] bg-transparent top-7 left-[185px]"></div>
                <div className="absolute hidden group-hover:flex top-8 left-[185px] shadow-dropDown bg-white border-[1px] border-[#c7c7cc] rounded-[16px] mt-2 py-4 px-6 animate-fade-in">
                  <ul className="flex flex-row gap-10 p-0 list-none">
                    <li>
                      <ul className="p-0 list-none">
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-[12px] font-bold text-[#1b1b1b] whitespace-nowrap"
                          >
                            Browser & search guides
                          </Link>
                          <p className="pt-1 text-[10px] font-semibold text-[#878da6] pb-3 tracking-[-0.5px] leading-[12px]">
                            Privacy, extensions, and the best option for every
                            platform.
                          </p>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-[12px] font-bold text-[#1b1b1b]"
                          >
                            Web3 guides
                          </Link>
                          <p className="pt-1 text-[10px] font-semibold text-[#878da6] pb-3 tracking-[-0.5px] leading-[12px]">
                            Crypto, NFTs, and all things blockchain. Learn the
                            basics of Web3.
                          </p>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-[12px] font-bold text-[#1b1b1b]"
                          >
                            Privacy glossary
                          </Link>
                          <p className="pt-1 text-[10px] font-semibold text-[#878da6] pb-3 tracking-[-0.5px] leading-[12px]">
                            Short, plain-language intros to common Internet and
                            computer terms.
                          </p>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-[12px] font-bold text-[#1b1b1b]"
                          >
                            Compare
                          </Link>
                          <p className="pt-1 text-[10px] font-semibold text-[#878da6] pb-3 tracking-[-0.5px] leading-[12px]">
                            See how Brave stacks up against other browsers and
                            search engines.
                          </p>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-[12px] font-bold text-[#1b1b1b]"
                          >
                            AI guides
                          </Link>
                          <p className="pt-1 text-[10px] font-semibold text-[#878da6] pb-3 tracking-[-0.5px] leading-[12px]">
                            LLMs, machine learning, and the foundations of AI,
                            for both users and devs.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="text-[8px] font-bold text-[#909094] pt-2 pb-2">
                        BLOGS
                      </div>
                      <ul className="list-none">
                        <li>
                          <Link href="/error-search" className="dropdown-item">
                            Brave blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item whitespace-nowrap flex gap-1"
                          >
                            Privacy updates
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item whitespace-nowrap flex gap-1"
                          >
                            Web standards
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item whitespace-nowrap flex gap-1"
                          >
                            Research
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item whitespace-nowrap flex gap-1"
                          >
                            Brave podcast
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-links group">
                <p className="hover:text-[#909094] duration-100 select-none">
                  Search API
                </p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
                <div className="absolute hidden group-hover:block w-[90px] h-[24px] bg-transparent top-7 left-[278px]"></div>
                <div className="absolute hidden group-hover:flex top-8 left-[278px] shadow-dropDown bg-white border-[1px] border-[#c7c7cc] rounded-[16px] mt-2 py-4 px-6 animate-fade-in">
                  <ul className="flex flex-col gap-[7px] p-0 list-none">
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        Docs
                      </Link>
                    </li>
                    <li>
                      <Link href="/error-search" className="dropdown-item">
                        Login / Sign-up
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-links group">
                <p className="hover:text-[#909094] duration-100 select-none">
                  Advertise
                </p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
                <div className="absolute hidden group-hover:block w-[240px] h-[24px] bg-transparent top-7 left-[360px]"></div>
                <div className="absolute hidden group-hover:flex top-8 left-[360px] shadow-dropDown bg-white border-[1px] border-[#c7c7cc] rounded-[16px] mt-2 animate-fade-in">
                  <ul className="flex flex-row gap-5 p-0 list-none">
                    <li className="py-4 pl-6">
                      <ul className="flex flex-col gap-[7px] p-0 list-none pt-1">
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Ads Manager
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Audience
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Case studies
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Help center
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/error-search"
                            className="dropdown-item text-nowrap"
                          >
                            Why Brave Ads?
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="border-l-[1px] border-[#c7c7cc] pt-4 pb-3">
                      <p className="pl-6 text-[8px] font-bold text-[#909094] pt-2 pb-1 uppercase">
                        Brave ads formats
                      </p>
                      <ul className="pl-6 pb-5 p-0 list-none">
                        <li className="">
                          <Link
                            href="/error-search"
                            className="dropdown-item flex flex-row items-center gap-[6px] text-nowrap tracking-wider"
                          >
                            <div className="bg-[#fe5907] w-[4px] h-[4px] rounded-full"></div>
                            Search Ads
                          </Link>
                        </li>
                        <li className="pt-[6px]">
                          <Link
                            href="/error-search"
                            className="dropdown-item flex flex-row items-center gap-[6px] text-nowrap tracking-wider"
                          >
                            <div className="bg-[#fe5907] w-[4px] h-[4px] rounded-full"></div>
                            New Tab Takeover
                          </Link>
                        </li>
                        <li className="pt-[6px]">
                          <Link
                            href="/error-search"
                            className="dropdown-item flex flex-row items-center gap-[6px] text-nowrap tracking-wider"
                          >
                            <div className="bg-[#fe5907] w-[4px] h-[4px] rounded-full"></div>
                            Newsfeed Ads
                          </Link>
                        </li>
                        <li className="pt-[6px]">
                          <Link
                            href="/error-search"
                            className="dropdown-item flex flex-row items-center gap-[6px] text-nowrap tracking-wider"
                          >
                            <div className="bg-[#fe5907] w-[4px] h-[4px] rounded-full"></div>
                            Notification Ads
                          </Link>
                        </li>
                      </ul>
                      <div className="px-6 pt-3 border-t-[1px] border-[#c7c7cc]">
                        <Link
                          href="/error-search"
                          className="dropdown-item text-nowrap"
                        >
                          More ads resources
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:flex hidden flex-row gap-3 items-center font-poppins">
            <button className="flex flex-row gap-1 bg-[#3E37D4] text-white px-3 py-[9px] rounded-md text-[12px] font-[600] hover:bg-[#3731B0]">
              <p>Get iBrowe</p>
              <Image src={download} height={18} alt="download" />
            </button>
            <button className="flex flex-row gap-1 border-[1px] border-[#1b1b1f] bg-transparent text-[#1b1b1f] px-3 py-2 rounded-md text-[12px] font-[600]">
              <p>Search The Web</p>
              <Image src={search} height={18} alt="search" />
            </button>
          </div>
          <button className="lg:hidden flex flex-col gap-1 bg-[#3E37D4] text-white px-4 py-4 rounded-md text-[12px] font-[600] hover:bg-[#3731B0]">
            <div className="w-[24px] h-[2px] bg-white rounded-sm"></div>
            <div className="w-[24px] h-[2px] bg-white rounded-sm"></div>
            <div className="w-[24px] h-[2px] bg-white rounded-sm"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
