import { ContentBlock } from "../types";

export type step = {
  title: string;
  body: JSX.Element | string;
  icon: JSX.Element;
};

export interface HowWeWorkBlockProps extends ContentBlock {
  title: string;
  body: string;
  steps: step[];
}
