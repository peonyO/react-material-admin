import { useEffect } from "react";

import SimpleBarCore from "simplebar-core";

export const useSimpleBarScroll = (ref: React.RefObject<SimpleBarCore | null>, scroll: ($event: Event) => void) => {
  useEffect(() => {
    if (ref.current) {
      const simpleBarContainer = ref.current.getScrollElement();
      simpleBarContainer?.addEventListener("scroll", scroll);

      return () => {
        simpleBarContainer?.removeEventListener("scroll", scroll);
      };
    }
  }, [ref]);
};
