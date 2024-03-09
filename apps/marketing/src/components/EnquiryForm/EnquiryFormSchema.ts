import * as z from "zod";
import {InferType} from "prop-types";

export const enquiryFormSchema = z.object({
    email: z.string().email({message: "Please enter a valid email address"}),
    name: z.string().min(2, {message: "Please enter your full name"}),
    phone: z.string().min(10, {message: "Please enter a valid phone number"}),
    company: z.string().optional(),
    message: z.string().optional(),
    product: z.string().optional(),
})

export type EnquiryFormType = InferType<typeof enquiryFormSchema>;
