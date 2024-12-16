import "./dot-info-line.scss";

export interface InfoLineTypes {
  content?: string;
  icon?: string;
  amount?: number;
  color?: "light" | "dark";
}

interface DotInfoLineProps {
  data: InfoLineTypes[];
  gap?: number;
}

export const DotInfoLine = ({ data, gap }: DotInfoLineProps) => {
  return (
    <div className={`dot-info-line__container gap-${gap}`}>
      {data.flatMap((item, index) => [
        <div
          key={`item-${index}`}
          className={`dot-info-line__content ${
            item.color === "dark" ? "dot-line__dark" : "dot-line__light"
          }`}
        >
          {item.icon && <img src={item.icon} />}
          {item.amount}
          {item.content}
        </div>,
        index < data.length - 1 && (
          <div
            key={`divider-${index}`}
            className={`grey-dot ${
              item.color === "dark" ? "dot-color__dark" : "dot-color__light"
            }`}
          ></div>
        ),
      ])}
    </div>
  );
};
