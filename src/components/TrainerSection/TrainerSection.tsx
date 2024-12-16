import { PersonItem } from "../PersonItem/PersonItem";
import { Flex } from "../ui/Flex/Flex";
import { ForwardBox } from "../ui/ForwardBox/ForwardBox";
import { WinnerItem } from "../WinnerItem/WinnerItem";
import { trainerData } from "./data";
import "./trainer-section.scss";

export const TrainerSection = () => {
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex justify="space-between" align="center" className="w-full">
          <h3 className="section-title">Тренеры</h3>
          <ForwardBox name="Смотреть всех" url="/" />
        </Flex>
        <ul className="trainer-list">
          {trainerData.map((item, index) =>
            index === 0 ? (
              <Flex key={index} column className="gap-20">
                <WinnerItem
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  rating={item.rating}
                  background="blue"
                />
                <Flex justify="space-between" className="trainer-list__header">
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
                contentClassName="trainer-content"
                textClassName="trainer-text"
              />
            )
          )}
        </ul>
      </Flex>
    </section>
  );
};
