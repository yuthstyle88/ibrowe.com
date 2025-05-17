'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'
import dropdownAnimation from '../animations/Drop-lottie.json'

export default function Navigation() {
  const [isCompareOpen, setIsCompareOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/brave-logo.svg"
                alt="iBrowe Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex md:ml-8 space-x-8">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group"
              >
                หน้าแรก
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link
                href="/#feature"
                className="relative text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group"
              >
                ฟีเจอร์
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsCompareOpen(!isCompareOpen)}
                  className="relative text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group flex items-center"
                >
                  เปรียบเทียบ
                  <div className="w-5 h-5 ml-1">
                    <Lottie
                      animationData={dropdownAnimation}
                      loop={false}
                      autoplay={false}
                      style={{
                        transform: isCompareOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </button>
                {isCompareOpen && (
                  <div className="absolute z-10 mt-2 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 transform origin-top transition-all duration-200 ease-out">
                    <div className="py-2" role="menu">
                      {[
                        { href: '/ibrowevschome', text: 'iBrowe vs Chrome' },
                        { href: '/ibrowe-vs-firefox', text: 'iBrowe vs Firefox' },
                        { href: '/ibrowe-search-vs-google', text: 'iBrowe vs Google' },
                        { href: '/ibrowe-search-vs-duckduckgo', text: 'iBrowe Search vs DuckDuckGo' },
                        { href: '/ibrowe-vs-safari', text: 'iBrowe vs Safari' },
                        { href: '/ibrowe-vs-edge', text: 'iBrowe vs Edge' }
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 group relative"
                          role="menuitem"
                        >
                          <span>{item.text}</span>
                          <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        </Link>
                      ))}
                    </div>
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200" />
                  </div>
                )}
              </div>
              <Link
                href="https://marketing.ibrowe.com"
                className="relative text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group"
              >
                สำหรับธุรกิจ
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
              <Link
                href="https://support.ibrowe.com"
                className="relative text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group"
              >
                สนับสนุน
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link
              href="/download"
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              ดาวน์โหลด iBrowe
            </Link>
          </div>
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 