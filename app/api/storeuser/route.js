import { db } from "@/util/db";
import { userInfo } from "@/util/schema";

export async function POST(req) {
  try {
    const { id: clerkId, email, username } = await req.json();

    // Insert or update user
    await db.insert(userInfo)
      .values({ clerkId, email, username })
      .onConflictDoUpdate({ 
        target: userInfo.clerkId, 
        set: { email, username } 
      });

    return new Response("User stored successfully", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
