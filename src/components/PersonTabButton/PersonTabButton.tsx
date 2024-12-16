import "./person-tab-button.scss";

interface PersonTabButton {
    className?: string;
    name?: string;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export const PersonTabButton = ({
    className,
    name,
    isActive,
    onClick,
  }: PersonTabButton) => {
    return (
      <button
        className={`person__tab-button ${className} ${
          isActive ? "person__tab-button__active" : "person__tab-button__static"
        }`}
        onClick={onClick}
      >
        {name && <p>{name}</p>}
      </button>
    );
  };
  
