import { Container } from "../../components";
import { ModuleContainer } from "../../components";
import { ModuleContainerType } from "../../components";
import { Markdown } from "../../components";
import React from "react";

export interface ArticleType extends ModuleContainerType {
  article: string;
}

export const Article: React.FC<ArticleType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <Markdown>{props.article}</Markdown>
      </Container>
    </ModuleContainer>
  );
};
