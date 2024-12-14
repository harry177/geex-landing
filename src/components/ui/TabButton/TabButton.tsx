import "./tab-button.scss";

interface TabButton {
  className?: string;
  name?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const TabButton = ({
  className,
  name,
  isActive,
  onClick,
}: TabButton) => {
  return (
    <button
      className={`tab-button ${className} ${
        isActive ? "tab-button__active" : "tab-button__static"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
