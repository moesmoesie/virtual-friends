export interface OffersBlockProps {
  title: string;
  offers: {
    title: string;
    body: string;
    keywords: string[];
    type: string;
  }[];
}
