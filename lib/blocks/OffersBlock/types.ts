export interface OffersBlockProps {
  title: string;
  offers: {
    title: string;
    body: string | object[];
    keywords: string[];
    type: string;
  }[];
}
