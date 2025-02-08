"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/brave-logo-sans-text.svg";
import arrow_down from "../../assets/icon/arrow-alt-down.svg";
import download from "../../assets/icon/download.svg";
import search from "../../assets/icon/search.svg";

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
      ? "bg-white shadow-sm shadow-header h-20 py-2" // Khi scroll, thu padding + chiều cao
      : "bg-transparent h-32 py-4" // Khi chưa scroll, giữ padding lớn
  }`}
>

      <nav className="max-w-7xl mx-6 md:mx-36 lg:mx-24 xl:mx-auto flex w-full items-center justify-between h-full">
      <div className="relative flex w-full items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <Image src={logo} height={40} alt="logo" />
            </Link>
            <div className="lg:flex hidden flex-row relative group px-3">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-[12px] font-[600] flex flex-row items-center gap-1">
                <p>Browser</p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <Link
                  href="/error-search"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  ErrorSearch
                </Link>
                <Link
                  href="/why-error"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  WhyError
                </Link>
                <Link
                  href="/search-api"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  SearchAPI
                </Link>
                <Link
                  href="/abort-size"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  AbortSize
                </Link>
              </div>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-[12px] font-[600] flex flex-row items-center gap-1">
                <p>Brave Search</p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-[12px] font-[600] flex flex-row items-center gap-1">
                <p>Why brave</p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-[12px] font-[600] flex flex-row items-center gap-1">
                <p>Search API</p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-[12px] font-[600] flex flex-row items-center gap-1">
                <p>Advertise</p>
                <Image src={arrow_down} height={4} alt="arrow_down" />
              </button>
            </div>
          </div>

          <div className="lg:flex hidden flex-row gap-3 items-center font-poppins">
            <button className="flex flex-row gap-1 bg-[#3E37D4] text-white px-3 py-[9px] rounded-md text-[12px] font-[600] hover:bg-[#3731B0]">
              <p>Get iBrowe</p>
              <Image src={download} height={18} alt="download" />
            </button>
            <button className="flex flex-row gap-1 border-[1px] border-[#1b1b1f] bg-transparent text-[#1b1b1f] px-3 py-2 rounded-md text-[12px] font-[600] hover:bg-[#3731B0]">
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
