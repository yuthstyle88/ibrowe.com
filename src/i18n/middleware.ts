import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
  defaultLocale: 'en'
});

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  const url = request.nextUrl.clone();

  // Only rewrite path before locale is added
  if (subdomain === 'support') {
    // Force prefix locale manually here
    const pathname = url.pathname === '/' ? '' : url.pathname;
    url.pathname = `/en/support${pathname}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
