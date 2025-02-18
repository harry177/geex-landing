import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex } from "../ui/Flex/Flex";
import { Link } from "react-router-dom";

interface HeaderMobileSectionProps {
  category: "profile" | "lang" | "nav";
  children: ReactNode;
  items: {
    section: string;
    icon?: (color: string) => ReactNode;
    url?: string;
  }[];
}

export const HeaderMobileSection = ({
  category,
  children,
  items,
}: HeaderMobileSectionProps) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const initialState = () => {
    switch (category) {
      case "profile":
        return null;
      case "lang":
        return items.findIndex(
          (lang) => lang.section === i18n.language.toUpperCase()
        );
      case "nav":
        return items.findIndex((page) => page.url === location.pathname);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialState());

  const toggleSectionContent = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (index: number, itemName: string) => {
    if (category === "lang") {
      i18n.changeLanguage(itemName.toLowerCase());
    }
    setSelectedItem(index);
  };

  return (
    <Flex column={isOpen} align="center" justify="center">
      <Flex
        justify="space-between"
        align="center"
        className="header__mobile-section"
      >
        <Flex align="center" className="gap-10">{children}</Flex>
        <div className="chevron-box">
          <img
            src={`${isOpen ? "chevron-up.svg" : "chevron-down.svg"}`}
            onClick={toggleSectionContent}
          ></img>
        </div>
      </Flex>
      <ul>
        {isOpen &&
          items.map((item, index) => (
            <Link to={item?.url || "#"} key={index}>
              <li
                className="header__mobile-section"
                onClick={() => handleSelectItem(index, item.section)}
              >
                {item.icon &&
                  item.icon(selectedItem === index ? "#353754" : "#9395b8")}
                <p
                  className={
                    selectedItem === index
                      ? "dropdown-item__active"
                      : "dropdown-item__simple"
                  }
                >
                  {t(item.section)}
                </p>
              </li>
            </Link>
          ))}
      </ul>
    </Flex>
  );
};
