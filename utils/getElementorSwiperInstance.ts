import { Swiper } from "@/types/swiper/index";

export const getElementorSwiperInstanceById = (id: string): Swiper | undefined => {
  const swiperElement = jQuery(`#${id} .swiper`);
  const swiperInstance = swiperElement?.data("swiper") as Swiper;

  return swiperInstance;
};
