import { useState } from "react";
import { ProfileSection } from "../../components/ProfileSection/ProfileSection";
import { Tab } from "../../components/Tabs/Tabs";
import "./home-page.scss";

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
          <section className="section-two"></section>
          <section className="section-two"></section>
          <section className="section-two"></section>
        </div>
      </div>
    </>
  );
};
