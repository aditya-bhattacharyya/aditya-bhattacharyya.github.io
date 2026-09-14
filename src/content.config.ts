import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/BlogPosts",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // Handles both YAML dates and date strings
    excerpt: z.string(),
    tags: z.array(z.string()).default([]), // Defaults to [] if omitted
  }),
});

export const collections = { blog };
