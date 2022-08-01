import { Container, Button } from "../../components";
import { HomeLandingBlockProps } from "./types";

const HomeLandingBlock: React.FC<HomeLandingBlockProps> = (props) => {
  return (
    <Container>
      <div className=" min-h-[500px] medium:min-h-[750px] relative flex items-center">
        <Background />

        <div className="max-w-2xl relative gap-7 medium:gap-11 flex flex-col items-start">
          <h1 className="display-1 drop-shadow-lg font-bold">{props.title}</h1>

          <p className="body-3">{props.subtitle}</p>

          <Button onClick={() => console.log("Clicked!")}>
            {props.button}
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Background = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full">
      <div className="absolute rotate-[60deg] medium:rotate-[35deg] w-[1200px] rounded-3xl medium:h-[300px] h-[200px] medium:w-[1800px] origin-left blur-3xl opacity-50 bg-gradient-1" />
    </div>
  );
};

export default HomeLandingBlock;
