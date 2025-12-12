const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker standalone build
  output: 'standalone',

  trailingSlash: false,

  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',

  // Keep your original host-based rewrite
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'support.ibrowe.com',
            },
          ],
          destination: '/support/en/:path*',
        },
      ],
    };
  },

  // Security + static file headers
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' }
        ]
      }
    ];
  },
};

module.exports = withNextIntl(nextConfig);
