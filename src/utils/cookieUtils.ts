"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string, expiry?: number) {
  const cookieStore = await cookies(); 
  cookieStore.set(key, value, {
    path: "/",
    maxAge: expiry ?? 60 * 60, 
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
