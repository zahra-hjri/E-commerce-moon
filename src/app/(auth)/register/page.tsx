"use client";
import { useState } from "react";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { toast } from "sonner";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(" send OTP successful 🎉");
      } else {
        toast.error(data.message || "Error in send OTP");
      }
    } catch (err) {
      toast.error("network error");
      console.log(err)
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
