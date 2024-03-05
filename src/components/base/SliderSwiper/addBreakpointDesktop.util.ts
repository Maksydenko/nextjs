import { SwiperOptions } from "swiper/types";
import { IBreakpoint } from "./breakpoints.interface";

interface IAddBreakpointDesktop {
  (
    slidesPerView: SwiperOptions["slidesPerView"],
    breakpoints: IBreakpoint[]
  ): IBreakpoint[];
}

export const addBreakpointDesktop: IAddBreakpointDesktop = (
  slidesPerView,
  breakpoints
) => {
  const newObject = {
    isBreakpoint: true,
    slides: breakpoints[0].slides,
  };

  breakpoints.unshift(newObject);

  for (
    let i = 1;
    i < breakpoints.length;
    /* eslint-disable-next-line no-plusplus */
    i++
  ) {
    /* eslint-disable-next-line no-param-reassign */
    breakpoints[i].slides = breakpoints[i + 1]
      ? breakpoints[i + 1].slides
      : slidesPerView;
  }

  return breakpoints;
};
