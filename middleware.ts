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
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Låt Next hantera interna requests och språk-prefix
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
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
