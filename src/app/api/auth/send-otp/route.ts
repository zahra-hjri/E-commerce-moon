import { NextResponse } from "next/server";
import dbConnect from "@/utils/mongodb";
import { GusetOTPModel } from "@/models/User";
import { randomInt } from "crypto";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const { phoneNumber } = await req.json();
  if (!phoneNumber)
    return NextResponse.json({ message: "Mobile number not entered." }, { status: 400 });

  await dbConnect();

  const otp = randomInt(10000, 99999);

  await GusetOTPModel.findOneAndUpdate(
    { phoneNumber: phoneNumber },
    {
      phoneNumber: phoneNumber,
      OTPCode: otp,
      _id: new mongoose.Types.ObjectId(),
    },
    { upsert: true, new: true }
  );

  console.log("OTP:", otp);

  return NextResponse.json({ message: "code has been send" });
}
