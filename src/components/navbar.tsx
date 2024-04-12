"use client";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import LogoDark from "../../public/Logo_Dark.svg";
import { useTheme } from "next-themes";
import UserInfo from "./userInfo";
import { Session } from "lucia";
import { validateRequest } from "@/lib/validateRequest";
import { useRouter } from "next/navigation";

function Navbar({ userData }: { userData: any }) {
  const router = useRouter();
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
          <Button
            onClick={() => {
              router.push(userData ? "/dashboard" : "/login");
            }}
            variant={"secondary"}
            className=" shadow-md"
          >
            {userData ? "Dashboard" : "Login"}
          </Button>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <ThemeToggle />
          {userData && <UserInfo userData={userData} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
