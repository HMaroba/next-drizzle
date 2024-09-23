import { integer, text, boolean, pgTable, } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const users = pgTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
});

export const pets = pgTable("pets", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  ownerId: integer("owner_id")
    .notNull()
    .references(() => users.id),
});
