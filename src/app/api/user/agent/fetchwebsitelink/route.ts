import { Crawler } from "@/lib/crawler";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { urls } = await request?.json();
  if (!urls) {
    return NextResponse.json({
      error: { status: 400, error: "all fields required" },
    });
  }
  const crawler = new Crawler(urls, 9, 200);
  await crawler.start();
  return NextResponse.json({ links: crawler.urls });
}
