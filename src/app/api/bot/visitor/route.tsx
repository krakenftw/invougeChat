import { prismaClient } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, botId } = await request.json();
  if (!name || !email || !botId) {
    return NextResponse.json({ status: 300, error: "All fields required." });
  }
  await prismaClient.visitor.create({ data: { name, email, botId } });
  return NextResponse.json({ status: 200 });
}
