"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db/drizzle";
import { users } from "../db/schema";

export const getUsersData = async () => {
  const data = await db.select().from(users);
  return data;
};

export const addUsers = async (id: number, name: string, phone: number) => {
  await db.insert(users).values({
    id: id,
    name: name,
    phone: phone,
  });
};

export const deleteUser = async (id: number) => {
  await db.delete(users).where(eq(users.id, id));
  revalidatePath("/");
};

export const editUser = async (id: number, name: string, phone: number) => {
  await db
    .update(users)
    .set({
      name: name,
      phone: phone,
    })
    .where(eq(users.id, id));

  revalidatePath("/");
};
