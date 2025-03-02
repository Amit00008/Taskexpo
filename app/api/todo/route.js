import { db } from "@/util/db";
import { todos } from "@/util/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
    try {
      const { content, createdBy } = await req.json();
  
      if (!content || !createdBy) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
      }
  
      // Insert the todo and get the inserted row
      const [newTodo] = await db.insert(todos).values({ content, createdBy }).returning();
  
      return new Response(JSON.stringify(newTodo), { status: 201, headers: { "Content-Type": "application/json" } });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  


// fetch todos

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("userEmail");
  
    if (!userEmail) {
      return Response.json({ error: "User email is required" }, { status: 400 });
    }
  
    const userTodos = await db
      .select()
      .from(todos)
      .where(eq(todos.createdBy, userEmail)); 
  
    return Response.json(userTodos);
  }
  