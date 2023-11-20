import * as z from "zod";
import { InferType } from "prop-types";

export const variationDetailsSchema = z.object({
    job: z.string().optional(),
    title: z.string().min(1, { message: "Title is required" }).max(50),
    customer: z.string().min(1, { message: "Customer is required" }).max(50),
    description: z.string().min(1, { message: "Description is required" }).max(500),
});

export type VariationDetailsFormType = InferType<typeof variationDetailsSchema>;


export const variationResourcesSchema = z.object({
    estimatedHours: z.string().max(1000).optional().nullable(),
    numPeople: z.string().max(1000).optional().nullable(),
    who: z.string().max(50).optional(),
    materials: z.string().max(500).optional(),
    equipment: z.string().max(500).optional(),
});
export type VariationResourcesFormType = InferType<typeof variationResourcesSchema>;
