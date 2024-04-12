"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl my-4 font-bold">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            type="password"
            onChange={handleChange}
            required
            name="password"
            id="password"
            value={formData.password}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
export default Login;
