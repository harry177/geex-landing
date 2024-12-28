import { useState } from "react";
import { Flex } from "../../ui/Flex/Flex";
import { TabButton } from "../../ui/TabButton/TabButton";
import { CompetitionArticle } from "../../CompetitionArticle/CompetitionArticle";
import { CompetitionArticleProps, futureDataComp, pastDataComp, presentDataComp } from "./data";

interface CompetitionMapTypes {
  Предстоящие: CompetitionArticleProps[];
  Текущие: CompetitionArticleProps[];
  Прошедшие: CompetitionArticleProps[];
}

const competitionMap: CompetitionMapTypes = {
  Предстоящие: futureDataComp,
  Текущие: presentDataComp,
  Прошедшие: pastDataComp,
};

export const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState("Предстоящие");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">Соревнования</h2>
        <Flex className="gap-16">
          {Array.from([
            { name: "Предстоящие", amount: 2 },
            { name: "Текущие", amount: 2 },
            { name: "Прошедшие", amount: 367 },
          ]).map((item, index) => (
            <TabButton
              key={index}
              name={item.name}
              amount={item.amount}
              isActive={activeTab === item.name}
              onClick={() => handleTabClick(item.name)}
            />
          ))}
        </Flex>
        {competitionMap[activeTab as keyof CompetitionMapTypes].map((item, index) => (
          <CompetitionArticle
            key={index}
            periodTitle={item.periodTitle}
            image={item.image}
            text={item.text}
            lineData={item.lineData}
            members={item.members}
          />
        ))}
      </Flex>
    </section>
  );
};
