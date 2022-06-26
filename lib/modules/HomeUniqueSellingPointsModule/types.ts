export interface HomeUniqueSellingPointsModuleProps {
  title?: string;
  uniqueSellingPoints: {
    title: string;
    body: string;
    icon: {
      iconName: any;
      prefix: string;
    };
  }[];
}
