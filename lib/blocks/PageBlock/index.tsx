import Head from "next/head";
import PageBlockProps from "./types";

const PageBlock: React.FC<PageBlockProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props?.title ?? "Virtual Friends"}</title>
        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>
      <div className="w-full min-h-[100vh] bg-white text-black">
        <div>
          {props.header}
          {props.children}
          {props.footer}
        </div>
      </div>
    </>
  );
};

export default PageBlock;
