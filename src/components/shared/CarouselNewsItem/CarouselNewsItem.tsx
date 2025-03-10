import { useTranslation } from "react-i18next";
import { DotInfoLine } from "../../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../../ui/Flex/Flex";
import { CarouselDataTypes } from "../../ui/types";
import "./carousel-news-item.scss";

export const CarouselNewsItem = ({
  image,
  imageAlt,
  title,
  company,
}: CarouselDataTypes) => {
  const { t } = useTranslation();

  return (
    <article className="carousel__news-item gap-14">
      <Flex>
        <img
          src={company?.image}
          alt="Organization logo"
          className="carousel-item__company-image"
        ></img>
        <Flex column className="gap-3">
          <div className="carousel-item__company-name">
            {company && t(company.name)}
          </div>
          <div className="carousel-item__company-date">
            {company && t(company.date)}
          </div>
        </Flex>
      </Flex>
      <div className="carousel__news-item__title-box">{title && t(title)}</div>
      <div>
        <img src={image} alt={imageAlt} loading="lazy" className="carousel__news-item__image"></img>
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
    </article>
  );
};
