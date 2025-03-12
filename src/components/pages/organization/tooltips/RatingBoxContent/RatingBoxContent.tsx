import { useTranslation } from "react-i18next";
import { Flex } from "@/components/ui/Flex/Flex";
import { ratingBoxPositionData } from "./data";
import "../tooltips.scss";

export const RatingBoxContent = () => {
  const { t } = useTranslation();

  return (
    <Flex column className="rating-box__content gap-16">
      <p className="par">{t("profile_section.tooltips.rating.change_title")}</p>
      <Flex column className="gap-12">
        {ratingBoxPositionData.map((rating, index) => (
          <Flex key={index} justify="space-between">
            <span>{t(rating.date)}</span>
            <Flex className="gap-4">
              {rating.change === "up" ? (
                <img src="green-up-arrow-small.svg"></img>
              ) : (
                <img src="red-down-arrow-small.svg"></img>
              )}
              <span>{rating.place}</span>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex column className="gap-12">
        <p>{t("profile_section.tooltips.rating.position_title")}</p>
        <span>{t("profile_section.tooltips.rating.position_text")}</span>
      </Flex>
    </Flex>
  );
};
