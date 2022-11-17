import { AssetBarChart } from "../../components/asset-bar-chart/asset-bar-chart";
import { AssetLineChartCard } from "../../components/asset-line-chart/asset-line-chart";
import { AssetCard } from "../../components/asset/asset";
import { Floating } from "../../components/floating/floating";
import { Solution, SolutionType } from "./solutions.content";

export const SolutionSaas: React.FC<SolutionType> = (props) => {
  return (
    <Solution content={props.content} isReversed={props.isReversed}>
      <div className="flex pt-6   flex-col">
        <div className="flex h-full justify-center  items-center gap-3 ">
          <div className="">
            <Floating delay={1}>
              <div className="translate-y-14">
                <AssetCard percentage="+23%" value="52,7K" Icon={<BitCoinIcon />} />
              </div>
            </Floating>
          </div>
          <div className="translate-y-5">
            <Floating>
              <AssetBarChart title="This weeks earnings" amount={300000} currency="euro" values={[0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3]} />
            </Floating>
          </div>

          <Floating>
            <div className="-translate-y-2">
              <AssetCard percentage="+23%" value="52,7K" Icon={<BitCoinIcon />} />
            </div>
          </Floating>
        </div>
        <div className="-z-10 translate-x-6">
          <Floating>
            <div className="w-[90%]">
              <AssetLineChartCard />
            </div>
          </Floating>
        </div>
      </div>
    </Solution>
  );
};

const BitCoinIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bitcoin">
      <path d="M5 13h14M12 3v3M12 18v3M7 8l5 5 5-5"></path>
    </svg>
  );
};
