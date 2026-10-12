import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    projectId: z.enum(['numpygrad', 'shades-of-sg', 'rollover', 'sgen']),
    description: z.string(),
    intro: z.string(),
    role: z.string(),
    teamContext: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.url({ protocol: /^https$/ }).optional(),
    status: z.enum(['draft', 'published']),
  }),
});

export const collections = { work };
