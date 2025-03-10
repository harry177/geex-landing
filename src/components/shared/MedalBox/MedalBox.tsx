import { Flex } from "../../ui/Flex/Flex";
import { medalClassMap } from "./data";
import { MedalBoxProps } from "../types";

export const MedalBox = ({ medal, amount }: MedalBoxProps) => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      className="profile__medal-container__section"
    >
      <div
        className={`profile-medal ${
          medalClassMap[medal as keyof typeof medalClassMap]
        }`}
      ></div>
      <p className="profile__medal-number">{amount}</p>
    </Flex>
  );
};
