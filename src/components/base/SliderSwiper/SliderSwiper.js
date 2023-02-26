// import Swiper core and required modules
import {
  Navigation,
  // Pagination,
  // Scrollbar,
  // Keyboard,
  // HashNavigation,
  // Parallax,
} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";
import "swiper/scss/keyboard";

function SliderSwiper(props) {
  return (
    <Swiper
      className={`${props.className}__slider`}
      // Modules
      modules={[
        Navigation,
        // Pagination,
        // Scrollbar
        // Keyboard,
        // HashNavigation,
        // Parallax,
      ]}
      // Arrows
      navigation
      // Pagination
      pagination={{
        // Clickable
        clickable: props.paginationClickable,
        // Dynamic bullets
        dynamicBullets: props.paginationDynamicBullets,
        // Types: bullets, fraction, progressbar
        type: props.paginationType,
      }}
      // Scroll
      // scrollbar={{
      //   // The ability to drag scroll
      //   draggable: props.scrollBarDraggable,
      // }}
      // Turning/disabling dragging on a PC
      simulateTouch={props.simulateTouch}
      // Sweep sensitivity
      touchRatio={props.touchRatio}
      // Sweep/dragging angle
      touchAngle={props.touchAngle}
      // Grab cursor
      grabCursor={props.grabCursor}
      // Switching when clicking on a slide
      slideToClickedSlide={props.slideToClickedSlide}
      // Hash navigation
      {...(props.hash && {
        hashNavigation:
          // Track the condition
          { watchState: props.hashNavigationWatchState },
      })}
      // Keyboard management
      keyboard={{
        // Turn on/off
        enabled: props.keyboardEnabled,
        // Turn on/off only when the slider within the voucher
        onlyInViewport: props.keyboardOnlyInViewport,
        // Turn on/off the control control of PageUp, PageDown
        pageUpDown: props.keyboardPageUpDown,
      }}
      // Auto height
      autoHeight={props.autoHeight}
      // Number of slides for showing
      slidesPerView={props.slidesPerView}
      // The indent between the slides
      spaceBetween={props.spaceBetween}
      // The number of flipped slides
      slidesPerGroup={props.slidesPerGroup}
      // Active slide in the center
      centeredSlides={props.centeredSlides}
      // Starting slide
      initialSlide={props.initialSlide}
      // Loop slider
      loop={props.loop}
      // Speed
      speed={props.speed}
      // Horizontal/vertical slider
      direction={props.direction}
      // Breakpoints (adaptive)
      breakpoints={props.breakpoints}
      // Turn on/off parallax
      parallax={props.parallax}
    >
      {props.children.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={`${props.className}__slide`}
          data-hash={props.hash && `${props.hash}-${index}`}
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SliderSwiper.defaultProps = {
  // Pagination

  // Clickable
  paginationClickable: true,
  // Dynamic bullets
  paginationDynamicBullets: false,
  // Types: bullets, fraction, progressbar
  paginationType: "",

  // The ability to drag scroll
  // scrollBarDraggable: true,

  // Turning/disabling dragging on a PC
  simulateTouch: true,
  // Sweep sensitivity
  touchRatio: 1,
  // Sweep/dragging angle
  touchAngle: 45,
  // Grab cursor
  grabCursor: true,
  // Switching when clicking on a slide
  slideToClickedSlide: false,

  // Hash navigation

  // Track the condition
  hashNavigationWatchState: false,

  // Keyboard management

  // Turn on/off
  keyboardEnabled: true,
  // Turn on/off only when the slider within the voucher
  keyboardOnlyInViewport: true,
  // Turn on/off the control control of PageUp, PageDown
  keyboardPageUpDown: false,

  // Auto height
  autoHeight: true,
  // Number of slides for showing
  slidesPerView: 1,
  // The indent between the slides
  spaceBetween: 30,
  // The number of flipped slides
  slidesPerGroup: 1,
  // Active slide in the center
  centeredSlides: false,
  // Starting slide
  initialSlide: 0,
  // Loop slider
  loop: false,
  // Speed
  speed: 300,
  // Horizontal/vertical slider
  direction: "horizontal",
  // Breakpoints (adaptive)
  breakpoints: "",
  // Turn on/off parallax
  parallax: false,
};

export default SliderSwiper;
