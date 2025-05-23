"use client";

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function PrivacyContent() {
  const t = useTranslations('Privacy')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-700">
              {t('description')}
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/3d-design-icon-privacy-policy.png"
              alt="Privacy Policy"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">{t('overview.title')}</h2>
        <p>{t('overview.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('dataCollection.title')}</h2>
        <p>{t('dataCollection.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('dataUsage.title')}</h2>
        <p>{t('dataUsage.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('dataSharing.title')}</h2>
        <p>{t('dataSharing.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('dataRetention.title')}</h2>
        <p>{t('dataRetention.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('userRights.title')}</h2>
        <p>{t('userRights.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('security.title')}</h2>
        <p>{t('security.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('privacyFeatures.title')}</h2>
        <p>{t('privacyFeatures.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('privacySettings.title')}</h2>
        <p>{t('privacySettings.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('contact.title')}</h2>
        <p>{t('contact.content')}</p>

        <h2 className="text-3xl font-bold mb-6 mt-12">{t('policyUpdates.title')}</h2>
        <p>{t('policyUpdates.content')}</p>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">{t('faq.title')}</h2>
        <div className="space-y-6">
          {/* Location FAQ */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('faq.location.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium">{t('faq.location.purpose')}</h4>
                <p>{t('faq.location.purposeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.location.dataType')}</h4>
                <p>{t('faq.location.dataTypeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.location.legalBasis')}</h4>
                <p>{t('faq.location.legalBasisContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.location.retention')}</h4>
                <p>{t('faq.location.retentionContent')}</p>
              </div>
            </div>
          </div>

          {/* Rewards FAQ */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('faq.rewards.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium">{t('faq.rewards.purpose')}</h4>
                <p>{t('faq.rewards.purposeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.rewards.dataType')}</h4>
                <p>{t('faq.rewards.dataTypeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.rewards.legalBasis')}</h4>
                <p>{t('faq.rewards.legalBasisContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.rewards.retention')}</h4>
                <p>{t('faq.rewards.retentionContent')}</p>
              </div>
            </div>
          </div>

          {/* News FAQ */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('faq.news.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium">{t('faq.news.purpose')}</h4>
                <p>{t('faq.news.purposeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.news.dataType')}</h4>
                <p>{t('faq.news.dataTypeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.news.legalBasis')}</h4>
                <p>{t('faq.news.legalBasisContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.news.retention')}</h4>
                <p>{t('faq.news.retentionContent')}</p>
              </div>
            </div>
          </div>

          {/* Feedback FAQ */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('faq.feedback.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium">{t('faq.feedback.purpose')}</h4>
                <p>{t('faq.feedback.purposeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.feedback.dataType')}</h4>
                <p>{t('faq.feedback.dataTypeContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.feedback.legalBasis')}</h4>
                <p>{t('faq.feedback.legalBasisContent')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('faq.feedback.retention')}</h4>
                <p>{t('faq.feedback.retentionContent')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 