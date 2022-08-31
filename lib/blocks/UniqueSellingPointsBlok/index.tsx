import { storyblokEditable } from "@storyblok/react";
import { GradientText, Icon, InfoCard } from "../../components";
import { Container } from "../../components";
import { Blok } from "../types";

const UniqueSellingPointsBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <>
          {blok?.title && (
            <h2 className="display-1 mb-12">
              <GradientText>{blok.title}</GradientText>
            </h2>
          )}
        </>

        <div className="grid grid-cols-1 gap-3 medium:gap-5 medium:grid-cols-2 large:grid-cols-3 large:gap-5">
          {blok.uniqueSellingPoints.map((el: Blok) => {
            return (
              <div {...storyblokEditable(el)} key={el._uid}>
                <InfoCard
                  body={el?.body}
                  title={el?.title}
                  icon={
                    <Icon
                      type="string"
                      className="w-12 large:w-20 text-voilet-400"
                      icon={el?.icon}
                    />
                  }
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default UniqueSellingPointsBlok;
