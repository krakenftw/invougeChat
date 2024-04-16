import BotSettingsUpdate from "@/components/BotSettingsUpdate";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";

export default async function Settings() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  const data = await prismaClient.bot.findFirst({
    where: { userId: user.id },
  });
  console.log(data);
  if (!data) {
    return redirect("/agent-setup");
  }
  return <BotSettingsUpdate data={data} />;
}
