import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { LLMChain } from "langchain/chains";
import { similaritySearch } from "@/lib/pgVectorStore";
import { templates } from "@/lib/templates";
import { prismaClient } from "@/lib/db";

export async function POST(req: Request) {
  const { query, botId } = await req.json();
  if (!query || !botId) {
    return NextResponse.json({ error: "All fields Required" });
  }
  const dataPresent = await prismaClient.bot.findFirst({
    where: { id: botId },
  });
  if (!dataPresent) {
    return NextResponse.json({ status: 400, error: "Bot not registered" });
  }

  const promptTemplate = new PromptTemplate({
    template: templates.qaTemplate,
    inputVariables: ["summaries", "question"],
  });

  const chat = new ChatOpenAI({
    streaming: true,
    verbose: true,
    modelName: "gpt-3.5-turbo",
  });

  const chain = new LLMChain({
    prompt: promptTemplate,
    llm: chat,
  });

  const docs = await similaritySearch(botId, query);

  if (!docs) {
    return NextResponse.json({ error: "No data found" });
  }

  const singleN = await Promise.all(
    docs.map((each: any) => {
      return each.pageContent;
    }),
  );

  const links = Array.from(new Set(docs.map((each: any) => each.metadata.url)));

  const ans = await chain.invoke({
    summaries: singleN,
    question: query,
  });
  return NextResponse.json({ answer: ans, links });
}
