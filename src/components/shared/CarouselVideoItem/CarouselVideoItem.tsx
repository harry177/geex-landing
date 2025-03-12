import { useTranslation } from "react-i18next";
import { Flex } from "@/components/ui/Flex/Flex";
import { CarouselDataTypes } from "@/components/ui/types";
import "./carousel-video-item.scss";

export const CarouselVideoItem = ({
  image,
  imageAlt,
  bannerDetails,
}: CarouselDataTypes) => {
  const { t } = useTranslation();

  return (
    <article className="carousel__video-item gap-14">
      <div>
        <div className="carousel__video-image__wrapper">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="carousel-item__image carousel__video-image"
          ></img>
        </div>
        {bannerDetails?.watch && (
          <Flex
            justify="center"
            align="center"
            className={`video-item__watch-banner gap-4`}
          >
            {<img src="white-eye-icon.svg"></img>}
            {t(bannerDetails.watch)}
          </Flex>
        )}
        {bannerDetails?.time && (
          <Flex
            justify="center"
            align="center"
            className={`video-item__time-banner gap-4`}
          >
            {bannerDetails.time}
          </Flex>
        )}
      </div>
    </article>
  );
};
