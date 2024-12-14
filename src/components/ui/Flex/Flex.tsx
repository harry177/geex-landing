import { ReactNode } from "react";
import "./flex.scss";

interface FlexProps {
  column?: boolean;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end";
  gap?: string;
  className?: string;
  children?: ReactNode;
}

export const Flex = ({
  column,
  justify,
  align,
  gap,
  className,
  children,
}: FlexProps) => {
  return (
    <div
      className={`ui__flex ${className} ${column && "ui__flex__column"} ${
        justify && `ui__flex__justify__${justify}`
      } ${align && `ui__flex__align__${align}`} ${
        gap && `ui__flex__gap-${gap}`
      }`}
    >
      {children}
    </div>
  );
};
