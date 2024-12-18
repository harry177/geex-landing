import { useState } from "react";
import { Flex } from "../../ui/Flex/Flex";
import { TabButton } from "../../ui/TabButton/TabButton";
import { CompetitionArticle } from "../../CompetitionArticle/CompetitionArticle";
import { futureDataComp, presentDataComp } from "./data";

export const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
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
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </Flex>
        <Flex column className="gap-20">
          <p className="article-section__title">На этой неделе</p>
          {presentDataComp.map((item, index) => (
            <CompetitionArticle
              key={index}
              image={item.image}
              text={item.text}
              lineData={item.lineData}
              members={item.members}
            />
          ))}
        </Flex>
        <Flex column className="gap-20">
          <p className="article-section__title">На следующей неделе</p>
          {futureDataComp.map((item, index) => (
            <CompetitionArticle
              key={index}
              image={item.image}
              text={item.text}
              lineData={item.lineData}
              members={item.members}
            />
          ))}
        </Flex>
      </Flex>
    </section>
  );
};
