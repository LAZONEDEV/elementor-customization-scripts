import { ScrollbarConfig } from "@/slider-bar-indicator//types/index";

export const defaultConfig: Omit<Required<ScrollbarConfig>, "sliderId"> = {
  scrollbarColor: "#b5b5b5",
  scrollbarTrackColor: "#e5e5e5",
};

export const scrollbarHeight = "5px" // 5px
