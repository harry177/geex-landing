import { ResultRowProps } from "../../ResultRow/ResultRow";
import { InfoLineTypes } from "../../ui/DotInfoLine/DotInfoLine";

export interface ResultArticleProps {
  header: {
    title: string;
    lineData: InfoLineTypes[];
  };
  content: ResultRowProps[];
}

export const resultData: ResultArticleProps[] = [
  {
    header: {
      title:
        "result_section.data.1.title",
      lineData: [
        { content: "result_section.data.1.info_line.1", icon: "calendar.svg", color: "dark" },
        {
          content: "result_section.data.1.info_line.2",
          icon: "location-icon.svg",
          color: "dark",
        },
        { content: "result_section.data.1.info_line.3" },
      ],
    },
    content: [
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 2,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 1,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 5,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 3,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 1,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 8,
      },
    ],
  },
  {
    header: {
      title:
        "result_section.data.2.title",
      lineData: [
        { content: "result_section.data.2.info_line.1", icon: "calendar.svg", color: "dark" },
        {
          content: "result_section.data.2.info_line.2",
          icon: "location-icon.svg",
          color: "dark",
        },
        { content: "result_section.data.2.info_line.3" },
      ],
    },
    content: [
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 10,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 6,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 5,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 3,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 1,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 8,
      },
    ],
  },
];
