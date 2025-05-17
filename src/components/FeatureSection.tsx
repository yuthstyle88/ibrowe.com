"use client";
import React, { useState } from 'react';

const features = [
  {
    title: 'ปลอดภัยตั้งแต่เริ่มต้น',
    category: 'ปลอดภัยตั้งแต่เริ่มต้น',
    description:
      'ความเป็นส่วนตัวและความปลอดภัยคือสิ่งสำคัญที่สุดของเรา และเว็บเบราว์เซอร์นี้ถูกออกแบบมาโดยมีหลักการนี้เป็นแกนกลางตั้งแต่ขั้นตอนแรกของการพัฒนา... คุณจึงมั่นใจได้ว่าทุกการใช้งานจะปลอดภัยตั้งแต่เริ่มต้นจนจบ',
    imageClass: 'bg-blue-100', // Replace with your icon or image if needed
  },
  {
    title: 'เร็วดั่งสายฟ้า',
    category: 'DESIGN',
    description:
      'สัมผัสประสบการณ์การใช้งานที่รวดเร็วทันใจราวกับสายฟ้าแลบ ด้วยเทคโนโลยีการโหลดหน้าเว็บที่ได้รับการปรับแต่งให้เหนือชั้น... คุณจะรู้สึกถึงความลื่นไหลในทุกการใช้งาน',
    imageClass: 'bg-yellow-100',
  },
  {
    title: 'ออกแบบมาเพื่อทุกคน',
    category: 'BUSINESS',
    description:
      'ค้นหาอย่างเป็นส่วนตัวด้วยเว็บเบราว์เซอร์ที่มอบประสบการณ์การท่องเว็บที่ปลอดภัย รวดเร็ว และปรับแต่งได้ตามความต้องการของคุณ...',
    imageClass: 'bg-green-100',
  },
  {
    title: 'การเข้ารหัสระดับสูง',
    category: 'BUSINESS',
    description:
      'ปกป้องข้อมูลของคุณด้วยเทคโนโลยีการเข้ารหัสที่ทันสมัยที่สุดในระดับอุตสาหกรรม... เพื่อให้คุณท่องเว็บได้อย่างมั่นใจ',
    imageClass: 'bg-purple-100',
  },
  {
    title: 'โหมดไม่ระบุตัวตน',
    category: 'BUSINESS',
    description:
      'ท่องเว็บโดยไม่ทิ้งร่องรอยใดๆ ด้วยโหมดไม่ระบุตัวตนที่ออกแบบมาเพื่อความเป็นส่วนตัวสูงสุด...',
    imageClass: 'bg-gray-200',
  },
  {
    title: 'การแจ้งเตือนอัจฉริยะ',
    category: 'BUSINESS',
    description:
      'รับการแจ้งเตือนที่สำคัญและมีประโยชน์ โดยไม่รบกวนประสบการณ์การท่องเว็บของคุณ...',
    imageClass: 'bg-pink-100',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            iBrowe มอบประสบการณ์การท่องเว็บที่เหนือระดับ
          </h2>
          <p className="text-lg text-gray-700">
            ด้วยฟีเจอร์ที่ออกแบบมาเพื่อความปลอดภัยและความสะดวกสบายของคุณฟีเจอร์ที่ทรงพลัง
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 text-xl font-bold ${feature.imageClass}`}>{/* Icon or image here if needed */}</div>
              <div className="text-xs font-semibold text-blue-600 uppercase mb-1">{feature.category}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{feature.description}</p>
              <a href="#" className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 