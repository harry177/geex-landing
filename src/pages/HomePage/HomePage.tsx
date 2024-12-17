import { ReactNode, useState } from "react";
import { ProfileSection } from "../../components/ProfileSection/ProfileSection";
import { RatingSection } from "../../components/RatingSection/RatingSection";
import { ManagementSection } from "../../components/ManagementSection/ManagementSection";
import { CompetitionSection } from "../../components/CompetitionSection/CompetitionSection";
import { ResultSection } from "../../components/ResultSection/ResultSection";
import { NewsSection } from "../../components/NewsSection/NewsSection";
import { SportsmenSection } from "../../components/SpotsmenSection/SportsmenSection";
import { TrainerSection } from "../../components/TrainerSection/TrainerSection";
import { MediaSectionFrame } from "../../components/MediaSectionFrame/MediaSectionFrame";
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
          <MediaSectionFrame />
        </div>
        <div className="content-right">
          <RatingSection />
          <ManagementSection />
          <SportsmenSection />
          <TrainerSection />
        </div>
      </div>
    </>
  );
};
