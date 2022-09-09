import {
  AssetCard,
  AssetBarChartCard,
  AssetLineChartCard,
} from "../../components";
import FloatingContainer from "../../components/FloatingContainer";

const ProgressiveWebApp: React.FC = () => {
  return (
    <div className="grid relative gap-5 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content,min-content]">
      <FloatingContainer>
        <div className="translate-y-2">
          <AssetCard />
        </div>
      </FloatingContainer>
      <FloatingContainer delay={0.3}>
        <div className="translate-y-8">
          <AssetBarChartCard
            amount={30000}
            gainPercentage={23}
            values={[0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3]}
          />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.5}>
        <div className="translate-y-20">
          <AssetCard />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.7} className="col-span-3 -z-10">
        <div className="-translate-y-4 pr-5">
          <AssetLineChartCard />
        </div>
      </FloatingContainer>
    </div>
  );
};

export default ProgressiveWebApp;
