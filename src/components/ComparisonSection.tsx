import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const comparisons = [
  {
    image: '/images/banner-ibrowe-chome.jpeg',
    title: 'iBrowe vs Chrome',
    description:
      'เรื่องความเป็นส่วนตัวและความเร็ว Chrome ตามเราไม่ทัน! เราให้คุณมากกว่าด้วยระบบป้องกันการติดตามและบล็อกโฆษณาอัตโนมัติ',
    href: '/ibrowevschome',
    cardClass: 'bg-yellow-50',
  },
  {
    image: '/images/banner-ibrowe-firefox.jpeg',
    title: 'iBrowe vs Firefox',
    description:
      'Firefox อาจเป็นตัวเลือกที่ดี แต่ iBrowe มอบประสบการณ์ที่เหนือกว่าด้วยความเร็วและความปลอดภัยที่เหนือชั้น',
    href: '/ibrowe-vs-firefox',
    cardClass: 'bg-orange-50',
  },
  {
    image: '/images/banner-ibrowe-google.jpeg',
    title: 'iBrowe vs Google',
    description:
      'ค้นหาอย่างเป็นส่วนตัว ไม่มีการติดตาม ไม่มีโฆษณาที่ไม่เกี่ยวข้อง เพื่อผลลัพธ์ที่ตรงใจคุณ',
    href: '/ibrowe-search-vs-google',
    cardClass: 'bg-blue-50',
  },
  {
    image: '/images/banner-ibrowe-ddg.jpeg',
    title: 'iBrowe Search vs DuckDuckGo',
    description:
      'เราไม่พึ่งพา Microsoft Bing เหมือน DuckDuckGo แต่ใช้ระบบค้นหาที่พัฒนาขึ้นเองเพื่อความเป็นส่วนตัวที่แท้จริง',
    href: '/ibrowe-search-vs-duckduckgo',
    cardClass: 'bg-green-50',
  },
  {
    image: '/images/ibrowe-safari-2.jpg',
    title: 'iBrowe vs Safari',
    description:
      'ในฐานะเบราว์เซอร์เริ่มต้นบนอุปกรณ์ Apple ทำให้ Safari เป็นเบราว์เซอร์ที่มีผู้ใช้มากเป็นอันดับสองของโลก โดยทั่วไปถือว่ามีความเป็นส่วนตัวมากกว่า Chrome และถูกปรับแต่งมาให้เหมาะสมกับ iOS และ macOS',
    href: '/ibrowe-vs-safari',
    cardClass: 'bg-purple-50',
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600 mb-4">
            เปรียบเทียบให้เห็นชัดๆ ว่าทำไม iBrowe ถึงเป็นเบราว์เซอร์ที่ดีที่สุดสำหรับคุณมาดูกันว่าเราดีกว่ายังไง
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            เหนือกว่าในทุกด้าน ทั้งความเป็นส่วนตัว ความเร็ว และฟีเจอร์
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <div
              key={comparison.title}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${comparison.cardClass}`}
            >
              <div className="relative h-48">
                <Image
                  src={comparison.image}
                  alt={comparison.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{comparison.title}</h3>
                <p className="text-gray-600 mb-6">{comparison.description}</p>
                <Link
                  href={comparison.href}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-button hover:shadow-hover"
                >
                  ดูการเปรียบเทียบ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 