import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "../../ui/Flex/Flex";
import { TabButton } from "../../ui/TabButton/TabButton";
import { CompetitionArticle } from "../../CompetitionArticle/CompetitionArticle";
import { CompetitionArticleProps, futureDataComp, pastDataComp, presentDataComp } from "./data";

interface CompetitionMapTypes {
  "competition_section.future_data_tab": CompetitionArticleProps[];
  "competition_section.current_data_tab": CompetitionArticleProps[];
  "competition_section.past_data_tab": CompetitionArticleProps[];
}

const competitionMap: CompetitionMapTypes = {
  "competition_section.future_data_tab": futureDataComp,
  "competition_section.current_data_tab": presentDataComp,
  "competition_section.past_data_tab": pastDataComp,
};

export const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState("competition_section.future_data_tab");

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
            { name: "competition_section.future_data_tab", amount: 2 },
            { name: "competition_section.current_data_tab", amount: 2 },
            { name: "competition_section.past_data_tab", amount: 367 },
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
