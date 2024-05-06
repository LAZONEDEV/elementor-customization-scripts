import Swiper from "@/types/swiper/swiper-class";

export const getSliderState = (swiperInstance: Swiper) => {
  const activeIndex = swiperInstance.realIndex;
  const slideCount =
    swiperInstance.slides.length -
    swiperInstance.el.querySelectorAll(".swiper-slide.swiper-slide-duplicate")
      .length;
  const sliderPerView = Number(swiperInstance.params.slidesPerView) || 1;

  return {
    slideCount,
    activeIndex,
    sliderPerView,
  };
};
