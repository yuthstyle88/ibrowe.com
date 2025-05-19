const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ตรวจสอบว่าอยู่ใน development mode หรือไม่
    async redirects() {
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/',
                    destination: '/th',
                    permanent: false,
                }
            ];
        } else {
            return [
                {
                    source: '/',
                    destination: 'https://th.ibrowe.com',
                    permanent: false,
                }
            ];
        }
    },
    // ใช้ domains เฉพาะใน production
    ...(process.env.NODE_ENV === 'production' && {
        domains: [
            {
                domain: 'th.ibrowe.com',
                defaultLocale: 'th'
            },
            {
                domain: 'en.ibrowe.com',
                defaultLocale: 'en'
            },
            {
                domain: 'vi.ibrowe.com',
                defaultLocale: 'vi'
            }
        ]
    })
};

module.exports = withNextIntl(nextConfig);