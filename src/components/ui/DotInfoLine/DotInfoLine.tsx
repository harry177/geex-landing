import { useTranslation } from "react-i18next";
import "./dot-info-line.scss";

export interface InfoLineTypes {
  content?: string;
  icon?: string;
  amount?: number;
  amountColor?: boolean;
  color?: "light" | "dark";
}

interface DotInfoLineProps {
  data: InfoLineTypes[];
  gap?: number;
}

export const DotInfoLine = ({ data, gap }: DotInfoLineProps) => {
  const { t } = useTranslation();

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
          {item.amount && <p className={`${item.amountColor && "dot-line__amount-dark"}`}>{item.amount}</p>}
          {item.content && t(item.content)}
        </div>,
        index < data.length - 1 && data[index + 1].content && (
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
