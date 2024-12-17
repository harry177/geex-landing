import { Carousel } from "../Carousel/Carousel";
import { carouselData } from "./data";

export const StreamSection = () => {
  return (
    <section className="page__inner-section">
      <Carousel data={carouselData} />
    </section>
  );
};
