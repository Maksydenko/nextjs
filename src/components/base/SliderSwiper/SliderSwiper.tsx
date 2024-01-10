import { FC, ReactNode, useEffect, useRef } from "react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  // Scrollbar,
  // HashNavigation,
  Keyboard,
  // Mousewheel,
  // FreeMode,
  // Autoplay,
  // Parallax,
  Virtual,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper types
import { SwiperOptions } from "swiper/types";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";

import clsx from "clsx";
import { useBullets } from "./useBullets";
import { IBreakpoints } from "./breakpoints.interface";

export interface SliderSwiperProps extends SwiperOptions {
  className?: string;
  children: ReactNode[];
  paginationClickable?: boolean;
  paginationDynamicBullets?: boolean;
  paginationType?: "bullets" | "fraction" | "progressbar";
  scrollbarDraggable?: boolean;
  hash?: string;
  hashNavigationWatchState?: boolean;
  keyboardEnabled?: boolean;
  keyboardOnlyInViewport?: boolean;
  keyboardPageUpDown?: boolean;
  mousewheelSensitivity?: number;
  autoplayDelay?: number;
  autoplayStopOnLastSlide?: boolean;
  autoplayDisableOnInteraction?: boolean;
  breakpoints?: IBreakpoints;
}

const SliderSwiper: FC<SliderSwiperProps> = ({
  className,
  children,
  // Navigation
  navigation,

  // Pagination
  pagination,
  // Clickable
  paginationClickable = true,
  // Dynamic bullets
  paginationDynamicBullets,
  // Types: bullets, fraction, progressbar
  paginationType = "bullets",

  // Scrollbar
  scrollbar,
  // The ability to drag scrollbar
  scrollbarDraggable = true,

  // Turning/disabling dragging on a PC
  simulateTouch = true,
  // Sweep sensitivity
  touchRatio = 1,
  // Sweep/dragging angle
  touchAngle = 45,
  // Grab cursor
  grabCursor = true,
  // Switching when clicking on a slide
  slideToClickedSlide,

  // Hash navigation
  hash,
  // Track the condition
  hashNavigationWatchState,

  // Keyboard management

  // Turn on/off
  keyboardEnabled = true,
  // Turn on/off only when the slider is within the viewport
  keyboardOnlyInViewport = true,
  // Turn on/off the control control of PageUp, PageDown
  keyboardPageUpDown,

  // Mouse wheel control
  mousewheel,
  // The sensitivity of mouse wheel
  mousewheelSensitivity = 1,

  // Auto height
  autoHeight = true,
  // Number of slides for showing
  slidesPerView = 1,
  // Disabling functionality if there are more slides than needed
  watchOverflow = true,
  // The indent between the slides
  spaceBetween = 0,
  // The number of flipped slides
  slidesPerGroup = 1,
  // Active slide in the center
  centeredSlides,
  // Starting slide
  initialSlide = 0,
  // Loop slider
  loop,
  // Free mode
  freeMode,

  // Autoplay
  autoplay,
  // Pause between slides
  autoplayDelay = 1000,
  // Stop on last slide
  autoplayStopOnLastSlide,
  // Disable after manual override
  autoplayDisableOnInteraction,

  // Speed
  speed = 300,
  // horizontal/vertical slider
  direction = "horizontal",
  // Breakpoints (adaptive)
  breakpoints,
  // Update slider when slider items change
  observer = true,
  // Turn on/off parallax
  parallax,
  // Virtual slides
  virtual,
}) => {
  const { length: childrenLength } = children;

  const swiperRef = useRef<any>(null);

  const isBullets =
    pagination &&
    paginationType === "bullets" &&
    breakpoints &&
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    useBullets(breakpoints, slidesPerView, childrenLength);

  useEffect(() => {
    const swiperElement = swiperRef?.current;
    const swiper = swiperElement?.swiper;
    const swiperAutoplay = swiper?.autoplay;

    if (swiperAutoplay) {
      if (autoplay) {
        swiperAutoplay.start();
      } else {
        swiperAutoplay.stop();
      }
    }
  }, [autoplay]);

  useEffect(() => {
    const swiperElement = swiperRef?.current;
    const swiper = swiperElement?.swiper;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const {activeElement} = document;
        if (swiperElement?.contains(activeElement)) {
          swiper?.slideNext();
        }
      }
    };

    if (swiper) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  const slides = children.map((slide, index) => (
    <SwiperSlide
      /* eslint-disable-next-line react/no-array-index-key */
      key={index}
      {...(hash && {
        "data-hash": `${hash}-${index}`,
      })}
      {...(virtual && {
        virtualIndex: index,
      })}
    >
      {slide}
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={clsx(className, isBullets && "swiper--bullets")}
      ref={swiperRef}
      // Modules
      modules={[
        Navigation,
        Pagination,
        // Scrollbar,
        // HashNavigation,
        Keyboard,
        // Mousewheel,
        // FreeMode,
        // Autoplay,
        // Parallax,
        Virtual,
      ]}
      // Arrows
      navigation={navigation}
      // Pagination
      {...(pagination && {
        pagination: {
          // Clickable
          clickable: paginationClickable,
          // Dynamic bullets
          dynamicBullets: paginationDynamicBullets,
          // Types: bullets, fraction, progressbar
          type: paginationType,
        },
      })}
      // Scrollbar
      {...(scrollbar && {
        scrollbar: {
          // The ability to drag scrollbar
          draggable: scrollbarDraggable,
        },
      })}
      // Turning/disabling dragging on a PC
      simulateTouch={simulateTouch}
      // Sweep sensitivity
      touchRatio={touchRatio}
      // Sweep/dragging angle
      touchAngle={touchAngle}
      // Grab cursor
      grabCursor={grabCursor}
      // Switching when clicking on a slide
      slideToClickedSlide={slideToClickedSlide}
      // Hash navigation
      {...(hash && {
        hashNavigation:
          // Track the condition
          { watchState: hashNavigationWatchState },
      })}
      // Keyboard management
      {...(keyboardEnabled && {
        keyboard: {
          // Turn on/off
          enabled: keyboardEnabled,
          // Turn on/off only when the slider is within the viewport
          onlyInViewport: keyboardOnlyInViewport,
          // Turn on/off the control control of PageUp, PageDown
          pageUpDown: keyboardPageUpDown,
        },
      })}
      // Mouse wheel control
      {...(mousewheel && {
        mousewheel: {
          // The sensitivity of mouse wheel
          sensitivity: mousewheelSensitivity,
        },
      })}
      // Auto height
      autoHeight={autoHeight}
      // Number of slides for showing
      slidesPerView={slidesPerView}
      // Disabling functionality if there are more slides than needed
      watchOverflow={watchOverflow}
      // The indent between the slides
      spaceBetween={spaceBetween}
      // The number of flipped slides
      slidesPerGroup={slidesPerGroup}
      // Active slide in the center
      centeredSlides={centeredSlides}
      // Starting slide
      initialSlide={initialSlide}
      // Loop slider
      loop={loop}
      // Free mode
      freeMode={freeMode}
      // Autoplay
      {...(autoplay && {
        autoplay: {
          // Pause between slides
          delay: autoplayDelay,
          // Stop on last slide
          stopOnLastSlide: autoplayStopOnLastSlide,
          // Disable after manual override
          disableOnInteraction: autoplayDisableOnInteraction,
        },
      })}
      // Speed
      speed={speed}
      // Horizontal/vertical slider
      direction={direction}
      // Breakpoints (adaptive)
      breakpoints={breakpoints}
      // Update slider when slider items change
      observer={observer}
      // Turn on/off parallax
      parallax={parallax}
      // Virtual slides
      virtual={virtual}
    >
      {slides}
    </Swiper>
  );
};

export default SliderSwiper;
