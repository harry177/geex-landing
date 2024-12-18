import { Flex } from "../../ui/Flex/Flex";
import "./tooltips.scss";

export const checkmarkContent = () => {
  return (
    <div className="checkmark-content">Организация прошла аккредитацию</div>
  );
};

export const ratingBoxContent = () => {
  return (
    <Flex column className="rating-box__content gap-16">
      <p className="par">Изменение места в рейтинге</p>
      <Flex column className="gap-12">
        <Flex justify="space-between">
          <span>1 Фев 2024</span>
          <Flex className="gap-4">
            <img src="green-up-arrow-small.svg"></img>
            <span>3</span>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <span>25 Янв 2024</span>
          <Flex className="gap-4">
            <img src="green-up-arrow-small.svg"></img>
            <span>6</span>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <span>2 Янв 2024</span>
          <Flex className="gap-4">
            <img src="red-down-arrow-small.svg"></img>
            <span>8</span>
          </Flex>
        </Flex>
      </Flex>
      <Flex column className="gap-12">
        <p>Рейтинг: Высокий</p>
        <span>
          Спортсмены организации показывают достаточно хорошие результаты на
          тренировках и соревнованиях.
        </span>
      </Flex>
    </Flex>
  );
};
