import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',  // ensures /en is always added
  defaultLocale: 'en'
});

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];
  const url = request.nextUrl.clone();

  // 1. Support subdomain: rewrite to /support/en/... only if needed
  if (subdomain === 'support') {
    // If already prefixed with /support/en, skip
    if (!url.pathname.startsWith('/support/en')) {
      const restPath = url.pathname === '/' ? '' : url.pathname;
      url.pathname = `/support/en${restPath}`;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  // 2. All other domains go through intlMiddleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']  // Avoid matching assets and internal paths
};
