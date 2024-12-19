import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselStreamItem } from "../CarouselStreamItem/CarouselStreamItem";
import { CarouselNewsItem } from "../CarouselNewsItem/CarouselNewsItem";
import { CarouselVideoItem } from "../CarouselVideoItem/CarouselVideoItem";
import "swiper/swiper-bundle.css";
import "./carousel.scss";

export interface CarouselDataTypes {
  image: string;
  title?: string;
  banner?: string;
  bannerDetails?: {
    watch: string;
    time: string;
  };
  company?: {
    image: string;
    name: string;
    watchers: string;
    date: string;
  };
}

interface CarouselProps {
  type: "stream" | "news" | "video";
  data: CarouselDataTypes[];
}

const CarouselItemComponents = {
  stream: CarouselStreamItem,
  news: CarouselNewsItem,
  video: CarouselVideoItem,
};

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
