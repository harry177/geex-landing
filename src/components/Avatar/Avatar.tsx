import "./avatar.scss";

interface AvatarProps {
  size: string;
  range: boolean;
  image: string;
}

export const Avatar = ({ size, range, image }: AvatarProps) => {
  return (
    <img
      src={image}
      alt="User avatar"
      className={`${size === "small" ? "avatar-small" : "avatar-big"} ${
        range ? "avatar-outlined" : ""
      } avatar`}
    ></img>
  );
};
