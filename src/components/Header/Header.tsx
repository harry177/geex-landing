import { useState } from "react";
import { Flex } from "../ui/Flex/Flex";
import { languageData, navData, userData } from "./data";
import "./header.scss";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import { Avatar } from "../ui/Avatar/Avatar";

export const Header = () => {
  const [activePage, setActivePage] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <header className="header">
      <Flex className="header-container">
        <Flex justify="space-between">
          <Flex justify="center" align="center" className="logo-box">
            <img src="logo.svg"></img>
          </Flex>
        </Flex>
        <nav>
          <ul className="nav-list">
            {Array.from(navData).map(({ page, icon }, index) => (
              <HeaderNavItem
                key={index}
                page={page}
                icon={icon}
                isActive={activePage === index}
                handleNavItemClick={() => handleNavItemClick(index)}
              />
            ))}
          </ul>
        </nav>
        <Flex align="center" className="gap-40">
          <Dropdown
            items={languageData}
            dispatchedIcon
            menuClassName="header__language-dropdown"
          />
          <Flex align="center" className="gap-16">
            <Flex className="header-bell">
              <img src="bell-icon.svg" />
            </Flex>
            <Dropdown
              label="Александр Магомедов"
              items={userData}
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
