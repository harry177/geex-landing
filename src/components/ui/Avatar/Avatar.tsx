import "./avatar.scss";

interface AvatarProps {
  image: string;
  size?: "small" | "medium" | "big" | "xl";
  range?: boolean;
  badge?: "gold" | "silver" | "bronze" | "flag";
}

const badgeClassMap = {
  gold: "avatar__medal-gold",
  silver: "avatar__medal-silver",
  bronze: "avatar__medal-bronze",
  flag: "avatar__badge-flag"
};

const sizeClassMap = {
  small: "avatar-small",
  xl: "avatar-xl",
  medium: "avatar-medium",
  big: "avatar-big",
};

export const Avatar = ({ image, size, range, badge }: AvatarProps) => {
  const avatarClassName = `${sizeClassMap[size || "big"]} ${
    range ? "avatar-outlined" : ""
  } avatar`;

  return (
    <>
      {range ? (
        <img src={image} alt="User avatar" className={avatarClassName} />
      ) : (
        <div className={badgeClassMap[badge as keyof typeof badgeClassMap]}>
          <img src={image} alt="User avatar" className={avatarClassName} />
        </div>
      )}
    </>
  );
};