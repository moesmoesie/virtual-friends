import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import type { NextPage } from "next";
import { PageBlock } from "../lib/blocks";
import { StoryblokComponent } from "@storyblok/react";
import { useScreen } from "../lib/hooks";

const HomePage: NextPage<{ story: any }> = ({ story }) => {
  const screen = useScreen();
  story = useStoryblokState(story);

  return (
    <div className="overflow-hidden">
      <PageBlock
        header={
          <StoryblokComponent
            blok={story?.content?.header[0]}
            key={story?.content?.header[0]._uid}
          />
        }
        footer={
          <StoryblokComponent
            blok={story?.content?.footer[0]}
            key={story?.content?.footer[0]._uid}
          />
        }
      >
        {story.content.body.map((nestedBlok: any) => {
          if (nestedBlok.responsive && nestedBlok.responsive.includes(screen)) {
            return <></>;
          }
          return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </PageBlock>
    </div>
  );
};

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default HomePage;
