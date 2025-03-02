ALTER TABLE "todos" DROP CONSTRAINT "todos_createdBy_userInfo_id_fk";
--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "createdBy" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "todos" ADD CONSTRAINT "todos_createdBy_userInfo_clerkId_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."userInfo"("clerkId") ON DELETE no action ON UPDATE no action;