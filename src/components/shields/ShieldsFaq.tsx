'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white/5 rounded-b-lg text-white whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ShieldsFaq() {
  const t = useTranslations('Shields');

  const faqItems = [
    {
      question: t('faq.trackers.question'),
      answer: t('faq.trackers.answer'),
    },
    {
      question: t('faq.fingerprinting.question'),
      answer: t('faq.fingerprinting.answer'),
    },
    {
      question: t('faq.storage.question'),
      answer: t.rich('faq.storage.answer', {
        p: (chunks) => <p className="mb-4">{chunks}</p>,
      }),
    },
    {
      question: t('faq.disable.question'),
      answer: t('faq.disable.answer'),
    },
    {
      question: t('faq.modes.question'),
      answer: t('faq.modes.answer'),
    },
  ];

  return (
    <section className="py-16 bg-[#535353]">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('faq.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
} 