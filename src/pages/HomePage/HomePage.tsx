import { useState } from "react";
import { ProfileSection } from "../../components/ProfileSection/ProfileSection";
import { Tab } from "../../components/Tabs/Tabs";
import "./home-page.scss";
import { RatingSection } from "../../components/RatingSection/RatingSection";
import { ManagementSection } from "../../components/ManagementSection/ManagementSection";

export const HomePage = () => {
  const [competition, setCompetition] = useState("Соревнования");
  const handleTabChange = (tabName: string) => {
    setCompetition(tabName);
  };
  return (
    <>
      <div className="content">
        <div className="content-left">
          <ProfileSection onTabChange={handleTabChange} />
          <section className="section-one">{competition}</section>
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
