import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      book: z.object({
        title: z.string(),
        author: z.string(),
        isbn: z.string()
          .transform(value => value.replace(/[-\s]/g, "").toUpperCase())
          .refine(value => /^(?:\d{9}[\dX]|\d{13})$/.test(value), "Use an ISBN-10 or ISBN-13")
          .optional(),
        readDate: z.coerce.date().optional(),
        status: z.enum(["finished", "reading", "abandoned"]).default("finished"),
        rating: z.number().min(0).max(10).optional(),
        stoppedAtPage: z.number().int().positive().optional(),
        cover: z.string().startsWith("/images/books/").optional(),
      }).optional(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
