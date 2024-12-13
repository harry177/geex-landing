import { ProfileSection } from "../../components/ProfileSection/ProfileSection";
import { Tab } from "../../components/Tabs/Tabs";
import "./home-page.scss";

export const HomePage = () => {
  return (
    <>
      <div className="content">
        <div className="content-left">
          <ProfileSection />
          <section className="section-one"></section>
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
