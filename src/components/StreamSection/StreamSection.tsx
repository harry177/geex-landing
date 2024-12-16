import { useState } from "react";
import { Flex } from "../ui/Flex/Flex";
import { TabButton } from "../ui/TabButton/TabButton";
import { Carousel } from "../Carousel/Carousel";
import { carouselData } from "./data";

export const StreamSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex className="gap-16">
          {Array.from([
            { name: "Трансляции", amount: 4 },
            { name: "Фото", amount: 14 },
            { name: "Видео", amount: 35 },
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
        <Carousel data={carouselData} />
      </Flex>
    </section>
  );
};
