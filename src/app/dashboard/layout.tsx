import DeleteBot from "@/components/dashboard/DeleteBot";
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import {
  GearIcon,
  HomeIcon,
  StackIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
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
    <div className="flex flex-grow gap-4">
      <div className="flex justify-between border-[1px] rounded-r-md mb-6 border-border flex-col p-3">
        <div className="flex flex-col gap-3">
          <Link className="w-full" href={"/dashboard"}>
            <Button className="text-md w-full p-6" variant={"default"}>
              <HomeIcon />
            </Button>
          </Link>
          <Link className="w-full" href={"/dashboard/settings"}>
            <Button className="text-md w-full p-6" variant={"outline"}>
              <GearIcon />
            </Button>
          </Link>
          <Link className="w-full" href={"/dashboard/stats"}>
            <Button className="text-md p-6" variant={"outline"}>
              <StackIcon />
            </Button>
          </Link>
        </div>
        <div>
          <DeleteBot />
        </div>
      </div>
      <div className="w-full px-4">{children}</div>
    </div>
  );
}
