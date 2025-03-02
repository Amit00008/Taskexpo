import { db } from "@/util/db";
import { todos } from "@/util/schema";
import { eq } from "drizzle-orm";


// mark as Complete 
export async function PATCH(req, { params }) {
    try {
      const { id } = params;
      const { isCompleted } = await req.json();
  
      await db.update(todos)
        .set({ isCompleted })
        .where(eq(todos.id,
          id
        ));
  
      return new Response(JSON.stringify({ message: "Todo updated successfully" }), { status: 200 });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  

// delete todo
export async function DELETE(req, { params }) {
    try {
      const { id } = params;
  
      await db.delete(todos).where(eq(todos.id, id));
  
      return new Response(JSON.stringify({ message: "Todo deleted successfully" }), { status: 200 });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }

  
  