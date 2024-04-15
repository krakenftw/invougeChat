import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/validateRequest";
import AgentSetupInteractive from "@/components/agentSetupInteractive";
import { useToast } from "@/components/ui/use-toast";
import { prismaClient } from "@/lib/db";

export default async function AgentSetup() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  const agentData = await prismaClient.agent.findFirst({
    where: { userId: user.id },
  });
  if (agentData) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex w-screen">
      <div className="p-5 w-3/5 flex flex-col">
        <h1 className="text-2xl font-bold">Agent Setup</h1>
        <AgentSetupInteractive />
      </div>
      <div className="flex w-2/5">.</div>
    </div>
  );
}
