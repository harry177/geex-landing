import { useState } from "react";
import { ProfileSection } from "../../components/sections/ProfileSection/ProfileSection";
import { RatingSection } from "../../components/sections/RatingSection/RatingSection";
import { ManagementSection } from "../../components/sections/ManagementSection/ManagementSection";
import { CompetitionSection } from "../../components/sections/CompetitionSection/CompetitionSection";
import { ResultSection } from "../../components/sections/ResultSection/ResultSection";
import { NewsSection } from "../../components/sections/NewsSection/NewsSection";
import { SportsmenSection } from "../../components/sections/SpotsmenSection/SportsmenSection";
import { TrainerSection } from "../../components/sections/TrainerSection/TrainerSection";
import { MediaSectionFrame } from "../../components/MediaSectionFrame/MediaSectionFrame";
import { PROFILE_TAB_KEYS } from "../../components/sections/ProfileSection/constants";
import "./home-page.scss";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState(PROFILE_TAB_KEYS.COMPETITIONS);
  
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="content">
        <div className="content-main">
          <ProfileSection onTabChange={handleTabChange} />
          {activeTab === PROFILE_TAB_KEYS.COMPETITIONS && <CompetitionSection />}
          {activeTab === PROFILE_TAB_KEYS.RESULTS && <ResultSection />}
          {activeTab === PROFILE_TAB_KEYS.NEWS && <NewsSection />}
          <MediaSectionFrame />
        </div>
        <div className="content-aside">
          <RatingSection />
          <ManagementSection />
          <SportsmenSection />
          <TrainerSection />
        </div>
      </div>
    </>
  );
};
