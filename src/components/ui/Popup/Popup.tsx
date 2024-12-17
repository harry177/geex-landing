import { ReactNode, useEffect } from "react";
import "./popup.scss";

interface PopupProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Popup = ({ isOpen, children, onClose }: PopupProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="popup-wrapper">
          <div className="popup" onClick={onClose}></div>
          <div className="popup-content">{children}</div>
        </div>
      )}
    </>
  );
};
