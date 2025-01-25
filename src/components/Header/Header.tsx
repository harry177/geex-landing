import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem";
import { HeaderDrops } from "../HeaderDrops/HeaderDrops";
import { Flex } from "../ui/Flex/Flex";
import { navData } from "./data";
import "./header.scss";

export const Header = () => {
  const [activePage, setActivePage] = useState(4);

  const { t } = useTranslation();

  const tablet = useMediaQuery("(max-width: 1170px)");

  const handleNavItemClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <header className="header">
      <Flex className="header-container">
        {!tablet && (
          <Link to="/">
            <Flex justify="center" align="center" className="logo-box">
              <img src="logo.svg"></img>
            </Flex>
          </Link>
        )}
        {tablet && (
          <Flex justify="space-between" className="header__tablet-layer">
            <Link to="/">
              <Flex justify="center" align="center" className="logo-box">
                <img src="logo.svg"></img>
              </Flex>
            </Link>
            <HeaderDrops />
          </Flex>
        )}
        <nav>
          <ul className="nav-list">
            {navData.map(({ page, icon, url }, index) => (
              <HeaderNavItem
                key={index}
                page={t(page)}
                icon={icon}
                url={url}
                isActive={activePage === index}
                handleNavItemClick={() => handleNavItemClick(index)}
              />
            ))}
          </ul>
        </nav>
        {!tablet && <HeaderDrops />}
      </Flex>
    </header>
  );
};
