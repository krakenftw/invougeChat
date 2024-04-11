"use client";
import { lucia } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateRequest } from "@/lib/validateRequest";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("/api/user/register", { formData })
      .then((res) => {
        if (!res.data.error) {
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl my-4 font-bold">Register</h1>
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

export default Register;
