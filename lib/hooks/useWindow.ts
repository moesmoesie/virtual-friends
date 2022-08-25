import { useState } from "react";

import { useEventListener } from ".";
import { useIsomorphicLayoutEffect } from ".";

type Window = {
    width: number;
    height: number
}
function useScreen(): Window {
  const [pWindow, setWindow] = useState<Window>({
    width: 0,
    height: 0
  });

  const handleSize = () => {
    setWindow({
        width: window.innerWidth,
        height: window.innerHeight
    });
  };

  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return pWindow;
}

export default useScreen;
