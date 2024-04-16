import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  const bot = await prismaClient.bot.findFirst({ where: { userId: user.id } });
  const botCode = `<chatBotInvouge agent-id="${bot.id}"></chatBotInvouge> <script src="bot.js"></script>`;
  return (
    <div>
      <div className="flex flex-col gap-4 border-[1px] border-border p-4">
        <h1>Add Bot to your website</h1>
        <div className="flex items-center gap-4">
          <Input value={botCode} className="p-6 font-mono text-xl" />
          <Button className="rounded-lg p-5">Copy</Button>
        </div>
      </div>
    </div>
  );
}
