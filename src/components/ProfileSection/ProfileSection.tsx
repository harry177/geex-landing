import { useState } from "react";
import { Avatar } from "../ui/Avatar/Avatar";
import { Button } from "../ui/Button/Button";
import { Flex } from "../ui/Flex/Flex";
import { TabButton } from "../ui/TabButton/TabButton";
import "./profile-section.scss";

interface ProfileSectionProps {
  onTabChange: (tabName: string) => void;
}

export const ProfileSection = ({ onTabChange }: ProfileSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, tabName: string) => {
    setActiveTab(index);
    onTabChange(tabName);
  };

  return (
    <section className="page-section">
      <div className="profile__image-container">
        <div className="profile-logo">
          <img src="profile-logo.png"></img>
        </div>
      </div>
      <div className="rating-box">
        <img src="green-up-arrow.svg"></img>
        <span>№2</span>
      </div>
      <Flex column gap="16px" className="profile__info-container">
        <Flex align="center" gap="8px" className="profile__title-container">
          <h1 className="profile-title">
            Cпортивная Организация Алтайского Края
          </h1>
          <div className="profile__title-checkmark"></div>
        </Flex>
        <Flex align="center" gap="6px" className="profile__params-container">
          <img src="location-icon.svg" className="location-icon"></img>
          <p>Алтайский край</p>
          <div className="profile__grey-dot"></div>
          <p>Грэпплинг</p>
          <div className="profile__grey-dot"></div>
          <p>Греко-римская борьба</p>
          <div className="profile__grey-dot"></div>
          <p>Пляжная борьба</p>
        </Flex>
        <Flex
          align="center"
          gap="6px"
          className="profile__statistics-container"
        >
          <Flex className="profile__avatar-container">
            {Array.from([
              { image: "users/user-1.png" },
              { image: "users/user-2.png" },
              { image: "users/user-3.png" },
            ]).map((item, index) => (
              <Avatar key={index} size="small" range image={item.image} />
            ))}
          </Flex>
          <Flex
            align="center"
            gap="6px"
            className="profile__statistics-container__section"
          >
            <p>45</p>
            <p>Спортсменов</p>
          </Flex>
          <div className="profile__grey-dot"></div>
          <Flex
            align="center"
            gap="6px"
            className="profile__statistics-container__section"
          >
            <p>125</p>
            <p>Подписчиков</p>
          </Flex>
          <div className="profile__grey-dot"></div>
          <Flex
            align="center"
            gap="6px"
            className="profile__statistics-container__section"
          >
            <p>12</p>
            <p>Лиг</p>
          </Flex>
        </Flex>
        <Flex gap="8px" className="profile__medal-container">
          <Flex
            justify="space-evenly"
            align="center"
            className="profile__medal-container__section"
          >
            <div className="profile-medal medal-gold"></div>
            <p className="profile__medal-number">12</p>
          </Flex>
          <Flex
            justify="space-evenly"
            align="center"
            className="profile__medal-container__section"
          >
            <div className="profile-medal medal-silver"></div>
            <p className="profile__medal-number">4</p>
          </Flex>
          <Flex
            justify="space-evenly"
            align="center"
            className="profile__medal-container__section"
          >
            <div className="profile-medal medal-bronze"></div>
            <p className="profile__medal-number">19</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="10px" className="profile__button-container">
        <Button variant="primary">Подписаться</Button>
        <Button variant="secondary">Подробнее</Button>
        <Button variant="secondary" thin icon="./forward-arrow-icon.svg" />
      </Flex>
      <Flex gap="16px" className="profile__tabs-container">
        {Array.from(["Соревнования", "Результаты", "Новости"]).map(
          (item, index) => (
            <TabButton
              key={index}
              name={item}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index, item)}
              className="profile__tab-button"
            />
          )
        )}
      </Flex>
    </section>
  );
};
