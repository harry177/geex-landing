import { Link } from "react-router-dom";
import { Flex } from "@/components/ui/Flex/Flex";
import { LogoProps } from "@/components/layout/types";

export const Logo = ({ type }: LogoProps) => {
  return (
    <Flex justify="center" align="center">
      <Link to="/" className="logo-box">
        <img src={type === "header" ? "logo-small.svg" : "logo-big.svg"} alt="Logo"></img>
      </Link>
    </Flex>
  );
};
