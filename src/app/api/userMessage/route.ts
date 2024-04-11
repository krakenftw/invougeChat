import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PromptTemplate } from "@langchain/core/prompts";
import { templates } from "../../../lib/templates";
import { ChatOpenAI } from "@langchain/openai";
import { LLMChain } from "langchain/chains";
import { similaritySearch } from "@/lib/pgVectorStore";

export async function POST(req: Request) {
  const { query, userId } = await req.json();
  if (!query || !userId) {
    return NextResponse.json({ error: "All fields Required" });
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

  const docs = await similaritySearch(userId, query);

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
