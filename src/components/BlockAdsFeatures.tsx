import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'iBrowe Block ADS',
    image: '/images/assets_block_ads_01.webp',
    description: (
      <>
        <strong>For those tired of intrusive ads.</strong>
        <br />
        Pop-ups, banners, autoplay videos, they clutter your screen and slow everything down.{' '}
        <strong>iBrowe blocks them all, instantly.</strong>
        <br />
        Just install it and enjoy faster, cleaner browsing with zero distractions.
        <br />
        ✅ No complicated setup
        <br />
        ✅ Easy to use
        <br />
        ✅ Safer, smoother, ad-free experience
        <br />
        <strong>No more annoying ads. Just iBrowe.</strong>
      </>
    ),
    className: 'bg-yellow-50',
  },
  {
    title: 'iBrowe Block ADS Youtube',
    image: '/images/assets_block_ads_youtube_03.webp',
    description: (
      <>
        <strong>Tired of mid-video ads on YouTube?</strong>
        <br />
        <strong>iBrowe Block ADS for YouTube</strong> gives you seamless, ad-free viewing automatically.
        <br />
        ✅ <strong>Auto Ad Blocking:</strong> Enjoy your favorite videos without interruptions
        <br />
        ✅ <strong>Fast & Easy Setup:</strong> Installs in seconds, works with all major browsers
        <br />
        ✅ <strong>Time-Saving:</strong> Smooth, non-stop streaming for a better experience
        <br />
        ✅ <strong>100% Private:</strong> No tracking. No data collection. Just peace of mind.
        <br />
        <strong>Download iBrowe Block ADS for YouTube today and take back your time.</strong>
      </>
    ),
    className: 'bg-white',
  },
  {
    title: 'iBrowe Block ADS Tiktok',
    image: '/images/assets_block_ads_tiktok_01.webp',
    description: (
      <>
        <strong>Tired of TikTok ads interrupting your flow?</strong>
        <br />
        <strong>iBrowe Block ADS for TikTok</strong> transforms your experience instantly.
        <br />
        ✅ <strong>Instant Ad Blocking:</strong> Watch non-stop videos with zero interruptions
        <br />
        ✅ <strong>One-Click Setup:</strong> Works with any browser, ready in seconds
        <br />
        ✅ <strong>Save Time:</strong> Stay in the moment with seamless, ad-free content
        <br />
        ✅ <strong>Private & Secure:</strong> No tracking. No data collection. Just peace of mind
        <br />
        <strong>Download iBrowe Block ADS for TikTok today and scroll freely.</strong>
      </>
    ),
    className: 'bg-white',
  },
  {
    title: 'iBrowe Block ADS on WEB',
    image: '/images/assets_block_ads_web_01.webp',
    description: (
      <>
        <strong>Sick of pop-ups and banner ads while browsing?</strong>
        <br />
        <strong>iBrowe Block ADS on Web</strong> is your ultimate solution for a cleaner, faster, distraction-free
        internet.
        <br />
        ✅ <strong>Blocks All Ads:</strong> Instantly removes pop-ups, banners, and autoplay videos
        <br />
        ✅ <strong>Faster Browsing:</strong> Speeds up page loads for a smoother, seamless experience
        <br />
        ✅ <strong>Quick Setup:</strong> Works across all platforms — get started in seconds
        <br />
        ✅ <strong>Maximum Privacy:</strong> No tracking. No data collection. Just peace of mind
        <br />
        <strong>Download iBrowe Block ADS on Web today and reclaim your internet.</strong>
      </>
    ),
    className: 'bg-white',
  },
]

export default function BlockAdsFeatures() {
  return (
    <div className="section-content py-16">
      <div className="container mx-auto px-4">
        <div className="title-wrap-left mb-12">
          <h3 className="text-3xl font-bold mb-4">Are ads the most annoying thing online?</h3>
          <p className="text-lg">
            <strong>Say goodbye to intrusive pop-ups, slow-loading pages, and cluttered content.</strong>
            <br />
            iBrowe uses smart, real-time ad blocking to deliver a faster, safer, and distraction-free internet
            experience.
            <br />
            <strong>Easy to install. Effortless to use.</strong>
            <br />
            No tech skills required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`service-card p-6 rounded-lg ${feature.className}`}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={1536}
                height={1536}
                className="w-full h-auto mb-6"
              />
              <div className="card-content-wrap">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-base mb-6">{feature.description}</p>
              </div>
              <Link
                href="/download"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                DOWNLOAD iBrowe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 