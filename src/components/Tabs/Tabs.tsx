import { useState } from "react";
import { TabItem } from "../TabItem/TabItem";
import { HeroCarousel } from "../Carousel/Carousel";

const mediaBlockData = [
  { name: "Трансляции", element: <TabItem /> },
  { name: "Фото", element: <HeroCarousel /> },
];

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="tab__header">
        {mediaBlockData.map((item, index) => (
          <button
            className={`${index === activeTab && "active"} tab__button`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="tab__container ">
        <div className="tab__content">
          {mediaBlockData[activeTab].element}
       
        </div>
      </div>
    </>
  );
};
