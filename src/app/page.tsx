import { routing } from '@/i18n/routing';

// With `output: 'export'` there is no server to redirect `/` -> `/<locale>`.
// nginx redirects `/` to `/en/`; this static stub is the no-JS / direct-file
// fallback so the root still forwards to the default locale.
export default function RootPage() {
  const locale = routing.defaultLocale;
  const target = `/${locale}/`;
  return (
    <html lang={locale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={target} />
      </head>
      <body>
        <a href={target}>Continue to iBrowe</a>
      </body>
    </html>
  );
}
