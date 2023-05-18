import { groq } from "next-sanity";
import z from "zod";

export const Hero1Query = groq`{
    title,
    subtitle,
    _type
  }
`;

export const Hero1Schema = z.object({
  _type: z.literal("hero-1"),
  title: z.string().catch("Title is required"),
  subtitle: z.string().catch("Subtitle is required"),
});
