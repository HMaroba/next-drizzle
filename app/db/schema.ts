import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  title: text("text").notNull(),
  description: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
