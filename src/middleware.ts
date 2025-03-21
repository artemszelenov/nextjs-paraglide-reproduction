import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { paraglideMiddleware } from "./paraglide/server";

export async function middleware(request: NextRequest) {
  return paraglideMiddleware(request, ({ request, locale }) => {
    console.log("Middleware locale:", locale);
    request.headers.set("x-paraglide-locale", locale);
    request.headers.set("x-paraglide-request-url", request.url);
    return NextResponse.rewrite(request.url, request);
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|admin).*)",
  ],
};
