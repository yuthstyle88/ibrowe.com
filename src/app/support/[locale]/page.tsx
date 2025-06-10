'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function SupportHome() {
    const t = useTranslations('Support');
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: t('faq.extensions.question'),
            answer: t('faq.extensions.answer')
        },
        {
            question: t('faq.technical.question'),
            answer: t('faq.technical.answer')
        },
        {
            question: t('faq.platforms.question'),
            answer: t('faq.platforms.answer')
        }
    ];

    return (
        <main className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                <p className="text-lg text-gray-600">{t('description')}</p>
            </div>

            {/* Contact Section */}
            <section className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
                <div className="space-y-4">
                    <p className="flex items-center">
                        <span className="font-medium mr-2">{t('contact.email')}:</span>
                        <a href={`mailto:${t('contact.email')}`} className="text-blue-600 hover:underline">
                            {t('contact.email')}
                        </a>
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">{t('faq.title')}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">{faq.question}</span>
                                    <span className="text-gray-500">
                                        {activeFAQ === index ? '−' : '+'}
                                    </span>
                                </div>
                            </button>
                            {activeFAQ === index && (
                                <div className="px-6 py-4 bg-gray-50">
                                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
