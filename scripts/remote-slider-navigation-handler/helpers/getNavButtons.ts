import { REMOTE_NAVIGATION_HANDLER_FLAG } from "@/slider-remote-nav/constants/attributesNames";

export const getRemoteSliderNavButtons = () => {
  const elements = document.querySelectorAll<HTMLDivElement>(`[${REMOTE_NAVIGATION_HANDLER_FLAG}]`);

  return elements;
};
