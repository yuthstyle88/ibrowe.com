'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsFaq() {
  const t = useTranslations('News.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('questions.start.question'),
      answer: `${t('questions.start.answer.intro')}\n\n${t('questions.start.answer.desktop.title')}\n${t('questions.start.answer.desktop.steps.0')}\n${t('questions.start.answer.desktop.steps.1')}\n${t('questions.start.answer.desktop.steps.2')}\n${t('questions.start.answer.desktop.steps.3')}\n${t('questions.start.answer.desktop.steps.4')}\n\n${t('questions.start.answer.mobile.title')}\n${t('questions.start.answer.mobile.steps.0')}\n${t('questions.start.answer.mobile.steps.1')}\n${t('questions.start.answer.mobile.steps.2')}\n${t('questions.start.answer.mobile.steps.3')}\n\n${t('questions.start.answer.conclusion')}`
    },
    {
      question: t('questions.free.question'),
      answer: `${t('questions.free.answer.intro')}\n\n${t('questions.free.answer.description')}\n${t('questions.free.answer.features.0')}\n${t('questions.free.answer.features.1')}\n${t('questions.free.answer.features.2')}\n${t('questions.free.answer.features.3')}\n\n${t('questions.free.answer.conclusion')}`
    },
    {
      question: t('questions.categories.question'),
      answer: `${t('questions.categories.answer.categories.0')}\n${t('questions.categories.answer.categories.1')}\n${t('questions.categories.answer.categories.2')}\n${t('questions.categories.answer.categories.3')}\n${t('questions.categories.answer.categories.4')}\n${t('questions.categories.answer.categories.5')}\n\n${t('questions.categories.answer.sources.title')}\n${t('questions.categories.answer.sources.description')}\n${t('questions.categories.answer.sources.types.0')}\n${t('questions.categories.answer.sources.types.1')}\n${t('questions.categories.answer.sources.types.2')}\n${t('questions.categories.answer.sources.types.3')}\n\n${t('questions.categories.answer.management.title')}\n${t('questions.categories.answer.management.steps.0')}\n${t('questions.categories.answer.management.steps.1')}\n\n${t('questions.categories.answer.availability.title')}\n${t('questions.categories.answer.availability.platforms.0')}\n${t('questions.categories.answer.availability.platforms.1')}\n${t('questions.categories.answer.availability.platforms.2')}\n\n${t('questions.categories.answer.conclusion')}`
    },
    {
      question: t('questions.personalization.question'),
      answer: `${t('questions.personalization.answer.intro')}\n\n${t('questions.personalization.answer.howItWorks.title')}\n${t('questions.personalization.answer.howItWorks.features.0')}\n${t('questions.personalization.answer.howItWorks.features.1')}\n${t('questions.personalization.answer.howItWorks.features.2')}\n${t('questions.personalization.answer.howItWorks.features.3')}\n\n${t('questions.personalization.answer.customization.title')}\n${t('questions.personalization.answer.customization.steps.0')}\n${t('questions.personalization.answer.customization.steps.1')}\n${t('questions.personalization.answer.customization.steps.2')}\n\n${t('questions.personalization.answer.conclusion')}`
    },
    {
      question: t('questions.privacy.question'),
      answer: `${t('questions.privacy.answer.intro')}\n\n${t('questions.privacy.answer.dataProtection.title')}\n${t('questions.privacy.answer.dataProtection.items.0')}\n${t('questions.privacy.answer.dataProtection.items.1')}\n${t('questions.privacy.answer.dataProtection.items.2')}\n${t('questions.privacy.answer.dataProtection.conclusion')}\n\n${t('questions.privacy.answer.howItWorks.title')}\n${t('questions.privacy.answer.howItWorks.description')}\n\n${t('questions.privacy.answer.howItWorks.privacy.title')}\n${t('questions.privacy.answer.howItWorks.privacy.items.0')}\n${t('questions.privacy.answer.howItWorks.privacy.items.1')}\n${t('questions.privacy.answer.howItWorks.privacy.reason')}\n\n${t('questions.privacy.answer.ranking.title')}\n${t('questions.privacy.answer.ranking.description')}\n${t('questions.privacy.answer.ranking.features.0')}\n${t('questions.privacy.answer.ranking.features.1')}\n${t('questions.privacy.answer.ranking.features.2')}\n${t('questions.privacy.answer.ranking.features.3')}\n${t('questions.privacy.answer.ranking.features.4')}\n\n${t('questions.privacy.answer.ranking.benefits.title')}\n${t('questions.privacy.answer.ranking.benefits.items.0')}\n${t('questions.privacy.answer.ranking.benefits.items.1')}\n${t('questions.privacy.answer.ranking.benefits.items.2')}\n\n${t('questions.privacy.answer.imageLoading.title')}\n${t('questions.privacy.answer.imageLoading.description')}\n${t('questions.privacy.answer.imageLoading.features.0')}\n${t('questions.privacy.answer.imageLoading.features.1')}\n${t('questions.privacy.answer.imageLoading.features.2')}\n\n${t('questions.privacy.answer.conclusion')}`
    }
  ];

  return (
    <section className="faq-section py-16 bg-[#535353]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-12">
          {t('title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#d6d6d680]"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 