import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

// User Table
export const userInfo = pgTable("userInfo", {
  id: serial("id").primaryKey(),  // ✅ Auto-incrementing integer ID
  clerkId: text("clerkId").unique().notNull(),  // ✅ Store Clerk's ID separately
  email: text("email").unique().notNull(),  
  username: text("username").notNull(),
});

// Todos Table
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  isCompleted: boolean("isCompleted").default(false).notNull(),
  createdBy: text("createdBy").references(() => userInfo.email).notNull(), // ✅ Store email instead of ID
});



// Relations
export const userRelations = relations(userInfo, ({ many }) => ({
  todos: many(todos),
}));

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(userInfo, {
    fields: [todos.createdBy],
    references: [userInfo.id],
  }),
}));
