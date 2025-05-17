import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col items-start">
          <img src="/images/brave-logo.svg" width={130} alt="logo" className="mb-4" />
          <p className="mb-2 text-sm">เบราว์เซอร์ที่ช่วยประหยัดเวลา ไม่ใช่เก็บข้อมูลส่วนตัวของคุณ</p>
          <a href="mailto:support@ibrowe.com" className="flex items-center mb-1 hover:underline">
            <img src="https://uploads-ssl.webflow.com/5d01778cda7c6cc8a63e0b64/5d1324fd4b05c818c6fbecc1_mail.svg" width={19} alt="" className="mr-2" />
            <span>support@ibrowe.com</span>
          </a>
          <a href="#" className="flex items-center hover:underline">
            <img src="https://uploads-ssl.webflow.com/5d01778cda7c6cc8a63e0b64/5d1324fd4b05c84f5afbecc0_communication%20(1).svg" width={19} alt="" className="mr-2" />
            <span>Livechat</span>
          </a>
        </div>
        <div>
          <div className="font-bold mb-2">เกี่ยวกับ</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Leadership</a></li>
            <li><a href="https://ibrowe.com/#feature" className="hover:underline">Feature</a></li>
            <li><a href="https://ibrowe.com/#news" className="hover:underline">News</a></li>
            <li><a href="ibrowe-privacy.html" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">ดาวน์โหลด</div>
          <ul className="space-y-1 text-sm">
            <li><a href="https://laptop-updates.brave.com/latest/osx" className="hover:underline">สำหรับ MacOS</a></li>
            <li><a href="https://laptop-updates.brave.com/latest/winx64" className="hover:underline">สำหรับ Windows</a></li>
            <li><a href="https://laptop-updates.brave.com/download/ios/BRV002" className="hover:underline">แอพ iOS</a></li>
            <li><a href="https://laptop-updates.brave.com/download/android/BRV002" className="hover:underline">แอพ Android</a></li>
            <li><a href="https://ibrowe.com/linux.html" className="hover:underline">สำหรับ Linux</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">ข่าวสาร</div>
          <ul className="space-y-1 text-sm">
            <li><a href="https://ibrowe.com/#faq" className="hover:underline">ถาม-ตอบ</a></li>
            <li><a href="https://ibrowe.com/#about-us" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">ข่าวประชาสัมพันธ์</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">ติดตามเรา</div>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:opacity-80"><img width={30} alt="twitter" src="/images/twitter-bw.png" /></a>
            <a href="#" className="hover:opacity-80"><img width={30} alt="facebook" src="/images/facebook-bw.png" /></a>
            <a href="#" className="hover:opacity-80"><img width={30} alt="instagram" src="/images/instagram-bw.png" /></a>
            <a href="#" className="hover:opacity-80"><img width={30} alt="youtube" src="/images/youtube-bw.png" /></a>
            <a href="#" className="hover:opacity-80"><img width={30} alt="tiktok" src="/images/tiktok-bw.png" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <div className="text-xs text-gray-400">© Copyright 2025 iBrowe.co.th</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com/madebyflowcraft" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><img src="https://uploads-ssl.webflow.com/5d6f91252fd62f03bd2330e7/5d6f91252fd62f3d9d233139_twitter%20(4).svg" alt="twitter" /></a>
          <a href="https://www.instagram.com/madebyflowcraft/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><img src="https://uploads-ssl.webflow.com/5d6f91252fd62f03bd2330e7/5d6f91252fd62f9df7233138_instagram%20(6).svg" alt="instagram" /></a>
          <a href="https://gumroad.com/flowcraft" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><img src="https://uploads-ssl.webflow.com/5d6f91252fd62f03bd2330e7/5d81e9e6e7908e56bf587612_Gumroad.svg" alt="gumroad" /></a>
        </div>
      </div>
    </footer>
  );
} 