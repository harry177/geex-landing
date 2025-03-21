import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MedalBox } from "@/components/shared/MedalBox/MedalBox";
import { Avatar } from "@/components/ui/Avatar/Avatar";
import { Button } from "@/components/ui/Button/Button";
import { Flex } from "@/components/ui/Flex/Flex";
import { TabButton } from "@/components/ui/TabButton/TabButton";
import { DotInfoLine } from "@/components/ui/DotInfoLine/DotInfoLine";
import { Tooltip } from "@/components/ui/Tooltip/Tooltip";
import { Popup } from "@/components/ui/Popup/Popup";
import { ProfilePopup } from "@/components/pages/organization/popups/ProfilePopup/ProfilePopup";
import { CheckmarkContent } from "@/components/pages/organization/tooltips/CheckmarkContent/CheckmarkContent";
import { RatingBoxContent } from "@/components/pages/organization/tooltips/RatingBoxContent/RatingBoxContent";
import { profileInfoLine, profileMedals, profileMembers } from "./data";
import { PROFILE_TAB_KEYS } from "./constants";
import { ProfileSectionProps } from "@/components/pages/organization/types";
import "./profile-section.scss";

export const ProfileSection = ({ onTabChange }: ProfileSectionProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { t } = useTranslation();

  const mobile = useMediaQuery("(max-width: 768px)");

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
          <Tooltip
            content={RatingBoxContent()}
            positionClassname="tooltip-down-right"
          >
            <div className="rating-box">
              <img src="green-up-arrow.svg"></img>
              <span>№2</span>
            </div>
          </Tooltip>
        </Flex>
        <Flex column gap="16px" className="profile__info-container">
          <Flex align="center" gap="8px" className="profile__title-container">
            <h1 className="profile-title">{t("organization_title")}</h1>
            <Tooltip
              content={CheckmarkContent()}
              positionClassname={mobile ? "tooltip-up-right" : "tooltip-up"}
            >
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
            <DotInfoLine data={profileMembers} gap={6} />
          </Flex>
          <Flex gap="8px" className="profile__medal-container">
            {profileMedals.map((item, index) => (
              <MedalBox key={index} medal={item.medal} amount={item.amount}/>
            ))}
          </Flex>
        </Flex>
        <Flex gap="10px" className="profile__button-container">
          <Button variant="primary">
            {t("profile_section.buttons.subscribe")}
          </Button>
          <Button variant="secondary" onClick={togglePopup}>
            {t("profile_section.buttons.details")}
          </Button>
          <Button variant="secondary" thin icon="./forward-arrow-icon.svg" />
        </Flex>
        <Flex
          justify={"space-between"}
          className={`${
            !mobile ? "gap-16" : "w-section"
          } profile__tabs-container`}
        >
          {Array.from([
            PROFILE_TAB_KEYS.COMPETITIONS,
            PROFILE_TAB_KEYS.RESULTS,
            PROFILE_TAB_KEYS.NEWS,
          ]).map((item, index) => (
            <TabButton
              key={index}
              name={t(item)}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index, item)}
              className="profile__tab-button"
            />
          ))}
        </Flex>
      </section>
      <Popup
        isOpen={isPopupOpen}
        children={ProfilePopup()}
        onClose={togglePopup}
      />
    </>
  );
};
