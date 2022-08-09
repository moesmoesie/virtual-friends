import { GradientText, InfoCard } from "../../components";
import { HomeUniqueSellingPointsModuleProps } from "./types";
import { Container } from "../../components";

const UniqueSellingPointsBlock: React.FC<HomeUniqueSellingPointsModuleProps> = (
  props
) => {
  return (
    <Container module={props.module}>

      <>
        {props.title &&  <h2 className="display-1 mb-12">
        <GradientText>
          {props.title}
        </GradientText>
        </h2>}
      </>

        <div className="grid grid-cols-1 gap-3 medium:gap-5 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
          {props.uniqueSellingPoints.map((el, index) => {
            return (
              <InfoCard
                key={index}
                body={el.body}
                title={el.title}
                icon={el.icon}
              />
            );
          })}
        </div>
    </Container>
  );
};

export default UniqueSellingPointsBlock;
