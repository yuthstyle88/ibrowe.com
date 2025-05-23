import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocalizedPath } from '@/utils/path';

interface DownloadCTAProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function DownloadCTA({ className = '', variant = 'primary' }: DownloadCTAProps) {
  const t = useTranslations('DownloadCTA');
  const getLocalizedPath = useLocalizedPath();

  const buttonClasses = {
    primary: 'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-button hover:shadow-hover',
    secondary: 'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200'
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
      <Link 
        href={getLocalizedPath('/download')} 
        className={buttonClasses[variant]}
      >
        {t('downloadButton')}
      </Link>
    </div>
  );
} 