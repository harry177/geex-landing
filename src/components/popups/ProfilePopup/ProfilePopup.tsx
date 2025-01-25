import { useTranslation } from "react-i18next";
import { Flex } from "../../ui/Flex/Flex";
import { profilePopupData } from "./data";
import "./profile-popup.scss";

export const ProfilePopup = () => {
  const { t } = useTranslation();

  return (
    <Flex column className="company-profile__popup">
      <p>{t(profilePopupData.header)}</p>
      <Flex column className="gap-32">
        <Flex className="gap-12">
          <article className="popup-block popup__block-small">
            <p>{t(profilePopupData.phone.title)}</p>
            <span>{profilePopupData.phone.content}</span>
          </article>
          <article className="popup-block popup__block-small">
            <p>{profilePopupData.email.title}</p>
            <span>{profilePopupData.email.content}</span>
          </article>
        </Flex>
        <article className="popup-block popup__block-big">
          <p>{t(profilePopupData.address.title)}</p>
          <span>{t(profilePopupData.address.content)}</span>
        </article>
        <article className="popup-block popup__block-big">
          <p>{t(profilePopupData.about.title)}</p>
          <span>{t(profilePopupData.about.content)}</span>
        </article>
        <Flex className="gap-12">
          <article className="popup-block popup__block-small">
            <p>{t(profilePopupData.president.title)}</p>
            <span>{profilePopupData.president.content}</span>
          </article>
          <article className="popup-block popup__block-small">
            <p>{t(profilePopupData.responsible.title)}</p>
            <span>{profilePopupData.responsible.content}</span>
          </article>
        </Flex>
        <article className="popup-block popup__block-big">
          <p>{t(profilePopupData.site.title)}</p>
          <span>{profilePopupData.site.content}</span>
        </article>
        <article className="popup-block popup__block-big">
          <p>{t(profilePopupData.time.title)}</p>
          <span>{t(profilePopupData.time.content)}</span>
        </article>
      </Flex>
    </Flex>
  );
};
