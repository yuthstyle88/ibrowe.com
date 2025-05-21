import { useLocale } from 'next-intl'

export const getLocalizedPath = (path: string, locale?: string) => {
  if (locale) {
    return `/${locale}${path}`
  }
  return path
}

export const useLocalizedPath = () => {
  const locale = useLocale()
  return (path: string) => getLocalizedPath(path, locale)
} 