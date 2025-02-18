import { ReactNode, useState } from "react";
import "./tooltip.scss";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  positionClassname: string;
}

export const Tooltip = ({
  content,
  children,
  positionClassname,
}: TooltipProps) => {
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
        <div className={`tooltip ${positionClassname}`}>{content}</div>
      )}
      {children}
    </div>
  );
};
