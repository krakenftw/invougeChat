import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { Visitor } from "@prisma/client";
import { LineChart, Line } from "recharts";

export default async function Stats() {
  const { user } = await validateRequest();
  if (!user) {
    return;
  }
  const bot = await prismaClient.bot.findFirst({ where: { userId: user.id } });
  if (!bot) {
    return;
  }

  const visitors = await prismaClient.visitor.findMany({
    where: { botId: bot.id },
  });
  console.log("data", visitors);

  return (
    <div className="flex flex-col gap-4">
      <div className="border-[1px] border-border p-4 rounded-lg">
        Number of visitors: {visitors.length}
      </div>
      <div className="border-[1px] border-border p-4 rounded-lg">
        <LineChart width={400} height={400} data={visitors}>
          <Line type={"monotone"} data={"createdAt"} stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="border-[1px] border-border p-4 rounded-lg">
        Bot Replies: {bot.botInteractions}
      </div>
    </div>
  );
}
