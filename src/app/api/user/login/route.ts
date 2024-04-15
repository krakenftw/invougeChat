import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { lucia } from "@/auth";
import { cookies } from "next/headers";
import { prismaClient } from "@/lib/db";

export async function POST(request: Request) {
  const { formData } = await request?.json();
  if (!formData || !formData.email || !formData.password) {
    return NextResponse.json({ error: "All fields required", status: 300 });
  }
  const userData = await prismaClient.user.findFirst({
    where: { email: formData.email },
  });

  if (!userData) {
    return NextResponse.json({ status: 401, error: "Email not registered" });
  }
  const match = await bcrypt.compare(formData.password, userData.password);
  if (!match) {
    return NextResponse.json({ status: 402, error: "Wrong Password" });
  }
  const session = await lucia.createSession(userData.id, {
    email: userData.email,
    name: userData.name,
  });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return NextResponse.json({ message: "Logged in successfully" });
}
