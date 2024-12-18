import { StreamCarousel } from "../../StreamCarousel/StreamCarousel";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { carouselStreamData } from "./data";

export const StreamSection = () => {
  return (
    <section className="page__inner-section">
      <StreamCarousel data={carouselStreamData} />
      <ForwardBox
        name="Смотреть все"
        url="/streams"
        className="carousel__forward-box"
      />
    </section>
  );
};
