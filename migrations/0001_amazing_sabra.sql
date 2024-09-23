ALTER TABLE "todo" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "todo" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "todo" DROP COLUMN IF EXISTS "text";