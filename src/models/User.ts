// models/User.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const gusetOTPSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    OTPCode: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// پاک شدن خودکار OTP بعد از 5 دقیقه (300 ثانیه)
gusetOTPSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const GusetOTPModel =
  mongoose.models.GusetOTP || mongoose.model("GusetOTP", gusetOTPSchema);
