import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Flex } from "@/components/ui/Flex/Flex";
import { TabButton } from "@/components/ui/TabButton/TabButton";
import { CompetitionArticle } from "@/components/shared/CompetitionArticle/CompetitionArticle";
import { competitionMap } from "./data";
import { CompetitionMapTypes } from "@/components/pages/organization/types";

export const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState(
    "competition_section.tabs.future_data"
  );

  const { t } = useTranslation();

  const mobile = useMediaQuery("(max-width: 768px)");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <h2 className="section-title">{t("competition_section.header")}</h2>
        <Flex
          justify={"space-between"}
          className={!mobile ? "gap-16" : "w-full"}
        >
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
        {competitionMap[activeTab as keyof CompetitionMapTypes].map(
          (item, index) => (
            <CompetitionArticle
              key={index}
              periodTitle={item.periodTitle}
              image={item.image}
              text={item.text}
              lineData={item.lineData}
              members={item.members}
            />
          )
        )}
      </Flex>
    </section>
  );
};
