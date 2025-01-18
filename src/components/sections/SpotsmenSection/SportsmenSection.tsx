import { useState } from "react";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { TabButton } from "../../ui/TabButton/TabButton";
import { PersonItem } from "../../PersonItem/PersonItem";
import { sportsmenData } from "./data";
import { PersonTabButton } from "../../PersonTabButton/PersonTabButton";
import { WinnerItem } from "../../WinnerItem/WinnerItem";
import "./sportsmen-section.scss";

export const SportsmenSection = () => {
  const [activeGenderTab, setActiveGenderTab] = useState(0);
  const [activeWeightTab, setActiveWeightTab] = useState(0);

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
          <h3 className="section-title">Спортсмены</h3>
          <ForwardBox name="forward_box.show_all_persons" url="/sportsmen" />
        </Flex>
        <Flex className="gap-16">
          {Array.from([{ name: "Мужчины" }, { name: "Женщины" }]).map(
            (item, index) => (
              <TabButton
                key={index}
                name={item.name}
                isActive={activeGenderTab === index}
                onClick={() => handleGenderTabClick(index)}
                className="sportsmen__gender-button"
              />
            )
          )}
        </Flex>
        <Flex className="gap-6">
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
                  position={item.position}
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
                    <p>Спортсмен</p>
                  </Flex>
                  <p>Рейтинг</p>
                </Flex>
              </Flex>
            ) : (
              <PersonItem
                key={index}
                name={item.name}
                position={item.position}
                image={item.image}
                rank={item.rank}
                arrow={item.arrow}
                rating={item.rating}
                medal={item.medal}
                contentClassName="sportsmen-content"
                textClassName="sportsmen-text"
              />
            )
          )}
        </ul>
      </Flex>
    </section>
  );
};
