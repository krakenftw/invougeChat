import { Crawler } from "@/lib/crawler";
import { NextResponse } from "next/server";
import { TokenTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { addUserDocuments } from "@/lib/pgVectorStore";
import { validateRequest } from "@/lib/validateRequest";
import { v4 as uuidv4 } from "uuid";
import { handleDatabaseUpdate } from "@/actions/agent.controller";
import { prismaClient } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { user } = await validateRequest();
    if (!user) {
      return NextResponse.json({ status: 401, error: "Internal Server Error" });
    }
    const {
      websites,
      websiteName,
    }: { websites: string[]; websiteName: string } = await request?.json();
    if (!websites || !websiteName) {
      return NextResponse.json({ error: "All fields required!", status: 402 });
    }
    const alreadyHavingAgent = await prismaClient.agent.findFirst({
      where: { userId: user.id },
    });
    if (alreadyHavingAgent) {
      return NextResponse.json({
        error: "Agent already created!",
        status: 400,
      });
    }
    const crawler = new Crawler(websites, 10, 200);
    await crawler.start();

    const splitter = new TokenTextSplitter({
      encodingName: "gpt2",
      chunkSize: 400,
      chunkOverlap: 80,
    });

    const splittedDocuments = await Promise.all(
      crawler.pages.map(
        (each: { url: string; text: string; title: string }) => {
          const docs = splitter.splitDocuments([
            new Document({
              pageContent: each?.text?.replace("\n", " "),
              metadata: {
                url: each?.url,
                text: truncateStringByBytes(each.text, 36000),
              },
            }),
          ]);
          return docs;
        },
      ),
    );

    const agentData = await handleDatabaseUpdate(user, websiteName);
    addUserDocuments(agentData.id, splittedDocuments.flat());

    return NextResponse.json({
      status: 200,
      data: agentData,
    });
  } catch (err) {
    console.log("Error while handling newModel route", err);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
}

const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
};
