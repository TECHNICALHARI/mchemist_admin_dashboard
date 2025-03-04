import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const userRole = req.cookies.get("role")?.value;
  const { pathname } = req.nextUrl;

  const isAuthPage = pathname.startsWith("/login");
  const isDashboard = pathname.startsWith("/dashboard");

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const superAdminRoutes = ["/dashboard/products", "/dashboard/users"];
  if (superAdminRoutes.includes(pathname) && userRole !== "superadmin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
