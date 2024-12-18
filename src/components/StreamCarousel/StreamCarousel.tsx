import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselDataTypes } from "../sections/StreamSection/data";
import { CarouselStreamItem } from "../CarouselStreamItem/CarouselStreamItem";
import "swiper/swiper-bundle.css";
import "./stream-carousel.scss";

export const StreamCarousel = ({ data }: { data: CarouselDataTypes[] }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
        pagination
        watchOverflow
        className="stream-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="stream-item__slide">
            <CarouselStreamItem
              image={item.image}
              title={item.title}
              banner={item.banner}
              company={item.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
