import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "../ui/Flex/Flex";
import { TabButton } from "../ui/TabButton/TabButton";
import { StreamSection } from "../sections/StreamSection/StreamSection";
import { PhotoSection } from "../sections/PhotoSection/PhotoSection";
import { VideoSection } from "../sections/VideoSection/VideoSection";

export const MediaSectionFrame = () => {
  const [activeTab, setActiveTab] = useState("media_section_frame.tabs.streams");

  const { t } = useTranslation();

  const handleTabClick = (tabItem: string) => {
    setActiveTab(tabItem);
  };

  const mediaTabs = [
    { name: "media_section_frame.tabs.streams", amount: 4, component: <StreamSection /> },
    { name: "media_section_frame.tabs.photos", amount: 14, component: <PhotoSection /> },
    { name: "media_section_frame.tabs.videos", amount: 35, component: <VideoSection /> },
  ];

  return (
    <div className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex className="gap-16">
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
        {mediaTabs.find((tab) => tab.name === activeTab)?.component}
      </Flex>
    </div>
  );
};
