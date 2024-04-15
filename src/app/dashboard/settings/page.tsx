import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";

export default async function Settings() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  const data = await prismaClient.agent.findFirst({
    where: { userId: user.id },
  });
  if (!data?.bot) {
    redirect("/agent-setup");
  }
  const botId = data.bot.id;
}
