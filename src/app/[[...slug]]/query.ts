import { Hero1Query, Hero1Schema } from "@/sections/hero-1/schema";
import z from "zod";

const getDraftModifier = `
    | score(_id in path("drafts.**"))
    | order(_score desc)[0]
`;

const getContentQuery = (queries: { name: string; query: string }[]) => {
  return `
    content[] -> {
        ${queries.map((q) => `_type == "${q.name}" => ${q.query}`).join(",")}
    }
  `;
};

export const PageQuery = `
*[_type == 'page' && slug.current  == $slug]{
    "content" : ${getContentQuery([
      {
        name: "hero-1",
        query: Hero1Query,
      },
    ])}
}[0]`;

export const PageSchema = z.object({
  content: z.array(z.union([Hero1Schema, Hero1Schema])),
});

export type PageProps = z.infer<typeof PageSchema>;
