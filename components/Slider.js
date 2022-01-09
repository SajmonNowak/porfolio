import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

SwiperCore.use([FreeMode, Pagination, Navigation]);

const Slider = ({
  children,
  freeMode,
  slides,
  nav,
  pagination,
  loop,
  noSpace,
}) => {
  return (
    <Swiper
      style={{ width: "100%", height: "100%" }}
      spaceBetween={noSpace ? 0 : "5%"}
      breakpoints={{
        700: {
          slidesPerView: slides,
        },
      }}
      slidesPerView={1.2}
      freeMode={freeMode ? true : false}
      preloadImages={true}
      slidesOffsetBefore={noSpace ? 0 : 20}
      slidesOffsetAfter={noSpace ? 0 : 20}
      loop={loop ? true : false}
      navigation={nav ? true : false}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
