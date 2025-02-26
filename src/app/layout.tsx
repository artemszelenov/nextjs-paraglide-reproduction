import "./globals.css";
import {
  assertIsLocale,
  baseLocale,
  getLocale,
  type Locale,
  overwriteGetLocale,
  overwriteGetUrlOrigin,
} from '@/paraglide/runtime.js'
import { headers } from 'next/headers'
import { cache } from 'react'
import {Nav} from './Nav'

const ssrLocale = cache(() => ({ locale: baseLocale, origin: 'http://fallback.com' }))

// overwrite the getLocale function to use the locale from the request
overwriteGetLocale(() => assertIsLocale(ssrLocale().locale))
overwriteGetUrlOrigin(() => ssrLocale().origin)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = headers()

  // @ts-expect-error - headers must be sync
  ssrLocale().locale = h.get('x-paraglide-locale') as Locale
  // @ts-expect-error - headers must be sync
  ssrLocale().origin = new URL(h.get('x-paraglide-request-url')).origin

  const lang = getLocale()

  return (
    <html lang={lang}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
