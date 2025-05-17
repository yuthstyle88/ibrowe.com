import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const newsItems = [
  {
    image: '/images/iBrowe-news-1.webp',
    title: 'นายแน่มากใช้ ai สมัครงาน',
    content:
      'หนุ่มอ้างใช้ AI ช่วยสมัครงาน 1,000 ตำแหน่ง ตอนนอนหลับ ตื่นมาเจอผลลัพธ์ช็อก คนวิจารณ์เสียงแตกเป็นสองฝั่ง ชายคนหนึ่งใน Reddit อ้างว่าการหางานของเขาเปลี่ยนไปอย่างมาก หลังจากสร้างบอท AI ชายรายนี้เปิดเผยว่า บอทปัญญาประดิษฐ์ที่เขาสร้างขึ้นช่วยให้กระบวนการหางานง่ายขึ้นมาก ที่พิเศษกว่านั้นคือ บอท AI ทำงานหนักแทนเขาในขณะที่เขานอนหลับสบายอยู่บนเตียง',
  },
  {
    image: '/images/iBrowe-news-2.webp',
    title: 'ใช้ ai อ่านข่าว',
    content:
      'ถึงยุคผู้ประกาศ AI! หลายประเทศเริ่มนำผู้ประกาศข่าว AI มาใช้งานหรือร่วมดำเนินรายการกันมากขึ้น ล่าสุดถึงคิวประเทศไทยเมื่อ เนชั่นทีวีได้นำเอา ณัชชา และ ณิชชาน ผู้ประกาศข่าว AI มาใช้ในรายการข่าวเป็นแห่งแรกของไทย',
  },
  {
    image: '/images/iBrowe-news-3.webp',
    title: 'รวดเร็วในการใช้งาน',
    content:
      'iBrowe ใช้เทคโนโลยีการเรนเดอร์หน้าเว็บที่ทันสมัยและมีประสิทธิภาพ เช่น Chromium engine ซึ่งเป็นพื้นฐานเดียวกันกับเบราว์เซอร์อื่น ๆ เช่น Google Chrome แต่ iBrowe ได้ปรับปรุงให้ทำงานได้เร็วขึ้นโดยการลดการใช้งานทรัพยากรที่ไม่จำเป็น',
  },
  {
    image: '/images/office-girl.webp',
    title: 'รวดเร็วในการใช้งาน',
    content:
      'iBrowe ใช้เทคโนโลยีการเรนเดอร์หน้าเว็บที่ทันสมัยและมีประสิทธิภาพ เช่น Chromium engine ซึ่งเป็นพื้นฐานเดียวกันกับเบราว์เซอร์อื่น ๆ เช่น Google Chrome แต่ iBrowe ได้ปรับปรุงให้ทำงานได้เร็วขึ้นโดยการลดการใช้งานทรัพยากรที่ไม่จำเป็น',
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-white" id="news">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              style={{ opacity: 1 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6 line-clamp-4">{item.content}</p>
                <Link
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-button hover:shadow-hover"
                >
                  อ่านต่อ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 