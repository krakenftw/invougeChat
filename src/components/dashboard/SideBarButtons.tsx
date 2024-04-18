"use client";
import { Button } from "../ui/button";
import { GearIcon, HomeIcon, StackIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarButtons() {
  const pathname = usePathname();
  const currPage = pathname.split("/")[2];
  return (
    <div className="flex flex-col gap-3">
      <Link className="w-full" href={"/dashboard"}>
        <Button
          className="text-md w-full p-6"
          variant={currPage == undefined ? "default" : "outline"}
        >
          <HomeIcon />
        </Button>
      </Link>
      <Link className="w-full" href={"/dashboard/settings"}>
        <Button
          className="text-md w-full p-6"
          variant={currPage == "settings" ? "default" : "outline"}
        >
          <GearIcon />
        </Button>
      </Link>
      <Link className="w-full" href={"/dashboard/stats"}>
        <Button
          className="text-md p-6"
          variant={currPage == "stats" ? "default" : "outline"}
        >
          <StackIcon />
        </Button>
      </Link>
    </div>
  );
}
