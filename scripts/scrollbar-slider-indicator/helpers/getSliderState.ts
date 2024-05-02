import Swiper from "@/types/swiper/swiper-class";

export const getSliderState = (swiperInstance: Swiper) => {
  const activeIndex = swiperInstance.activeIndex;
  const slideCount = swiperInstance.slides.length;
  const sliderPerView = Number(swiperInstance.params.slidesPerView) || 1;

  return {
    slideCount,
    activeIndex,
    sliderPerView,
  };
};
