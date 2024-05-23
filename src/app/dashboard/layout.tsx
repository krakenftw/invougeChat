import DeleteBot from "@/components/dashboard/DeleteBot";
import SidebarButtons from "@/components/dashboard/SideBarButtons";
import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";
import Script from "next/script";

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
      <div className="flex justify-between border-[1px] border-l-0 rounded-r-lg mb-6 border-border flex-col p-3">
        <SidebarButtons />
        <div>
          <DeleteBot user={user} />
        </div>
      </div>
      <div className="w-full px-4">{children}</div>
    </div>
  );
}
