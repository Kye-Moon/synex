import * as z from "zod";

export const personalInformationFormSchema = z.object({
	name: z.string().min(1, { message: "First name is required" }).max(50),
	email: z.string().email({ message: "Invalid email address" }),
	phone: z.string().min(1, { message: "Phone number is required" }).max(50),
});
