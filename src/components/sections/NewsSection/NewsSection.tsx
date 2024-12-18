import { NewsCarousel } from "../../NewsCarousel/NewsCarousel";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { carouselNewsData } from "./data";

export const NewsSection = () => {
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">Новости</h2>
        <NewsCarousel data={carouselNewsData} />
      </Flex>
      <ForwardBox
        name="Смотреть все"
        url="/news"
        className="news-carousel__forward-box"
      />
    </section>
  );
};
