"use client";
import { lucia } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPass: "",
    name: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.password != formData.confirmPass) {
      toast({
        title: "Registration Failed",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    const response = await axios.post("/api/user/register", { formData });
    if (response.data.error) {
      toast({
        title: "Registration Failed",
        description: response.data.error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registered Successfully",
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
      <h1 className="text-xl my-4 font-bold">Register</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Input
            onChange={handleChange}
            required
            name="name"
            id="name"
            value={formData.name}
          />
        </div>

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
        <div>
          <label htmlFor="confpass">Confirm Password</label>
          <Input
            type="confpass"
            onChange={handleChange}
            required
            name="confirmPass"
            id="confpass"
            value={formData.confirmPass}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Register;
