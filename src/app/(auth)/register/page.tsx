"use client";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/send-otp", {
        phoneNumber,
      });
      console.log("resssss",res)

      toast.success("send OTP successful 🎉");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Error in send OTP");
      } else {
        toast.error("network error");
      }

      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[50%] mt-10 mx-auto">
        <Input
          className="border"
          type="text"
          placeholder="Enter mobile number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button className="mt-4 w-full">send OTP code ...</Button>
      </form>
    </div>
  );
};

export default Register;
