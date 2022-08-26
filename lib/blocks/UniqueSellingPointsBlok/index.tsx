import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storyblokEditable } from "@storyblok/react";
import { GradientText, InfoCard } from "../../components";
import { Container } from "../../components";
import { useScreen } from "../../hooks";
import getFontAwesomeIcon from "../../utils/getFontawesomeIcon";
import { Blok } from "../types";

const UniqueSellingPointsBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  const screen = useScreen();
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
                    <FontAwesomeIcon
                      className="text-teal-500"
                      size={screen === "large" ? "3x" : "2x"}
                      icon={getFontAwesomeIcon(el?.icon)}
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
