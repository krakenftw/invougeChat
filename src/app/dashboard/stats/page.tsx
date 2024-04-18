import VisitorChart from "@/components/dashboard/VisitorChart";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";

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
  return (
    <div className="flex flex-col gap-4">
      <div className="border-[1px] border-border p-4 rounded-lg">
        Number of visitors: {visitors.length}
      </div>
      <VisitorChart />
      <div className="border-[1px] border-border p-4 rounded-lg">
        Bot Replies: {bot.botInteractions}
      </div>
    </div>
  );
}
