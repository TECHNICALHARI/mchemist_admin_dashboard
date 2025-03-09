"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string, expiry?: number) {
  const cookieStore = await cookies();
  const maxAge = expiry ?? 60 * 60;

  await cookieStore.set(key, value, {
    path: "/",
    maxAge,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

export async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value || null;
}

export async function removeCookie(key: string) {
  const cookieStore = await cookies();
  await cookieStore.set(key, "", {
    path: "/",
    maxAge: -1,
  });
}
