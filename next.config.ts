// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   i18n: {
//     locales: ['en', 'fr', 'ru'],
//     defaultLocale: 'en',
//   },
//   // i18n: {
//   //   locales: ['en', 'ru'],
//   //   defaultLocale: 'en',
//   //   // localeDetection: true,
//   // },
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
