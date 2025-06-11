const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
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
};
 
module.exports = withNextIntl(nextConfig);