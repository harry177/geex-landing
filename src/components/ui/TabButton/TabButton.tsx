import { TabButtonProps } from "../types";
import "./tab-button.scss";

export const TabButton = ({
  className,
  name,
  amount,
  isActive,
  onClick,
}: TabButtonProps) => {
  return (
    <button
      className={`tab-button ${className} ${
        isActive ? "tab-button__active" : "tab-button__static"
      }`}
      onClick={onClick}
    >
      {name && <p>{name}</p>}
      {amount && <p>{amount}</p>}
    </button>
  );
};
