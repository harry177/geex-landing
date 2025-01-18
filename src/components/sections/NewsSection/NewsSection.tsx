import { useTranslation } from "react-i18next";
import { Carousel } from "../../Carousel/Carousel";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { carouselNewsData } from "./data";

export const NewsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">{t("news_section.header")}</h2>
        <Carousel type="news" data={carouselNewsData} />
      </Flex>
      <ForwardBox
        name="forward_box.show_all"
        url="/news"
        className="forward-box__news"
      />
    </section>
  );
};
