import { useEffect } from "react";

import { bubbleCursor } from "cursor-effects";

const BubbleCursor = () => {
  useEffect(() => {
    const cursorEffect = new bubbleCursor({
      colors: ["#ffb3ba", "#ffdfba	", "#ffffba", "#baffc9	", "#bae1ff"],
    });

    return () => {
      cursorEffect.destroy();
    };
  }, []);

  return null;
};

export default BubbleCursor;
