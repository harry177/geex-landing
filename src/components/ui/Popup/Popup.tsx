import { useEffect } from "react";
import { PopupProps } from "../types";
import "./popup.scss";

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
