// lib/i18n.ts
import { useLocale } from 'next-intl'

const MAIN_HOST = process.env.NEXT_PUBLIC_MAIN_HOST || 'ibrowe.com'

/**
 * Given a path (e.g. "/about"), and an optional locale,
 * returns either:
 *  - "/en/about"             (on ibrowe.com)
 *  - "https://ibrowe.com/en/about"  (on support.ibrowe.com)
 */
export const getLocalizedPath = (path: string, locale?: string, absolute = false) => {
  const localePath = locale ? `/${locale}${path}` : path
  if (!absolute) {
    return localePath
  }
  return `https://${MAIN_HOST}${localePath}`
}

/**
 * Hook for your Nav component.
 * On support subdomain, will generate absolute main-site URLs.
 */
export function useLocalizedPath() {
  const locale = useLocale()
  // determine if we're on support subdomain
  let absolute = false
  if (typeof window !== 'undefined') {
    const host = window.location.host // e.g. "support.ibrowe.com"
    absolute = host.startsWith('support.')
  }
  return (path: string) => getLocalizedPath(path, locale, absolute)
}
