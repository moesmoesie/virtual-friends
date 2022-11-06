import { Container } from "../../components";
import { ModuleContainer } from "../../components";
import { Markdown } from "../../components";
import React from "react";
import { z } from "zod";
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
  body: z.string(),
});

export type ArticleType = z.infer<typeof ArticleZod>;
