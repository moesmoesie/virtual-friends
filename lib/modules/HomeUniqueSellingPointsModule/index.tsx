import { Container, InfoCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeUniqueSellingPointsModuleProps } from "./types";
import { ModuleContainer } from "../../components";

const HomeUniqueSellingPointsModule: React.FC<
  HomeUniqueSellingPointsModuleProps
> = ({ title, uniqueSellingPoints = [] }) => {
  return (
    <div className="relative">
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
