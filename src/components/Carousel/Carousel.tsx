import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./carousel.scss";
import { CarouselDataTypes } from "../StreamSection/data";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { ForwardBox } from "../ui/ForwardBox/ForwardBox";

export const Carousel = ({ data }: { data: CarouselDataTypes[] }) => {
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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem
              image={item.image}
              title={item.title}
              banner={item.banner}
              company={item.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ForwardBox name="Смотреть все" url="/" className="carousel__forward-box"/>
    </div>
  );
};
