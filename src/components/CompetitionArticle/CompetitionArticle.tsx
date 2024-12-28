import { CompetitionArticleProps } from "../sections/CompetitionSection/data";
import { Avatar } from "../ui/Avatar/Avatar";
import { Button } from "../ui/Button/Button";
import { DotInfoLine } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import "./competition-article.scss";

export const CompetitionArticle = ({
  periodTitle,
  image,
  text,
  lineData,
  members,
}: CompetitionArticleProps) => {
  return (
    <Flex column className="gap-20">
      <p className="article-section__title">{periodTitle}</p>
      <Flex className="gap-12">
        <img src={image} className="comp-article__image"></img>
        <Flex column className="gap-11">
          <Flex justify="space-between">
            <DotInfoLine data={lineData} gap={12} />
            <img src="bell-filled-icon.svg" />
          </Flex>
          <span className="comp-article__text">{text}</span>
          <Flex className="gap-8">
            <Flex className="avatar-container">
              {members.images.map((item, index) => (
                <Avatar key={index} size="small" range image={item} />
              ))}
            </Flex>
            <Flex className="comp-article__members gap-6">
              <p>{members.amount}</p>
              <p>Участников</p>
            </Flex>
          </Flex>
          <Flex className="comp-article__buttons gap-16">
            <Button variant="secondary" icon="hand-icon.svg">
              Принять участие
            </Button>
            <Button variant="secondary" icon="cart-icon.svg">
              Купить билет
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
