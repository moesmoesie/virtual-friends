import { ModuleType } from "./types";
import { Container, Card, Markdown } from "ui-components";
import { useSpring, animated } from "react-spring";
import { useRef, useState } from "react";

export interface MethodType extends ModuleType {
  title: string;
  body: string;
  methods: {
    icon: JSX.Element;
    title: string;
    body: string;
  }[];
}

export const Method: React.FC<MethodType> = (props) => {
  const [position, setPosition] = useState(0);
  const a = useSpring({ x: position });
  const methodContainer = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveLeft = () => {
    setPosition((prev) => {
      const newValue = prev + 100;
      if (newValue > 0) {
        return 0;
      }
      return newValue;
    });
  };

  const moveRight = () => {
    setPosition((prev) => {
      const newValue = prev - 100;
      if (newValue < -300) {
        return -300;
      }
      return newValue;
    });
  };

  return (
    <Container {...props.module}>
      <div ref={containerRef} className="w-full">
        <div className="flex flex-col gap-4">
          <h2 className="headline-4">
            <Markdown content={props.title} />
          </h2>
          <p className="body-2 medium:subtitle-2 medium:max-w-lg">
            <Markdown content={props.body} />
          </p>

          <div className="flex gap-5 items-end self-end">
            <button onClick={moveLeft}>
              <ChevronLeft />
            </button>
            <button onClick={moveRight}>
              <ChevronRight />
            </button>
          </div>

          <animated.div
            ref={methodContainer}
            style={a}
            className="flex gap-[30px]"
          >
            {props.methods.map((method) => {
              return (
                <div className="shrink-0">
                  <Card mode="vertical" size="normal" {...method} />
                </div>
              );
            })}
          </animated.div>
        </div>
      </div>
    </Container>
  );
};

const ChevronLeft: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ChevronRight: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
        fill="currentColor"
      />
    </svg>
  );
};
