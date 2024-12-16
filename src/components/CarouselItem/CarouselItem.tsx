import { CarouselDataTypes } from "../StreamSection/data";
import { DotInfoLine } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import "./carousel-item.scss";

export const CarouselItem = ({
  image,
  title,
  banner,
  company,
}: CarouselDataTypes) => {
  return (
    <Flex column className="carousel-item gap-14">
      <img src={image} className="carousel-item__image"></img>
      <div className="carousel-item__title-box">
        <h4>{title}</h4>
      </div>
      <Flex>
        <img src={company.image} className="carousel-item__company-image"></img>
        <Flex column>
          <div className="carousel-item__company-name">
            <p>{company.name}</p>
          </div>
          <DotInfoLine
            data={[{ content: company.watchers }, { content: company.date }]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
