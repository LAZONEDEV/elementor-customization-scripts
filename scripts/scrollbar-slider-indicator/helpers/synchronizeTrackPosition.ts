import Swiper from "@/types/swiper/swiper-class";
import { applySliderProgressToTrack } from "./applyProgress";

export const synchronizeTrackPositions = (
  track: HTMLDivElement,
  swiperInstance: Swiper
) => {
  swiperInstance.on("slideChange", (freshSwiperInstance) => {
    applySliderProgressToTrack(track, freshSwiperInstance);
  });
};
