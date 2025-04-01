import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { entryRoutes, privateRoutes } from "./paths";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const url = "http://localhost:3000"
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isEntryRoute = entryRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) {
    return;
  }

  if (isEntryRoute && isLoggedIn) {
    return Response.redirect(`${url}/admin`)
  }

  if (isEntryRoute && !isLoggedIn) {
    return;
  }

  if (isPrivateRoute && !isLoggedIn) {
    return Response.redirect(`${url}/login`)
  }


});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};