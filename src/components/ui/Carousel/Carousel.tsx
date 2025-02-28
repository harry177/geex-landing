import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselItemComponents } from "./data";
import { CarouselProps } from "../types";
import "swiper/swiper-bundle.css";
import "./carousel.scss";

export const Carousel = ({ type, data }: CarouselProps) => {
  const CarouselItem = CarouselItemComponents[type] || null;

  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
        pagination
        watchOverflow
        className={`swiper__${type}`}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={`swiper-slide__${type}`}>
            {CarouselItem && <CarouselItem {...item} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
