import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log(`requestttt`, request.url);

  const item = new URL(request.url).searchParams.get("item");

  return NextResponse.json({ item });
}
