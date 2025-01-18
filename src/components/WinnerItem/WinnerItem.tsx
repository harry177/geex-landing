import { useTranslation } from "react-i18next";
import { Avatar } from "../ui/Avatar/Avatar";
import { Flex } from "../ui/Flex/Flex";
import "./winner-item.scss";

interface WinnerItemProps {
  name: string;
  position: string;
  image: string;
  rating?: number;
  background: "red" | "blue";
}

export const WinnerItem = ({
  name,
  position,
  image,
  rating,
  background,
}: WinnerItemProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      column
      className={`winner-item gap-16 ${
        background === "red" ? "winner-item__red" : "winner-item__blue"
      }`}
    >
      <p className="winner-item__rating">{`${rating} ${t("rating_data.points")}`}</p>
      <Flex className="gap-12">
        <Avatar image={image} size="xl" />
        <Flex column className="gap-3">
          <Flex className="gap-6">
            <p className="winner-item__name">{name}</p>
            <img src="crown-icon.svg"></img>
          </Flex>
          <span className="winner-item__position">{position}</span>
        </Flex>
      </Flex>
      <span className="winner-item__number-one">№1</span>
    </Flex>
  );
};
