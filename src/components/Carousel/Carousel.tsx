import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselDataTypes } from "../StreamSection/data";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { ForwardBox } from "../ui/ForwardBox/ForwardBox";
import "swiper/swiper-bundle.css";
import "./carousel.scss";

export const Carousel = ({ data }: { data: CarouselDataTypes[] }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
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
      <ForwardBox name="Смотреть все" url="/streams" className="carousel__forward-box"/>
    </div>
  );
};
