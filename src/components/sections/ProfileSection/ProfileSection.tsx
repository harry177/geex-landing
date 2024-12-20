import { useState } from "react";
import { Avatar } from "../../ui/Avatar/Avatar";
import { Button } from "../../ui/Button/Button";
import { Flex } from "../../ui/Flex/Flex";
import { TabButton } from "../../ui/TabButton/TabButton";
import { DotInfoLine } from "../../ui/DotInfoLine/DotInfoLine";
import { profileInfoLine } from "./data";
import { Tooltip } from "../../ui/Tooltip/Tooltip";
import { checkmarkContent, ratingBoxContent } from "./tooltips";
import { Popup } from "../../ui/Popup/Popup";
import { popupContent } from "./popupContent";
import "./profile-section.scss";

interface ProfileSectionProps {
  onTabChange: (tabName: string) => void;
}

export const ProfileSection = ({ onTabChange }: ProfileSectionProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleTabClick = (index: number, tabName: string) => {
    setActiveTab(index);
    onTabChange(tabName);
  };

  return (
    <>
      <section className="page-section">
        <div className="profile__image-container">
          <div className="profile-logo">
            <img src="profile-logo.png"></img>
          </div>
        </div>
        <Flex justify="flex-end">
          <Tooltip content={ratingBoxContent()} position="down-right">
            <div className="rating-box">
              <img src="green-up-arrow.svg"></img>
              <span>№2</span>
            </div>
          </Tooltip>
        </Flex>
        <Flex column gap="16px" className="profile__info-container">
          <Flex align="center" gap="8px" className="profile__title-container">
            <h1 className="profile-title">
              Cпортивная Организация Алтайского Края
            </h1>
            <Tooltip content={checkmarkContent()} position="up">
              <Flex align="flex-end">
                <img
                  src="title-checkmark.png"
                  className="profile__title-checkmark"
                ></img>
              </Flex>
            </Tooltip>
          </Flex>
          <DotInfoLine data={profileInfoLine} gap={6} />
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
          <Button variant="secondary" onClick={togglePopup}>
            Подробнее
          </Button>
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
      <Popup
        isOpen={isPopupOpen}
        children={popupContent()}
        onClose={togglePopup}
      />
    </>
  );
};
