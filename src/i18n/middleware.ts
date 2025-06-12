import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
  defaultLocale: 'en'
});

// Add support for subdomain routing
export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Handle "support" subdomain by rewriting to /support
  if (subdomain === 'support') {
    const url = request.nextUrl.clone();
    url.pathname = `/support${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Fallback to intl middleware for other domains/subdomains
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
