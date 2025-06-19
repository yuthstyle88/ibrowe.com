'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'
import dropdownAnimation from '../animations/Drop-lottie.json'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useLocalizedPath } from '@/utils/path'

export default function Navigation() {
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const pathname = usePathname()
  const getLocalizedPath = useLocalizedPath()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === getLocalizedPath(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href={getLocalizedPath('/')} className="flex-shrink-0 flex items-center">
              <Image
                src="/images/brave-logo.svg"
                alt="iBrowe Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href={getLocalizedPath('/')}
              className={`relative text-white hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group ${isActive('/') ? 'text-primary' : ''}`}
            >
              {t('home')}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link
              href={getLocalizedPath('/features')}
              className={`relative text-white hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group ${isActive('/features') ? 'text-primary' : ''}`}
            >
              {t('features')}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <div className="relative inline-flex flex-col items-center">
              <button
                onClick={() => setIsCompareOpen(!isCompareOpen)}
                className={`relative text-white hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group flex items-center ${isActive('/compare') ? 'text-primary' : ''}`}
              >
                {t('compare')}
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
                <div className="absolute top-full mt-3 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-10 animate-fade-in-up">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 w-4 h-4 bg-white rotate-45 shadow-md" style={{ transform: 'translateX(-50%) rotate(45deg)' }} />

                  {/* Items */}
                  <div className="py-2">
                    {[
                      { href: '/ibrowevschome', text: 'iBrowe vs Chrome', image: '/images/chrome-p-130x130q80.png' },
                      { href: '/ibrowe-vs-firefox', text: 'iBrowe vs Firefox', image: '/images/firefox-p-130x130q80.png' },
                      { href: '/ibrowe-search-vs-google', text: 'iBrowe vs Google', image: '/images/search-google-p-130x130q80.png' },
                      { href: '/ibrowe-search-vs-duckduckgo', text: 'iBrowe Search vs DuckDuckGo', image: '/images/icons8-duckduckgo.svg' },
                      { href: '/ibrowe-vs-safari', text: 'iBrowe vs Safari', image: '/images/safari-p-130x130q80.png' },
                      { href: '/ibrowe-vs-edge', text: 'iBrowe vs Edge', image: '/images/microsoft-p-130x130q80.png' }
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={getLocalizedPath(item.href)}
                        onClick={() => setIsCompareOpen(false)}
                        className="flex items-center gap-2 px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-md group relative"
                      >
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.text}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span className="relative z-10">{item.text}</span>
                        <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


            <Link
              href={getLocalizedPath('/marketing')}
              className={`relative text-white hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group ${isActive('/business') ? 'text-primary' : ''}`}
            >
              {t('business')}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link
              href={getLocalizedPath('/support')}
              className={`relative text-white hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200 group ${isActive('/support') ? 'text-primary' : ''}`}
            >
              {t('support')}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link
              href={getLocalizedPath('/download')}
              className="inline-flex items-center px-6 py-2.5 border border-white text-sm font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-navbar transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t('download')}
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
          <Link
            href={getLocalizedPath('/')}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('home')}
          </Link>
          <Link
            href={getLocalizedPath('/features')}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/features') ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('features')}
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsCompareOpen(!isCompareOpen)}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${isActive('/compare') ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
            >
              {t('compare')}
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isCompareOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCompareOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {[
                  { href: '/ibrowevschome', text: 'iBrowe vs Chrome', image: '/images/chrome-p-130x130q80.png' },
                  { href: '/ibrowe-vs-firefox', text: 'iBrowe vs Firefox', image: '/images/firefox-p-130x130q80.png' },
                  { href: '/ibrowe-search-vs-google', text: 'iBrowe vs Google', image: '/images/search-google-p-130x130q80.png' },
                  { href: '/ibrowe-search-vs-duckduckgo', text: 'iBrowe Search vs DuckDuckGo', image: '/images/icons8-duckduckgo.svg' },
                  { href: '/ibrowe-vs-safari', text: 'iBrowe vs Safari', image: '/images/safari-p-130x130q80.png' },
                  { href: '/ibrowe-vs-edge', text: 'iBrowe vs Edge', image: '/images/microsoft-p-130x130q80.png' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedPath(item.href)}
                    onClick={() => {
                      setIsCompareOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.text}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href={getLocalizedPath('/marketing')}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/business') ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('business')}
          </Link>
          <Link
            href={getLocalizedPath('/support')}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/support') ? 'text-primary bg-gray-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('support')}
          </Link>
          <Link
            href={getLocalizedPath('/download')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('download')}
          </Link>
        </div>
      </div>
    </nav>
  )
} 