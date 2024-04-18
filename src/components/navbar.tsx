"use client";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import LogoDark from "../../public/Logo_Dark.svg";
import { useTheme } from "next-themes";
import UserInfo from "./userInfo";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Navbar({ userData }: { userData: any }) {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center">
      <div className="gap-80 w-fit mx-10 my-5 rounded-full border-[1px] border-primary shadow-lg px-2 py-1 grid grid-flow-col grid-cols-3 auto-cols-max justify-between items-center">
        <div className=" ">
          <Link href={"/"}>
            <Image
              alt="InvougeChat"
              width={"50"}
              height="50"
              src={theme == "light" ? Logo : LogoDark}
            />
          </Link>
        </div>
        <div>
          <Link href={userData ? "/dashboard" : "/login"}>
            <Button variant={"secondary"} className=" shadow-md">
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
