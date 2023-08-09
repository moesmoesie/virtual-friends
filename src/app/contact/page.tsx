import Header from "@/components/header";

const Contact: React.FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="invisible pointer-events-none pb-2">
        <Header />
      </div>
      <div className="flex-1">
        <h1 className="text-violet-500 mb-20 font-mono text-[48px] tracking-[-3.84px] leading-[53.789px]">
          What might <br /> you want <br /> help with?
        </h1>
      </div>

      <p className="text-[#0E0064] mb-2.5 font-sans w-[255px] text-sm">
        <strong>We love connecting with design agencies like yours.</strong> <br /> Don&rsquo;t be shy. Say hello below.
      </p>

      <div>
        <a href={"hello@virtualfriends.dev"} className="text-white inline-flex mb-[60px] rounded-[70px] py-[6px] font-mono gap-2 items-center bg-[#836FFF] px-3">
          hello@virtualfriends.dev <ArrowTopRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;

const ArrowTopRightIcon: React.FC = () => {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.54972 8.4446L0.774148 7.66903L6.54119 1.89205H2.08665L2.09659 0.818182H8.39062V7.12216H7.30682L7.31676 2.66761L1.54972 8.4446Z" fill="white" />
    </svg>
  );
};
