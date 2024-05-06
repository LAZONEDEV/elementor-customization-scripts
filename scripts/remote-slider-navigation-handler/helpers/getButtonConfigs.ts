import { getElementorSwiperInstanceById } from "@/utils/getElementorSwiperInstance";
import {
  REMOTE_NAVIGATION_DIRECTION,
  SLIDER_ID,
} from "@/slider-remote-nav/constants/attributesNames";
import { NavigationDirection } from "../types";
import { validNavigationDirections } from "../constants/directions";
import { Swiper } from "@/types/swiper";

export const getButtonConfig = (button: HTMLElement) => {
  const sliderId = button.getAttribute(SLIDER_ID);
  const direction = button.getAttribute(REMOTE_NAVIGATION_DIRECTION);

  if (!sliderId) {
    console.error(
      "The slider ID is missing on this slider remote slider navigation",
      button
    );
    return;
  }

  if (!direction) {
    console.error(
      "The direction is missing on this slider remote slider navigation",
      button
    );
    return;
  }

  if (!validNavigationDirections.includes(direction)) {
    console.error(
      `Invalid direction ${direction}. Must be one of ${validNavigationDirections}`
    );
    return;
  }

  const sliderInstance = getElementorSwiperInstanceById(sliderId);

  if (!sliderInstance) {
    console.error(`No slider instance found for component with id:${sliderId}`);
  }

  return {
    direction,
    sliderInstance: sliderInstance as Swiper
  };
};
