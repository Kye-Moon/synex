import * as z from "zod";
import {InferType} from "prop-types";

export const newCrewMemberFormSchema = z.object({
	name: z.string().min(1, {message: "Name is required"}).max(50),
	phone: z.string().min(10, {message: "Phone number is required"}).max(10, {message: "Please enter a valid phone number"}),
})

export type NewCrewMemberFormType = InferType<typeof newCrewMemberFormSchema>;
