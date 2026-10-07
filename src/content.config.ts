import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/case-studies",
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.enum(["design", "development"]),
            readDuration: z.number().int().positive(),
            description: z.string(),
            logo: image(),
            role: z.string(),
            industry: z.string(),
            status: z.string(),
            tools: z.string(),
            gallery: z.array(image()).default([]),
            order: z.number().int().default(0),
            draft: z.boolean().default(false),
        }),
});

export const collections = { caseStudies };
