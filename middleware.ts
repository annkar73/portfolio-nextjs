import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Här anger du vilka språk som stöds
  locales: ['sv', 'en'],
  defaultLocale: 'sv',
  localePrefix: 'always',
});

export const config = {
matcher: ['/:path*'],
};
