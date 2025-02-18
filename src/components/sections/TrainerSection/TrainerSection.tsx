import { useTranslation } from "react-i18next";
import { PersonItem } from "../../PersonItem/PersonItem";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { WinnerItem } from "../../WinnerItem/WinnerItem";
import { trainerData } from "./data";
import "./trainer-section.scss";

export const TrainerSection = () => {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex justify="space-between" align="center" className="w-full">
          <h3 className="section-title">{t("trainer_section.header")}</h3>
          <ForwardBox name="forward_box.show_all_persons" url="/trainers" />
        </Flex>
        <ul className="trainer-list">
          {trainerData.map((item, index) =>
            index === 0 ? (
              <Flex key={index} column className="gap-20">
                <WinnerItem
                  name={item.name}
                  position={t(item.position)}
                  image={item.image}
                  rating={item.rating}
                  background="blue"
                />
                <Flex justify="space-between" className="trainer-list__header">
                  <Flex className="gap-20">
                    <p>№</p>
                    <p>{t("rating_data.sportsman")}</p>
                  </Flex>
                  <p>{t("rating_data.rating")}</p>
                </Flex>
              </Flex>
            ) : (
              <PersonItem
                key={index}
                name={item.name}
                position={t(item.position)}
                image={item.image}
                rank={item.rank}
                arrow={item.arrow}
                rating={item.rating}
                medal={item.medal}
                textClassName="trainer-text"
              />
            )
          )}
        </ul>
      </Flex>
    </section>
  );
};
