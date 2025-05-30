"use client";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { useRouter } from "next/navigation";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/send-otp", {
        phoneNumber,
      });
      console.log("resssss", res);

      toast.success("send OTP successful 🎉");
      setStep(2);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Error in send OTP");
      } else {
        toast.error("network error");
      }

      console.log(err);
    }
  };

  const handleOtpCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/verify-otp", {
        phoneNumber,
        otp,
      });
      console.log(res);
      toast.success("Verified otp ✅");
      const token = res.data.token;

      localStorage.setItem("token", token);

      router.push("/dashboard");
      setStep(3);
    } catch (err) {
      toast.error("OTP code is wrong 😢");
      console.log(err);
    }
  };

  return (
    <div>
      {step === 1 && (
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
      )}
      {step === 2 && (
        <form onSubmit={handleOtpCode} className="w-[50%] mt-10 mx-auto">
          <Input
            className="border"
            type="text"
            placeholder="Enter OTP code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button className="mt-4 w-full bg-orange-600">apply</Button>
        </form>
      )}
      {step === 3 && (
        <div className="w-[50%] mt-10 mx-auto bg-blue-500 text-white flex items-center justify-center p-1">
          yohoooooo 😍
        </div>
      )}
    </div>
  );
};

export default Register;
