import { badgeClassMap, sizeClassMap } from "./data";
import { AvatarProps } from "../types";
import "./avatar.scss";

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