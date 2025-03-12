import { Carousel } from "@/components/ui/Carousel/Carousel";
import { Flex } from "@/components/ui/Flex/Flex";
import { ForwardBox } from "@/components/ui/ForwardBox/ForwardBox";
import { carouselVideoData } from "./data";

export const VideoSection = () => {
  return (
    <section className="page__inner-section">
      <Flex column className="gap-20">
        <Carousel type="video" data={carouselVideoData} />

        <ForwardBox
          name="forward_box.show_all"
          url="/videos"
          className="forward-box__video"
        />
      </Flex>
    </section>
  );
};
