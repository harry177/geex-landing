import { Link } from "react-router-dom";
import { HeaderNavItemProps } from "@/components/layout/types";

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
