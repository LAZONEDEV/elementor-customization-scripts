import { defaultConfig, scrollbarHeight } from "../../constants/defaultConfig";

export const createScrollbarBox = (bgColor?: string | null) => {
  const scrollbarWrapper = document.createElement("div");
  scrollbarWrapper.style.background = bgColor ?? defaultConfig.scrollbarColor!;
  scrollbarWrapper.style.height = scrollbarHeight;
  scrollbarWrapper.style.position = "relative";

  return scrollbarWrapper;
};
