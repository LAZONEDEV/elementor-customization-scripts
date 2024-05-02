import { getElementorSwiperInstanceById } from "@/utils/getElementorSwiperInstance";
import { getScrollbarWrappersConfig } from "./getWrapperConfig";
import { createScrollbar } from "./elementCreator/createScrollbar";
import { applyProgress } from "./applyProgress";
import { getSliderState } from "./getSliderState";
import { synchronizeTrackPositions } from "./synchronizeTrackPosition";

export const initScrollbar = (wrapper: HTMLDivElement) => {
  const config = getScrollbarWrappersConfig(wrapper);
  const sliderInstance = config.sliderId
    ? getElementorSwiperInstanceById(config.sliderId)
    : null;

  if (!sliderInstance) {
    return;
  }

  const { sliderPerView, slideCount, activeIndex } =
    getSliderState(sliderInstance);
  const [scrollbarBox, scrollbarTrack] = createScrollbar(
    slideCount,
    sliderPerView,
    config
  );

  wrapper.appendChild(scrollbarBox);
  applyProgress(activeIndex, slideCount, scrollbarTrack);
  synchronizeTrackPositions(scrollbarTrack, sliderInstance);
};
