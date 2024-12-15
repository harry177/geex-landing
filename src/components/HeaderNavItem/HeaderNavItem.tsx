import { ReactNode } from "react";

interface HeaderNavItemProps {
  page: string;
  icon: (page: string) => ReactNode;
  isActive: boolean;
  handleNavItemClick: () => void;
}

export const HeaderNavItem = ({
  page,
  icon,
  isActive,
  handleNavItemClick,
}: HeaderNavItemProps) => (
  <li
    className={`nav-list__item ${
      isActive ? "nav-list__item-active" : "nav-list__item-static"
    }`}
    onClick={handleNavItemClick}
  >
    {typeof icon === "function" && icon(isActive ? "#06082c" : "#9395b8")}
    <p>{page}</p>
  </li>
);
