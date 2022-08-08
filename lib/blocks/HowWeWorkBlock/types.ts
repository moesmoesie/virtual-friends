export type step = {
  title: string;
  body: JSX.Element | string;
  icon: JSX.Element;
};

export interface HowWeWorkBlockProps {
  title: string;
  body: string;
  steps: step[];
}
