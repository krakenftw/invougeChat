import { Crawler } from "@/lib/crawler";
import { NextResponse } from "next/server";
import { TokenTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { addUserDocuments } from "@/lib/pgVectorStore";

export async function POST(request: Request) {
  try {
    const { website } = await request?.json();
    const crawler = new Crawler([website], 10, 200);
    await crawler.start();

    const splitter = new TokenTextSplitter({
      encodingName: "gpt2",
      chunkSize: 400,
      chunkOverlap: 80,
    });

    console.log(crawler.pages);

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

    addUserDocuments("a1b2", splittedDocuments.flat());

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log("Error while handling newModel route", err);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
}

const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
};
