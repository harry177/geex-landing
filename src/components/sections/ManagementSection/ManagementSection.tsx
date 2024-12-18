import { PersonItem } from "../../PersonItem/PersonItem";
import { Flex } from "../../ui/Flex/Flex";
import { ForwardBox } from "../../ui/ForwardBox/ForwardBox";
import { managementData } from "./data";
import "./management-section.scss";

export const ManagementSection = () => {
  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex justify="space-between" align="center" className="w-full">
          <h3 className="section-title">Руководство</h3>
          <ForwardBox name="Смотреть все" url="/management" />
        </Flex>
        <ul className="management-list">
          {managementData.map((item, index) => (
            <PersonItem
              key={index}
              name={item.name}
              position={item.position}
              image={item.image}
            />
          ))}
        </ul>
      </Flex>
    </section>
  );
};
