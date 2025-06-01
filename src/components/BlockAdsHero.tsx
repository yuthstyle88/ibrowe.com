import Image from 'next/image'
import Link from 'next/link'

export default function BlockAdsHero() {
  return (
    <div className="header pt-12 bg-[#d3d3d3] text-[#1a3066]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="hero-block md:w-1/2">
            <div className="content-block-hero">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                iBrowe solves the problem of <br />annoying ads
              </h1>
              <p className="text-lg mb-8">
                <strong>
                  Less noise. More speed. Total control.
                  <br />
                  Powered by smart ad-blocking technology, iBrowe filters unwanted ads in real time.
                  That means faster load times, lower data usage, and stronger protection all without lifting a finger.
                  <br />
                  The web, the way it should be.
                </strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://apps.apple.com/us/app/ibrowe/id6741485553"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  iOS
                </Link>
                <Link
                  href="https://ibrowe.com/ibrowe_dmg/iBroweBrowser-135.1.0.2.dmg"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  MacOS
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ibrowe108.browser"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Android
                </Link>
                <Link
                  href="#"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Windows
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/icon-blockads-1.png"
              alt="iBrowe Block Ads"
              width={1024}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 