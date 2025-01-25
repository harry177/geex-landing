import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languageData, userData } from "../Header/data";
import { Avatar } from "../ui/Avatar/Avatar";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import { Flex } from "../ui/Flex/Flex";

export const HeaderDrops = () => {
  const [language, setLanguage] = useState("en");

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (itemName: string) => {
    setLanguage(itemName.toLowerCase());
  };

  return (
    <Flex align="center" className="gap-30">
      <Dropdown
        items={languageData}
        dispatchedContent
        onItemChange={handleLanguageChange}
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
  );
};
