import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderNavItemProps {
  page: string;
  icon: (page: string) => ReactNode;
  url: string;
  isActive: boolean;
}

export const HeaderNavItem = ({
  page,
  icon,
  url,
  isActive,
}: HeaderNavItemProps) => (
  <Link to={url}>
    <li
      className={`nav-list__item ${
        isActive ? "nav-list__item-active" : "nav-list__item-static"
      }`}
    >
      {typeof icon === "function" && icon(isActive ? "#06082c" : "#9395b8")}
      <p>{page}</p>
    </li>
  </Link>
);
