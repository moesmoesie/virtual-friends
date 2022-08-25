import { UploadImageCard } from "../../components";
import { Picker } from "../../components";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextEditor } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";

const ContentMangementSystem: React.FC = () => {
  return (
    <div className="relative grid gap-6 grid-cols-[min-content,min-content]">
      <FloatingContainer>
        <div className="w-[350px] h-[200px] translate-x-6">
          <TextEditor />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={400}>
        <div className="z-10 mt-24 translate-x-6">
          <Button type="accent">
            <span className="px-6 py-2 flex items-center font-bold gap-2 body-1">
              <FontAwesomeIcon className="text-teal-500 body-2" icon="plus" />
              Deploy
            </span>
          </Button>
        </div>
      </FloatingContainer>

      <FloatingContainer delay={500}>
        <div className="translate-x-10">
          <UploadImageCard />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={300}>
        <div className="-translate-x-16">
          <Picker />
        </div>
      </FloatingContainer>
    </div>
  );
};

export default ContentMangementSystem;
