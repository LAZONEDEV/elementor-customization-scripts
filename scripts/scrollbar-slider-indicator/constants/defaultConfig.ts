import { ScrollbarConfig } from "@/slider-bar-indicator//types/index";

export const defaultConfig: Omit<Required<ScrollbarConfig>, "sliderId"> = {
  scrollbarColor: "#b5b5b5",
  scrollbarTrackColor: "#e5e5e5",
  scrollbarHeight: "5px"
};
