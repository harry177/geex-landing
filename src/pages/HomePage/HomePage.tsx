import { ReactNode, useState } from "react";
import { ProfileSection } from "../../components/sections/ProfileSection/ProfileSection";
import { RatingSection } from "../../components/sections/RatingSection/RatingSection";
import { ManagementSection } from "../../components/sections/ManagementSection/ManagementSection";
import { CompetitionSection } from "../../components/sections/CompetitionSection/CompetitionSection";
import { ResultSection } from "../../components/sections/ResultSection/ResultSection";
import { NewsSection } from "../../components/sections/NewsSection/NewsSection";
import { SportsmenSection } from "../../components/sections/SpotsmenSection/SportsmenSection";
import { TrainerSection } from "../../components/sections/TrainerSection/TrainerSection";
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
