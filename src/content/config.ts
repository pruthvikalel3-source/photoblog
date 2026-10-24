import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    location: z.string().optional(),  // omit to keep private; never invent
    camera: z.string().optional(),    // e.g. 'Nikon Z5 · 24-70mm · f/8 · 1/250s'
    preset: z.string().optional(),    // animation override: sunset|forest|water|astro|mountain|macro|city
  }),
});

export const collections = { journal };
