import { ScrollbarConfig } from "../../types/index";
import { createScrollbarTrack } from "./createScrollbarTrack";
import { createScrollbarBox } from "./createScrollbarBox";

export const createScrollbar = (
  slideCount: number,
  sliderPerView: number,
  config: ScrollbarConfig
) => {
  const scrollbarBox = createScrollbarBox(config.scrollbarColor);
  const track = createScrollbarTrack(
    slideCount,
    sliderPerView,
    config.scrollbarTrackColor
  );

  scrollbarBox.appendChild(track);

  return [scrollbarBox, track];
};
