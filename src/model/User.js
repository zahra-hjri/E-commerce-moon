import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usename: {
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

module.exports = mongoose.model.User || mongoose.model("User", userSchema)