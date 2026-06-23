import { routing } from '@/i18n/routing';

// Global 404 (404.html in the export). Must be fully static — no getLocale()
// / redirect(), which require a server. Forwards to the default locale home.
export default function RootNotFound() {
  const target = `/${routing.defaultLocale}/`;
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <title>Page not found</title>
      </head>
      <body>
        <p>Page not found.</p>
        <a href={target}>Go to homepage</a>
      </body>
    </html>
  );
}
