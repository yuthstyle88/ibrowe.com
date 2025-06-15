import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
  defaultLocale: 'en'
});

// Add support for domain routing
export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const currentHost = hostname.replace(/:\d+$/, '');
  const pathname = request.nextUrl.pathname;

  // Handle support domain
  if (currentHost === 'support.ibrowe.com') {
    // The rewrite in next.config.js will handle the /support/en prefix
    // We just need to ensure we're not on an invalid path
    if (!pathname.startsWith('/support/en')) {
      return NextResponse.redirect(new URL('/support/en', request.url));
    }
    return NextResponse.next();
  }

  // Handle marketing domain
  if (currentHost === 'marketing.ibrowe.com') {
    // The rewrite in next.config.js will handle the /marketing/en prefix
    // We just need to ensure we're not on an invalid path
    if (!pathname.startsWith('/marketing/en')) {
      return NextResponse.redirect(new URL('/marketing/en', request.url));
    }
    return NextResponse.next();
  }

  // Handle main domain (ibrowe.com)
  if (currentHost === 'ibrowe.com' || currentHost === 'www.ibrowe.com') {
    // Redirect support and marketing paths to their respective domains
    if (pathname.startsWith('/support')) {
      return NextResponse.redirect(new URL(pathname, 'https://support.ibrowe.com'));
    }
    if (pathname.startsWith('/marketing')) {
      return NextResponse.redirect(new URL(pathname, 'https://marketing.ibrowe.com'));
    }
  }

  // Apply internationalization middleware for all other cases
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except:
    // - api
    // - _next
    // - static files (e.g. .png, .jpg, .css, .js)
    // - vercel
    // - favicon.ico
    '/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?)$).*)',
  ],
};

