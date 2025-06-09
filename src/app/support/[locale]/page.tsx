'use client';

import { useTranslations } from 'next-intl';

export default function SupportHome() {
    const t = useTranslations('Support');

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p>{t('description')}</p>
        </main>
    );
}
