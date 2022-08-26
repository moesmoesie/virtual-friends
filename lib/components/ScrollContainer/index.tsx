import { ScrollContainerProps } from "./types";
import { animated, useSpring } from "@react-spring/web";
import { useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const ScrollContainer: React.FC<ScrollContainerProps> = (props) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [disableSelect, setSelect] = useState(false);
  const touchPos = useRef<number>(0);
  const [styles, api] = useSpring(() => ({
    x: 0,
  }));

  const onStart = () => setMouseDown(true);
  const onStop = () => setMouseDown(false);
  const onMove = (value: number, isWheelEvent?: boolean) => {
    if (isMouseDown || isWheelEvent) {
      setSelect(true);
      const newValue = styles.x.get() + value;
      api.set({
        x: clamp(newValue, props.min, props.max),
      });
    } else {
      setSelect(false);
    }
  };

  return (
    <div
      onMouseDown={onStart}
      onWheel={(event) => onMove(-event.deltaX, true)}
      onMouseLeave={onStop}
      onMouseUp={onStop}
      onTouchStart={onStart}
      onTouchEnd={onStop}
      onMouseMove={(event) => onMove(event.movementX)}
      onTouchMove={(event) => {
        const pos = event.touches[0].clientX;
        const delta = pos - touchPos.current;
        touchPos.current = pos;
        onMove(delta);
      }}
      onTouchStartCapture={(event) => {
        touchPos.current = event.touches[0].clientX;
      }}
    >
      <animated.div
        className={`${disableSelect ? "select-none" : "select-auto"}`}
        style={styles}
      >
        {props.children}
      </animated.div>
    </div>
  );
};

export default ScrollContainer;
