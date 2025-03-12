import { useState } from "react";
import { ProfileSection } from "@/components/pages/organization/sections/ProfileSection/ProfileSection";
import { RatingSection } from "@/components/pages/organization/sections/RatingSection/RatingSection";
import { ManagementSection } from "@/components/pages/organization/sections/ManagementSection/ManagementSection";
import { CompetitionSection } from "@/components/pages/organization/sections/CompetitionSection/CompetitionSection";
import { ResultSection } from "@/components/pages/organization/sections/ResultSection/ResultSection";
import { NewsSection } from "@/components/pages/organization/sections/NewsSection/NewsSection";
import { SportsmenSection } from "@/components/pages/organization/sections/SpotsmenSection/SportsmenSection";
import { TrainerSection } from "@/components/pages/organization/sections/TrainerSection/TrainerSection";
import { MediaSectionFrame } from "@/components/pages/organization/MediaSectionFrame/MediaSectionFrame";
import { PROFILE_TAB_KEYS } from "@/components/pages/organization/sections/ProfileSection/constants";
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
          {activeTab === PROFILE_TAB_KEYS.COMPETITIONS && (
            <CompetitionSection />
          )}
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
