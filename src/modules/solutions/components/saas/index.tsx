import { AssetBarChart } from "../../../../components/asset-bar-chart/asset-bar-chart";
import { AssetLineChartCard } from "../../../../components/asset-line-chart/asset-line-chart";
import { AssetCard } from "../../../../components/asset/asset";
import { Floating } from "../../../../components/floating/floating";
import { Solution } from "../content/content";
import { SolutionType } from "../../type";

// TODO MAKE COMPONENTS MORE INTERACTIVE PERHAPS USE D3 FOR THIS

export const SolutionSaas: React.FC<SolutionType> = (props) => {
  return (
    <Solution content={props.content} isReversed={props.isReversed}>
      <div className="flex pt-6   flex-col">
        <div className="flex h-full justify-center  items-center gap-3 ">
          <div className="">
            <Floating delay={1}>
              <div className="translate-y-14">
                <AssetCard percentage="+23%" value="52,7K" Icon={<BTC />} />
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
              <AssetCard percentage="+11%" value="22,7K" Icon={<ETH />} />
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

const BTC = () => {
  return (
    <svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M310.204 242.638c27.73-14.18 45.377-39.39 41.28-81.3-5.358-57.351-52.458-76.573-114.85-81.929V0h-48.528v77.203c-12.605 0-25.525.315-38.444.63V0h-48.528v79.409c-17.842.539-38.622.276-97.37 0v51.678c38.314-.678 58.417-3.14 63.023 21.427v217.429c-2.925 19.492-18.524 16.685-53.255 16.071L3.765 443.68c88.481 0 97.37.315 97.37.315V512h48.528v-67.06c13.234.315 26.154.315 38.444.315V512h48.528v-68.005c81.299-4.412 135.647-24.894 142.895-101.467 5.671-61.446-23.32-88.862-69.326-99.89zM150.608 134.553c27.415 0 113.126-8.507 113.126 48.528 0 54.515-85.71 48.212-113.126 48.212v-96.74zm0 251.776V279.821c32.772 0 133.127-9.138 133.127 53.255-.001 60.186-100.355 53.253-133.127 53.253z" />
    </svg>
  );
};

const ETH = () => {
  return (
    <svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
    </svg>
  );
};
