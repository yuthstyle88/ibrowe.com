'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FaqItem {
  question: string;
  answer: string;
}

export default function RewardsFaq() {
  const t = useTranslations('Rewards');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: t('faq.adsReplace.question'),
      answer: t('faq.adsReplace.answer')
    },
    {
      question: t('faq.platforms.question'),
      answer: t('faq.platforms.answer')
    },
    {
      question: t('faq.activate.question'),
      answer: t('faq.activate.answer')
    },
    {
      question: t('faq.earn.question'),
      answer: t('faq.earn.answer')
    },
    {
      question: t('faq.iat.question'),
      answer: t('faq.iat.answer')
    },
    {
      question: t('faq.withdraw.question'),
      answer: t('faq.withdraw.answer')
    },
    {
      question: t('faq.controlAds.question'),
      answer: t('faq.controlAds.answer')
    },
    {
      question: t('faq.creators.question'),
      answer: t('faq.creators.answer')
    },
    {
      question: t('faq.revenue.question'),
      answer: t('faq.revenue.answer')
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('faq.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="transform transition-transform duration-200">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 