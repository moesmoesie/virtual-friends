import { z } from "zod";
import Head from "next/head";

export const Seo: React.FC<SeoProps> = (props) => {
  return (
    <Head>
      {props.title && <title>{props.title}</title>}
      {props.description && <meta name="description" content={props.description} />}
      {props.keywords && <meta name="keywords" content={props.keywords.join(",")} />}
      {props.dontIndex && <meta name="robots" content="noindex" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const SeoZod = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  dontIndex: z.boolean().optional(),
});

export type SeoProps = z.infer<typeof SeoZod>;
