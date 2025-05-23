"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('FaqSection');

  const faqs = [
    {
      question: t('faqs.0.question'),
      answer: t('faqs.0.answer'),
    },
    {
      question: t('faqs.1.question'),
      answer: t('faqs.1.answer'),
    },
    {
      question: t('faqs.2.question'),
      answer: t('faqs.2.answer'),
    },
    {
      question: t('faqs.3.question'),
      answer: t('faqs.3.answer'),
    },
    {
      question: t('faqs.4.question'),
      answer: t('faqs.4.answer'),
    },
    {
      question: t('faqs.5.question'),
      answer: t('faqs.5.answer'),
    },
    {
      question: t('faqs.6.question'),
      answer: t('faqs.6.answer'),
    },
    {
      question: t('faqs.7.question'),
      answer: t('faqs.7.answer'),
    },
    {
      question: t('faqs.8.question'),
      answer: t('faqs.8.answer'),
    },
    {
      question: t('faqs.9.question'),
      answer: t('faqs.9.answer'),
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">{t('title')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none flex justify-between items-center transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="ml-2 text-blue-600 transform transition-transform duration-200" style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <img
            src="/images/3d-icon-design-ibrowe-faq.jpg"
            alt="FAQ Illustration"
            className="w-full max-w-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
} 