import { defaultConfig } from "../../constants/defaultConfig";

export const createScrollbarTrack = (
  slideCount: number,
  sliderPerView: number,
  color?: string | null
) => {
  const track = document.createElement("div");

  track.style.height = "100%";
  track.style.width = `${(100 / slideCount) * sliderPerView}%`;
  track.style.background = color ?? defaultConfig.scrollbarTrackColor!;
  track.style.transitionProperty = "all"
  track.style.transitionDuration = "500ms"
  track.style.position = "absolute";

  return track;
};
