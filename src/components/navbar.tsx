"use client";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import LogoDark from "../../public/Logo_Dark.svg";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center">
      <div className="gap-80 w-fit mx-10 my-5 rounded-full border-[1px] border-primary shadow-lg px-2 py-1 grid grid-flow-col grid-cols-3 auto-cols-max justify-between items-center">
        <div className=" ">
          <Image
            alt="InvougeChat"
            width={"50"}
            height="50"
            src={theme == "light" ? Logo : LogoDark}
          />
        </div>
        <div>
          <Button variant={"secondary"} className=" shadow-md">
            Dashboard
          </Button>
        </div>
        <div className="flex gap-4">
          {/* <SignedIn>
            <div className='flex gap-4 items-center'>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link href={"/login"}>
              <Button>Sign In</Button>
            </Link>
          </SignedOut> */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
