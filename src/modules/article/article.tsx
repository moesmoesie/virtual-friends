import Markdown from "markdown-to-jsx";
import React from "react";
import { z } from "zod";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { ModuleZod } from "../../types";

export const Article: React.FC<ArticleType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <Markdown>{props.body}</Markdown>
      </Container>
    </ModuleContainer>
  );
};

export const ArticleZod = ModuleZod.extend({
  _type: z.literal("article"),
  body: z.string().default("Article Content"),
});

export type ArticleType = z.infer<typeof ArticleZod>;
