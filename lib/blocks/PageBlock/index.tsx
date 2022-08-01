import PageBlockProps from "./types";

const PageBlock: React.FC<PageBlockProps> = (props) => {
  return (
    <div className="w-full min-h-[100vh] bg-dark-purple-500 text-white">
      {props.header}
      {props.children}
      {props.footer}
    </div>
  );
};

export default PageBlock;
