import { Link } from "react-router-dom";
import "./forward-box.scss";

interface ForwardBoxProps {
  name: string;
  url: string;
  className?: string;
}

export const ForwardBox = ({ name, url, className }: ForwardBoxProps) => {
  return (
    <Link to={url}>
      <div className={`forward-box ${className}`}>
        <p>{name}</p>
        <img src="arrow-right.svg"></img>
      </div>
    </Link>
  );
};
