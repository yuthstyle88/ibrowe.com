import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const isProd = process.env.NODE_ENV === 'production';

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localeDetection: true,
  localePrefix: isProd ? 'never' : 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
