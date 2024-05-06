import {
  SCROLLBAR_BG,
  SCROLLBAR_HEIGHT,
  SCROLLBAR_TRACK_COLOR,
  SLIDER_ID,
} from "@/slider-bar-indicator/constants/attributesNames";
import type { ScrollbarConfig } from "@/slider-bar-indicator/types/index";

export const getScrollbarWrappersConfig = (
  wrapper: HTMLDivElement
): ScrollbarConfig => {
  const sliderId = wrapper.getAttribute(SLIDER_ID);
  const scrollbarColor = wrapper.getAttribute(SCROLLBAR_BG);
  const scrollbarTrackColor = wrapper.getAttribute(SCROLLBAR_TRACK_COLOR);
  const scrollbarHeight = wrapper.getAttribute(SCROLLBAR_HEIGHT);

  return {
    sliderId,
    scrollbarColor,
    scrollbarTrackColor,
    scrollbarHeight,
  };
};
