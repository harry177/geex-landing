import { Carousel } from "../../Carousel/Carousel";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { carouselStreamData } from "./data";

export const StreamSection = () => {
  return (
    <section className="page__inner-section">
      <Carousel type="stream" data={carouselStreamData} />
      <ForwardBox
        name="forward_box.show_all"
        url="/streams"
        className="forward-box__stream"
      />
    </section>
  );
};
