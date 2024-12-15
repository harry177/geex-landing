import { Link } from "react-router-dom";
import { Avatar } from "../ui/Avatar/Avatar";
import "./person-item.scss";

interface PersonItemProps {
  name: string;
  position: string;
  image: string;
  rank?: number;
  arrow?: "up" | "down";
  rating?: number;
}

export const PersonItem = ({
  name,
  position,
  image,
  rank,
  arrow,
  rating,
}: PersonItemProps) => {
  return (
    <Link to="/">
      <li className="person-item">
        {rank && (
          <div className="person-item__rank-box">
            {rank}
            {arrow}
          </div>
        )}
        <Avatar image={image} />
        <div className="person-item__info-box">
          <p>{name}</p>
          <span>{position}</span>
        </div>
        {rating && <p>{rating}</p>}
      </li>
    </Link>
  );
};
