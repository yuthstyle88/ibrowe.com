import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/3d-smartphone.png"
            alt="iBrowe Smartphone"
            className="w-full max-w-xs md:max-w-md rounded-xl shadow"
          />
        </div>
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">เกี่ยวกับเรา</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            เปิดตัว <span className="text-blue-700 font-extrabold">iBrowe</span> เทคโนโลยีสำหรับประสบการณ์การท่องเว็บที่เหนือชั้น!
          </h2>
          <p className="text-gray-700 mb-4">
            iBrowe ไม่ใช่แค่เบราว์เซอร์ธรรมดา แต่เป็นเครื่องมืออันทรงพลังที่ออกแบบมาเพื่อสนับสนุนแบรนด์ที่เติบโตและผู้ใช้ที่ชื่นชอบเทคโนโลยี ด้วยคุณสมบัติล้ำสมัยที่ปรับแต่งให้เหมาะกับประสิทธิภาพ iBrowe รับประกันการนำทางที่ราบรื่นและรวดเร็ว คล้ายกับการพัฒนาอุตสาหกรรมการพิมพ์ iBrowe กลายเป็นมาตรฐานใหม่ของเทคโนโลยีการท่องเว็บที่สร้างขึ้นเพื่อตอบสนองความต้องการในยุคดิจิทัล ส่งเสริมการเดินทางออนไลน์ของคุณด้วยความสามารถในการปรับแต่ง Search Engine Optimization ขั้นสูง ที่มอบผลลัพธ์ที่แม่นยำและรวดเร็วทันใจให้คุณก้าวนำในโลกดิจิทัล!
          </p>
        </div>
      </div>
    </section>
  );
} 