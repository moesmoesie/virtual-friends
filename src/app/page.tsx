import Header from "@/components/header";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <div className="invisible pointer-events-none pb-2">
        <Header />
      </div>

      <h1 className="text-violet-500 mb-20 font-mono  text-[62px] font-normal leading-[70.97px]">
        Let&rsquo;s <br /> push <br /> the web <br /> forward.
      </h1>

      <p className="text-[#0E0064] mb-6 font-sans w-[255px] text-sm">
        <strong>We&rsquo;re a future-focused web development practice,</strong> helping incredible design agencies build incredible websites.
      </p>

      <div className="h-[1px] mb-2 bg-[#EBE8FF] w-full" />

      <p className="text-[#836FFF] font-sans mb-2 text-sm">Scroll</p>

      <div className="text-[#836FFF] relative mb-[110px] animate-bounce">
        <ArrowIcon />
      </div>

      <div className="h-[1px] mb-2 bg-[#EBE8FF] w-full" />

      <section className="mb-10">
        <h2 className="text-violet-500 mb-14 text-2xl w-[246px] font-mono">Some things that make us special.</h2>

        <div className="flex flex-col gap-[50px]">
          <Point title="1." subtitle="We always push for more.">
            <p className="text-sm font-sans text-[#7D7D7D]">
              We don&rsquo;t just stop at pixel-perfect implementation—we live on the bleeding edge of technology. That way, your design vision gets the delivery it deserves. Because good enough just isn&rsquo;t good enough for us.
            </p>
          </Point>

          <Point title="2." subtitle="We always push for more.">
            <p className="text-sm font-sans text-[#7D7D7D]">
              Every good partnership depends on flexibility. And so we totally adapt ourselves to work how you want to work. Want us to follow your processes? Need to pivot the project? We&rsquo;re with you every step of the way. And, of
              course, we&rsquo;re happy to lead, too.
            </p>
          </Point>

          <Point title="3." subtitle="We always push for more.">
            <p className="text-sm font-sans text-[#7D7D7D]">
              There&rsquo;s no other way to say it; we&rsquo;re fast. When we engage in a project, we&rsquo;re totally committed and go quickly to develop your vision. In our books, speed and quality are equally critical.
            </p>
          </Point>
        </div>
      </section>

      <div className="pb-5 flex-col gap-2 inline-flex">
        <p className="text-sm text-[#7D7D7D]">Read next:</p>
        <Link href={"/"} className="text-white rounded-[70px] py-[6px] font-mono inline-flex gap-2 items-center bg-[#836FFF] px-3">
          Our capabilities <ArrowTopRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default Home;

interface PointProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
}

const ArrowTopRightIcon: React.FC = () => {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.54972 8.4446L0.774148 7.66903L6.54119 1.89205H2.08665L2.09659 0.818182H8.39062V7.12216H7.30682L7.31676 2.66761L1.54972 8.4446Z" fill="white" />
    </svg>
  );
};

const Point: React.FC<PointProps> = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono font-medium text-[#0E0064] text-2xl">{props.title}</p>
      <h3 className="font-mono text-[#0E0064]">{props.subtitle}</h3>
      <div className="text-sm max-w-[280px] font-sans text-[#7D7D7D]">{props.children}</div>
    </div>
  );
};

const ArrowIcon = () => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.01692e-07 8.58233L0.601563 7.99491L3.07031 10.4132L3.07031 -1.71772e-07L3.92969 -1.34208e-07L3.92969 10.4132L6.40625 7.99491L7 8.58233L3.5 12L1.01692e-07 8.58233Z" fill="#836FFF" />
    </svg>
  );
};
