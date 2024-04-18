"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { handleDeleteBot } from "@/actions/agent.controller";
import { useRouter } from "next/navigation";

export default function DeleteBot({ user }: { user: any }) {
  const router = useRouter();
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild className="w-full">
          <Button className="w-full" variant={"destructive"}>
            <TrashIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full border-primary">
          <div className="flex p-4 py-10 gap-8 flex-col h-full items-center justify-center w-full">
            <h1 className="text-2xl font-bold">Delete the bot?</h1>
            <h2>Note: Deleting the bot with erase all the data.</h2>
          </div>
          <DrawerFooter className="">
            <Button
              onClick={async () => {
                await handleDeleteBot(user);
                router.push("/");
              }}
            >
              Delete
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
