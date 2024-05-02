import { getScrollbarWrappers } from "./helpers/getScrollbarWrappers";
import { initScrollbar } from "./helpers/initScrollbar";

window.addEventListener("load", () => {
  const scrollbarWrappers = getScrollbarWrappers();

  scrollbarWrappers.forEach((wrapper) => {
    initScrollbar(wrapper);
  });
});
