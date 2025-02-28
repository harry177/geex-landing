import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ForwardBoxProps } from "../types";
import "./forward-box.scss";

export const ForwardBox = ({ name, url, className }: ForwardBoxProps) => {
  const { t } = useTranslation();

  return (
    <Link to={url}>
      <div className={`forward-box ${className}`}>
        <p>{t(name)}</p>
        <img src="arrow-right.svg"></img>
      </div>
    </Link>
  );
};
