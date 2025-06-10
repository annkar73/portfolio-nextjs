import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

const locales = ['sv', 'en'];
const defaultLocale = 'sv';

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const languages = new Negotiator({ headers }).languages();
  const matched = matchLocale(languages, locales, defaultLocale);
  console.log('Detected locale:', matched); // <-- Viktig logg
  return matched;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  console.log('Redirecting to:', url.pathname); // <-- Viktig logg
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/', '/((?!_next|api|favicon.ico).*)'], // viktig matcher
};
