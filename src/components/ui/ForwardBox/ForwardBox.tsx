import { Link } from "react-router-dom";
import "./forward-box.scss";

interface ForwardBoxProps {
    name: string;
    url: string;
}

export const ForwardBox = ({name, url}: ForwardBoxProps) => {
  return (
    <Link to={url}>
      <div className="forward-box">
        <p>{name}</p>
        <img src="arrow-right.svg"></img>
      </div>
    </Link>
  );
};
