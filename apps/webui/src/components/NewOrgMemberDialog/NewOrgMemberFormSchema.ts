import * as z from "zod";
import {InferType} from "prop-types";

export const newOrgMemberFormSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}).max(50),
    phone: z.string().min(10, {message: "Phone number is required"}).max(12, {message: "Please enter a valid phone number"}),
    email: z.string().email({message: "Please enter a valid email address"}),
    role: z.enum(["ADMIN", "SUPERVISOR", "CREW_MEMBER"], {
        errorMap: (issue, _ctx) => {
            return {
                message: "Please select a role",
            }
        }
    }),
})

export type NewOrgMemberFormType = InferType<typeof newOrgMemberFormSchema>;
