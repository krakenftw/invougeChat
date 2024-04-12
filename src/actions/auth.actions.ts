"use server";

import { lucia } from "@/auth";
import { validateRequest } from "@/lib/validateRequest";
import { cookies } from "next/headers";

export const signout = async () => {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};
