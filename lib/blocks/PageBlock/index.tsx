import Head from "next/head";
import PageBlockProps from "./types";

const PageBlock: React.FC<PageBlockProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props?.title ?? "Virtual asdasd"}</title>
        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>
      <div className="w-full min-h-[100vh] bg-dark-purple-500 text-white">
        {props.header}
        {props.children}
        {props.footer}
      </div>
    </>
  );
};

export default PageBlock;
