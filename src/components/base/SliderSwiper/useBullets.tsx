import { SwiperOptions } from 'swiper/types';
import { addBreakpointDesktop } from './addBreakpointDesktop.util';
import { IBreakpoint, IBreakpoints } from './breakpoints.interface';

interface IUseBullets {
  (
    breakpoints: IBreakpoints,
    slidesPerView: SwiperOptions['slidesPerView'],
    slidesNumber: number
  ): boolean;
}

export const useBullets: IUseBullets = (
  breakpoints,
  slidesPerView,
  slidesNumber,
) => {
  const breakpointsArray: IBreakpoint[] = Object.entries(breakpoints).map(
    ([ , { slidesPerView: slides, isBreakpoint } ]) => ({
      isBreakpoint,
      slides,
    }),
  );

  const breakpointsWithDesktop = addBreakpointDesktop(
    breakpointsArray,
    slidesPerView,
  );

  const results = breakpointsWithDesktop.map((breakpoint) => {
    const { isBreakpoint, slides } = breakpoint;
    if (isBreakpoint && Number(slides) < slidesNumber) {
      return true;
    }
    return false;
  });

  return results.includes(true);
};
