import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import type { NextPage } from "next";
import { PageBlock } from "../lib/blocks";
import { StoryblokComponent } from "@storyblok/react";

const HomePage: NextPage<{ story: any; preview: boolean }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {}, preview);

  return (
    <div className="overflow-hidden">
      <PageBlock
        title={story?.content?.title}
        description={story?.content?.description}
        header={<StoryblokComponent blok={story?.content?.header[0]} />}
        footer={<StoryblokComponent blok={story?.content?.footer[0]} />}
      >
        {story.content.body.map((nestedBlok: any) => {
          return (
            <div
              key={nestedBlok._uid}
              className={` 
                ${nestedBlok.show.includes("small") ? "block" : "hidden"}
                ${
                  nestedBlok.show.includes("medium")
                    ? "medium:block"
                    : "medium:hidden"
                }
                ${
                  nestedBlok.show.includes("large")
                    ? "large:block"
                    : "large:hidden"
                }
              `}
            >
              <StoryblokComponent blok={nestedBlok} />
            </div>
          );
        })}
      </PageBlock>
    </div>
  );
};

export async function getStaticProps(context: any) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  const preview = context?.preview ? true : false;

  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: preview ? "draft" : "published",
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview,
    },
  };
}

export default HomePage;
