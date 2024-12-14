import { ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  variant: "primary" | "secondary";
  thin?: boolean;
  icon?: string;
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  variant,
  thin,
  icon,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className} ${
        variant === "primary" ? "button-primary" : "button-secondary"
      } ${thin ? "button-thin" : "button-broad"}`}
    >
      {icon && <img src={icon} alt="Button icon"></img>}
      {children}
    </button>
  );
};