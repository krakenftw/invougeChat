import { validateRequest } from "@/lib/validateRequest";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  return <h1>Test</h1>;
}
