import { InfoCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeUniqueSellingPointsModuleProps } from "./types";
import { Container } from "../../components";

const UniqueSellingPointsBlock: React.FC<HomeUniqueSellingPointsModuleProps> = (
  props
) => {
  return (
    <Container>
      <div className="relative py-12">
        <div className="grid grid-cols-1 gap-3 medium:gap-5 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
          {props.uniqueSellingPoints.map((el, index) => {
            return (
              <InfoCard
                key={index}
                body={el.body}
                title={el.title}
                icon={
                  <FontAwesomeIcon
                    className="text-[24px] text-teal-500 large:text-[58px]"
                    icon={el.icon.iconName}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default UniqueSellingPointsBlock;
