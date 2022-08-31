import { UploadImageCard } from "../../components";
import { Picker } from "../../components";
import { Button } from "../../components";
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

      <FloatingContainer delay={0.4}>
        <div className="z-10 mt-24 translate-x-6">
          <Button className="text-white">
            <div className="flex whitespace-nowrap items-center gap-2">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6875 8.25C14.6875 8.88281 14.1602 9.41016 13.5625 9.41016H8.5V14.4727C8.5 15.0703 7.97266 15.5625 7.375 15.5625C6.74219 15.5625 6.25 15.0703 6.25 14.4727V9.41016H1.1875C0.554688 9.41016 0.0625 8.88281 0.0625 8.25C0.0625 7.65234 0.554688 7.16016 1.1875 7.16016H6.25V2.09766C6.25 1.46484 6.74219 0.9375 7.375 0.9375C7.97266 0.9375 8.5 1.46484 8.5 2.09766V7.16016H13.5625C14.1602 7.125 14.6875 7.65234 14.6875 8.25Z"
                  fill="white"
                />
              </svg>
              Deploy
            </div>
          </Button>
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.5}>
        <div className="translate-x-10">
          <UploadImageCard />
        </div>
      </FloatingContainer>

      <FloatingContainer delay={0.3}>
        <div className="-translate-x-16">
          <Picker />
        </div>
      </FloatingContainer>
    </div>
  );
};

export default ContentMangementSystem;
