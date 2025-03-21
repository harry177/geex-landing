import { useTranslation } from "react-i18next";
import { ResultArticle } from "@/components/shared/ResultArticle/ResultArticle";
import { Flex } from "@/components/ui/Flex/Flex";
import { resultData } from "./data";

export const ResultSection = () => {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">{t("result_section.header")}</h2>
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
