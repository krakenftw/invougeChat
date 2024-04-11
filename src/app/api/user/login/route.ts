import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { formData } = await request?.json();
  if (!formData || !formData.email || !formData.password) {
    return NextResponse.json({ error: "All fields required", status: 300 });
  }
  const hashedPassword = bcrypt;

  return NextResponse.json({ tedt: "hi" });
}
