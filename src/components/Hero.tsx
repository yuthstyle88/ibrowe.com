import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="container mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                iBrowe เบราว์เซอร์ที่ใส่ใจคุณที่สุด
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                สุดยอดเบราว์เซอร์ที่ไร้โฆษณากวนใจ ปลอดภัยจากแสกมเมอร์ แค่เปลี่ยนมาใช้ iBrowe!
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/download"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-button hover:shadow-hover"
                >
                  ดาวน์โหลด iBrowe
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[1434/900]">
              <Image
                src="/images/ibrowe-head-1.png"
                alt="iBrowe Browser Interface"
                fill
                className="object-contain"
                sizes="(max-width: 1434px) 100vw, 1434px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 'Symbols'].map((num) => (
              <div key={num} className="relative w-32 h-12">
                <Image
                  src={`/images/${num}.svg`}
                  alt={`Partner Logo ${num}`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 