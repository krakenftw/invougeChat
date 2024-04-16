"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export default function DeleteBot() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="w-full">
          <Button className="w-full" variant={"destructive"}>
            <TrashIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>Hi</DrawerContent>
      </Drawer>
    </div>
  );
}
