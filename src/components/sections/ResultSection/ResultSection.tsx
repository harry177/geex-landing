import { ResultArticle } from "../../ResultArticle/ResultArticle";
import { Flex } from "../../ui/Flex/Flex";
import { resultData } from "./data";

export const ResultSection = () => {
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">Результаты</h2>
        <Flex column className="gap-40 w-full">
          {resultData.map((article, index) => (
            <ResultArticle
              key={index}
              title={article.header.title}
              lineData={article.header.lineData}
              games={article.content}
            />
          ))}
        </Flex>
      </Flex>
    </section>
  );
};
