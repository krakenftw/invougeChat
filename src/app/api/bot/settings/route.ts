import { prismaClient } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { botId }: { botId: number } = await request?.json();
    if (!botId) {
      return NextResponse.json({ status: 401, error: "Bot ID required" });
    }
    const botSettings = await prismaClient.bot.findFirst({
      where: { id: botId },
    });
    if (!botSettings) {
      return NextResponse.json({ status: 401, error: "Wrong Bot Id" });
    }

    return NextResponse.json({ data: botSettings });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
}
