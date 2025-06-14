'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function MarketingSubscribe() {
  const t = useTranslations('Marketing');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    setStatus('success');
  };

  return (
    <section className="py-16 bg-[#535353]">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('subscribe.title')}
          </h2>
          <p className="text-white mb-8">
            {t('subscribe.description')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('subscribe.emailPlaceholder')}
              className="flex-1 px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('subscribe.button')}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-400">
              {t('subscribe.successMessage')}
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400">
              {t('subscribe.errorMessage')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 