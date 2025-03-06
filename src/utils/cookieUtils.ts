"use server";
import { cookies } from "next/headers";

export async function setCookie(key: string, value: string, expiry?:number) {
  cookies().then((cookieStore) => {
    cookieStore.set(key, value, {
      path: "/",
      maxAge: 60*60,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  });
}
