CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"isCompleted" boolean DEFAULT false NOT NULL,
	"createdBy" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "userInfo" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"email" text NOT NULL,
	"username" text NOT NULL,
	CONSTRAINT "userInfo_clerkId_unique" UNIQUE("clerkId"),
	CONSTRAINT "userInfo_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "todos" ADD CONSTRAINT "todos_createdBy_userInfo_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."userInfo"("id") ON DELETE no action ON UPDATE no action;