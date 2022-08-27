import { useState } from "react";

import { useEventListener } from ".";
import { useIsomorphicLayoutEffect } from ".";

type Screen = "small" | "medium" | "large" | undefined ;
function useScreen(): Screen {
  const [screen, setScreen] = useState<Screen | undefined>(undefined);

  const handleSize = () => {
    var x: Screen = "small";
    if (window.innerWidth >= 1280) {
      x = "large";
    } else if (window.innerWidth >= 768) {
      x = "medium";
    }

    setScreen(x);
  };

  useEventListener("resize", handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screen;
}

export default useScreen;
