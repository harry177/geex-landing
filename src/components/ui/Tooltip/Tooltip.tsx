import { ReactNode, useState } from "react";
import "./tooltip.scss";

interface TooltipProps {
  content: ReactNode;
  position: "up" | "down" | "down-right";
  children: ReactNode;
}

export const Tooltip = ({ content, position, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <div
      className="tooltip-frame"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <div
          className={`tooltip ${
            position === "up"
              ? "tooltip-up"
              : position === "down"
              ? "tooltip-down"
              : "tooltip-down-right"
          }`}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
};
