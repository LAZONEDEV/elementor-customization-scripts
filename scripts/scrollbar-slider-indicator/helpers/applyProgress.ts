import Swiper from "@/types/swiper/swiper-class";
import { getSliderState } from "./getSliderState";

export const applySliderProgressToTrack = (
  track: HTMLDivElement,
  swiperInstance: Swiper
) => {
  const { activeIndex, slideCount } =
    getSliderState(swiperInstance);

  applyProgress(activeIndex, slideCount, track);
};

export const applyProgress = (
  activeIndex: number,
  slideCount: number,
  track: HTMLDivElement
): void => {
  const progress = (activeIndex / slideCount) * 100;
  track.style.left = `${progress}%`;
};
