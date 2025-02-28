import { ButtonProps } from "../types";
import "./button.scss";

export const Button = ({
  variant,
  thin,
  icon,
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className} ${
        variant === "primary" ? "button-primary" : "button-secondary"
      } ${thin ? "button-thin" : "button-broad"}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="Button icon"></img>}
      {children}
    </button>
  );
};
