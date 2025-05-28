'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('Privacy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-16"
        style={{
          backgroundColor: '#535353',
          backgroundImage: "url('/images/bg_shade.svg')",
          backgroundPosition: '0 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-white">
                {t('hero.description')}
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/3d-design-icon-privacy-policy.png"
                alt={t('hero.imageAlt')}
                width={512}
                height={512}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-[#535353]">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">{t('main.title')}</h2>

            {/* Overview */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('overview.title')}</h3>
              <p className="text-white mb-4">
                {t('overview.content')}
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('dataCollection.title')}</h3>
              <p className="text-white mb-4">
                {t('dataCollection.intro')}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">{t('dataCollection.userInfo.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('dataCollection.userInfo.rewards')}</li>
                    <li>{t('dataCollection.userInfo.account')}</li>
                    <li>{t('dataCollection.userInfo.contact')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('dataCollection.autoInfo.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('dataCollection.autoInfo.usage')}</li>
                    <li>{t('dataCollection.autoInfo.statistics')}</li>
                    <li>{t('dataCollection.autoInfo.crash')}</li>
                    <li>{t('dataCollection.autoInfo.rewards')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Use */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('dataUse.title')}</h3>
              <p className="text-white mb-4">
                {t('dataUse.content')}
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('dataSharing.title')}</h3>
              <p className="text-white mb-4">
                {t('dataSharing.intro')}
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>{t('dataSharing.providers')}</li>
                <li>{t('dataSharing.legal')}</li>
                <li>{t('dataSharing.rewards')}</li>
              </ul>
              <p className="text-white mt-4">
                {t('dataSharing.noSell')}
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('dataRetention.title')}</h3>
              <p className="text-white mb-4">
                {t('dataRetention.content')}
              </p>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('userRights.title')}</h3>
              <p className="text-white mb-4">
                {t('userRights.content')}{' '}
                <a href="mailto:privacy@ibrowe.com" className="text-primary hover:underline">
                  privacy@ibrowe.com
                </a>.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('security.title')}</h3>
              <p className="text-white mb-4">
                {t('security.content')}
              </p>
            </div>

            {/* Privacy Features */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('privacyFeatures.title')}</h3>
              <p className="text-white mb-4">
                {t('privacyFeatures.content')}
              </p>
            </div>

            {/* Privacy Settings */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('privacySettings.title')}</h3>
              <p className="text-white mb-4">
                {t('privacySettings.content')}
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.title')}</h3>
              <p className="text-white mb-4">
                {t('contact.content')}{' '}
                <a href="mailto:privacy@ibrowe.com" className="text-primary hover:underline">
                  privacy@ibrowe.com
                </a>.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('policyUpdates.title')}</h3>
              <p className="text-white mb-4">
                {t('policyUpdates.content')}
              </p>
            </div>

            {/* User Rights Details */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">{t('privacyCommitment.title')}</h3>
              <p className="text-white mb-6">
                {t('privacyCommitment.content')}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.informed.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.informed.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.access.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.access.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.erasure.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.erasure.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.rectification.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.rectification.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.restrict.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.restrict.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.object.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.object.content')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('privacyCommitment.rights.portability.title')}</h4>
                  <p className="text-white">{t('privacyCommitment.rights.portability.content')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 