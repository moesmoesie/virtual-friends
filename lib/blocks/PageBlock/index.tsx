import Head from "next/head";
import { useScreen } from "../../hooks";
import PageBlockProps from "./types";

const PageBlock: React.FC<PageBlockProps> = (props) => {
  const screen = useScreen();

  return (
    <>
      <Head>
        <title>{props?.title ?? "Virtual asdasd"}</title>
        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>
      <div className="w-full min-h-[100vh] bg-dark-purple-500 text-white">
        <div
          className={`transition-opacity delay-100 duration-500 ${
            screen ? "opacity-100" : "opacity-0"
          }`}
        >
          {props.header}
          {props.children}
          {props.footer}
        </div>
      </div>
    </>
  );
};

export default PageBlock;
