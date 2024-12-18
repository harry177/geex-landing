import { CarouselDataTypes } from "../sections/StreamSection/data";
import { DotInfoLine } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import "./carousel-stream-item.scss";

export const CarouselStreamItem = ({
  image,
  title,
  banner,
  company,
}: CarouselDataTypes) => {
  return (
    <Flex column className="carousel__stream-item gap-14">
      <div>
        <img src={image} className="carousel-item__image"></img>
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
            {banner === "current" ? "В эфире" : "Платный эфир"}
          </Flex>
        )}
      </div>
      <div className="carousel__stream-item__title-box">{title}</div>
      <Flex>
        <img src={company.image} className="carousel-item__company-image"></img>
        <Flex column>
          <div className="carousel-item__company-name">{company.name}</div>
          <DotInfoLine
            data={[
              {
                content: company.watchers,
                icon: "eye-icon.svg",
                color: "dark",
              },
              { content: company.date, color: "dark" },
            ]}
            gap={6}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
