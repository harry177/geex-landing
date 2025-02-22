import { Link } from "react-router-dom";
import { Flex } from "../ui/Flex/Flex";

interface LogoProps {
  type: "header" | "footer";
}

export const Logo = ({ type }: LogoProps) => {
  return (
    
      <Flex justify="center" align="center" >
        <Link to="/" className="logo-box">
        <img src={type === "header" ? "logo-small.svg" : "logo-big.svg"}></img>
        </Link>
       
      </Flex>
  
  );
};
