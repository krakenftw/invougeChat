import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  const bot = await prismaClient.bot.findFirst({ where: { userId: user.id } });
  if (!bot) {
    return redirect("/agent-setup");
  }
  return (
    <div className="flex flex-grow gap-4 p-4">
      <div className="w-1/5 flex gap-4 border-[1px] rounded-lg border-border flex-col p-4">
        <Link className="w-full" href={"/dashboard"}>
          <Button className="rounded-md w-full" variant={"outline"}>
            Bot Info
          </Button>
        </Link>

        <Link className="w-full" href={"/dashboard/settings"}>
          <Button className="rounded-md w-full" variant={"outline"}>
            Bot Settings
          </Button>
        </Link>

        <Link className="w-full" href={"/dashboard/stats"}>
          <Button className="rounded-md w-full" variant={"outline"}>
            Stats
          </Button>
        </Link>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
