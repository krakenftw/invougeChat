import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-4xl  p-10 font-bold">
        <h1>Account Settings</h1>
      </div>
      <Separator />
      <div className="flex gap-10 p-10 ">
        <div className="w-[250px] flex gap-3  flex-col items-center justify-center">
          <Button className="w-full" variant={"ghost"}>
            General
          </Button>{" "}
          <Button className="w-full" variant={"ghost"}>
            General
          </Button>
        </div>
        <div> {children}</div>
      </div>
    </div>
  );
}
