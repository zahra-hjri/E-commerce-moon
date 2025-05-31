import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    return NextResponse.json({ valid: true, data: decoded });
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { valid: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
