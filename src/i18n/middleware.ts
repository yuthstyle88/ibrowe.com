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

  // Clone URL to mutate pathname
  const url = request.nextUrl.clone();

  // 💡 Skip static files (already handled in matcher below)
  if (url.pathname.includes('.') || url.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // ✨ Rewrite for support.ibrowe.com to /support/*
  if (subdomain === 'support') {
    url.pathname = `/support${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // 🌐 Fallback to default locale-based routing
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match everything except _next, api, static assets
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
