'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const features = [
  {
    id: 'tab1',
    title: 'เว็บที่ไร้ความน่ารำคาญ',
    heading: 'บล็อกโฆษณาจากบุคคลที่สามทุกประเภทบนเว็บไซต์',
    image: '/images/eye-catching-dynamic-dazzling-ethereal-image-of-a-.jpg',
  },
  {
    id: 'tab2',
    title: 'ประหยัดข้อมูล, ประหยัดแบตเตอรี่, ประหยัดเวลา',
    heading: 'คุณจะประหยัดแบนด์วิธของ Wi-Fi และข้อมูลมือถือ',
    image: '/images/3d-icon-cyber-save-data--save-battery--save-time.jpg',
  },
  {
    id: 'tab3',
    title: 'ความเป็นส่วนตัวที่เหนือชั้น',
    heading: 'ป้องกันการติดตามและการทำลายนิ้วมือออนไลน์',
    image: '/images/cyber-security-logo-ibrowe.jpg',
  },
  {
    id: 'tab4',
    title: 'ความปลอดภัยที่ เปิดใช้งานโดยอัตโนมัติ',
    heading: 'ใช้งานได้ทันทีไม่ต้องตั้งค่าอะไรเพิ่มเติม',
    image: '/images/cybersecurity-shield--digital-protection--neon-lig.jpg',
  },
]

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <section className="py-16 bg-gray-50" id="feature">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            iBrowe มอบประสบการณ์การท่องเว็บที่เหนือระดับ
          </h2>
          <p className="text-xl text-gray-600">
            ด้วยฟีเจอร์ที่ออกแบบมาเพื่อความปลอดภัยและความสะดวกสบายของคุณฟีเจอร์ที่ทรงพลัง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-col space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-200 ${
                    activeTab === feature.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <p className="text-lg font-medium">{feature.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`transition-all duration-300 ${
                  activeTab === feature.id ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {feature.heading}
                  </h3>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 66vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/browser-that-saves-your-time.png"
              alt="Browser that saves your time"
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-primary text-lg font-medium mb-4">ปลอดภัยต่อการใช้งาน</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              เบราว์เซอร์ที่ช่วยประหยัดเวลา ไม่ใช่เก็บข้อมูลส่วนตัวของคุณ
            </h2>
            <p className="text-gray-600 mb-8">
              ดาวน์โหลด iBrowe ได้แล้ววันนี้สำหรับ Android, iOS, Linux, macOS หรือ Windows –
              ท่องเว็บได้เร็วขึ้น ปลอดภัยกว่า และเป็นส่วนตัวมากกว่าที่เคย!
            </p>
            <a
              href="/download"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-button hover:shadow-hover"
            >
              ดาวน์โหลด iBrowe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 