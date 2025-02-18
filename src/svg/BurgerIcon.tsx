export const BurgerIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <line
          x1="1.5"
          y1="3"
          x2="10.5"
          y2="3"
          className="header__cross-line"
          transform={
            isActive
              ? "translate(4.3, 0) rotate(45)"
              : "translate(0, 0) rotate(0)"
          }
          stroke="#7B7EA5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="1.5"
          y1="9"
          x2="10.5"
          y2="9"
          className="header__cross-line"
          transform={
            isActive
              ? "translate(-4.3, 4.3) rotate(-45)"
              : "translate(0, 0) rotate(0)"
          }
          stroke="#7B7EA5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
