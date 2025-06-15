'use client'

import NextLink from 'next/link'
import { useLocalizedPath } from '@/utils/path'
import { getDomainUrl } from '@/utils/url'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink> & {
  isExternal?: boolean
}

export default function Link({ href, isExternal = false, ...props }: LinkProps) {
  const getLocalizedPath = useLocalizedPath()
  
  // If it's an external link or already a full URL, use it as is
  if (isExternal || typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'))) {
    return <NextLink href={href} {...props} />
  }

  // For internal links, apply domain and localization
  const localizedHref = getLocalizedPath(href as string)
  const domainUrl = getDomainUrl(localizedHref)
  
  return <NextLink href={domainUrl} {...props} />
} 