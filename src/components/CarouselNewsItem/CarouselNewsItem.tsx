import { CarouselDataTypes } from "../Carousel/Carousel";
import { DotInfoLine } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import "./carousel-news-item.scss";

export const CarouselNewsItem = ({
  image,
  title,
  company,
}: CarouselDataTypes) => {
  return (
    <Flex column className="carousel__news-item gap-14">
      <Flex>
        <img src={company?.image} className="carousel-item__company-image"></img>
        <Flex column className="gap-3">
          <div className="carousel-item__company-name">{company?.name}</div>
          <div className="carousel-item__company-date">{company?.date}</div>
        </Flex>
      </Flex>
      <div className="carousel__news-item__title-box">{title}</div>
      <div>
        <img src={image} className="carousel__news-item__image"></img>
      </div>
      <DotInfoLine
        data={[
          {
            content: company?.watchers,
            icon: "eye-icon.svg",
            color: "dark",
          },
        ]}
        gap={6}
      />
    </Flex>
  );
};
