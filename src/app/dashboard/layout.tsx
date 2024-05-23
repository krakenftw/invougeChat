import DeleteBot from "@/components/dashboard/DeleteBot";
import SidebarButtons from "@/components/dashboard/SideBarButtons";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
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
    <div className="flex flex-grow gap-4 flex-col">
      <div className="flex justify-between border rounded-lg border-border flex-row p-3 m-2">
        <SidebarButtons />
        <div>
          <DeleteBot user={user} />
        </div>
      </div>

      <div className="w-full px-4">{children}</div>
    </div>
  );
}
