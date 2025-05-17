"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: 'iBrowe Browser ปลอดภัยหรือไม่?',
    answer: 'Brave เป็นหนึ่งในเบราว์เซอร์ที่ปลอดภัยที่สุดในปัจจุบัน ...',
  },
  {
    question: 'วิธีดาวน์โหลดและติดตั้ง iBrowe',
    answer: 'Brave พร้อมให้ใช้งานบนคอมพิวเตอร์เดสก์ท็อปเกือบทุกรุ่น ...',
  },
  {
    question: 'iBrowe มี VPN หรือไม่?',
    answer: 'มี! iBrowe Firewall + VPN ปกป้องทุกกิจกรรมออนไลน์ของคุณ ...',
  },
  // Add more FAQ items as needed
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">ถาม-ตอบ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="ml-2 text-blue-600">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="/images/3d-icon-design-ibrowe-faq.jpg"
            alt="FAQ Illustration"
            className="w-full max-w-md rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
} 