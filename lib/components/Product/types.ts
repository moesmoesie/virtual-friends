export interface ProductPorps {
  products?: {
    id: string;
    discountPercentage: number;
    image?: string;
    title: string;
    price: string;
    color: string;
  }[];
  currentProductId: string;
  setCurrentProductId: (value: string) => void;
}
