import { languageData, userData } from "@/components/layout/header/Header/data";
import { Avatar } from "@/components/ui/Avatar/Avatar";
import { Dropdown } from "@/components/ui/Dropdown/Dropdown";
import { Flex } from "@/components/ui/Flex/Flex";

export const HeaderDrops = () => {
  return (
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
          <img src="bell-icon.svg" alt="Bell icon"/>
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
