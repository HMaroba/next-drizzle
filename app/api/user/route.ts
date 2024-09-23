import { NextRequest, NextResponse } from "next/server";
import { db } from "../../db/drizzle";
import { users } from "../../db/schema";

export async function POST(req: NextRequest) {
  try {
    const { id, name, phone } = await req.json();

    const newUser = await db.insert(users).values({
      id: id,
      name: name,
      phone: phone,
    });

    return NextResponse.json({
      status: 201,
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server error" + error,
    });
  }
}

export async function GET() {
    try {
      const todos = await db.select().from(users);
      return NextResponse.json({
        status: 201,
        users: todos,
      });
    } catch (error) {
      return NextResponse.json({
        message: "Server error" + error,
      });
    }
  }
