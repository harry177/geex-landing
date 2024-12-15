import { useState, useRef, useEffect, ReactNode } from "react";
import "./dropdown.scss";

interface DropdownProps {
  label?: string;
  items: { section?: string; icon?: (color: string) => ReactNode }[];
  width?: string;
  dispatchedIcon?: boolean;
  children?: ReactNode;
  rootClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
}

export const Dropdown = ({
  label,
  items,
  dispatchedIcon,
  children,
  rootClassName,
  menuClassName,
  itemClassName,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredItemIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex(null);
  };

  const handleSelectItem = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className={`dropdown-root ${rootClassName}`}
        onClick={toggleDropdown}
      >
        {dispatchedIcon &&
          items[selectedItem].icon &&
          items[selectedItem].icon("")}
        {children}
        <div className="chevron-box">
          <img src={`${isOpen ? "chevron-up.svg" : "chevron-down.svg"}`}></img>
        </div>
      </div>
      {isOpen && (
        <div className={`dropdown-menu ${menuClassName}`}>
          <div className="dropdown-menu__header">
            {children}
            {label && <p>{label}</p>}
          </div>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={itemClassName}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSelectItem(index)}
              >
                {item.icon &&
                  item.icon(hoveredItemIndex === index ? "#353754" : "#9395b8")}
                {item.section}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
