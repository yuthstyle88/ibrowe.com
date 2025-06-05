'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FaqItem {
  question: string;
  answer: string;
}

export default function AdvancedPrivacyFaq() {
  const t = useTranslations('AdvancedPrivacy');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: t('faq.chromium.question'),
      answer: t.raw('faq.chromium.answer'),
    },
    {
      question: t('faq.deamping.question'),
      answer: t.raw('faq.deamping.answer'),
    },
    {
      question: t('faq.networkRequests.question'),
      answer: t.raw('faq.networkRequests.answer'),
    },
    {
      question: t('faq.queryParameters.question'),
      answer: t.raw('faq.queryParameters.answer'),
    },
    {
      question: t('faq.partitioning.question'),
      answer: t.raw('faq.partitioning.answer'),
    },
    {
      question: t('faq.socialMedia.question'),
      answer: t.raw('faq.socialMedia.answer'),
    },
    {
      question: t('faq.bounceTracking.question'),
      answer: t.raw('faq.bounceTracking.answer'),
    },
    {
      question: t('faq.cookieLifetime.question'),
      answer: t.raw('faq.cookieLifetime.answer'),
    },
    {
      question: t('faq.privateWindow.question'),
      answer: t.raw('faq.privateWindow.answer'),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#535353] py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {t('faq.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 