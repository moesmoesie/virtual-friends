import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Button,
  EmployeeCard,
  IconButton,
  AssetCard,
  CompanyCard,
  ReviewCard,
} from "../../components";
import { HomeLandingBlockProps } from "./types";
import { useScreen } from "../../hooks";

const HomeLandingBlock: React.FC<HomeLandingBlockProps> = (props) => {
  const screen = useScreen();
  return (
    <Container>
      <div className="flex">
        <div className=" min-h-[500px] large:min-w-[600px] medium:min-h-[750px] relative flex items-center">
          <Background />

          <div className="max-w-2xl relative gap-7 medium:gap-11 flex flex-col items-start">
            <h1 className="display-1 drop-shadow-lg font-bold">
              {props.title}
            </h1>

            <p className="body-3 max-w-[95%]">{props.subtitle}</p>

            <Button onClick={() => console.log("Clicked!")}>
              {props.button}
            </Button>
          </div>
        </div>
        {screen === "large" && (
          <div className="flex-1 self-stretch">
            <ComponentsShowcase />
          </div>
        )}
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

const ComponentsShowcase = () => {
  return (
    <div className="h-full pt-28 relative self-start">
      <div className="absolute bg-purple-navy-500 w-[500px] h-[500px] blur-3xl rounded-full opacity-70 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="grid-rows-2 h-full grid relative">
        <div className="h-full flex justify-center items-end">
          <IconButton
            icon={
              <FontAwesomeIcon
                className="text-teal-500"
                size="2x"
                icon={"plus"}
              />
            }
          />

          <div className="w-[270px] ml-12 h-[350px]">
            <EmployeeCard
              employee={{
                name: "John Doe",
                phone: "+31683600774",
                mail: "darwesh.mn@icloud.com",
                github: "d",
                linkedin: "d",
                image: "/assets/employee1.png",
                position: "A Virtual Friend",
              }}
            />
          </div>
          <div className="self-start items-center flex flex-row gap-4 -translate-x-6 translate-y-12 grid-cols-2">
            <IconButton
              icon={
                <FontAwesomeIcon
                  className="text-teal-500"
                  size="2x"
                  icon={{ iconName: "github", prefix: "fab" }}
                />
              }
            />
            <div className=" flex flex-col gap-4">
              <IconButton
                icon={
                  <FontAwesomeIcon
                    className="text-teal-500"
                    size="2x"
                    icon={{ iconName: "react", prefix: "fab" }}
                  />
                }
              />
              <IconButton
                icon={
                  <FontAwesomeIcon
                    className="text-teal-500"
                    size="2x"
                    icon={{ iconName: "google", prefix: "fab" }}
                  />
                }
              />
            </div>
          </div>
        </div>

        <div className="h-full flex gap-4 justify-end relative">
          <div className="ml-auto flex gap-4 flex-1 mt-6">
            <div className="translate-x-6">
              <IconButton
                icon={
                  <FontAwesomeIcon
                    className="text-teal-500"
                    size="2x"
                    icon={{ iconName: "github", prefix: "fab" }}
                  />
                }
              />
            </div>

            <div className="flex gap-3 mt-2 -translate-x-4">
              <div className="translate-y-20">
                <AssetCard />
              </div>
              <div>
                <AssetCard />
              </div>
            </div>
          </div>

          <div className="mt-24">
            <IconButton
              icon={
                <FontAwesomeIcon
                  className="text-teal-500"
                  size="2x"
                  icon={{ iconName: "react", prefix: "fab" }}
                />
              }
            />
          </div>

          <div className="h-200px z-[9000] -translate-y-1/4 -mr-10">
            <ReviewCard
              review={{
                company: "Virtual Friends",
                name: "John Doe",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                image: "/assets/woman.png",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingBlock;
