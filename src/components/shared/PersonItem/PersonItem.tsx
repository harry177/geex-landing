import { Link } from "react-router-dom";
import { Avatar } from "../../ui/Avatar/Avatar";
import { Flex } from "../../ui/Flex/Flex";
import { PersonItemProps } from "../types";
import "./person-item.scss";

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
        <Flex className="gap-10">
          {rank && (
            <div className="person-item__rank-box">
              {rank && <span>{rank}</span>}
              {arrow && <img src={arrow} className="person-item__arrow"></img>}
            </div>
          )}
          <Avatar image={image} badge={medal} />
          <div className={`person-item__info-box ${contentClassName}`}>
            <p>{name}</p>
            <span className={textClassName}>{position}</span>
          </div>
        </Flex>
        {rating && <p className="person-item__rating">{rating}</p>}
      </li>
    </Link>
  );
};
