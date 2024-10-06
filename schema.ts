import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const plantsTable = pgTable("plants_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertPlant = typeof plantsTable.$inferInsert;
export type SelectPlant = typeof plantsTable.$inferSelect;
