import { Carousel } from "../../Carousel/Carousel";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { carouselNewsData } from "./data";

export const NewsSection = () => {
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">Новости</h2>
        <Carousel type="news" data={carouselNewsData} />
      </Flex>
      <ForwardBox
        name="Смотреть все"
        url="/news"
        className="forward-box__news"
      />
    </section>
  );
};
