import { getRemoteSliderNavButtons } from "./helpers/getNavButtons";
import { registerHandler } from "./helpers/registerHandler";

window.addEventListener("load", () => {
  const scrollbarWrappers = getRemoteSliderNavButtons();

  scrollbarWrappers.forEach((wrapper) => {
    registerHandler(wrapper);
  });
});
