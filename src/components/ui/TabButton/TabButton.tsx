import "./tab-button.scss";

interface TabButton {
  className?: string;
  name?: string;
  amount?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const TabButton = ({
  className,
  name,
  amount,
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
      {name && <p>{name}</p>}
      {amount && <p>{amount}</p>}
    </button>
  );
};
