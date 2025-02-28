import { PersonTabButtonProps } from "../types";
import "./person-tab-button.scss";

export const PersonTabButton = ({
  className,
  name,
  isActive,
  onClick,
}: PersonTabButtonProps) => {
  return (
    <button
      className={`person__tab-button ${className} ${
        isActive ? "person__tab-button__active" : "person__tab-button__static"
      }`}
      onClick={onClick}
    >
      {name && <p>{name}</p>}
    </button>
  );
};
