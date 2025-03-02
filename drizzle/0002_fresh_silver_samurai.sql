ALTER TABLE "todos" DROP CONSTRAINT "todos_createdBy_userInfo_clerkId_fk";
--> statement-breakpoint
ALTER TABLE "todos" ADD CONSTRAINT "todos_createdBy_userInfo_email_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."userInfo"("email") ON DELETE no action ON UPDATE no action;