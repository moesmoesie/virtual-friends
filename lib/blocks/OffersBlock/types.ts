import { ContentBlock } from "../types";

export interface OffersBlockProps extends ContentBlock {
  title: string;
  offers: {
    title: string;
    body: string;
    keywords: string[];
    type: string;
  }[];
}
