"use client";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import LogoDark from "../../public/Logo_Dark.svg";
import { useTheme } from "next-themes";
import UserInfo from "./userInfo";
import Link from "next/link";

function Navbar({ userData }: { userData: any }) {
  const { theme } = useTheme();
  return (
    <div className="flex w-full overflow-hidden justify-center items-center md:px-4">
      <div className="w-full max-w-screen-lg mx-10 my-5 rounded-full border-[1px] border-primary shadow-lg px-2 py-1 flex  md:flex-row justify-between items-center">
        <div className=" flex items-center justify-center">
          <Link href={"/"}>
            <Image
              alt="InvougeChat"
              width={"50"}
              height="50"
              src={theme == "light" ? Logo : LogoDark}
            />
          </Link>
        </div>
        <div className="hidden md:flex ">
          <Link href={userData ? "/dashboard" : "/login"}>
            <Button variant={"secondary"} className="shadow-md">
              {userData ? "Dashboard" : "Login"}
            </Button>
          </Link>
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
