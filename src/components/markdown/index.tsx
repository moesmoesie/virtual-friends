import React from "react";
import MD from "markdown-to-jsx";
import { GradientText } from "../gradient-text/gradient-text";
export interface MarkdownType {
  children: string;
}

export const Markdown: React.FC<MarkdownType> = (props) => {
  return (
    <div className="prose prose-2xl prose-h2:headline-2 prose-p:body-1 prose-li:body-1 prose-h3:headline-4 prose-h4:headline-5 prose-h5:headline-6">
      <MD
        options={{
          overrides: {
            GradientText: {
              component: GradientText,
            },
          },
        }}
      >
        {props.children}
      </MD>
    </div>
  );
};
