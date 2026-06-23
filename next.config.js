const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — no Node server (next-server). Output in ./out is
  // served directly by nginx. This removes the server-side execution surface
  // entirely (the cryptominer RCE was reached through next-server).
  output: 'export',

  // Image Optimization API needs a running server; disable it for export.
  images: {
    unoptimized: true,
  },

  // Trailing slash => each route exports as <route>/index.html, which makes
  // nginx static serving trivial and uniform (try_files $uri $uri/).
  trailingSlash: true,

  // NOTE: rewrites() and headers() are NOT supported with `output: 'export'`.
  // - host rewrite (support.ibrowe.com -> /support/en) is handled per-vhost in nginx
  // - security + cache headers are set in the nginx server block
};

module.exports = withNextIntl(nextConfig);
