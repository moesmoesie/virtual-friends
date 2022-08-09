import { ContentBlock } from "../types";

export type step = {
  title: string | JSX.Element;
  body: JSX.Element | string;
  icon: JSX.Element;
};

export interface HowWeWorkBlockProps extends ContentBlock {
  title: string | JSX.Element;
  body: string | JSX.Element;
  steps: step[];
}
