import { INDICATOR_WRAPPER_FLAG } from "@/slider-bar-indicator/constants/attributesNames";

export const getScrollbarWrappers = () => {
  const elements = document.querySelectorAll<HTMLDivElement>(`[${INDICATOR_WRAPPER_FLAG}]`);

  return elements;
};
