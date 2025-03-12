import { useTranslation } from "react-i18next";
import { PersonItem } from "@/components/shared/PersonItem/PersonItem";
import { Flex } from "@/components/ui/Flex/Flex";
import { ForwardBox } from "@/components/ui/ForwardBox/ForwardBox";
import { managementData } from "./data";
import "./management-section.scss";

export const ManagementSection = () => {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <Flex column align="flex-start" className="gap-24">
        <Flex justify="space-between" align="center" className="w-full">
          <h3 className="section-title">{t("management_section.header")}</h3>
          <ForwardBox name="forward_box.show_all_persons" url="/management" />
        </Flex>
        <ul className="management-list">
          {managementData.map((item, index) => (
            <PersonItem
              key={index}
              name={item.name}
              position={t(item.position)}
              image={item.image}
            />
          ))}
        </ul>
      </Flex>
    </section>
  );
};
