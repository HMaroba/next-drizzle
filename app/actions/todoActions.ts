"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db/drizzle";
import { todo } from "../db/schema";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (
  id: number,
  title: string,
  description: string
) => {
  await db.insert(todo).values({
    id: id,
    title: title,
    description: description,
  });
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (
  id: number,
  title: string,
  description: string
) => {
  await db
    .update(todo)
    .set({
      title: title,
      description: description,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
