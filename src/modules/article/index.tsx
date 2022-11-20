import React from "react";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { ArticleType } from "./type";
import { Markdown } from "../../components/markdown";

export const Article: React.FC<ArticleType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <Markdown>{props.body}</Markdown>
      </Container>
    </ModuleContainer>
  );
};
