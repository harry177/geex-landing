import "./avatar.scss";

interface MedalMapTypes {
  gold: string;
  silver: string;
  bronze: string;
}

interface AvatarProps {
  image: string;
  size?: string;
  range?: boolean;
  medal?: "gold" | "silver" | "bronze";
}

const medalClassMap = {
  gold: "avatar__medal-gold",
  silver: "avatar__medal-silver",
  bronze: "avatar__medal-bronze",
};

export const Avatar = ({ image, size, range, medal }: AvatarProps) => {
  return (
    <>
      {range ? (
        <img
          src={image}
          alt="User avatar"
          className={`${
            size === "small"
              ? "avatar-small"
              : size === "xl"
              ? "avatar-xl"
              : "avatar-big"
          } ${range ? "avatar-outlined" : ""} avatar`}
        />
      ) : (
        <div className={medalClassMap[medal as keyof MedalMapTypes]}>
          <img
            src={image}
            alt="User avatar"
            className={`${
              size === "small"
                ? "avatar-small"
                : size === "xl"
                ? "avatar-xl"
                : "avatar-big"
            } ${range ? "avatar-outlined" : ""} avatar`}
          />
        </div>
      )}
    </>
  );
};
