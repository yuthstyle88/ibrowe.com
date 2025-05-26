"use client";

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocalizedPath } from '@/utils/path'

interface DownloadButtonProps {
  className?: string
  text?: string
  href?: string
}

export default function DownloadButton({ 
  className = '', 
  text,
  href = '/download'
}: DownloadButtonProps) {
  const t = useTranslations('Common')
  const getLocalizedPath = useLocalizedPath()

  return (
    <Link
      href={getLocalizedPath(href)}
      className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-button hover:shadow-hover ${className}`}
    >
      {text || t('downloadButton')}
    </Link>
  )
} 