import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Här anger du vilka språk som stöds
  locales: ['sv', 'en'],
  defaultLocale: 'sv',
});

export const config = {
  matcher: [
    // Alla routes du vill matcha på
    '/((?!api|_next|.*\\..*).*)',
  ],
};
