const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Support domain rewrites
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
        // Marketing domain rewrites
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'marketing.ibrowe.com',
            },
          ],
          destination: '/marketing/en/:path*',
        },
      ],
    };
  },
};
 
module.exports = withNextIntl(nextConfig);