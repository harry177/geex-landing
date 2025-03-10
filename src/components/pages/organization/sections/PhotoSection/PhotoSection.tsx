import { Flex } from "../../../../ui/Flex/Flex";
import { ForwardBox } from "../../../../ui/ForwardBox/ForwardBox";
import { photoData } from "./data";
import "./photo-section.scss";

export const PhotoSection = () => {
  return (
    <section className="page__inner-section">
      <Flex column className="gap-20">
        <div className="grid-container">
          {photoData.map((photo, index) => (
            <img key={index} src={photo} alt="Photo of sport activity" loading="lazy" className="grid-item"></img>
          ))}
        </div>
        <Flex justify="flex-end">
          <ForwardBox name="forward_box.show_all" url="/photos" />
        </Flex>
      </Flex>
    </section>
  );
};
