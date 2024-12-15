export const TicketIcon = (color: string) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7694 3.33325H5.27421C2.08255 3.33325 1.7459 4.09992 1.6709 7.08325C3.27923 7.08325 4.57923 8.39159 4.57923 9.99992C4.57923 11.6083 3.27923 12.9083 1.6709 12.9166C1.7459 15.8999 2.08255 16.6666 5.27421 16.6666H14.7694C18.1028 16.6666 18.3292 15.8333 18.3292 12.5V7.42215C18.3292 4.08882 18.1028 3.33325 14.7694 3.33325Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49414 3.33325V6.24992"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49414 13.75V16.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
