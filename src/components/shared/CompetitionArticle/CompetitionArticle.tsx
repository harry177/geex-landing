import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { CompetitionArticleProps } from "../../pages/organization/sections/CompetitionSection/data";
import { Avatar } from "../../ui/Avatar/Avatar";
import { Button } from "../../ui/Button/Button";
import { DotInfoLine } from "../../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../../ui/Flex/Flex";
import "./competition-article.scss";

export const CompetitionArticle = ({
  periodTitle,
  image,
  text,
  lineData,
  members,
}: CompetitionArticleProps) => {
  const { t } = useTranslation();

  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex column className="gap-20">
      <p className="article-section__title">{t(periodTitle)}</p>
      <Flex column={mobile} className="gap-12">
        <img src={image} className="comp-article__image"></img>
        <Flex column className="gap-11">
          <Flex justify="space-between" align="flex-start">
            <DotInfoLine data={lineData} gap={12} />
            <img src="bell-filled-icon.svg" />
          </Flex>
          <span className="comp-article__text">{t(text)}</span>
          <Flex className="gap-8">
            <Flex className="avatar-container">
              {members.images.map((item, index) => (
                <Avatar key={index} size="small" range image={item} />
              ))}
            </Flex>
            <Flex className="comp-article__members gap-6">
              <p>{members.amount}</p>
              <p>{t("competition_section.participants")}</p>
            </Flex>
          </Flex>
          <Flex className="comp-article__buttons gap-16">
            <Button variant="secondary" icon="hand-icon.svg">
              {t("competition_section.buttons.take_part")}
            </Button>
            <Button variant="secondary" icon="cart-icon.svg">
              {t("competition_section.buttons.buy_ticket")}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
