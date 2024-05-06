import { defaultConfig } from "../../constants/defaultConfig";

export const createScrollbarBox = (
  bgColor?: string | null,
  scrollbarHeight?: string | null
) => {
  const scrollbarWrapper = document.createElement("div");
  scrollbarWrapper.style.background = bgColor ?? defaultConfig.scrollbarColor!;
  scrollbarWrapper.style.height =
    scrollbarHeight ?? defaultConfig.scrollbarHeight!;
  scrollbarWrapper.style.position = "relative";

  return scrollbarWrapper;
};
