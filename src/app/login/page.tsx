"use client";

import { Button } from "@/components/ui/button";
import GithubLogo from "../../../public/github-mark-white.svg";
import GoogleLogo from "../../../public/login_with_google.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [showPass, setShowPass] = useState<boolean>(false);
  const router = useRouter();

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post("/api/user/login", { formData });
    if (response.data.error) {
      console.log("error");
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: response.data.error,
      });
    } else {
      toast({
        title: "Successfully Logged in.",
      });
      router.push("/");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <h1 className="text-2xl my-4 font-bold">Welcome back to InvougeChat</h1>
      <div className="min-w-[400px] flex flex-col items-center justify-center">
        <form className="flex w-full   flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              onChange={handleChange}
              required
              name="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              type={showPass ? "text" : "password"}
              onChange={handleChange}
              required
              name="password"
              id="password"
              value={formData.password}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Checkbox
                onClick={() => {
                  showPass ? setShowPass(false) : setShowPass(true);
                  console.log(showPass);
                }}
              />
              <h1>Show Password</h1>
            </div>
            <div>
              <a href="/register">
                <p>Forgot Password?</p>
              </a>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
        <Separator className="my-6 w-4/5" />
        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={() => router.push("/login/github")}
            className="py-6 w-full bg-black text-white flex gap-4 hover:bg-transparent items-center justify-center border-border border-[1px]"
          >
            <Image src={GithubLogo} alt="Githhub Logo" className="w-6" />
            Login With Github
          </Button>
          <Button className="py-6 w-full bg-black hover:bg-transparent text-white flex gap-4 items-center justify-center border-border border-[1px]">
            <Image src={GoogleLogo} alt="Githhub Logo" className="w-6" />
            Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Login;
