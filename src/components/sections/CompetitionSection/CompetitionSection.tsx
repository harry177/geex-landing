import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "../../ui/Flex/Flex";
import { TabButton } from "../../ui/TabButton/TabButton";
import { CompetitionArticle } from "../../CompetitionArticle/CompetitionArticle";
import { CompetitionArticleProps, futureDataComp, pastDataComp, presentDataComp } from "./data";

interface CompetitionMapTypes {
  "competition_section.tabs.future_data": CompetitionArticleProps[];
  "competition_section.tabs.current_data": CompetitionArticleProps[];
  "competition_section.tabs.past_data": CompetitionArticleProps[];
}

const competitionMap: CompetitionMapTypes = {
  "competition_section.tabs.future_data": futureDataComp,
  "competition_section.tabs.current_data": presentDataComp,
  "competition_section.tabs.past_data": pastDataComp,
};

export const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState("competition_section.tabs.future_data");

  const { t } = useTranslation();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">Соревнования</h2>
        <Flex className="gap-16">
          {Array.from([
            { name: "competition_section.tabs.future_data", amount: 2 },
            { name: "competition_section.tabs.current_data", amount: 2 },
            { name: "competition_section.tabs.past_data", amount: 367 },
          ]).map((item, index) => (
            <TabButton
              key={index}
              name={t(item.name)}
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
