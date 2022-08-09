import { ContentBlock } from "../types";

export interface HomeUniqueSellingPointsModuleProps extends ContentBlock {
  title?: string;
  uniqueSellingPoints: {
    title: string;
    body: string;
    icon: JSX.Element
  }[];
}
