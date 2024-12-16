import { ReactNode, useState } from "react";
import { ProfileSection } from "../../components/ProfileSection/ProfileSection";
import { Tab } from "../../components/Tabs/Tabs";
import { RatingSection } from "../../components/RatingSection/RatingSection";
import { ManagementSection } from "../../components/ManagementSection/ManagementSection";
import { CompetitionSection } from "../../components/CompetitionSection/CompetitionSection";
import { ResultSection } from "../../components/ResultSection/ResultSection";
import { NewsSection } from "../../components/NewsSection/NewsSection";
import "./home-page.scss";

interface ComponentMapTypes {
  Соревнования: ReactNode;
  Результаты: ReactNode;
  Новости: ReactNode;
}

export const HomePage = () => {
  const [competition, setCompetition] = useState("Соревнования");
  const handleTabChange = (tabName: string) => {
    setCompetition(tabName);
  };

  const componentMap: ComponentMapTypes = {
    Соревнования: <CompetitionSection />,
    Результаты: <ResultSection />,
    Новости: <NewsSection />,
  };

  return (
    <>
      <div className="content">
        <div className="content-left">
          <ProfileSection onTabChange={handleTabChange} />
          {componentMap[competition as keyof ComponentMapTypes]}
          <section className="section-one">
            <Tab />
          </section>
        </div>
        <div className="content-right">
          <RatingSection />
          <ManagementSection />
          <section className="section-two"></section>
          <section className="section-two"></section>
        </div>
      </div>
    </>
  );
};
