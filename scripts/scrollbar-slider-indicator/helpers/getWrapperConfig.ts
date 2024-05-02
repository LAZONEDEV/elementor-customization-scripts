import {
  SCROLLBAR_BG,
  SCROLLBAR_TRACK_COLOR,
  SLIDER_ID,
} from "@/slider-bar-indicator/constants/attributesNames";
import { defaultConfig } from "@/slider-bar-indicator/constants/defaultConfig";
import type { ScrollbarConfig } from "@/slider-bar-indicator/types/index";

export const getScrollbarWrappersConfig = (
  wrapper: HTMLDivElement
): ScrollbarConfig => {
  const sliderID = wrapper.getAttribute(SLIDER_ID);
  const scrollbarColor =
    wrapper.getAttribute(SCROLLBAR_BG) ?? defaultConfig.scrollbarColor;
  const scrollbarTrackColor =
    wrapper.getAttribute(SCROLLBAR_TRACK_COLOR) ??
    defaultConfig.scrollbarTrackColor;

  return {
    sliderId: sliderID,
    scrollbarColor: scrollbarColor,
    scrollbarTrackColor: scrollbarTrackColor,
  };
};
