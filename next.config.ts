import createNextIntlPlugin from 'next-intl/plugin';

const nextIntlPlugin = createNextIntlPlugin();

const nextConfig: object = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Enable server actions
  }
};

export default nextIntlPlugin(nextConfig);
