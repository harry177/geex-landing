import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import { Avatar } from "../ui/Avatar/Avatar";
import { Flex } from "../ui/Flex/Flex";
import { languageData, navData, userData } from "./data";
import "./header.scss";

export const Header = () => {
  const [activePage, setActivePage] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <header className="header">
      <Flex className="header-container">
        <Link to="/">
          <Flex justify="center" align="center" className="logo-box">
            <img src="logo.svg"></img>
          </Flex>
        </Link>
        <nav>
          <ul className="nav-list">
            {navData.map(({ page, icon, url }, index) => (
              <HeaderNavItem
                key={index}
                page={page}
                icon={icon}
                url={url}
                isActive={activePage === index}
                handleNavItemClick={() => handleNavItemClick(index)}
              />
            ))}
          </ul>
        </nav>
        <Flex align="center" className="gap-30">
          <Dropdown
            items={languageData}
            dispatchedContent
            rootClassName="header__language-dropdown__root"
            menuClassName="header__language-dropdown"
            itemClassName="header__language-dropdown__item"
          />
          <Flex align="center" className="gap-20">
            <Flex className="header-bell">
              <img src="bell-icon.svg" />
            </Flex>
            <Dropdown
              label="Александр Магомедов"
              items={userData}
              menuHeader
              rootClassName="gap-8"
              menuClassName="header__user-dropdown"
              itemClassName="header__user-dropdown__item"
            >
              <Avatar image="users/main-user.png" />
            </Dropdown>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};
