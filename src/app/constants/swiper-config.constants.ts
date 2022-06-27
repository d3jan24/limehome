import { SwiperOptions } from "swiper";

export const SWIPER_CONFIG: SwiperOptions = {
    freeMode: false,
    centeredSlides: true,
    centerInsufficientSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
};