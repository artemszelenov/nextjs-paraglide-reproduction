import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { serverMiddleware } from './paraglide/runtime'

export async function middleware(request: NextRequest) {
  return serverMiddleware(request, ({ request, locale }) => {
    request.headers.set('x-paraglide-locale', locale)
    request.headers.set('x-paraglide-request-url', request.url)
    const response = NextResponse.rewrite(request.url, request)
    return response
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|favicon.png|admin).*)'],
}
