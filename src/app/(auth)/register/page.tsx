"use client";
import { useState } from "react";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[50%] mt-10 mx-auto">
        <Input
          className="border"
          type="text"
          placeholder="شماره موبایل رو وارد کن"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button className="mt-4 w-full">ارسال کد otp</Button>
      </form>
    </div>
  );
};

export default Register;
