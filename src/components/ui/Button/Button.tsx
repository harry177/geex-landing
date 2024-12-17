import { ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  variant: "primary" | "secondary";
  thin?: boolean;
  icon?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

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
