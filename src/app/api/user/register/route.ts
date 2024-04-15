import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { lucia } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { prismaClient } from "@/lib/db";

export async function POST(request: Request) {
  const { formData } = await request?.json();
  if (!formData || !formData.name || !formData.email || !formData.password) {
    return NextResponse.json({ error: "All fields required", status: 300 });
  }
  const alreadyPresent = await client.user.findFirst({
    where: { email: formData.email },
  });
  if (alreadyPresent) {
    return NextResponse.json({
      status: 300,
      error: "Account with that email already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(formData.password, 10);
  const id = await uuidv4();

  const data = await prismaClient.user.create({
    data: {
      id,
      name: formData.name,
      email: formData.email,
      password: hashedPassword,
    },
  });

  const session = await lucia.createSession(data.id, {
    email: data.email,
    name: data.name,
  });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/");
}
