import { NextResponse } from "next/server";
import  dbConnect  from "@/utils/mongodb";
import { GusetOTPModel } from "@/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { phoneNumber, otp } = await req.json();

  if (!phoneNumber || !otp) {
    return NextResponse.json(
      { message: "Phone number and OTP code are required." },
      { status: 400 }
    );
  }

  await dbConnect();

  const record = await GusetOTPModel.findOne({ phoneNumber });

  if (!record) {
    return NextResponse.json({ message: "Phone number not found." }, { status: 404 });
  }

  if (record.OTPCode !== Number(otp)) {
    return NextResponse.json({ message: "Invalid OTP code." }, { status: 401 });
  }

  // ✅ حذف OTP بعد از استفاده
  await GusetOTPModel.deleteOne({ phoneNumber });

  // ✅ ساخت توکن
  const token = signToken({ phoneNumber });

  // ✅ می‌تونی به جای json، توکن رو داخل کوکی هم ست کنی
  return NextResponse.json({
    message: "OTP verified successfully!",
    token,
  });
}
