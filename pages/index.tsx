import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import type { NextPage } from "next";
import { useScreen } from "../lib/hooks";

const HomePage: NextPage<{ story: any; preview: any }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {}, preview);
  const screen = useScreen();

  return (
    <div className="overflow-hidden">
      {/* <PageBlock
        title={story?.content?.title}
        description={story?.content?.description}
        header={<StoryblokComponent blok={story?.content?.header[0]} />}
        footer={<StoryblokComponent blok={story?.content?.footer[0]} />}
      >
        {story.content.body.map((nestedBlok: any) => {
          if (nestedBlok.show.includes(screen)) {
            return (
              <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
            );
          }
          return <div key={nestedBlok._uid} />;
        })}
      </PageBlock> */}
    </div>
  );
};

export async function getStaticProps(context: any) {
  let slug = "home";

  let sbParams = {
    version: "published",
  };

  if (context.preview) {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
    },
    revalidate: 3600,
  };
}

export default HomePage;
