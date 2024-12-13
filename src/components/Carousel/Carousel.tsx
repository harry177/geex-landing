import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./carousel.scss";

export const HeroCarousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={"auto"}
        pagination
        watchOverflow
        style={{ height: "100%" }}
      >
        {Array.from([1, 2, 3, 4, 5]).map((item, index) => (
          <SwiperSlide
            key={index}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
