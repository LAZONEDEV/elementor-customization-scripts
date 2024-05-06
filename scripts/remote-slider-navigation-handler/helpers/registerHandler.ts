import { NavigationDirection } from "../types";
import { getButtonConfig } from "./getButtonConfigs";

export const registerHandler = (button: HTMLElement) => {
  const config = getButtonConfig(button);

  if (!config) {
    return;
  }

  button.addEventListener("click", () => {
    if (config.direction === NavigationDirection.prev) {
      config.sliderInstance.slidePrev();
    } else if (config.direction === NavigationDirection.next) {
      config.sliderInstance.slideNext();
    }
  });
};
