import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import type { NextPage } from "next";
import { PageBlock } from "../lib/blocks";
import { StoryblokComponent } from "@storyblok/react";
import { useScreen } from "../lib/hooks";

const HomePage: NextPage<{ story: any }> = ({ story }) => {
  story = useStoryblokState(story);
  const screen = useScreen();

  return (
    <div className="overflow-hidden">
      <PageBlock
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
      </PageBlock>
    </div>
  );
};

export async function getStaticProps(context: any) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      preview: context?.preview ?? false,
    },
  };
}

export default HomePage;
