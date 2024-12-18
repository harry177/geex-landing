import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselDataTypes } from "../sections/StreamSection/data";
import { CarouselNewsItem } from "../CarouselNewsItem/CarouselNewsItem";
import "swiper/swiper-bundle.css";
import "./news-carousel.scss";

export const NewsCarousel = ({ data }: { data: CarouselDataTypes[] }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
        pagination
        watchOverflow
        className="news-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselNewsItem
              image={item.image}
              title={item.title}
              company={item.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
