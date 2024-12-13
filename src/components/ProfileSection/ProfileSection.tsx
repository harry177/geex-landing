import { Avatar } from "../Avatar/Avatar";
import "./profile-section.scss";

export const ProfileSection = () => {
  return (
    <section className="page-section">
      <div className="profile__image-container">
        <div className="profile-logo">
          <img src="profile-logo.png"></img>
        </div>
      </div>
      <div className="profile__info-container">
        <div className="profile__title-container">
          <h2 className="profile-title">
            Cпортивная Организация Алтайского Края
          </h2>
          <div className="profile__title-checkmark"></div>
        </div>
        <div className="profile__params-container">
          <img src="location-icon.svg" className="location-icon"></img>
          <p>Алтайский край</p>
          <div className="profile__grey-dot"></div>
          <p>Грэпплинг</p>
          <div className="profile__grey-dot"></div>
          <p>Греко-римская борьба</p>
          <div className="profile__grey-dot"></div>
          <p>Пляжная борьба</p>
        </div>
        <div className="profile__users-container">
          <div className="profile__avatar-container">
            {Array.from([
              { image: "users/user-1.png" },
              { image: "users/user-2.png" },
              { image: "users/user-3.png" },
            ]).map((item, index) => (
              <Avatar key={index} size="small" range image={item.image} />
            ))}
          </div>
          <div></div>
          <div className="profile__grey-dot"></div>
          <div></div>
          <div className="profile__grey-dot"></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div className="profile__buttons-container"></div>
      <div className="profile__tabs-container"></div>
    </section>
  );
};
