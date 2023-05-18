import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { cookies, draftMode } from "next/headers";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { PageQuery, PageSchema } from "./query";
import PageCompoment from "./component";
import Preview from "./preview";
import PreviewSuspense from "./preview-suspense";
import PreviewPageCompoment from "./preview-component";

// export const dynamicParams = false;

const clientFetch = cache(client.fetch.bind(client));

export async function generateStaticParams() {
  const SlugsGroq = groq`*[_type == 'page']{
    "slug": string::split(slug.current,"/")
  }`;

  return await clientFetch(SlugsGroq);
}

export default async function Home({ params }: { params: { slug: string[] | undefined } }) {
  const slug = params?.slug?.join("/");
  const isDraft = draftMode().isEnabled;
  const token = cookies().get("token")?.value ?? "";

  if (!isDraft) {
    const data = await clientFetch(PageQuery, { slug: slug ?? null });
    if (!data) return notFound();
    const parsedData = PageSchema.parse(data);
    return <PageCompoment {...parsedData} />;
  }

  if (!token) return <div>Not Authenticated</div>;

  return (
    <PreviewSuspense fallback="Loading...">
      <Preview params={{ slug }} Component={PreviewPageCompoment} query={PageQuery} token={token}></Preview>
    </PreviewSuspense>
  );
}
