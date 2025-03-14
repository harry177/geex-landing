import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeaderNavItem } from "@/components/layout/header/HeaderNavItem/HeaderNavItem";
import { HeaderDrops } from "@/components/layout/header/HeaderDrops/HeaderDrops";
import { HeaderMobileSection } from "@/components/layout/header/HeaderMobileSection/HeaderMobileSection";
import { Logo } from "@/components/layout/Logo/Logo";
import { Avatar } from "@/components/ui/Avatar/Avatar";
import { DotInfoLine } from "@/components/ui/DotInfoLine/DotInfoLine";
import { Flex } from "@/components/ui/Flex/Flex";
import { BurgerIcon } from "@/svg/BurgerIcon";
import { languageData, navData, userData } from "./data";
import "./header.scss";

export const Header = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const [activePage, setActivePage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const desktop = useMediaQuery("(min-width: 1171px)");
  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1170px)");
  const mobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const currentPage = navData.findIndex(
      (page) => page.url === location.pathname
    );
    setActivePage(currentPage);
  }, [location.pathname]);

  useEffect(() => {
    const currentLangIndex = languageData.findIndex(
      (lang) => lang.section === i18n.language.toUpperCase()
    );
    setLanguageIndex(currentLangIndex);
  }, [i18n.language]);

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
                    <img src="bell-icon.svg" alt="Bell icon"/>
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
                      alt="Profile logo"
                      className="carousel-item__company-image"
                    ></img>
                    <Flex column>
                      <div className="carousel-item__company-name">
                        {t("organization_title")}
                      </div>
                      <DotInfoLine
                        data={[
                          {
                            content: "organization",
                            color: "light",
                          },
                          { content: "admin", color: "light" },
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
