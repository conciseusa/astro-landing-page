import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().min(1),
      featured: z.number().min(1).optional(),
    }),
});
// url: z.string().url(), changed url above to min(1) string to use relative link
export const collections = {
  showcase,
};
