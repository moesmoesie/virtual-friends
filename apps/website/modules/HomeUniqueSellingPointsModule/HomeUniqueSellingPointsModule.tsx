import { Container, InfoCard } from "ui";
import { RichText } from "../../components";

interface HomeUniqueSellingPointsModule {
  title?: string;
  uniqueSellingPoints: {
    title: string;
    body: string;
  }[];
}

const HomeUniqueSellingPointsModule: React.FC<
  HomeUniqueSellingPointsModule
> = ({ title, uniqueSellingPoints = [] }) => {
  return (
    <Container>
      {title !== undefined ? (
        <h2 className="display-1 gradient-text">{title}</h2>
      ) : (
        <></>
      )}

      <div className="grid grid-cols-1 gap-3 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
        {uniqueSellingPoints.map((el, index) => {
          return <InfoCard key={index} body={el.body} title={el.title} />;
        })}
      </div>
      <div></div>
    </Container>
  );
};

export default HomeUniqueSellingPointsModule;
