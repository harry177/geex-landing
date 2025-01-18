import { useTranslation } from "react-i18next";
import { ResultRow, ResultRowProps } from "../ResultRow/ResultRow";
import { DotInfoLine, InfoLineTypes } from "../ui/DotInfoLine/DotInfoLine";
import { Flex } from "../ui/Flex/Flex";
import "./result-article.scss";

interface ResultArticleProps {
  title: string;
  lineData: InfoLineTypes[];
  games: ResultRowProps[];
}

export const ResultArticle = ({
  title,
  lineData,
  games,
}: ResultArticleProps) => {
  const { t } = useTranslation();

  return (
    <Flex column className="result-article gap-8">
      <Flex column className="result-article__header gap-6">
        <p>{t(title)}</p>
        <DotInfoLine data={lineData} gap={12} />
      </Flex>
      <Flex column>
        {games.map((game, index) => (
          <ResultRow
            key={index}
            firstName={game.firstName}
            firstImage={game.firstImage}
            firstScore={game.firstScore}
            secondName={game.secondName}
            secondImage={game.secondImage}
            secondScore={game.secondScore}
          />
        ))}
      </Flex>
    </Flex>
  );
};
