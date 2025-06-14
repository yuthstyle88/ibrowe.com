'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MarketingBrands() {
  const t = useTranslations('Marketing');

  const brands = [
    { name: 'Ford', logo: '/images/Ford.png' },
    { name: 'Polkadot', logo: '/images/Polkadot.png' },
    { name: 'Booking', logo: '/images/Booking_1Booking.png' },
    { name: 'Amazon', logo: '/images/Amazon.png' },
    { name: 'Wayfair', logo: '/images/Wayfair.png' },
    { name: 'Solana', logo: '/images/Solana.png' }
  ];

  return (
    <section className="py-16 bg-[#535353]">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {t('brands.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center bg-white rounded-lg p-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 