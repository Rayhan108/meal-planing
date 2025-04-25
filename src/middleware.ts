import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./utils/getCurrentUser";


type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  customer: [/^\/trackOrder/, /^\/orderMeal/,/^\/managePreferences/],
  mealProvider: [/^\/mealMenu/,/^\/viewOrder/,/^\/respondOrder/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();
console.log("from middleware==>",userInfo);
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/orderMeal",
    "/mealMenu",
    "/trackOrder",
    "/viewOrder",
    "/respondOrder",
    "/managePreferences"
  ],
};