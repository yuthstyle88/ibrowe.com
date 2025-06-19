'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TermsOfUse() {
  const t = useTranslations('TermsOfUse');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-28"
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
                src="/images/3d-icon-design-ibrowe-browser-logo-head-robot-dog.png"
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

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('acceptance.title')}</h3>
              <p className="text-white mb-4">
                {t('acceptance.content')}
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('modifications.title')}</h3>
              <p className="text-white mb-4">
                {t('modifications.content')}
              </p>
            </div>

            {/* Other Policies */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('otherPolicies.title')}</h3>
              <p className="text-white mb-4">
                {t('otherPolicies.content')}
              </p>
            </div>

            {/* License Agreement */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('license.title')}</h3>
              <p className="text-white mb-4">
                {t('license.content')}
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>{t('license.openSource')}</li>
                <li>{t('license.rights')}</li>
                <li>{t('license.intellectualProperty')}</li>
                <li>{t('license.termination')}</li>
              </ul>
            </div>

            {/* Rules and Conduct */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('rules.title')}</h3>
              <p className="text-white mb-4">
                {t('rules.content')}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">{t('rules.prohibited.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('rules.prohibited.laws')}</li>
                    <li>{t('rules.prohibited.copyright')}</li>
                    <li>{t('rules.prohibited.harassment')}</li>
                    <li>{t('rules.prohibited.content')}</li>
                    <li>{t('rules.prohibited.spam')}</li>
                    <li>{t('rules.prohibited.viruses')}</li>
                    <li>{t('rules.prohibited.impersonation')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('rules.restrictions.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('rules.restrictions.load')}</li>
                    <li>{t('rules.restrictions.disruption')}</li>
                    <li>{t('rules.restrictions.security')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trademarks and Patents */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('trademarks.title')}</h3>
              <p className="text-white mb-4">
                {t('trademarks.content')}
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('termination.title')}</h3>
              <p className="text-white mb-4">
                {t('termination.content')}
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('disclaimer.title')}</h3>
              <p className="text-white mb-4">
                {t('disclaimer.content')}
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('indemnification.title')}</h3>
              <p className="text-white mb-4">
                {t('indemnification.content')}
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('limitation.title')}</h3>
              <p className="text-white mb-4">
                {t('limitation.content')}
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>{t('limitation.damages')}</li>
                <li>{t('limitation.reliance')}</li>
                <li>{t('limitation.direct')}</li>
              </ul>
            </div>

            {/* Miscellaneous */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('miscellaneous.title')}</h3>
              <p className="text-white mb-4">
                {t('miscellaneous.content')}
              </p>
            </div>

            {/* Copyright Dispute Policy */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-4">{t('copyright.title')}</h3>
              <p className="text-white mb-4">
                {t('copyright.content')}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">{t('copyright.policy.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('copyright.policy.block')}</li>
                    <li>{t('copyright.policy.terminate')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('copyright.procedure.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('copyright.procedure.signature')}</li>
                    <li>{t('copyright.procedure.identification')}</li>
                    <li>{t('copyright.procedure.location')}</li>
                    <li>{t('copyright.procedure.contact')}</li>
                    <li>{t('copyright.procedure.statement')}</li>
                    <li>{t('copyright.procedure.accuracy')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('copyright.response.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('copyright.response.remove')}</li>
                    <li>{t('copyright.response.notify')}</li>
                    <li>{t('copyright.response.terminate')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('copyright.counter.title')}</h4>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>{t('copyright.counter.signature')}</li>
                    <li>{t('copyright.counter.identification')}</li>
                    <li>{t('copyright.counter.statement')}</li>
                    <li>{t('copyright.counter.contact')}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-white mb-2">{t('copyright.contact.title')}</h4>
                <p className="text-white">
                  {t('copyright.contact.address')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 