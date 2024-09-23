import { NextResponse } from "next/server";
import { db } from "../../db/drizzle";
import { todo } from "../../db/schema";

export async function GET() {
  try {
    const todos = await db.select().from(todo);
    return NextResponse.json({
      status: 201,
      todoList: todos,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server error" + error,
    });
  }
}
