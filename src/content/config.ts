import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // Title of the project
    description: z.string(), // Description of the project
    repository: z.string(), // Repository URL of the project
    url: z.string(), // URL of the project
    date: z.date(), // Date of the project
    published: z.boolean(), // Whether the project is published or not
  }),
});

export const collections = {
  project: projectCollection,
};