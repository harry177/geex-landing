import { Link } from "react-router-dom";
import { Avatar } from "../ui/Avatar/Avatar";
import "./person-item.scss";

export interface PersonItemProps {
  name: string;
  position: string;
  image: string;
  rank?: number;
  arrow?: string;
  rating?: number;
  medal?: "gold" | "silver" | "bronze";
  contentClassName?: string;
  textClassName?: string;
}

export const PersonItem = ({
  name,
  position,
  image,
  rank,
  arrow,
  rating,
  medal,
  contentClassName,
  textClassName,
}: PersonItemProps) => {
  return (
    <Link to="/">
      <li className="person-item">
        {rank && (
          <div className="person-item__rank-box">
            {rank && <span>{rank}</span>}
            {arrow && <img src={arrow} className="person-item__arrow"></img>}
          </div>
        )}
        <Avatar image={image} badge={medal}/>
        <div className={`person-item__info-box ${contentClassName}`}>
          <p>{name}</p>
          <span className={textClassName}>{position}</span>
        </div>
        {rating && <p className="person-item__rating">{rating}</p>}
      </li>
    </Link>
  );
};
