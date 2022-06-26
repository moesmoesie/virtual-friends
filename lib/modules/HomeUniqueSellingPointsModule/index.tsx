import { Container, InfoCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeUniqueSellingPointsModuleProps } from "./types";
import { ModuleContainer } from "../../components";

const HomeUniqueSellingPointsModule: React.FC<
  HomeUniqueSellingPointsModuleProps
> = ({ title, uniqueSellingPoints = [] }) => {
  return (
    <div className="relative">
      <div className="w-[500px] blur-2xl opacity-10 -z-10 rounded-full h-[600px] bg-Teal/500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />
      <div className="w-[2000px] blur-2xl opacity-20 -z-10  h-[200px] bg-Teal/500  bottom-0 bg-purple-gradient absolute" />

      <div className="relative overflow-hidden">
        <ModuleContainer title={title}>
          <div className="relative">
            <div className="grid grid-cols-1 gap-3 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
              {uniqueSellingPoints.map((el, index) => {
                return (
                  <InfoCard
                    key={index}
                    body={el.body}
                    title={el.title}
                    icon={
                      <FontAwesomeIcon
                        className="text-[24px] text-Teal/500 large:text-[58px]"
                        icon={el.icon.iconName}
                      />
                    }
                  />
                );
              })}
            </div>
          </div>
        </ModuleContainer>
      </div>
    </div>
  );
};

export default HomeUniqueSellingPointsModule;
