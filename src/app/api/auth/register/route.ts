import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Please fill in all the fields." },
        { status: 400 }
      );
    }

    console.log("A new user has registered:", { username, email });

    return NextResponse.json(
      { message: "Registration was successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "There was an issue with the registration." },
      { status: 500 }
    );
  }
}
