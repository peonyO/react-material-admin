import { createRoot } from "react-dom/client";

import FullScreenLoading from "@/components/Loading/FullScreen";

let needLoadingRequestCount = 0;

/**
 * @description Show Loading
 */
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    let dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    createRoot(dom).render(<FullScreenLoading />);
  }
  needLoadingRequestCount++;
};

/**
 * @description Hide Loading
 */
export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    document.body.removeChild(document.getElementById("loading") as HTMLElement);
  }
};
