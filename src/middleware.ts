import createMiddleware from 'next-intl/middleware';

import { NextRequest, NextResponse } from 'next/server';

const defaultLocale = 'en';
const supportedLocales = ['en', 'ru'];

const localeRegex = new RegExp(`^/(${supportedLocales.join('|')})(/|$)`);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/static')) {
    return NextResponse.next();
  }
  const hasValidLocale = localeRegex.test(pathname);
  if (!hasValidLocale) {
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '');
    const newUrl = new URL(`/${defaultLocale}${pathWithoutLocale}`, req.url);
    return NextResponse.redirect(newUrl);
  }
  return createMiddleware({ locales: supportedLocales, defaultLocale })(req);
}

export const config = {
  matcher: '/:path*',
};
