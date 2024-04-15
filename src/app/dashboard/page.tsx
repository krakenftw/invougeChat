import { prismaClient } from "@/lib/db";
import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }
  const agentData = await prismaClient.agent.findFirst({
    where: { userId: user.id },
  });
  console.log(agentData);
  if (!agentData) {
    redirect("/agent-setup");
  }

  return <h1>Test 12</h1>;
}
