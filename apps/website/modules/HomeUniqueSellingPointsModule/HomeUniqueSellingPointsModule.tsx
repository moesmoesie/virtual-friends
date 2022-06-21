import { Container, InfoCard, BlurredRadialGradient } from "ui";
import { RichText } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
interface HomeUniqueSellingPointsModule {
  title?: string;
  uniqueSellingPoints: {
    title: string;
    body: string;
    icon: {
      iconName: any;
      prefix: string;
    };
  }[];
}

const HomeUniqueSellingPointsModule: React.FC<
  HomeUniqueSellingPointsModule
> = ({ title, uniqueSellingPoints = [] }) => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <Container className="relative pb-12">
          {title !== undefined ? (
            <h2 className="display-1 gradient-text">{title}</h2>
          ) : (
            <></>
          )}

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
        </Container>
      </div>
    </div>
  );
};

export default HomeUniqueSellingPointsModule;
