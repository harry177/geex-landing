import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { Flex } from "../../../ui/Flex/Flex";
import { TabButton } from "../../../ui/TabButton/TabButton";
import { mediaTabs } from "./data";

export const MediaSectionFrame = () => {
  const [activeTab, setActiveTab] = useState(
    "media_section_frame.tabs.streams"
  );

  const { t } = useTranslation();

  const mobile = useMediaQuery("(max-width: 768px)");

  const handleTabClick = (tabItem: string) => {
    setActiveTab(tabItem);
  };

  return (
    <div className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex
          justify={"space-between"}
          className={!mobile ? "gap-16" : "w-full"}
        >
          {mediaTabs.map((tab, index) => (
            <TabButton
              key={index}
              name={t(tab.name)}
              amount={tab.amount}
              isActive={activeTab === tab.name}
              onClick={() => handleTabClick(tab.name)}
            />
          ))}
        </Flex>
        {mediaTabs.find((tab) => tab.name === activeTab)?.component()}
      </Flex>
    </div>
  );
};
