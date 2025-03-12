import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "@/components/ui/Flex/Flex";
import { ForwardBox } from "@/components/ui/ForwardBox/ForwardBox";
import { TabButton } from "@/components/ui/TabButton/TabButton";
import { PersonItem } from "@/components/shared/PersonItem/PersonItem";
import { PersonTabButton } from "@/components/shared/PersonTabButton/PersonTabButton";
import { WinnerItem } from "@/components/shared/WinnerItem/WinnerItem";
import { sportsmenData } from "./data";
import "./sportsmen-section.scss";

export const SportsmenSection = () => {
  const [activeGenderTab, setActiveGenderTab] = useState(0);
  const [activeWeightTab, setActiveWeightTab] = useState(0);

  const { t } = useTranslation();

  const handleGenderTabClick = (index: number) => {
    setActiveGenderTab(index);
  };

  const handleWeightTabClick = (index: number) => {
    setActiveWeightTab(index);
  };

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex justify="space-between" align="center" className="w-full">
          <h3 className="section-title">{t("sportsmen_section.header")}</h3>
          <ForwardBox name="forward_box.show_all_persons" url="/sportsmen" />
        </Flex>
        <Flex justify="center" className="w-full gap-16">
          {Array.from([
            { name: "sportsmen_section.men" },
            { name: "sportsmen_section.women" },
          ]).map((item, index) => (
            <TabButton
              key={index}
              name={t(item.name)}
              isActive={activeGenderTab === index}
              onClick={() => handleGenderTabClick(index)}
              className="sportsmen__gender-button"
            />
          ))}
        </Flex>
        <Flex justify="center" className="w-full gap-6">
          {Array.from([
            { name: "57 kg" },
            { name: "61 kg" },
            { name: "70 kg" },
            { name: "74 kg" },
          ]).map((item, index) => (
            <PersonTabButton
              key={index}
              name={item.name}
              isActive={activeWeightTab === index}
              onClick={() => handleWeightTabClick(index)}
            />
          ))}
          <button className="sportsmen__next-weight__button">...</button>
        </Flex>
        <ul className="sportsmen-list">
          {sportsmenData.map((item, index) =>
            index === 0 ? (
              <Flex key={index} column className="gap-20">
                <WinnerItem
                  name={item.name}
                  position={t(item.position)}
                  image={item.image}
                  rating={item.rating}
                  background="red"
                />
                <Flex
                  justify="space-between"
                  className="sportsmen-list__header"
                >
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
                textClassName="sportsmen-text"
              />
            )
          )}
        </ul>
      </Flex>
    </section>
  );
};
