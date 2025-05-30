"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";

const VerifyOtp = ({ phoneNumber }: { phoneNumber: string }) => {
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/verify-otp", {
        phoneNumber,
        otpCode,
      });

      const { token } = res.data;

      // ذخیره توکن (مثلاً تو localStorage)
      localStorage.setItem("token", token);

      toast.success("ورود موفقیت‌آمیز بود 🎉");

      // هدایت به صفحه اصلی
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "کد نادرست یا منقضی شده");
      } else {
        toast.error("خطای شبکه!");
      }
    }
  };

  return (
    <form
      onSubmit={handleVerify}
      className="w-[50%] mx-auto mt-10 p-4 border rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">کد ارسال‌شده را وارد کنید</h2>

      <Input
        type="text"
        placeholder="کد OTP"
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
        className="mb-4"
      />

      <Button type="submit" className="w-full">
        تأیید کد
      </Button>
    </form>
  );
};

export default VerifyOtp;
