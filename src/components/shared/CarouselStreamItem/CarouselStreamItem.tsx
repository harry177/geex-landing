import { useTranslation } from "react-i18next";
import { DotInfoLine } from "@/components/ui/DotInfoLine/DotInfoLine";
import { Flex } from "@/components/ui/Flex/Flex";
import { CarouselDataTypes } from "@/components/ui/types";
import "./carousel-stream-item.scss";

export const CarouselStreamItem = ({
  image,
  imageAlt,
  title,
  banner,
  company,
}: CarouselDataTypes) => {
  const { t } = useTranslation();

  return (
    <article className="carousel__stream-item gap-14">
      <div>
        <img src={image} alt={imageAlt} loading="lazy" className="carousel-item__image"></img>
        {banner && (
          <Flex
            justify="center"
            align="center"
            className={`carousel-item__image-banner gap-4 ${
              banner === "current"
                ? "image-banner__current"
                : "image-banner__paid"
            }`}
          >
            {banner === "paid" && <img src="banknote.svg"></img>}
            {banner === "current"
              ? t("stream_section.banner.current")
              : t("stream_section.banner.paid")}
          </Flex>
        )}
      </div>
      <div className="carousel__stream-item__title-box">
        {title && t(title)}
      </div>
      <Flex>
        <img
          src={company?.image}
          className="carousel-item__company-image"
        ></img>
        <Flex column>
          <div className="carousel-item__company-name">
            {company && t(company.name)}
          </div>
          <DotInfoLine
            data={[
              {
                content: company?.watchers,
                icon: "eye-icon.svg",
                color: "dark",
              },
              { content: company?.date, color: "dark" },
            ]}
            gap={6}
          />
        </Flex>
      </Flex>
    </article>
  );
};
