import { useState } from "react";
import { Flex } from "../ui/Flex/Flex";
import { TabButton } from "../ui/TabButton/TabButton";
import { StreamSection } from "../StreamSection/StreamSection";
import { PhotoSection } from "../PhotoSection/PhotoSection";
import { VideoSection } from "../VideoSection/VideoSection";

export const MediaSectionFrame = () => {
  const [activeTab, setActiveTab] = useState("Трансляции");

  const handleTabClick = (tabItem: string) => {
    setActiveTab(tabItem);
  };

  const mediaTabs = [
    { name: "Трансляции", amount: 4, component: <StreamSection /> },
    { name: "Фото", amount: 14, component: <PhotoSection /> },
    { name: "Видео", amount: 35, component: <VideoSection /> },
  ];

  return (
    <div className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex className="gap-16">
          {mediaTabs.map((tab, index) => (
            <TabButton
              key={index}
              name={tab.name}
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
