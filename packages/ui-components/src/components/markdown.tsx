import MarkdownComponent from "markdown-to-jsx";

export interface MarkdownType {
  content: string;
}

export const Markdown: React.FC<MarkdownType> = (props) => {
  return <MarkdownComponent>{props.content}</MarkdownComponent>;
};
