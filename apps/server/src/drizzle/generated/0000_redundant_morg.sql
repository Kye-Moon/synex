CREATE TABLE IF NOT EXISTS "organisation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid
        () NOT NULL,
	"auth_service_id" text NOT NULL,
	"customer_id" text,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid
        () NOT NULL,
	"external_id" text NOT NULL,
	"organisation_id" uuid,
	"external_product_id" text,
	"external_price_id" text,
	"status" varchar(20) NOT NULL,
	"next_payment_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid
        () NOT NULL,
	"auth_service_id" text NOT NULL,
	"first_name" text,
	"last_name" text,
	"phone" varchar(20),
	"email" varchar(100),
	"organisation_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
