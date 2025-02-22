import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem";
import { HeaderDrops } from "../HeaderDrops/HeaderDrops";
import { HeaderMobileSection } from "../HeaderMobileSection/HeaderMobileSection";
import { Logo } from "../Logo/Logo";
import { Avatar } from "../ui/Avatar/Avatar";
import { DotInfoLine } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import { BurgerIcon } from "../../svg/BurgerIcon";
import { languageData, navData, userData } from "./data";
import "./header.scss";

export const Header = () => {
  const [activePage, setActivePage] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const { i18n, t } = useTranslation();

  const desktop = useMediaQuery("(min-width: 1171px)");
  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1170px)");
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const currentLangIndex = languageData.findIndex(
      (lang) => lang.section === i18n.language.toUpperCase()
    );
    setLanguageIndex(currentLangIndex);
  }, [i18n.language]);

  const handleNavItemClick = (index: number) => {
    setActivePage(index);
  };

  const toggleMobileHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Flex className="header-container">
        {desktop && <Logo type="header" />}
        {tablet && (
          <Flex justify="space-between" className="header__tablet-layer">
            <Logo type="header" />
            <HeaderDrops />
          </Flex>
        )}
        {mobile && (
          <>
            <Flex justify="space-between" className="header__tablet-layer">
              <Logo type="header" />
              <button
                className="header__cross-button"
                onClick={toggleMobileHeader}
              >
                <BurgerIcon isActive={isOpen} />
              </button>
            </Flex>
            {isOpen && (
              <div className="header__mobile-layer">
                <HeaderMobileSection category="profile" items={userData}>
                  <Avatar image="users/main-user.png" />
                  <p>Александр Магомедов</p>
                  <Flex className="header-bell">
                    <img src="bell-icon.svg" />
                  </Flex>
                </HeaderMobileSection>
                <HeaderMobileSection category="lang" items={languageData}>
                  {languageData[languageIndex].icon()}
                  <p>{i18n.language.toUpperCase()}</p>
                </HeaderMobileSection>
                <HeaderMobileSection category="nav" items={navData}>
                  <Flex>
                    <img
                      src={"profile-logo.png"}
                      className="carousel-item__company-image"
                    ></img>
                    <Flex column>
                      <div className="carousel-item__company-name">
                        {t("organization_title")}
                      </div>
                      <DotInfoLine
                        data={[
                          {
                            content: t("organization"),
                            color: "light",
                          },
                          { content: t("admin"), color: "light" },
                        ]}
                        gap={6}
                      />
                    </Flex>
                  </Flex>
                </HeaderMobileSection>
              </div>
            )}
          </>
        )}
        {!mobile && (
          <nav>
            <ul className="nav-list">
              {navData.map(({ section, icon, url }, index) => (
                <HeaderNavItem
                  key={index}
                  page={t(section)}
                  icon={icon}
                  url={url}
                  isActive={activePage === index}
                  handleNavItemClick={() => handleNavItemClick(index)}
                />
              ))}
            </ul>
          </nav>
        )}
        {desktop && <HeaderDrops />}
      </Flex>
    </header>
  );
};
