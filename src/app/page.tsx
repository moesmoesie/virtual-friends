import Header from "@/components/header";

const Home: React.FC = () => {
  return (
    <div className="">
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

      <div className="text-[#836FFF] mb-[110px] animate-bounce">
        <ArrowIcon />
      </div>

      <div className="h-[1px] mb-2 bg-[#EBE8FF] w-full" />

      <h2 className="text-violet-500 text-2xl w-[246px] font-mono">Some things that make us special.</h2>

      <div className="mt-[50px]">
        {Array.from({ length: 100 }).map((el, index) => {
          return <p key={index}>{index}</p>;
        })}
      </div>
    </div>
  );
};

export default Home;

const ArrowIcon = () => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.01692e-07 8.58233L0.601563 7.99491L3.07031 10.4132L3.07031 -1.71772e-07L3.92969 -1.34208e-07L3.92969 10.4132L6.40625 7.99491L7 8.58233L3.5 12L1.01692e-07 8.58233Z" fill="#836FFF" />
    </svg>
  );
};
