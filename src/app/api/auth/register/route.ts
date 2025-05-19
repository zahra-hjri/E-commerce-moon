import bcrypt from "bcryptjs";

import User from "@/models/User";
import dbConnect from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();

  const { username, password } = await request.json();

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { message: "user already registered" },
        { status: 401 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password:hashedPassword });
    await newUser.save();
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
    console.log(error);
  }
  return NextResponse.json(
    { message: "user registered successfully" },
    { status: 201 }
  );
}
