import "./avatar.scss";

interface AvatarProps {
  image: string;
  size?: string;
  range?: boolean;
}

export const Avatar = ({ image, size, range }: AvatarProps) => {
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
