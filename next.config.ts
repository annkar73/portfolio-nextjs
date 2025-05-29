import createNextIntlPlugin from 'next-intl/plugin';

const nextIntlPlugin = createNextIntlPlugin();

const nextConfig = {
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
  },
  // ev. andra konfigar, t.ex. reactStrictMode, etc.
};

export default nextIntlPlugin(nextConfig);
