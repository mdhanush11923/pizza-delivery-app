import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, entryRoutes, privateRoutes } from "./paths";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const baseUrl = nextUrl.origin;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isEntryRoute = entryRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.startsWith("/api");

  if (isApiRoute) {
    return;
  }

  if (isEntryRoute && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, baseUrl));
  }

  if (isEntryRoute && !isLoggedIn) {
    return;
  }

  if (isPrivateRoute && !isLoggedIn) {
    return Response.redirect(new URL("/login", baseUrl));
  }


});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};