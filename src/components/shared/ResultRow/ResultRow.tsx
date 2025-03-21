import { Avatar } from "@/components/ui/Avatar/Avatar";
import { Flex } from "@/components/ui/Flex/Flex";
import { ResultRowProps } from "../types";
import "./result-row.scss";

export const ResultRow = ({
  firstName,
  firstImage,
  firstScore,
  secondName,
  secondImage,
  secondScore,
}: ResultRowProps) => {
  return (
    <Flex justify="center" align="center" className="result-row gap-12">
      <p
        className={`${
          firstScore > secondScore ? "result-row__winner" : "result-row__loser"
        }`}
      >
        {firstName}
      </p>
      <Avatar image={firstImage} size="medium" badge="flag" />
      <Flex className="gap-4">
        <p
          className={`${
            firstScore > secondScore
              ? "result-row__winner"
              : "result-row__loser"
          }`}
        >
          {firstScore}
        </p>
        <p>-</p>
        <p
          className={`${
            secondScore > firstScore
              ? "result-row__winner"
              : "result-row__loser"
          }`}
        >
          {secondScore}
        </p>
      </Flex>
      <Avatar image={secondImage} size="medium" badge="flag" />
      <p
        className={`${
          secondScore > firstScore ? "result-row__winner" : "result-row__loser"
        }`}
      >
        {secondName}
      </p>
    </Flex>
  );
};
