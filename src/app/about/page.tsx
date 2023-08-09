import Header from "@/components/header";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="invisible pointer-events-none pb-2">
        <Header />
      </div>
      <div className="flex-1">
        <h1 className="text-violet-500 mb-20 font-mono text-[62px] tracking-[-4.96px] leading-[70.968px]">
          What can <br /> we do?
        </h1>
      </div>
      <p className="text-[#0E0064] mb-11 font-sans w-[255px] text-sm">
        <strong>We build pixel-perfect websites,</strong>
        <br /> translating your vision into real, living digital products.
        <br /> <br />
        From simple single-pagers right through to million-user e-commerce stores.
        <br /> <br /> And, for every line of code, we&rsquo;re use the most advanced, robust, proven methods to get there.
      </p>
      <div className="h-[1px] mb-2 bg-[#EBE8FF] w-full" />
      <p className="text-[#836FFF] font-sans mb-2 text-sm">That&rsquo;s an overview. For more, scroll...</p>
      <div className="text-[#836FFF] relative mb-[110px] animate-bounce">
        <ArrowIcon />
      </div>

      <div className="h-[1px] mb-2 bg-[#EBE8FF] w-full" />

      <h2 className="text-violet-500 mb-14 text-2xl w-[246px] font-mono">What else?</h2>

      <div className="flex gap-14 flex-col pb-24">
        <Point
          title="Intuitive, customisable content management systems"
          link={{
            href: "#",
            content: "View",
          }}
        >
          <p> We use Sanity, one of the fastest growing headless CMS in the world. Through it, we can customise your experience to make it as simple, complex, or beautiful as you like for your clients.</p>
        </Point>

        <Point
          title="Integration of advanced tools"
          link={{
            href: "#",
            content: "Example",
          }}
        >
          <p> AI-generated words and images from within the CMS? 3D scroll-based animations? No advanced tool is too advanced for us to implement.</p>
        </Point>

        <Point
          title="Powerful project management"
          link={{
            href: "#",
            content: "View",
          }}
        >
          <p> We use Sanity, one of the fastest growing headless CMS in the world. Through it, we can customise your experience to make it as simple, complex, or beautiful as you like for your clients.</p>
        </Point>
      </div>
    </div>
  );
};

export default About;

interface PointProps {
  title: string;
  link: {
    href: string;
    content: string;
  };
  children: JSX.Element;
}

const Point: React.FC<PointProps> = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-mono font-medium text-[#0E0064]">{props.title}</h3>
      <div className="text-sm max-w-[300px] font-sans text-[#7D7D7D]">{props.children}</div>
      <div>
        <Link href={props.link.href} className="text-white inline-flex text-sm rounded-[70px] py-[6px] font-mono gap-2 items-center bg-[#836FFF] px-3">
          {props.link.content} <ArrowTopRightIcon />
        </Link>
      </div>
    </div>
  );
};

const ArrowTopRightIcon: React.FC = () => {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.54972 8.4446L0.774148 7.66903L6.54119 1.89205H2.08665L2.09659 0.818182H8.39062V7.12216H7.30682L7.31676 2.66761L1.54972 8.4446Z" fill="white" />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.01692e-07 8.58233L0.601563 7.99491L3.07031 10.4132L3.07031 -1.71772e-07L3.92969 -1.34208e-07L3.92969 10.4132L6.40625 7.99491L7 8.58233L3.5 12L1.01692e-07 8.58233Z" fill="#836FFF" />
    </svg>
  );
};
